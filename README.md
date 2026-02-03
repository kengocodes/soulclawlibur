<div align="center">

# 🦞 SOULCLAWLIBUR

**Archive of personality profiles for OpenClaw bots**

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)

[View Archive](https://openclaw.com) • [OpenClaw GitHub](https://github.com/openclaw) • [OpenClaw on X](https://x.com/openclaw)

</div>

---

## About

SOULCLAWLIBUR is a curated collection of SOUL.md personality profiles for OpenClaw bots. Each profile defines a distinct persona with unique communication styles, example responses, and behavioral guidelines.

### Featured Personas

- **The Hype One** - Your supportive cheerleader friend
- **The Night Owl** - Introspective late-night companion
- **The Chaos Agent** - Unhinged creative energy
- **The Wise Aunt** - Experienced life advisor
- **The Quiet One** - Gentle, thoughtful introvert
- **The Fixer** - Practical problem-solver
- **The Nerd** - Enthusiastic knowledge sharer
- **The Dry Wit** - Sarcastic comedian
- **The Believer** - Motivational optimist

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/openclaw/soulclawlibur.git
cd soulclawlibur

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the archive.

---

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Styling
- **[Lucide React](https://lucide.dev/)** - Icons

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
│   ├── page.tsx           # Home page with search
│   ├── layout.tsx         # Root layout
│   └── souls/[slug]/      # Dynamic soul pages
├── components/
│   ├── search.tsx         # Search & filter
│   ├── soul-card.tsx      # Soul preview cards
│   └── soul-tabs.tsx      # Soul detail tabs
├── data/
│   └── souls.ts           # Soul profile data
└── lib/
    ├── tag-colors.ts      # Tag styling
    └── utils.ts           # Utilities
```

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
