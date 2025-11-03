// src/pages/About.jsx

import { useEffect } from 'react';
import { SITE } from '../config/site';
import { updatePageMeta, PAGE_META } from '../utils/seo';

export default function About() {
  useEffect(() => {
    updatePageMeta(PAGE_META.about.title, PAGE_META.about.description);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
      <div className="card space-y-6">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-st-navy">
          About {SITE.name}
        </h1>
        
        <p className="text-lg opacity-90 leading-relaxed">
          At Showcase Transport, we believe freight transportation should be 
          straightforward, reliable, and stress-free. We're a full-service logistics 
          provider specializing in both short-haul and long-haul freight across the 
          region and nationwide.
        </p>
        
        <p className="text-lg opacity-90 leading-relaxed">
          Our team is built on three core principles: safety first, on-time delivery, 
          and clear communication every step of the way. Whether you're shipping 
          palletized goods, refrigerated cargo, or general freight, we treat every 
          load with the same level of care and professionalism.
        </p>
        
        <p className="text-lg opacity-90 leading-relaxed">
          When you work with Showcase Transport, you're not just getting a carrier—you're 
          getting a partner committed to your success.
        </p>
      </div>
    </div>
  );
}
