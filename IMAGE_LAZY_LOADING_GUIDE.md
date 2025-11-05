# Image Lazy Loading Guide

## Current Status
✅ **No `<img>` tags found** in page components - all images are currently handled via:
- Components (ShowcaseTransportLogo, TruckSceneBasic)
- SVG elements
- CSS background images

## When Adding Images

### Rules:
1. **Add `loading="lazy"`** to ALL `<img>` tags **EXCEPT**:
   - Logo in Header component
   - Hero section images (first thing user sees)

### Examples:

```jsx
// ✅ Good - Lazy loaded (below the fold)
<img src="/images/truck.jpg" alt="Truck" loading="lazy" />

// ✅ Good - Hero image (eager load, no lazy)
<img src="/images/hero.jpg" alt="Hero" />

// ❌ Bad - Missing lazy loading
<img src="/images/service.jpg" alt="Service" />
```

### Locations to Check:
- `src/pages/Home.jsx` - Check for any hero images
- `src/pages/About.jsx` - Check for team/company images
- `src/pages/Services.jsx` - Check for service images
- `src/pages/Values.jsx` - Check for value-related images
- `src/pages/Contact.jsx` - Check for contact images
- `src/components/Header.jsx` - Logo should NOT have lazy loading
- `src/components/Footer.jsx` - Check for footer images

### Performance Benefits:
- Faster initial page load
- Reduced bandwidth usage
- Better Core Web Vitals scores
- Improved user experience

## Implementation Checklist:
- [ ] Search for `<img` in all page components
- [ ] Add `loading="lazy"` to images below the fold
- [ ] Keep hero/logo images without lazy loading
- [ ] Test lazy loading behavior
- [ ] Verify images load when scrolled into view

