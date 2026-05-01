'use client';
import React, { useEffect, useRef } from 'react';

// BENTO GRID AUDIT
// Array has 6 cards: [ImportExport, Guidelines, WeatherAdvisory, ExtensionServices, SectorStats, Projects]
// Row 1: [col-1: ImportExport cs-1] [col-2: Guidelines cs-1] [col-3: WeatherAdvisory cs-1]
// Row 2: [col-1: ExtensionServices cs-2] [col-3: SectorStats cs-1]
// Row 3: [col-1: Projects cs-3 (full)]
// Placed 6/6 ✓

const services = [
{
  id: 'import-export',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,

  label: 'Import & Export',
  description: 'Online certification for fisheries, plants, and animal products. Access transit permits and general trade guidelines.',
  badge: 'Online Certification',
  color: 'bg-emerald-50 border-emerald-100',
  iconColor: 'bg-primary/10 text-primary',
  colSpan: 'col-span-1'
},
{
  id: 'guidelines',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>,

  label: 'Guidelines & Services',
  description: 'Enterprise guides, application forms, crop variety lists, pest control knowledge, and chemical registers.',
  badge: 'Download Forms',
  color: 'bg-amber-50 border-amber-100',
  iconColor: 'bg-accent/10 text-accent',
  colSpan: 'col-span-1'
},
{
  id: 'weather',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>,

  label: 'Weather Advisory',
  description: 'Real-time agro-meteorological advisories and seasonal forecasts to guide planting, irrigation, and harvest decisions.',
  badge: 'Live Updates',
  color: 'bg-sky-50 border-sky-100',
  iconColor: 'bg-sky-500/10 text-sky-600',
  colSpan: 'col-span-1'
},
{
  id: 'extension',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>,

  label: 'Agricultural Extension Services',
  description: 'Connect with DAES extension officers across Uganda. Access training manuals, mechanisation services, and field support for commercialising your farming enterprise.',
  badge: 'Find Your Officer',
  color: 'bg-green-50 border-green-100',
  iconColor: 'bg-primary/10 text-primary',
  colSpan: 'md:col-span-2',
  large: true,
  imageUrl: 'http://agriculture.go.ug/wp-content/uploads/2019/05/extension-services.jpg',
  imageAlt: 'MAAIF extension officer demonstrating crop techniques to farmers in a Ugandan field, bright daylight, lush green crops'
},
{
  id: 'statistics',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,

  label: 'Sector Statistics',
  description: 'Comprehensive agricultural data, production figures, trade statistics, and sector performance indicators.',
  badge: 'Open Data',
  color: 'bg-purple-50 border-purple-100',
  iconColor: 'bg-purple-500/10 text-purple-600',
  colSpan: 'col-span-1'
},
{
  id: 'projects',
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>,

  label: 'MAAIF Development Projects',
  description: 'Explore ongoing agricultural development projects implemented by the Ministry in cooperation with partner organisations under the Agriculture Sector Development Strategy and Investment Plan.',
  badge: 'View All Projects',
  color: 'bg-orange-50 border-orange-100',
  iconColor: 'bg-accent/10 text-accent',
  colSpan: 'md:col-span-3',
  wide: true,
  stats: [
  { value: '40+', label: 'Active Projects' },
  { value: 'UGX 2.4T', label: 'Investment Value' },
  { value: '112', label: 'Districts Covered' }]

}];


export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-background py-20 px-6 lg:px-16">

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Digital Services
            </span>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight">
              Everything you need,<br />
              <span className="text-primary">online.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
            Access agricultural services, certifications, and resources — without visiting a ministry office.
          </p>
        </div>

        {/* Bento Grid */}
        {/* Row 1: ImportExport cs-1 | Guidelines cs-1 | Weather cs-1 */}
        {/* Row 2: Extension cs-2 | Statistics cs-1 */}
        {/* Row 3: Projects cs-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1: Import & Export — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-100">
            <ServiceCard service={services[0]} />
          </div>

          {/* Card 2: Guidelines — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-200">
            <ServiceCard service={services[1]} />
          </div>

          {/* Card 3: Weather — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-300">
            <ServiceCard service={services[2]} />
          </div>

          {/* Card 4: Extension Services — md:col-span-2 */}
          <div className="col-span-1 md:col-span-2 reveal reveal-delay-100">
            <ExtensionCard service={services[3]} />
          </div>

          {/* Card 5: Sector Statistics — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-200">
            <ServiceCard service={services[4]} />
          </div>

          {/* Card 6: Projects — md:col-span-3 */}
          <div className="col-span-1 md:col-span-3 reveal reveal-delay-100">
            <ProjectsCard service={services[5]} />
          </div>

        </div>
      </div>
    </section>);

}

function ServiceCard({ service }: {service: typeof services[0];}) {
  return (
    <div className={`group h-full min-h-[220px] rounded-3xl border p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 cursor-pointer ${service.color}`}>
      <div>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${service.iconColor}`}>
          {service.icon}
        </div>
        <h3 className="font-semibold text-foreground text-lg mb-2 leading-tight">{service.label}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">{service.badge}</span>
        <span className="w-8 h-8 rounded-full bg-foreground/8 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
          <svg className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
          </svg>
        </span>
      </div>
    </div>);

}

function ExtensionCard({ service }: {service: typeof services[3];}) {
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-green-100 min-h-[260px] flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-500">
      {service.imageUrl &&
      <>
          <div className="absolute inset-0">
            <img
            src={service.imageUrl}
            alt={service.imageAlt || ''}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy" />

          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        </>
      }
      <div className="relative z-10 p-7 flex justify-end">
        <span className="text-xs font-semibold text-white bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
          {service.badge}
        </span>
      </div>
      <div className="relative z-10 p-7">
        <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white mb-4">
          {service.icon}
        </div>
        <h3 className="font-semibold text-white text-xl mb-2">{service.label}</h3>
        <p className="text-white/75 text-sm leading-relaxed max-w-sm">{service.description}</p>
      </div>
    </div>);

}

function ProjectsCard({ service }: {service: typeof services[5];}) {
  return (
    <div className={`group rounded-3xl border p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:shadow-lg transition-all duration-300 cursor-pointer ${service.color}`}>
      <div className="flex-1">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${service.iconColor}`}>
          {service.icon}
        </div>
        <h3 className="font-semibold text-foreground text-xl mb-2">{service.label}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{service.description}</p>
        <div className="mt-5">
          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full">{service.badge}</span>
        </div>
      </div>
      {service.stats &&
      <div className="flex gap-8 shrink-0">
          {service.stats.map((stat) =>
        <div key={stat.label} className="text-center">
              <div className="font-serif-display text-3xl font-semibold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
        )}
        </div>
      }
    </div>);

}