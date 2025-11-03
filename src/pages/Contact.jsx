import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <div className="card shadow-soft rounded-lg p-8 text-center" role="status" tabIndex="0">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-st-green mb-2">Thank You!</h2>
          <p className="text-st-navy/70 mb-4">
            We've received your quote request and will respond within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="brand-cta"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-st-navy">Request a Quote</h1>
        <p className="text-lg text-st-navy/70">
          Fill out the details below and we'll respond with availability and pricing.
        </p>
      </div>

      <form
        name="quote"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="card shadow-soft rounded-lg p-8 space-y-6"
      >
        <input type="hidden" name="form-name" value="quote" />
        <input name="bot-field" className="hidden" />

        <div>
          <label htmlFor="name" className="block text-st-navy font-semibold mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-st-navy/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-st-green"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-st-navy font-semibold mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full border border-st-navy/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-st-green"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-st-navy font-semibold mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-st-navy/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-st-green"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-st-navy font-semibold mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-st-navy/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-st-green"
          />
        </div>

        <div>
          <label htmlFor="origin" className="block text-st-navy font-semibold mb-1">
            Origin <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="origin"
            name="origin"
            required
            placeholder="City, State or ZIP"
            className="w-full border border-st-navy/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-st-green"
          />
        </div>

        <div>
          <label htmlFor="destination" className="block text-st-navy font-semibold mb-1">
            Destination <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            required
            placeholder="City, State or ZIP"
            className="w-full border border-st-navy/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-st-green"
          />
        </div>

        <div>
          <label htmlFor="loadType" className="block text-st-navy font-semibold mb-1">
            Load Type
          </label>
          <select
            id="loadType"
            name="loadType"
            className="w-full border border-st-navy/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-st-green"
          >
            <option value="">Select a load type</option>
            <option value="Palletized Freight">Palletized Freight</option>
            <option value="Refrigerated Freight">Refrigerated Freight</option>
            <option value="Drop & Hook">Drop & Hook</option>
            <option value="General Freight">General Freight</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-st-navy font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell us about your shipping needs..."
            className="w-full border border-st-navy/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-st-green"
          ></textarea>
        </div>

        <button type="submit" className="brand-btn mt-4">
          Send Request
        </button>
      </form>

      <div className="text-center text-sm text-st-navy/60">
        Or email us directly at{' '}
        <a
          href="mailto:mike@starktechstudios.com"
          className="text-st-green hover:underline font-semibold"
        >
          mike@starktechstudios.com
        </a>
      </div>
    </div>
  );
}
