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
        <span className="text-xs font-bold text-white">v1.0.1</span>
      </button>

      {/* Release Notes Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 border-b border-gray-700 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  🎉 What's New
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
              
              {/* Version 1.0.1 - November 2025 Update */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full">
                    v1.0.1
                  </span>
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                    LATEST UPDATE
                  </span>
                  <span className="text-gray-400 text-sm">November 2025</span>
                </div>

                {/* Install as App */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                    📱 Install Our Website as an App
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>You can now install our website on your phone or computer - no app store needed!</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Add to your home screen for quick, one-tap access</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Works like a native app - launches in full screen without browser bars</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>View pages even when you're offline</span>
                    </div>
                  </div>
                </div>

                {/* Faster & Better */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                    ⚡ Faster & More Reliable
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Pages load faster with smart caching technology</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Improved reliability - works even with slow internet</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>Automatic updates when new features are added</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Version 1.0.0 - Initial Release */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full">
                    v1.0.0
                  </span>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    INITIAL RELEASE
                  </span>
                  <span className="text-gray-400 text-sm">November 2025</span>
                </div>

                {/* Website Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                    🚀 Website Features
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Custom animated truck docking scene on the homepage</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Professional brand design with custom logo and colors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Easy quote request form - get pricing fast</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Complete information about our services and values</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>Works perfectly on phones, tablets, and computers</span>
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                    ⚡ Lightning Fast Performance
                  </h3>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <p className="text-green-300 font-bold mb-3">Top 5% Performance Rating</p>
                    <p className="text-gray-300 text-sm">
                      Our website loads in under 1 second and scores 96.25/100 on Google's performance tests!
                    </p>
                  </div>
                  <div className="space-y-2 text-gray-300 mt-3">
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Instant page loads - no waiting around</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Optimized for accessibility - easy for everyone to use</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>Secure connection (HTTPS) protects your information</span>
                    </div>
                  </div>
                </div>

                {/* Domain & Security */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                    🔒 Professional & Secure
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>Custom domain: showcasetransportllc.com</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>Secure HTTPS encryption for all visitors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>Fast loading from anywhere in the world</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">▹</span>
                      <span>Contact forms work instantly - we respond within 24 hours</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="border-t border-gray-700 pt-6 mt-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">
                    Built by <span className="text-green-400 font-semibold">StarktechStudios</span>
                  </p>
                  <p className="text-gray-500 text-xs">
                    Chillicothe, Ohio
                  </p>
                  <p className="text-gray-500 text-xs mt-3">
                    Current Version: v1.0.1 • Last Updated: November 2025
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
