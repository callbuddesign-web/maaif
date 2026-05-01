'use client';
import React, { useState, useRef, useEffect } from 'react';

export default function NewsletterCTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mock submit handler — backend integration point
    setSubmitted(true);
  }

  return (
    <section ref={sectionRef} className="bg-primary py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl translate-x-1/3 translate-y-1/3 animate-blob" style={{ animationDelay: '3s' }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white/80 tracking-widest uppercase mb-6">
              Stay Connected
            </span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-6">
              Subscribe to the<br />
              <span className="text-accent">MAAIF Newsletter</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              Keep up-to-date with vital information from the Ministry — policy announcements, project updates, seasonal advisories, and sector developments.
            </p>

            {/* Feature list */}
            <ul className="space-y-3">
              {[
                'Policy & regulatory updates',
                'Seasonal weather and planting advisories',
                'New project opportunities and tenders',
                'Extension services and training events',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-200">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif-display text-2xl text-white font-medium mb-2">Thank you!</h3>
                  <p className="text-white/70 text-sm">You have successfully subscribed to the MAAIF Newsletter.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif-display text-2xl text-white font-medium mb-2">Subscribe to Updates</h3>
                  <p className="text-white/60 text-sm mb-7">Join thousands of farmers and stakeholders receiving MAAIF updates.</p>
                  {/* Backend integration point: connect form submission to newsletter API */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="newsletter-name" className="block text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
                        Full Name
                      </label>
                      <input
                        id="newsletter-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="newsletter-email" className="block text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
                        Email Address
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent text-white font-semibold py-3.5 rounded-xl hover:bg-accent/90 transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                    >
                      Subscribe
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <p className="text-white/40 text-xs text-center">
                      By subscribing you agree to receive communications from MAAIF Uganda. Unsubscribe at any time.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Contact info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/8 rounded-2xl p-5">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Address</p>
                <p className="text-white/80 text-sm leading-relaxed">Plot 16-18, Lugard Avenue, Entebbe, Uganda</p>
              </div>
              <div className="bg-white/8 rounded-2xl p-5">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-1">Contact</p>
                <p className="text-white/80 text-sm">Tel: 041 4320004</p>
                <a href="mailto:info@agriculture.go.ug" className="text-accent text-sm hover:underline">info@agriculture.go.ug</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}