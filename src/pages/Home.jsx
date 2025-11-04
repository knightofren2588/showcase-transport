// src/pages/Home.jsx

import { Link } from 'react-router-dom';
import TruckSceneBasic from '../components/TruckSceneBasic';
import ShowcaseTransportLogo from '../components/ShowcaseTransportLogo';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
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
                <Link
                  to="/contact"
                  className="brand-btn inline-block text-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/services"
                  className="brand-cta inline-block text-center border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Right Column - Logo */}
            <div className="w-full flex items-center justify-center">
              <ShowcaseTransportLogo size="xlarge" className="drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Truck Animation Section */}
      <section className="bg-white py-12">
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
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-[#F4F5F6] rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-green-500 uppercase tracking-wide mb-2">
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
                <div className="text-3xl font-bold text-green-500 mb-2">10+</div>
                <p className="text-[#0F2931] font-semibold">Years Combined Experience</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                <p className="text-[#0F2931] font-semibold">On-Time Delivery Focus</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-500 mb-2">★★★★★</div>
                <p className="text-[#0F2931] font-semibold">Safety-Minded Drivers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">Palletized Freight</h3>
            </div>
            <div className="card bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">Refrigerated Freight</h3>
            </div>
            <div className="card bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">Drop & Hook Service</h3>
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
                  className="brand-btn bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition w-full sm:w-auto text-center"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:555-123-4567"
                  className="text-[#FFD166] hover:text-[#FFE599] font-semibold transition underline"
                >
                  Call dispatch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
