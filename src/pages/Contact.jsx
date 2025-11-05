import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    // Convert FormData to object
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });

    try {
      const response = await fetch("/.netlify/functions/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white shadow-soft rounded-2xl p-10 text-center space-y-4">
          <div className="text-5xl mb-2">✅</div>
          <h1 className="text-2xl font-heading text-st-navy">Thank You!</h1>
          <p className="text-st-text/80">
            We've received your quote request and will respond within 24 hours.
          </p>
          <button
            onClick={() => setSent(false)}
            className="brand-cta mt-4 inline-flex"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-heading text-st-navy">Request a Quote</h1>
        <p className="text-st-text/80">
          Fill out the details below and we'll respond with availability and pricing.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-soft rounded-2xl p-8 space-y-6"
      >
        <div>
          <label className="block font-semibold text-st-navy" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full border border-st-navy/15 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-st-navy" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-1 w-full border border-st-navy/15 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-st-navy" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full border border-st-navy/15 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-st-navy" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full border border-st-navy/15 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-st-navy" htmlFor="origin">
            Origin *
          </label>
          <input
            id="origin"
            name="origin"
            required
            placeholder="City, State or ZIP"
            className="mt-1 w-full border border-st-navy/15 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-st-navy" htmlFor="destination">
            Destination *
          </label>
          <input
            id="destination"
            name="destination"
            required
            placeholder="City, State or ZIP"
            className="mt-1 w-full border border-st-navy/15 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold text-st-navy" htmlFor="loadType">
            Load Type
          </label>
          <select
            id="loadType"
            name="loadType"
            className="mt-1 w-full border border-st-navy/15 rounded-lg px-4 py-2"
          >
            <option value="">Select a load type</option>
            <option value="Palletized Freight">Palletized Freight</option>
            <option value="Refrigerated Freight">Refrigerated Freight</option>
            <option value="Drop & Hook">Drop & Hook</option>
            <option value="General Freight">General Freight</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold text-st-navy" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell us about your shipping needs..."
            className="mt-1 w-full border border-st-navy/15 rounded-lg px-4 py-2"
          ></textarea>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <button type="submit" className="brand-btn w-full" disabled={loading}>
          {loading ? "Sending..." : "Send Request"}
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
    </section>
  );
}
