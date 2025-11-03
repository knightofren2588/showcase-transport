// src/components/Hero.jsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-st-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-st-navy mb-6 leading-tight">
              {SITE.tagline}
            </h1>
            <p className="text-lg md:text-xl text-st-text mb-8 leading-relaxed">
              Experience unmatched reliability and professionalism in freight 
              transportation. From palletized shipments to temperature-controlled 
              cargo, we handle your freight with care and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="brand-btn text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-st-green focus:ring-offset-2"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-st-gold text-st-navy font-semibold rounded-lg shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-st-gold focus:ring-offset-2 text-center"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Column - Image with slide-in animation */}
          <div
            className={`transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <img
              src="/images/hero.jpg"
              alt="Showcase Transport freight truck on the highway delivering cargo safely and on time"
              className="w-full h-auto rounded-2xl shadow-soft"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
