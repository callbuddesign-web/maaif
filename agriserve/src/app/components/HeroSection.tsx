'use client';
import React, { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

const slides = [
{
  id: 1,
  tag: 'Health Advisory',
  headline: 'COVID-19 Prevention',
  subhead: 'Advisory for Livestock Sub-Sector',
  body: 'All livestock related services and activities shall continue to be rendered with the exception of those that require gatherings of more than 10 people such as livestock markets, workshops and large meetings.',
  cta: 'Read Guidelines',
  image: 'https://www.agriculture.go.ug/wp-content/uploads/2020/11/ghfk.jpg',
  alt: 'Ugandan livestock farmers working in open fields, bright midday sun, green pastoral landscape'
},
{
  id: 2,
  tag: 'Ministry News',
  headline: 'A Hands-On Approach',
  subhead: 'Hon. Tumwebaze Engages Farmers Directly',
  body: 'Hon. Frank Tumwebaze, the new Minister of Agriculture, has promised a proactive approach through directly engaging farmers on ministry policies — spending more time in the fields than in conferences.',
  cta: 'Read More',
  image: 'https://www.agriculture.go.ug/wp-content/uploads/2021/06/FROST-20-of-149.jpg',
  alt: 'Agricultural ministry officials meeting with farmers in rural Uganda, overcast sky, lush green crops'
},
{
  id: 3,
  tag: 'Sector Overview',
  headline: 'Agriculture in Uganda',
  subhead: 'The Backbone of Our Nation\'s Economy',
  body: 'Agriculture remains the major source of livelihood in Uganda. According to the Uganda National Household Survey 2016/17, 65% of the working population is engaged in agriculture, forestry and fishing.',
  cta: 'Read More',
  image: 'https://www.agriculture.go.ug/wp-content/uploads/2020/11/fgh.jpg',
  alt: 'Wide aerial view of Ugandan farmland with diverse crops, golden hour light, deep shadows across fertile fields'
},
{
  id: 4,
  tag: 'Development',
  headline: 'MAAIF Projects',
  subhead: 'Agricultural Development in Action',
  body: 'The Ministry, in cooperation with partner organisations, is implementing Agricultural Development Projects to operationalize the Agriculture Sector Development Strategy and Investment Plan.',
  cta: 'Read More',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/05/projectsg-1.jpg',
  alt: 'Agricultural development project site in Uganda, machinery and workers, dim industrial atmosphere, dark earth tones'
},
{
  id: 5,
  tag: 'Latest Updates',
  headline: 'News & Press Releases',
  subhead: 'Stay Informed with MAAIF',
  body: 'Get to know the latest updates about the Ministry of Agriculture, Animal Industry and Fisheries — including policy announcements, project milestones, and sector developments.',
  cta: 'Read More',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/05/project3.jpg',
  alt: 'MAAIF press conference with officials at podium, dark formal interior, dramatic stage lighting'
}];


const stats = [
{ value: '65%', label: 'of workforce in agriculture' },
{ value: '4', label: 'Directorates serving farmers' },
{ value: '7', label: 'Semi-autonomous agencies' },
{ value: '160+', label: 'Districts with extension services' }];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setProgressKey((k) => k + 1);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setProgressKey((k) => k + 1);
        return next;
      });
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full min-h-screen overflow-hidden" aria-label="Featured announcements">
      {/* Background images */}
      {slides.map((s, i) =>
      <div
        key={s.id}
        className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}>

          <AppImage
          src={s.image}
          alt={s.alt}
          fill
          className="object-cover object-center"
          priority={i === 0}
          sizes="100vw" />

        </div>
      )}

      {/* Gradient scrim — dark bottom for white text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
      {/* Left vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Spacer for fixed header */}
        <div className="h-24" />

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-end pb-32 px-6 lg:px-16 max-w-[1400px] mx-auto w-full">
          {/* Tag */}
          <div
            key={`tag-${current}`}
            className="animate-enter opacity-0 mb-5">

            <span className="inline-flex items-center gap-2 glass-panel text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1
            key={`h1-${current}`}
            className="animate-enter delay-100 opacity-0 font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.0] tracking-tight mb-4 max-w-4xl">

            {slide.headline}
          </h1>

          {/* Subhead */}
          <p
            key={`sub-${current}`}
            className="animate-enter delay-200 opacity-0 text-white/80 text-lg md:text-xl font-medium mb-4 max-w-2xl">

            {slide.subhead}
          </p>

          {/* Body */}
          <p
            key={`body-${current}`}
            className="animate-enter delay-300 opacity-0 text-white/65 text-base md:text-lg font-normal leading-relaxed mb-10 max-w-xl">

            {slide.body}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${current}`}
            className="animate-enter delay-400 opacity-0 flex flex-col sm:flex-row items-start gap-4">

            <a
              href="#"
              className="flex items-center gap-3 bg-accent text-white pl-7 pr-3 py-3 rounded-full font-semibold text-sm hover:bg-accent/90 transition-all group">

              {slide.cta}
              <span className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
            <a
              href="#services"
              className="flex items-center gap-3 glass-panel text-white pl-7 pr-3 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-all group">

              Explore Services
              <span className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Slide controls */}
        <div className="px-6 lg:px-16 pb-8 max-w-[1400px] mx-auto w-full flex items-center gap-4">
          {slides.map((s, i) =>
          <button
            key={s.id}
            onClick={() => goToSlide(i)}
            className={`relative h-1 rounded-full overflow-hidden transition-all duration-300 ${
            i === current ? 'w-16 bg-white/30' : 'w-8 bg-white/20 hover:bg-white/30'}`
            }
            aria-label={`Go to slide ${i + 1}: ${s.headline}`}>

              {i === current &&
            <span
              key={progressKey}
              className="absolute inset-y-0 left-0 bg-accent rounded-full slide-progress" />

            }
            </button>
          )}
          <span className="text-white/50 text-xs font-medium ml-2">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-primary/90 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map((stat) =>
          <div key={stat.label} className="flex flex-col items-center text-center px-4">
              <span className="text-2xl md:text-3xl font-bold text-white font-serif-display">{stat.value}</span>
              <span className="text-xs text-white/70 font-medium mt-0.5">{stat.label}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}