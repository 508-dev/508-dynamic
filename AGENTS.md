# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the 508.dev company website built with Astro - a statically generated site that fetches member data from an external CRM (ESPO) at build time. The site showcases the engineering co-op's members, expertise, and services.

## Development Commands

### Environment Setup
```bash
cp .sample.env .env
# Populate .env with real API keys from password manager
npm install
```

### Development
```bash
npm run dev              # Start dev server at localhost:4321
npm run build            # Build production site (runs astro check first)
npm run preview          # Preview production build locally
```

### Code Quality
```bash
npm run prettier         # Format code (run before commits)
npm run eslint           # Lint and auto-fix code
npm run astro check      # TypeScript type checking
```

## Architecture

### Data Flow
- **External Data**: Member information fetched from ESPO CRM API at build time
- **Content Management**: Static data stored in `src/content/data/` (homepage.json, portfolio.json, pricing.json)
- **Test Data**: Fallback member data available in `src/content.ts` for development

### Key Components
- `src/layouts/Layout.astro` - Main layout with SEO meta tags and analytics
- `src/components/` - Reusable Astro components for different page sections
- `src/pages/` - Route-based pages (index, portfolio, pricing, members, join)

### Environment Variables
Required in `.env`:
- `ESPO_API_KEY` - API key for CRM access
- `ROOT_API` - Base URL for CRM API

### Deployment
- **Platform**: Coolify instance with automatic builds on main branch merge
- **Build Output**: Static files served from `./dist/`
- **CloudFlare Workers**: Configured via `wrangler.toml` for edge deployment

### Styling
- **Framework**: Tailwind CSS with DaisyUI components
- **Patterns**: Custom patterns via `tailwindcss-bg-patterns`
- **Typography**: Tailwind Typography plugin for markdown content