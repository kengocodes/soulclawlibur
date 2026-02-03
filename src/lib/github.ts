import type { SanitizedSubmission } from "./validate-soul";

const GITHUB_REPO_OWNER = "kengocodes";
const GITHUB_REPO_NAME = "soulclawlibur";

export interface GitHubIssueResult {
  success: boolean;
  issueUrl?: string;
  error?: string;
}

function formatIssueBody(submission: SanitizedSubmission): string {
  const responsesFormatted = Object.entries(submission.responses)
    .map(([q, a]) => `**Q: ${q}**\n\n${a}`)
    .join("\n\n---\n\n");

  return `## Soul Submission

**Name:** ${submission.name}

**Tagline:** ${submission.tagline}

**Tags:** ${submission.tags.join(", ")}

**Author:** ${submission.author || "Anonymous"}

**Author Link:** ${submission.authorUrl || "None"}

---

## SOUL.md Content

\`\`\`markdown
${submission.soul}
\`\`\`

---

## Example Responses

${responsesFormatted}

---

*Submitted via API*

---

### Reviewer Checklist

- [ ] Content follows SOUL.md format guidelines
- [ ] No harmful, hateful, or inappropriate content
- [ ] No personal data about real individuals
- [ ] No hidden instructions or prompt injections
- [ ] Author link is appropriate (no spam/malicious URLs)
- [ ] Quality meets archive standards
`;
}

export async function createGitHubIssue(
  submission: SanitizedSubmission
): Promise<GitHubIssueResult> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("GITHUB_TOKEN environment variable is not set");
    return {
      success: false,
      error: "Server configuration error: GitHub integration not configured",
    };
  }

  const issueTitle = `Soul Submission: ${submission.name}`;
  const issueBody = formatIssueBody(submission);

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/issues`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        body: JSON.stringify({
          title: issueTitle,
          body: issueBody,
          labels: ["submission", "pending-review"],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("GitHub API error:", response.status, errorText);
      return {
        success: false,
        error: "Failed to create submission. Please try again later.",
      };
    }

    const data = await response.json();
    return {
      success: true,
      issueUrl: data.html_url,
    };
  } catch (error) {
    console.error("GitHub API request failed:", error);
    return {
      success: false,
      error: "Failed to connect to GitHub. Please try again later.",
    };
  }
}
