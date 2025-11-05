// src/components/VersionBadge.jsx

import { useState } from 'react';

export default function VersionBadge() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Version Badge Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="group flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-full border border-gray-600 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-green-400/20"
        aria-label="View release notes"
        title="View Release Notes"
      >
        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
        <span className="text-xs font-bold text-white">v1.0.0</span>
      </button>

      {/* Release Notes Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 border-b border-gray-700 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  🏆 Release Notes
                </h2>
                <p className="text-sm text-gray-400 mt-1">Showcase Transport Website</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-100px)] custom-scrollbar">
              
              {/* Version 1.0.0 - Initial Release */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full">
                    v1.0.0
                  </span>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    INITIAL RELEASE
                  </span>
                  <span className="text-gray-400 text-sm">November 2024</span>
                </div>

                {/* Core Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                    🚀 Core Features
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Custom animated truck docking scene with smooth transitions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Professional brand identity with ST logo and color scheme</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Complete 5-page structure (Home, About, Services, Values, Contact)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Fully responsive design - perfect on mobile, tablet, and desktop</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Contact form with Netlify integration for instant submissions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Sticky header navigation with smooth scroll behavior</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Custom "Get a Quote" call-to-action buttons throughout site</span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                    ⚡ Performance Optimization
                  </h3>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <p className="text-green-300 font-bold mb-3">Google Lighthouse Score: 96.25/100 (Top 5% of all websites!)</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Performance:</span>
                        <span className="text-green-400 font-bold">100/100 🏆</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Accessibility:</span>
                        <span className="text-green-400 font-bold">95/100 ⭐</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Best Practices:</span>
                        <span className="text-green-400 font-bold">100/100 🏆</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">SEO:</span>
                        <span className="text-green-400 font-bold">90/100 ⭐</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-300 mt-3">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Lightning-fast load times - under 1 second first contentful paint</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Fixed color contrast issues for perfect accessibility compliance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Optimized button styling with proper hover states</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Validated SEO structure with proper meta tags and semantic HTML</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                    💻 Tech Stack
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>React 18 - Modern component-based architecture</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>Vite - Lightning-fast build tool and dev server</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>React Router - Smooth client-side navigation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>Tailwind CSS - Modern utility-first styling</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>Custom SVG animations - Hand-coded truck docking scene</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>Netlify hosting - Enterprise-grade CDN and form handling</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
                      <span>GitHub version control - Full project history and backup</span>
                    </div>
                  </div>
                </div>

                {/* Deployment */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                    🚢 Deployment & Infrastructure
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>Custom domain: showcasetransportllc.com</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>SSL certificate (HTTPS) - Secure connections for all visitors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>Global CDN - Fast loading worldwide</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>Automatic deployments from GitHub - Push to deploy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>Form submission handling - Contact forms work instantly</span>
                    </div>
                  </div>
                </div>

                {/* Client Documentation */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-pink-400 mb-3 flex items-center gap-2">
                    📄 Professional Documentation Created
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▹</span>
                      <span><strong>Performance Report</strong> - Detailed Lighthouse audit results</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▹</span>
                      <span><strong>Client Handoff Document</strong> - Complete access details and support info</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▹</span>
                      <span><strong>Maintenance Pricing Proposal</strong> - Pay-as-you-go at $25/hour</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▹</span>
                      <span><strong>Web Maintenance Agreement</strong> - Professional service contract</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">▹</span>
                      <span><strong>90-Day Warranty</strong> - Free bug fixes and support included</span>
                    </div>
                  </div>
                </div>

                {/* Developer Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                    🛠️ Developer Experience
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Version badge system with release notes (this modal!)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Clean, maintainable code structure</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Reusable component architecture</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Professional Git workflow with clear commit history</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="border-t border-gray-700 pt-6 mt-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">
                    Built with 💚 by <span className="text-green-400 font-semibold">StarktechStudios</span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    Chillicothe, Ohio • Project Launch: November 2024
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    463 Church Street, Chillicothe, OH 45601 • mike@starktechstudios.com
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </>
  );
}
