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
              <ShowcaseTransportLogo size="large" className="drop-shadow-2xl" />
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
    </div>
  );
}
