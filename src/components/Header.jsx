// src/components/Header.jsx

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import VersionBadge from './VersionBadge';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/values', label: 'Values' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-[#1a2332] shadow-lg sticky top-0 z-50">
      {/* Main Navigation */}
      <nav className="w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Version Badge */}
          <div className="flex items-center gap-3 pl-4 sm:pl-6 lg:pl-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200 shadow-lg">
                  <span className="text-white font-bold text-xl">ST</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg">Showcase Transport</div>
                <div className="text-green-400 text-xs -mt-1">Premium Logistics</div>
              </div>
            </Link>
            
            {/* Version Badge - Next to Logo */}
            <div className="hidden sm:block">
              <VersionBadge />
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 pr-4 sm:pr-6 lg:pr-8">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-green-400'
                      : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 pr-4"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pl-4 sm:pl-6 lg:pl-8 pr-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'bg-green-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg font-medium text-center hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get a Quote
              </Link>
              
              {/* Version Badge - Mobile */}
              <div className="flex justify-center pt-2">
                <VersionBadge />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
