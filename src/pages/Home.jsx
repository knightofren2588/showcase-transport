// src/pages/Home.jsx

import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import TruckSceneBasic from '../components/TruckSceneBasic';

export default function Home() {
  const [equipmentVisible, setEquipmentVisible] = useState(false);
  const equipmentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEquipmentVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (equipmentRef.current) {
      observer.observe(equipmentRef.current);
    }

    return () => {
      if (equipmentRef.current) {
        observer.unobserve(equipmentRef.current);
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url("/images/ST Log.JPG")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero Section */}
      <section className="bg-gray-50/90 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Precision Docking, Every Time
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Watch our professional drivers execute perfect backing maneuvers with safety and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="brand-btn inline-block text-center">
                  Get a Quote
                </Link>
                <Link
                  to="/services"
                  className="brand-cta inline-block text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>
            
            {/* Right Column - Logo Image */}
            <div className="w-full flex items-center justify-center">
              <img
                src="/images/ST2.jpg"
                alt="Showcase Transport Logo"
                className="w-full h-auto max-w-xl object-contain"
                style={{
                  mixBlendMode: 'multiply',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real Truck Photo Section - ENHANCED */}
      <section 
        ref={equipmentRef}
        className="bg-white/90 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Heading with fade-in */}
            <div 
              className={`text-center mb-6 transition-all duration-700 ${
                equipmentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2931] mb-3">
                Our Equipment
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Modern, well-maintained fleet equipped with the latest technology for safe and efficient freight transport.
              </p>
            </div>

            {/* Image container with hover effect */}
            <div 
              className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 delay-200 ${
                equipmentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Main truck image with hover effect */}
              <div className="relative group">
                <img 
                  src="/images/ST.jpg" 
                  alt="Showcase Transport professional green freight truck with custom chrome stacks" 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Feature Badges - Now OUTSIDE the image */}
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 transition-all duration-700 delay-300 ${
                equipmentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="bg-green-700 text-white px-4 py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2">
                <span className="text-xl">📍</span>
                <span>GPS Tracked</span>
              </div>
              <div className="bg-[#0F2931] text-white px-4 py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2">
                <span className="text-xl">❄️</span>
                <span>Climate Controlled</span>
              </div>
              <div className="bg-green-700 text-white px-4 py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2">
                <span className="text-xl">✓</span>
                <span>DOT Certified</span>
              </div>
              <div className="bg-[#0F2931] text-white px-4 py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2">
                <span className="text-xl">🛡️</span>
                <span>Fully Insured</span>
              </div>
            </div>

            {/* CTA Button with fade-in */}
            <div 
              className={`text-center mt-8 transition-all duration-700 delay-400 ${
                equipmentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-gray-700 mb-4 text-lg">
                Ready to transport with confidence?
              </p>
              <Link
                to="/contact"
                className="brand-btn inline-block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Truck Animation Section */}
      <section className="bg-white/90 py-12">
        <div className="mx-auto px-6">
          <div className="bg-gray-100 rounded-2xl shadow-xl border-2 border-gray-300 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Docking Process
            </h2>
            <TruckSceneBasic animate={true} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white/90 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-[#F4F5F6] rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">
                About Showcase Transport
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2931] mb-4">
                Experienced Freight Partner You Can Count On
              </h2>
              <p className="text-lg text-[#0F2931]/70 max-w-3xl mx-auto leading-relaxed">
                Showcase Transport specializes in dock-to-dock freight solutions with precision docking maneuvers that keep your operations running smoothly. Our safety-minded drivers and commitment to on-time delivery make us the trusted choice for businesses across the region seeking reliable freight services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-700 mb-2">30+</div>
                <p className="text-[#0F2931] font-semibold">Years Experience</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                <p className="text-[#0F2931] font-semibold">On-Time Delivery Focus</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-700 mb-2">★★★★★</div>
                <p className="text-[#0F2931] font-semibold">Safety-Minded Drivers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white/90 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2931] text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#0F2931] mb-3">Dedicated Docking & Yard Moves</h3>
                <p className="text-gray-600 text-sm">
                  Precision backing and yard positioning for efficient dock operations.
                </p>
              </div>
              <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#0F2931] mb-3">Palletized Freight Transport</h3>
                <p className="text-gray-600 text-sm">
                  Secure handling and transport of palletized cargo with proper loading techniques.
                </p>
              </div>
              <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#0F2931] mb-3">Time-Sensitive / On-Time Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Dependable scheduling and route planning to meet your critical deadlines.
                </p>
              </div>
              <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#0F2931] mb-3">Temperature-Controlled / Specialized Loads</h3>
                <p className="text-gray-600 text-sm">
                  Refrigerated and specialized freight handling to maintain product integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50/90 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2931] text-center mb-4">
              Why Choose Showcase Transport
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our commitment to excellence drives everything we do, from safety protocols to customer communication.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-[#0F2931] mb-3">Safety First</h3>
                <p className="text-gray-600 text-sm">
                  Rigorous safety standards, regular equipment inspections, and full DOT compliance on every run.
                </p>
              </div>
              <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold text-[#0F2931] mb-3">Reliable Scheduling</h3>
                <p className="text-gray-600 text-sm">
                  Strategic route planning and proactive monitoring to ensure your freight arrives on time, every time.
                </p>
              </div>
              <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👨‍✈️</div>
                <h3 className="text-xl font-semibold text-[#0F2931] mb-3">Professional Drivers</h3>
                <p className="text-gray-600 text-sm">
                  Experienced, safety-minded drivers with the expertise to handle precision docking and freight handling.
                </p>
              </div>
              <div className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-[#0F2931] mb-3">Exceptional Communication</h3>
                <p className="text-gray-600 text-sm">
                  Proactive updates, responsive support, and clear communication throughout your shipment's journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0F2931] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1a3a42] to-[#0F2931] rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Ready to schedule a load?
                </h2>
                <p className="text-gray-300 text-lg max-w-xl">
                  Tell us about your shipment and we'll get back with a fast, accurate quote.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-end md:flex-shrink-0">
                <Link
                  to="/contact"
                  className="brand-btn w-full sm:w-auto text-center"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
