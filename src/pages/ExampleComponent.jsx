// Example usage of the brand styles in a React component
import React from 'react';

function ExampleComponent() {
  return (
    <div className="min-h-screen p-8">
      {/* Header with brand colors */}
      <header className="mb-12">
        <h1 className="text-4xl mb-2">Showcase Transport</h1>
        <p className="text-lg text-gray-600">Your trusted logistics partner</p>
      </header>

      {/* Example cards using .card class */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card">
          <h3 className="text-xl mb-3">Fast Delivery</h3>
          <p className="text-gray-600 mb-4">
            Get your packages delivered quickly and safely.
          </p>
          <button className="brand-btn">Learn More</button>
        </div>

        <div className="card">
          <h3 className="text-xl mb-3">Track Shipments</h3>
          <p className="text-gray-600 mb-4">
            Real-time tracking for all your deliveries.
          </p>
          <button className="brand-btn">Track Now</button>
        </div>

        <div className="card">
          <h3 className="text-xl mb-3">24/7 Support</h3>
          <p className="text-gray-600 mb-4">
            Our team is always here to help you.
          </p>
          <button className="brand-btn">Contact Us</button>
        </div>
      </div>

      {/* CTA Section with brand-cta button */}
      <section className="text-center bg-brand-secondary text-white p-12 rounded-brand">
        <h2 className="text-3xl mb-4 text-white">Ready to Get Started?</h2>
        <p className="text-lg mb-6 opacity-90">
          Join thousands of businesses using Showcase Transport
        </p>
        <button className="brand-cta">Sign Up Now</button>
      </section>

      {/* Example using custom brand colors directly */}
      <div className="mt-12 p-6 bg-brand-primary/10 border-l-4 border-brand-primary rounded-brand">
        <h4 className="font-heading font-semibold text-brand-primary mb-2">
          Pro Tip for Learning
        </h4>
        <p className="text-brand-text">
          You can use these custom colors anywhere with classes like{' '}
          <code className="bg-gray-200 px-2 py-1 rounded">
            text-brand-primary
          </code>{' '}
          or{' '}
          <code className="bg-gray-200 px-2 py-1 rounded">
            bg-brand-accent
          </code>
        </p>
      </div>
    </div>
  );
}

export default ExampleComponent;

