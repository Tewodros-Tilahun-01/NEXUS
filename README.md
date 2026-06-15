# Nexus

The frontend for Nexus, a premium digital asset trading platform. Built with modern web technologies for a smooth, responsive trading experience.

## Features

- **Modern UI** — Elegant, responsive interface built with React and Tailwind CSS
- **Smooth animations** — Framer Motion powered transitions and interactions
- **Market display** — Beautiful presentation of 350+ digital assets
- **Trading dashboard** — Institutional-grade interface for serious investors
- **Multi-page experience** — Features, how-it-works, markets, authentication flows

## Tech Stack

- **Framework**: [Next.js 16.2.9](https://nextjs.org) with React 19
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animation**: [Framer Motion](https://www.framer.com/motion)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Build

Create an optimized production build:

```bash
npm run build
npm start
```

### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── page.tsx         # Homepage
│   ├── login/           # Login page
│   ├── signup/          # Signup page
│   ├── features/        # Features page
│   ├── company/         # Company page
│   ├── markets/         # Markets page
│   └── how-it-works/    # How it works page
├── components/          # Reusable React components
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features showcase
│   ├── Markets.tsx      # Markets display
│   ├── HowItWorks.tsx   # Process explanation
│   ├── Nav.tsx          # Navigation
│   └── ...
└── public/              # Static assets
```

## Performance

The site is optimized for speed and performance:

- Next.js App Router with server-side rendering
- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Image and font optimization built-in

## Deployment

Deploy to [Vercel](https://vercel.com) with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2FNEXUS)

Or deploy to any Node.js hosting platform:

```bash
npm run build
npm start
```

## License

Proprietary. All rights reserved.

## Support

For questions or feedback, please contact support@nexus.com
