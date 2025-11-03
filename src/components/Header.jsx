// src/components/Header.jsx

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

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
    <header className="sticky top-0 z-50 text-white shadow-lg" style={{backgroundColor: '#002B36'}}>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-st-gold focus:text-st-navy focus:rounded"
      >
        Skip to content
      </a>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-st-gold focus:ring-offset-2 focus:ring-offset-st-navy rounded transition-all"
          >
            <div className="flex items-center gap-2">
              <div className="font-bold text-xl px-3 py-1 rounded" style={{backgroundColor: '#FFD166', color: '#002B36'}}>
                ST
              </div>
              <span className="text-white font-heading font-bold text-xl">
                Showcase Transport
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-st-gold focus:outline-none focus:ring-2 focus:ring-st-gold focus:ring-offset-2 focus:ring-offset-st-navy rounded px-2 py-1 ${
                    isActive ? 'text-st-gold border-b-2 border-st-gold' : 'text-white'
                  }`
                }
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-st-gold focus:ring-offset-2 focus:ring-offset-st-navy"
              style={{backgroundColor: '#FFD166', color: '#002B36'}}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-st-gold rounded transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-st-navy/20" aria-label="Mobile navigation">
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded transition-all focus:outline-none focus:ring-2 focus:ring-st-gold focus:ring-offset-2 focus:ring-offset-st-navy ${
                      isActive ? 'bg-st-gold text-st-navy font-semibold' : 'text-white hover:bg-st-navy/50'
                    }`
                  }
                  aria-current={({ isActive }) => isActive ? 'page' : undefined}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 font-semibold rounded-lg text-center hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-st-gold focus:ring-offset-2 focus:ring-offset-st-navy"
                style={{backgroundColor: '#FFD166', color: '#002B36'}}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
