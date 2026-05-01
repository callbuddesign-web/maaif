'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function MinisterWelcome() {
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
    const elements = sectionRef?.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Minister photo + vision/mission cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 reveal">
            {/* Minister photo card */}
            <div className="relative rounded-3xl overflow-hidden bg-primary/5 border border-border">
              <div className="aspect-[4/5] relative">
                <AppImage
                  src="https://www.agriculture.go.ug/wp-content/uploads/bb/cache/BLA_1927-264x300-circle.jpg"
                  alt="Hon. Frank Tumwebaze, Minister of Agriculture Animal Industry and Fisheries Uganda, formal portrait, warm-lit office background"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw" />

                {/* Bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <p className="font-serif-display text-white text-xl font-medium">Hon. Frank Tumwebaze</p>
                  <p className="text-white/80 text-sm mt-1">Minister of Agriculture, Animal Industry and Fisheries</p>
                  <p className="text-white/60 text-xs mt-1 italic">"For God and My Country"</p>
                </div>
              </div>
            </div>

            {/* Vision card */}
            <div className="bg-primary rounded-3xl p-7 reveal reveal-delay-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Ministry Vision</span>
              </div>
              <p className="font-serif-display text-white text-xl md:text-2xl font-medium leading-snug italic">
                "A competitive, profitable and sustainable agricultural sector"
              </p>
            </div>

            {/* Mission card */}
            <div className="bg-accent/10 border border-accent/20 rounded-3xl p-7 reveal reveal-delay-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-accent text-xs font-bold uppercase tracking-widest">Ministry Mission</span>
              </div>
              <p className="font-serif-display text-foreground text-xl md:text-2xl font-medium leading-snug italic">
                "To transform subsistence farming to commercial agriculture"
              </p>
            </div>
          </div>

          {/* Right: Welcome message */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full reveal reveal-delay-100">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-xs font-semibold text-primary tracking-widest uppercase mb-6">
                Minister's Welcome
              </span>
              <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight tracking-tight mb-8">
                Welcome to Uganda's<br />
                <span className="text-primary">National Agricultural</span><br />
                Sector Portal
              </h2>

              <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                <p>
                  Welcome to the official website of the Ministry of Agriculture, Animal Industry and Fisheries which doubles as the <strong className="text-foreground font-semibold">National Agricultural Sector Portal</strong> for the Republic of Uganda.
                </p>
                <p>
                  Visitors are welcome to explore this communication channel of the Ministry which complements stakeholder engagements, agricultural extension, publications and media features in showcasing work done within the guidance of the Vision of <em className="text-foreground">"A Competitive, Profitable and Sustainable Agricultural Sector"</em> and Mission <em className="text-foreground">"To Transform Subsistence Farming into Commercial Agriculture."</em>
                </p>
                <p>
                  Visitors are also welcome to explore the website for more information about the structure, mandate and functions of the Ministry delivered through four Directorates, Departments and seven semi-autonomous Agencies.
                </p>
                <p>
                  The Ministry recognizes and prioritizes strategic communication and the use of modern online platforms to reach our various audiences. Visitors are therefore welcome to follow the links to our social media pages on Facebook, Twitter, LinkedIn, and YouTube and subscribe to the Ministry e-newsletter.
                </p>
                <p>
                  The Ministry Offices across the country are also open to the general public during official working hours for any consultation regarding the agricultural sector and related services.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Follow the Ministry</p>
              <div className="flex flex-wrap gap-3">
                {[
                { label: 'Facebook', href: 'https://www.facebook.com/MAAIFUganda/', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                { label: 'Twitter', href: 'https://twitter.com/MAAIF_Uganda', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                { label: 'LinkedIn', href: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
                { label: 'YouTube', href: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> }]?.
                map((social) =>
                <a
                  key={social?.label}
                  href={social?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                  aria-label={`MAAIF ${social?.label} page`}>

                    {social?.icon}
                    {social?.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}