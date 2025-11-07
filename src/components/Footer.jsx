import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2931] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Showcase Transport</h3>
              <p className="text-gray-300 mb-4 italic">
                Precision Docking. Reliable Freight. Every Time.
              </p>
              <p className="text-gray-400 text-sm">
                Your trusted partner for transportation solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-[#F2B94C] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-[#F2B94C] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-[#F2B94C] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/values" className="text-gray-300 hover:text-[#F2B94C] transition-colors">
                    Values
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-[#F2B94C] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:mmg@showcasetransport.com,mag@showcasetransport.com"
                    className="text-gray-300 hover:text-[#F2B94C] transition-colors"
                  >
                    Email: mmg@showcasetransport.com &amp; mag@showcasetransport.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:5551234567"
                    className="text-gray-300 hover:text-[#F2B94C] transition-colors"
                  >
                    Phone: (555) 123-4567
                  </a>
                </li>
                <li className="text-gray-300">
                  240 Highmeadow Dr.<br />
                  Columbus, OH
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Showcase Transport. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
