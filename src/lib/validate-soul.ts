const MAX_SOUL_SIZE = 50 * 1024; // 50KB
const MAX_RESPONSE_SIZE = 10 * 1024; // 10KB
const MIN_RESPONSES = 3;
const MAX_RESPONSES = 5;

const VALID_TAGS = [
  "supportive",
  "casual",
  "energetic",
  "introspective",
  "warm",
  "thoughtful",
  "chaotic",
  "creative",
  "unfiltered",
  "experienced",
  "direct",
  "caring",
  "gentle",
  "calming",
  "practical",
  "efficient",
  "curious",
  "passionate",
  "knowledgeable",
  "sarcastic",
  "clever",
  "encouraging",
  "optimistic",
] as const;

export type ValidTag = (typeof VALID_TAGS)[number];

const REQUIRED_SOUL_SECTIONS = [
  "# SOUL.md - Who You Are",
  "## VIBE:",
  "## HOW YOU TALK:",
  "## EXAMPLES OF YOUR VIBE:",
  "## Core Responsibilities",
  "## Boundaries",
  "## Continuity",
];

export interface SoulSubmission {
  name: string;
  tagline: string;
  tags: string[];
  soul: string;
  responses: Record<string, string>;
  author?: string;      // Optional display name (max 50 chars)
  authorUrl?: string;   // Optional link (max 200 chars, must be valid HTTPS URL)
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export interface SanitizedSubmission extends SoulSubmission {
  sanitized: true;
  author?: string;
  authorUrl?: string;
}

function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, "");
}

export function validateSoulSubmission(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const submission = body as Record<string, unknown>;

  // Check required fields exist
  if (typeof submission.name !== "string" || !submission.name.trim()) {
    return { valid: false, error: "Name is required" };
  }

  if (typeof submission.tagline !== "string" || !submission.tagline.trim()) {
    return { valid: false, error: "Tagline is required" };
  }

  if (!Array.isArray(submission.tags) || submission.tags.length === 0) {
    return { valid: false, error: "At least one tag is required" };
  }

  if (submission.tags.length > 5) {
    return { valid: false, error: "Maximum 5 tags allowed" };
  }

  // Validate tags are from allowed list
  for (const tag of submission.tags) {
    if (typeof tag !== "string" || !VALID_TAGS.includes(tag as ValidTag)) {
      return {
        valid: false,
        error: `Invalid tag: ${tag}. Allowed tags: ${VALID_TAGS.join(", ")}`,
      };
    }
  }

  if (typeof submission.soul !== "string" || !submission.soul.trim()) {
    return { valid: false, error: "Soul content is required" };
  }

  // Check soul size
  if (new TextEncoder().encode(submission.soul).length > MAX_SOUL_SIZE) {
    return { valid: false, error: "Soul content exceeds 50KB limit" };
  }

  // Check required sections in soul
  for (const section of REQUIRED_SOUL_SECTIONS) {
    if (!submission.soul.includes(section)) {
      return { valid: false, error: `Missing required section: ${section}` };
    }
  }

  // Validate responses
  if (
    !submission.responses ||
    typeof submission.responses !== "object" ||
    Array.isArray(submission.responses)
  ) {
    return { valid: false, error: "Responses object is required" };
  }

  const responses = submission.responses as Record<string, unknown>;
  const responseEntries = Object.entries(responses);

  if (responseEntries.length < MIN_RESPONSES) {
    return {
      valid: false,
      error: `At least ${MIN_RESPONSES} Q&A responses are required`,
    };
  }

  if (responseEntries.length > MAX_RESPONSES) {
    return {
      valid: false,
      error: `Maximum ${MAX_RESPONSES} Q&A responses allowed`,
    };
  }

  // Check response sizes
  let totalResponseSize = 0;
  for (const [question, answer] of responseEntries) {
    if (typeof question !== "string" || !question.trim()) {
      return { valid: false, error: "All response questions must be non-empty strings" };
    }
    if (typeof answer !== "string" || !answer.trim()) {
      return { valid: false, error: "All response answers must be non-empty strings" };
    }
    totalResponseSize += new TextEncoder().encode(question + answer).length;
  }

  if (totalResponseSize > MAX_RESPONSE_SIZE) {
    return { valid: false, error: "Total response content exceeds 10KB limit" };
  }

  // Check name and tagline lengths
  if (submission.name.length > 100) {
    return { valid: false, error: "Name must be 100 characters or less" };
  }

  if (submission.tagline.length > 200) {
    return { valid: false, error: "Tagline must be 200 characters or less" };
  }

  // Validate optional author field
  if (submission.author !== undefined) {
    if (typeof submission.author !== "string") {
      return { valid: false, error: "Author must be a string" };
    }
    if (submission.author.length > 50) {
      return { valid: false, error: "Author name must be 50 characters or less" };
    }
    // Check for HTML tags
    if (/<[^>]*>/.test(submission.author)) {
      return { valid: false, error: "Author name cannot contain HTML" };
    }
  }

  // Validate optional authorUrl field
  if (submission.authorUrl !== undefined) {
    if (typeof submission.authorUrl !== "string") {
      return { valid: false, error: "Author URL must be a string" };
    }
    if (submission.authorUrl.length > 200) {
      return { valid: false, error: "Author URL must be 200 characters or less" };
    }
    // Must be a valid HTTPS URL
    try {
      const url = new URL(submission.authorUrl);
      if (url.protocol !== "https:") {
        return { valid: false, error: "Author URL must use HTTPS" };
      }
    } catch {
      return { valid: false, error: "Author URL must be a valid URL" };
    }
  }

  return { valid: true };
}

export function sanitizeSoulContent(submission: SoulSubmission): SanitizedSubmission {
  const result: SanitizedSubmission = {
    name: escapeHtml(stripHtml(submission.name.trim())),
    tagline: escapeHtml(stripHtml(submission.tagline.trim())),
    tags: submission.tags.map((tag) => escapeHtml(stripHtml(tag.trim()))),
    soul: escapeHtml(stripHtml(submission.soul)),
    responses: Object.fromEntries(
      Object.entries(submission.responses).map(([q, a]) => [
        escapeHtml(stripHtml(q.trim())),
        escapeHtml(stripHtml(a.trim())),
      ])
    ),
    sanitized: true,
  };

  // Sanitize optional author fields
  if (submission.author) {
    result.author = escapeHtml(stripHtml(submission.author.trim()));
  }
  if (submission.authorUrl) {
    result.authorUrl = submission.authorUrl.trim();
  }

  return result;
}
