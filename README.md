# chanakya-potluri-portfolio

Personal portfolio website for Chanakya Potluri — Data Engineer specializing in ETL pipelines, Python/SQL, and AWS infrastructure.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Syne (display), DM Sans (body), JetBrains Mono (code)

## Design Direction

Dark, data-engineering-themed aesthetic with a structured, terminal-inspired layout. Features:
- Animated skill bars triggered on scroll
- Intersection Observer–driven staggered section animations
- Interactive tabbed experience panel
- Noise texture overlay and radial gradient accents
- Responsive across mobile, tablet, and desktop

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/chanakya-potluri-portfolio.git
cd chanakya-potluri-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
chanakya-potluri-portfolio/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── Navbar.tsx        # Fixed nav with scroll state
│   ├── Hero.tsx          # Landing section with metrics
│   ├── About.tsx         # Bio + code-style profile card
│   ├── Projects.tsx      # 4 projects in 2-tier grid layout
│   ├── Experience.tsx    # Tabbed experience panel
│   ├── Skills.tsx        # Animated skill bars + certifications
│   ├── Contact.tsx       # CTA section
│   └── Footer.tsx        # Simple footer
├── public/               # Static assets
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Sections

| Section | Description |
|---------|-------------|
| Hero | Bold tagline, availability badge, key metrics, social links |
| About | Personal bio + interactive code-style profile card |
| Projects | 4 projects with metrics, tags, color-coded by tech domain |
| Experience | 3 roles with tabbed detail panel |
| Skills | Skill bars with scroll-triggered animation + 6 certifications |
| Contact | CTA with email, LinkedIn, location chips |

## No Environment Variables Required

This project runs entirely without `.env` configuration.
