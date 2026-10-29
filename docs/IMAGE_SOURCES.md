# Image Sources

This document tracks the source of all images used in the SparklePro platform.

| File | Source | Photo Page | Photographer | License |
|------|--------|------------|--------------|---------|
| hero.webp | Unsplash | [LINK] | [PHOTOGRAPHER NAME] | Unsplash License |

## Adding New Images

When adding new images to the project:

1. Save the image file to `public/images/`
2. Add an entry to this table with:
   - File name
   - Source (e.g., Unsplash, Pexels, custom)
   - Direct link to the photo page
   - Photographer's name
   - License information

3. Update the image configuration in `src/config/site.js`
4. Ensure alt text is descriptive and follows accessibility guidelines

## Image Guidelines

- Use WebP format for better compression
- Include width and height attributes to prevent layout shift
- Use `loading="lazy"` on images below the first screen
- Provide descriptive alt text for accessibility
- Respect image licenses and attribution requirements
