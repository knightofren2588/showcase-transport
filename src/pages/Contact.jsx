import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Load JotForm embed handler script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize JotForm embed handler
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-253086135648058']",
          "https://form.jotform.com/"
        );
      }
    };

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-heading text-st-navy">Request a Quote</h1>
        <p className="text-st-text/80 mt-2">
          Fill out the details below and we'll respond with availability and pricing.
        </p>
      </div>

      <div className="bg-white shadow-soft rounded-2xl p-8">
        <iframe
          id="JotFormIFrame-253086135648058"
          title="Request Quote"
          onLoad={() => window.parent.scrollTo(0, 0)}
          allowTransparency="true"
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/253086135648058"
          frameBorder="0"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "539px",
            border: "none",
          }}
          scrolling="no"
        />
      </div>

      <div className="text-center text-sm text-st-navy/60">
        Or email us directly at{" "}
        <a
          href="mailto:mmg@showcasetransport.com,mag@showcasetransport.com"
          className="text-st-green hover:underline font-semibold"
        >
          mmg@showcasetransport.com &amp; mag@showcasetransport.com
        </a>
      </div>
    </section>
  );
}
