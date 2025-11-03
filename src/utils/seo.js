// src/utils/seo.js

/**
 * Updates document title and meta description
 * @param {string} title - Page title (will be appended with site name)
 * @param {string} description - Meta description for the page
 */
export function updatePageMeta(title, description) {
  // Update document title
  document.title = title ? `${title} · Showcase Transport` : 'Showcase Transport';

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) {
    metaDescription.setAttribute('content', description);
  }

  // Update Open Graph tags if they exist
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  
  if (ogTitle) {
    ogTitle.setAttribute('content', document.title);
  }
  if (ogDescription && description) {
    ogDescription.setAttribute('content', description);
  }
}

// Page-specific meta content
export const PAGE_META = {
  home: {
    title: 'Home',
    description: 'Showcase Transport offers reliable freight transportation with on-time delivery, safety compliance, and real-time tracking for businesses nationwide.'
  },
  about: {
    title: 'About Us',
    description: 'Full-service logistics provider specializing in short-haul and long-haul freight with safety first, on-time delivery, and clear communication.'
  },
  services: {
    title: 'Our Services',
    description: 'Comprehensive freight solutions including palletized freight, refrigerated transport, drop & hook service, satellite tracking, and more.'
  },
  values: {
    title: 'Our Core Values',
    description: 'Built on integrity, communication, safety, and on-time delivery. We treat every customer\'s freight with care and professionalism.'
  },
  contact: {
    title: 'Contact Us',
    description: 'Get a quote or discuss your shipping requirements. Straightforward logistics support with no hassle for businesses nationwide.'
  }
};

