// src/pages/Services.jsx

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updatePageMeta, PAGE_META } from '../utils/seo';

export default function Services() {
  useEffect(() => {
    updatePageMeta(PAGE_META.services.title, PAGE_META.services.description);
  }, []);

  const services = [
    {
      title: 'Palletized Freight',
      description: 'Efficient handling and secure transport of palletized cargo with proper loading techniques.'
    },
    {
      title: 'Retail Goods',
      description: 'Reliable delivery of retail merchandise with attention to handling and timing.'
    },
    {
      title: 'Household Goods',
      description: 'Safe transportation of household items for moves and relocations.'
    },
    {
      title: 'General Freight',
      description: 'Versatile hauling for a wide range of cargo types and industries.'
    },
    {
      title: 'Refrigerated Freight',
      description: 'Temperature-controlled transport to maintain product integrity from pickup to delivery.'
    },
    {
      title: 'Drop & Hook Service',
      description: 'Pre-loaded trailers for faster turnaround and minimal dock time.'
    },
    {
      title: 'Satellite Tracking',
      description: 'Real-time GPS tracking so you always know where your shipment is.'
    },
    {
      title: 'Consistent Communication',
      description: 'Proactive updates and responsive support throughout transit.'
    },
    {
      title: 'Safety Compliance',
      description: 'Full adherence to DOT regulations and industry safety standards.'
    },
    {
      title: 'On-Time Performance',
      description: 'Dependable scheduling backed by route planning and driver expertise.'
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:py-14 space-y-8 md:space-y-10">
      <section className="card space-y-4">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-st-navy">
          Our Services
        </h1>
        
        <p className="text-lg opacity-90 leading-relaxed">
          We offer comprehensive freight solutions designed to meet the real-world 
          needs of businesses like yours. From temperature-controlled shipments to 
          flexible drop and hook services, our capabilities are backed by modern 
          equipment, experienced drivers, and a commitment to getting it right.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl md:text-2xl font-semibold text-st-navy mb-6">
          Our Services Include
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-st-navy">
                {service.title}
              </h3>
              <p className="opacity-90 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="card text-center">
        <p className="text-lg font-medium text-st-navy">
          Ready to ship? Request a quote today and let us handle the details.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-4 brand-btn transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-st-green focus:ring-offset-2"
        >
          Request a Quote
        </Link>
      </section>
    </div>
  );
}
