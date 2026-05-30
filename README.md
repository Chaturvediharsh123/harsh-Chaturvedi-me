# Harsh Chaturvedi — AI Engineer Portfolio

Premium AI-themed portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layout
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, etc.
│   └── ui/           # Reusable UI components
├── data/             # Portfolio & project data
├── lib/              # GitHub API & utilities
└── types/            # TypeScript interfaces
```

## Customization

- **Profile photo**: Replace `public/profile.svg` with your photo
- **Resume**: Add your PDF as `public/resume.pdf`
- **Portfolio data**: Edit `src/data/portfolio.ts`
- **Projects**: Auto-sourced from GitHub in `src/data/projects.ts`

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy easily on [Vercel](https://vercel.com) or any Node.js hosting platform.

---

Built by **Harsh Chaturvedi** | [GitHub](https://github.com/Chaturvediharsh123)
