# Deployment Guide - SparklePro Cleaning Services Platform

## Local Development Setup

*(To be completed when implementation begins)*

### Prerequisites
- Node.js 18+
- npm
- Git
- Code editor (Windsurf recommended)

### Initial Setup
```bash
cd C:\Users\user\OneDrive\Documents\WebDevelopmentBusiness\Sparklepro-platform
npm create vite@latest . -- --template react
npm install
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
npm run dev
```
Open http://localhost:5173 in browser.

## Phase 1 Deployment - Netlify (Built, not yet deployed)

### Deployment Steps
1. Build: `npm run build` (tested successfully - built in 1.21s)
2. Create Netlify account
3. Connect GitHub repository to Netlify
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
5. Deploy site (Netlify provides URL)
6. Verify deployment works
7. Optional: Configure custom domain in Netlify and update DNS at registrar

### Demo Deployment Preparation (Built, not yet deployed)
The following changes were made to prepare the site for demo deployment on Netlify:

1. **Created `public/_redirects`** - Contains `/* /index.html 200` to handle client-side routing on Netlify
2. **Added noindex meta tag to `index.html`** - `<meta name="robots" content="noindex, nofollow">` to prevent search engines from indexing the demo
3. **Added demo notice to footer** - "Demo site for a fictional business." displayed in footer, controlled by `siteConfig.features.demoNotice` flag in `src/config/site.js` (set to `true` for demo, `false` for real client sites)
4. **Verified build** - `npm run build` completed successfully with no errors or warnings:
   - `dist/index.html` (0.85 kB)
   - `dist/assets/index-BDavJWoo.css` (7.42 kB)
   - `dist/assets/index-vLvU9L8X.js` (279.38 kB)
   - `dist/_redirects` confirmed present in build output

## Client Domain Migration (Planned)

When a client site moves to their own hosting:
1. Client purchases domain from registrar
2. Client sets up hosting account on their preferred platform
3. Export site files from development environment
4. Deploy to client's hosting platform
5. Configure DNS records to point to client's hosting
6. Update any hardcoded URLs in the site
7. Transfer SSL certificate or enable with new host
8. Test all functionality on new domain

## Phase 2 Backend & PostgreSQL (Planned)

**Architecture:**
- Frontend: Netlify or Vercel
- Backend: Railway, Render, or Fly.io
- Database: Supabase, Neon, or Railway PostgreSQL

**Deployment:**
- Deploy backend API to chosen platform
- Create PostgreSQL database instance
- Configure connection string
- Set up CORS to allow frontend domain
- Test full integration

## Environment Variables & Secrets

### Phase 1
No environment variables required.

### Phase 2 (Planned)
**Frontend (.env):**
```env
VITE_API_URL=https://api.example.com
VITE_SITE_URL=https://example.com
```

**Backend (.env):**
```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:YOUR_DATABASE_PASSWORD_HERE@host:port/database
JWT_SECRET=YOUR_JWT_SECRET_HERE
SESSION_SECRET=YOUR_SESSION_SECRET_HERE
FRONTEND_URL=https://example.com
```

### Best Practices
- Never commit secrets. Add `.env` to `.gitignore`
- Use `.env.example` to document required variables without values
- Use platform's secret management (Netlify/Vercel/Railway)
- Rotate secrets regularly

## Backup & Recovery

### Phase 1
No persistent data to back up. Git repository serves as code backup.

### Phase 2 (Planned)
- Configure daily automated database backups
- Retain backups for 30 days
- Test restore process quarterly
- Tag releases for easy code rollback
- Recovery Time Objective: 4 hours
- Recovery Point Objective: 24 hours
