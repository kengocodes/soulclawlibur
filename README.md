<div align="center">

# 🦞 SOULCLAWLIBUR

**Archive of personality profiles for OpenClaw bots**

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)

[View Archive](https://soulclawlibur.com) • [OpenClaw GitHub](https://github.com/openclaw) • [OpenClaw on X](https://x.com/openclaw)

</div>

---

## About

SOULCLAWLIBUR is a curated collection of SOUL.md personality profiles for OpenClaw bots. Each profile defines a distinct persona with unique communication styles, example responses, and behavioral guidelines.

Browse the archive to discover personality archetypes, or submit your own creations to be featured.

### Featured Personas

- **The Hype One** - Supportive cheerleader friend
- **The Night Owl** - Introspective late-night companion
- **The Chaos Agent** - Chaotic good creative energy
- **The Wise Aunt** - Direct, experienced life advisor
- **The Quiet One** - Gentle, calming introvert
- **The Fixer** - Practical problem-solver
- **The Nerd** - Passionate knowledge enthusiast
- **The Dry Wit** - Sarcastic comedian
- **The Believer** - Motivational optimist

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/kengocodes/soulclawlibur.git
cd soulclawlibur

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the archive.

---

## Environment Setup

For the submission API to work, create a `.env.local` file:

```env
GITHUB_TOKEN=your_github_token_here
```

The token needs permission to create issues in the repository.

---

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Styling
- **[Lucide React](https://lucide.dev/)** - Icons

---

## Features

- **Search & Filter** - Find souls by name or filter by personality tags
- **Soul Detail Pages** - View full SOUL.md content with syntax highlighting
- **Example Responses** - See how each persona responds to common prompts
- **Submit Your Own** - API endpoint for submitting new soul profiles
- **Rate Limiting** - 5 submissions per hour per IP
- **Content Validation** - Ensures submissions follow the SOUL.md format

---

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with search
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Theme and animations
│   ├── api/submit-soul/      # Submission API endpoint
│   ├── souls/[slug]/         # Dynamic soul pages
│   ├── submit/               # Submission documentation
│   ├── privacy/              # Privacy policy
│   └── terms/                # Terms of use
├── components/
│   ├── search.tsx            # Search & filter
│   ├── soul-card.tsx         # Soul preview cards
│   └── soul-tabs.tsx         # Soul detail tabs
├── data/
│   └── souls.ts              # Soul profile data
└── lib/
    ├── tag-colors.ts         # Tag styling
    ├── utils.ts              # Utilities
    ├── validate-soul.ts      # Submission validation
    ├── github.ts             # GitHub API integration
    └── rate-limit.ts         # Rate limiting
```

---

## Submitting a Soul

You can submit new soul profiles via:

1. **API** - `POST /api/submit-soul` with JSON payload
2. **GitHub** - Open an issue using the submission template

Submissions are validated and reviewed before being added to the archive.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewSoul`)
3. Commit your changes (`git commit -m 'Add new soul profile'`)
4. Push to the branch (`git push origin feature/NewSoul`)
5. Open a Pull Request

---

## License

MIT License - see [LICENSE](LICENSE) for details.
