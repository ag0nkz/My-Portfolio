# My Portfolio

Emil Jonathan's personal portfolio website, featuring a comprehensive showcase of projects, skills, and experience in AI development and full-stack engineering.

## Features

- **Interactive Projects Showcase**: Featured projects including AI-powered PWA, Warehouse Inventory System, and cross-platform applications
- **Modern Tech Stack**: Next.js 14, React, TypeScript, Tailwind CSS, with PWA support
- **Responsive Design**: Mobile-first approach with Tailwind CSS for seamless cross-device experience
- **Production-Ready**: Configured with PWA capabilities, service worker, and offline access support
- **Minimalist Design**: Clean, modern interface focused on content presentation

## Live Demo

Visit [emiljonathan.com](https://emiljonathan.com)

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18.3
- TypeScript
- Tailwind CSS
- Lucide React (Icons)
- PWA (Progressive Web App)

### Backend
- Node.js (API routes, if needed)
- SQL (database management for some projects)
- React Native (mobile app development)

## Projects

### Synthia (AI-Powered Mobile & PWA)
Intelligent cross-platform PWA and mobile application leveraging LLMs and multi-agent AI frameworks for automated meeting documentation, real-time transcription, and workflow management.

**Tags**: Next.js App Router, React Native, TypeScript, AI / LLM Agents, next-pwa
**GitHub**: [ag0nkz/Synthia-Finale](https://github.com/ag0nkz/Synthia-Finale)

### Warehouse Inventory System
Web-based inventory system co-developed during OJT to manage stock tracking and operational logs.

**Tags**: React Native, Node.js, SQL, Tailwind CSS
**GitHub**: [ag0nkz/GNNETS-Inventory-System](https://github.com/ag0nkz/GNNETS-Inventory-System)

## Deployment

### Vercel

To deploy to Vercel:

1. Push this repository to GitHub or create a zip archive
2. Visit [vercel.com/dashboard](https://vercel.com/dashboard) and click "New Project"
3. Select "Import from GitHub" or upload the repository files
4. Set "Project Name" to "my-portfolio"
5. Select "Next.js" framework
6. Use the default Build Command (`next build`) and Output Directory (`.next`)
7. Click "Deploy"

### Manual

For manual deployment, simply run `npm run build` and use your preferred hosting provider.

## Deployment Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

This project is configured with:

- **ESLint**: Code linting in the Next.js project
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **Next.js PWA**: Offline support, app manifest, and service worker

## Notes

This portfolio is actively maintained with regular updates showcasing new projects and enhancing technical capabilities. The main focus is on AI integration, modern web development, and creating production-ready software solutions.
