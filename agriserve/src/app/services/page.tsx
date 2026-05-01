'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TypeformInquiry from '@/app/components/TypeformInquiry';

const serviceDetails = [
  {
    id: 'import-export',
    label: 'Import & Export Certification',
    description: 'Online certification for fisheries, plants, and animal products. Access transit permits and general trade guidelines for Uganda.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-emerald-50 border-emerald-100',
    iconColor: 'bg-primary/10 text-primary',
    details: [
      'Phytosanitary certificates for plant exports',
      'Veterinary health certificates for animal products',
      'Online fisheries export certification',
      'Import/export transit permits',
      'General trade guidelines for Uganda',
    ],
  },
  {
    id: 'guidelines',
    label: 'Guidelines & Services',
    description: 'Enterprise guides, application forms, crop variety lists, pest control knowledge, and chemical registers for agricultural practitioners.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'bg-amber-50 border-amber-100',
    iconColor: 'bg-accent/10 text-accent',
    details: [
      'Enterprise guides for farmers and agribusinesses',
      'Downloadable application forms',
      'Crop variety lists and recommendations',
      'Pest and disease control knowledge base',
      'Chemical and fumigant registers',
    ],
  },
  {
    id: 'extension',
    label: 'Agricultural Extension Services',
    description: 'Connect with DAES extension officers across Uganda. Access training manuals, mechanisation services, and field support.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'bg-green-50 border-green-100',
    iconColor: 'bg-primary/10 text-primary',
    details: [
      'District-level extension officer contacts',
      'Training manuals and protocols',
      'Agricultural mechanisation services',
      'Farmer group support and mobilisation',
      'Commercialisation advisory services',
    ],
  },
  {
    id: 'weather',
    label: 'Weather Advisory',
    description: 'Real-time agro-meteorological advisories and seasonal forecasts to guide planting, irrigation, and harvest decisions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'bg-sky-50 border-sky-100',
    iconColor: 'bg-sky-500/10 text-sky-600',
    details: [
      'Seasonal rainfall forecasts',
      'Planting calendar advisories',
      'Drought and flood early warnings',
      'Irrigation scheduling guidance',
      'Harvest timing recommendations',
    ],
  },
  {
    id: 'statistics',
    label: 'Sector Statistics',
    description: 'Comprehensive agricultural data, production figures, trade statistics, and sector performance indicators.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'bg-purple-50 border-purple-100',
    iconColor: 'bg-purple-500/10 text-purple-600',
    details: [
      'Annual agricultural production reports',
      'Crop and livestock census data',
      'Trade and export statistics',
      'Sector performance indicators',
      'Open data downloads',
    ],
  },
  {
    id: 'projects',
    label: 'MAAIF Development Projects',
    description: 'Explore ongoing agricultural development projects implemented by the Ministry in cooperation with partner organisations.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'bg-orange-50 border-orange-100',
    iconColor: 'bg-accent/10 text-accent',
    details: [
      '40+ active development projects',
      'UGX 2.4 trillion investment value',
      'Coverage across 112 districts',
      'Partnership with international donors',
      'Agriculture Sector Development Strategy',
    ],
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const selectedService = serviceDetails?.find((s) => s?.id === activeService);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      {/* Page Hero */}
      <section className="pt-36 pb-16 px-6 lg:px-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-[1400px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Digital Services
          </span>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight mb-4">
            Ministry Services
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Select a service below to learn more and submit a citizen inquiry directly to the relevant MAAIF department.
          </p>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-12 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceDetails?.map((service) => (
              <button
                key={service?.id}
                onClick={() => setActiveService(activeService === service?.id ? null : service?.id)}
                className={`text-left rounded-3xl border p-7 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 ${service?.color} ${
                  activeService === service?.id ? 'ring-2 ring-primary shadow-lg' : ''
                }`}
                aria-expanded={activeService === service?.id}
                aria-label={`Select ${service?.label} service`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${service?.iconColor}`}>
                    {service?.icon}
                  </div>
                  <h2 className="font-semibold text-foreground text-lg mb-2 leading-tight">{service?.label}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service?.description}</p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    {activeService === service?.id ? 'Selected ✓' : 'View Details'}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      activeService === service?.id ? 'bg-primary text-white' : 'bg-foreground/8'
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${activeService === service?.id ? 'rotate-90 text-white' : 'text-muted-foreground'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Service Detail + Typeform */}
      {selectedService && (
        <section className="py-12 px-6 lg:px-16 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Service Detail Panel */}
              <div className={`rounded-3xl border p-8 ${selectedService?.color}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${selectedService?.iconColor}`}>
                  {selectedService?.icon}
                </div>
                <h2 className="font-serif-display text-3xl font-medium text-foreground mb-3">
                  {selectedService?.label}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{selectedService?.description}</p>
                <ul className="space-y-3">
                  {selectedService?.details?.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-2xl bg-white/60 border border-white/80">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Need help?</span> Fill in the inquiry form to the right and a MAAIF representative will respond within 3–5 working days.
                  </p>
                </div>
              </div>

              {/* Typeform Embed */}
              <TypeformInquiry serviceLabel={selectedService?.label} />
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
