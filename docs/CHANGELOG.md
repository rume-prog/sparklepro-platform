# Changelog - SparklePro Cleaning Services Platform

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Image support for hero section with background image and overlay (built, not yet verified)
- Image support for service cards with fixed aspect ratio (built, not yet verified)
- Image support for service detail pages (built, not yet verified)
- Hero image configuration in src/config/site.js with src and alt fields (built, not yet verified)
- Service image configuration in src/config/site.js (optional, null for no image) (built, not yet verified)
- Hero background image with semi-transparent dark teal overlay using --color-primary (built, not yet verified)
- Fallback colors for sections without images (built, not yet verified)
- Card image wrapper with 4:3 aspect ratio for consistent card layouts (built, not yet verified)
- Loading="lazy" on images below first screen to improve performance (built, not yet verified)
- Width and height attributes on all images to prevent layout shift (built, not yet verified)
- Documentation: docs/IMAGE_SOURCES.md for tracking image sources and licenses (built, not yet verified)
- CSS for hero section responsive design (desktop and mobile) (built, not yet verified)
- Removed decorative SVG pattern from hero section (replaced with image) (built, not yet verified)
- Pricing section with package cards (name, priceText, included items) (built, not yet verified)
- FAQ section with accessible keyboard-navigable accordion (built, not yet verified)
- How It Works section with 4 steps from config (built, not yet verified)
- Areas We Serve section from areasServed config (built, not yet verified)
- Service detail pages at /services/<slug> for each service (built, not yet verified)
- Friendly 404 page for unknown routes (built, not yet verified)
- Feature toggles: pricingSection, faqSection, howItWorksSection, areasServedSection (built, not yet verified)
- Service slug field in config for URL generation (built, not yet verified)
- Pricing packages configuration with placeholder prices (built, not yet verified)
- FAQ configuration with 5 neutral sample questions (built, not yet verified)
- How It Works configuration with 4 steps (built, not yet verified)
- CSS classes for pricing cards, FAQ accordion, steps, and areas grid (built, not yet verified)
- Service detail links on Services page (built, not yet verified)
- Unit tests for FAQSection accessibility (6 tests, all passed)
- Unit tests for ServiceDetailPage routing (4 tests, all passed)
- WhatsApp booking request form on Contact page (built, not yet verified)
- Message-building utility function in src/utils/whatsapp.js (built, not yet verified)
- Form validation with plain-language error messages (built, not yet verified)
- Accessibility features: ARIA labels, keyboard navigation, error descriptions (built, not yet verified)
- Privacy notice under booking form about data not being stored (built, not yet verified)
- Safety check: form disabled when WhatsApp number is placeholder (built, not yet verified)
- Unit tests for buildWhatsAppMessage function (4 tests, all passed)
- Unit tests for ContactPage booking form (5 tests, all passed)
- Site configuration system in src/config/site.js (built, not yet verified)
- CSS classes for all repeated inline styles and hover effects (built, not yet verified)
- Documentation: docs/CLIENT_CHECKLIST.md (built, not yet verified)
- Feature toggles for bookingForm, gallery, and pricingTable (built, not yet verified)
- Centralized business content in single config object (built, not yet verified)
- Reusable CSS classes for buttons, cards, sections, and navigation (built, not yet verified)
- Configuration section in docs/ARCHITECTURE.md (built, not yet verified)

### Changed
- Contact page now includes booking form when bookingForm feature toggle is enabled (built, not yet verified)
- Moved all business text from components to src/config/site.js (built, not yet verified)
- Replaced inline styles with CSS classes in global.css (built, not yet verified)
- Replaced onMouseEnter/onMouseLeave hover code with CSS :hover pseudo-classes (built, not yet verified)
- Components now read all content from config instead of hardcoded values (built, not yet verified)
- Navigation uses CSS classes instead of inline styles (built, not yet verified)
- Footer links use CSS hover instead of JavaScript hover (built, not yet verified)
- Contact page phone and WhatsApp links now disabled when placeholder values are used (built, not yet verified)

### Added
- Netlify deployment preparation: public/_redirects for client-side routing (built, not yet deployed)
- Netlify deployment preparation: noindex meta tag in index.html to prevent search engine indexing (built, not yet deployed)
- Netlify deployment preparation: demo notice in footer controlled by demoNotice feature flag (built, not yet deployed)
- Netlify deployment preparation: verified production build with npm run build (built, not yet deployed)

### Added
- React + Vite project with JavaScript (built, not yet verified)
- React Router for navigation between pages (built, not yet verified)
- Vitest with jsdom environment for testing (built, not yet verified)
- React Testing Library for component testing (built, not yet verified)
- CSS variables for colors, fonts, spacing in global.css (built, not yet verified)
- Four page components: Home, Services, About, Contact (built, not yet verified)
- Shared Navigation component with mobile-responsive menu (built, not yet verified)
- Shared Footer component with contact information (built, not yet verified)
- Placeholders for phone numbers, email, address, and prices (built, not yet verified)
- Mobile-first responsive design with plain CSS (built, not yet verified)
- Google Fonts: Bricolage Grotesque for headings, DM Sans for body text (built, not yet verified)
- Mobile menu button with keyboard accessibility and auto-close on link tap (built, not yet verified)
- Inline SVG decorative graphics in hero section (built, not yet verified)
- Focus outline CSS variables for accessibility (built, not yet verified)

### Changed
- Replaced Vite default demo content with SparklePro structure (built, not yet verified)
- Removed demo assets (logos, hero image) (built, not yet verified)
- Updated color palette to deep teal-green (#0F3D3E), warm off-white (#FAF9F6), citrus-yellow accent (#D4A017), and soft grey borders (built, not yet verified)
- Enhanced hero section with stronger heading, shorter text, and dual buttons (built, not yet verified)
- Removed unverifiable promises from content (built, not yet verified)
- Updated all pages to use new color scheme with hover states (built, not yet verified)

## [0.0.1] - 2026-10-22

### Added
- Documentation: README.md
- Documentation: docs/PROJECT_PLAN.md
- Documentation: docs/REQUIREMENTS.md
- Documentation: docs/ARCHITECTURE.md
- Documentation: docs/DATABASE.md
- Documentation: docs/TESTING.md
- Documentation: docs/DEPLOYMENT.md
- Documentation: docs/CHANGELOG.md
