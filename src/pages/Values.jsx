// src/pages/Values.jsx

import { useEffect } from 'react';
import { updatePageMeta, PAGE_META } from '../utils/seo';

export default function Values() {
  useEffect(() => {
    updatePageMeta(PAGE_META.values.title, PAGE_META.values.description);
  }, []);

  const values = [
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency in every interaction. From accurate quotes to clear expectations, you can count on us to deliver on our commitments without surprises.'
    },
    {
      title: 'Communication',
      description: "Logistics shouldn't feel like a guessing game. We keep you informed with proactive updates, responsive customer service, and real answers when you need them."
    },
    {
      title: 'Safety',
      description: 'Nothing matters more than getting your cargo—and our drivers—to the destination safely. We maintain rigorous safety standards, regular equipment inspections, and full DOT compliance on every run.'
    },
    {
      title: 'On-Time Delivery',
      description: 'Deadlines matter in your business, so they matter in ours. We plan routes strategically, monitor conditions closely, and stay ahead of potential delays to ensure your freight arrives when promised.'
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-14 space-y-8 md:space-y-10">
      <section className="card space-y-4">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-st-navy">
          Our Core Values
        </h1>
        
        <p className="text-lg opacity-90 leading-relaxed">
          Our values aren't just words on a page—they guide every decision we 
          make and every mile we drive. We've built our reputation on doing what 
          we say we'll do, and treating every customer's freight like it's our own.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="card space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-st-navy">
              {value.title}
            </h2>
            <p className="opacity-90 leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
