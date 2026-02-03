import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import {
  validateSoulSubmission,
  sanitizeSoulContent,
  type SoulSubmission,
} from "@/lib/validate-soul";
import { createGitHubIssue } from "@/lib/github";

const MAX_PAYLOAD_SIZE = 65 * 1024; // 65KB (50KB soul + 10KB responses + overhead)

export async function POST(request: NextRequest) {
  // 1. Rate limiting by IP
  const ip = getClientIp(request);
  const rateLimitResult = checkRateLimit(ip);

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        error: "Rate limit exceeded. Maximum 5 submissions per hour.",
        retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000),
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
          ),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.floor(rateLimitResult.resetAt / 1000)),
        },
      }
    );
  }

  // 2. Check content length
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_SIZE) {
    return NextResponse.json(
      { error: "Payload too large. Maximum size is 65KB." },
      { status: 413 }
    );
  }

  // 3. Parse JSON body
  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > MAX_PAYLOAD_SIZE) {
      return NextResponse.json(
        { error: "Payload too large. Maximum size is 65KB." },
        { status: 413 }
      );
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body" },
      { status: 400 }
    );
  }

  // 4. Validate required fields and format
  const validation = validateSoulSubmission(body);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  // 5. Sanitize content (strip HTML, escape special chars)
  const sanitized = sanitizeSoulContent(body as SoulSubmission);

  // 6. Create GitHub issue for moderation
  const result = await createGitHubIssue(sanitized);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error || "Failed to create submission" },
      { status: 500 }
    );
  }

  // 7. Return success response
  return NextResponse.json(
    {
      success: true,
      message: "Submission received for review",
      issueUrl: result.issueUrl,
    },
    {
      status: 201,
      headers: {
        "X-RateLimit-Remaining": String(rateLimitResult.remaining),
        "X-RateLimit-Reset": String(Math.floor(rateLimitResult.resetAt / 1000)),
      },
    }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      name: "SOULCLAWLIBUR Soul Submission API",
      version: "1.0.0",
      documentation: "https://soulclawlibur.com/SKILL.md",
      endpoints: {
        "POST /api/submit-soul": {
          description: "Submit a SOUL.md personality profile for review",
          rateLimit: "5 requests per hour per IP",
          body: {
            name: "string (required, max 100 chars)",
            tagline: "string (required, max 200 chars)",
            tags: "string[] (required, 1-5 tags from allowed list)",
            soul: "string (required, max 50KB, must include required sections)",
            responses: "object (required, 3-5 Q&A pairs, max 10KB total)",
            author: "string (optional, max 50 chars) - display name for attribution",
            authorUrl: "string (optional, max 200 chars) - HTTPS URL for author link",
          },
        },
      },
    },
    { status: 200 }
  );
}
