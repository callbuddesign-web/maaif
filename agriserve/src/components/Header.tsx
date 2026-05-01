'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const navItems = [
{ label: 'Home', href: '/' },
{ label: 'Services', href: '/services' },
{
  label: 'The Ministry',
  href: '#',
  children: [
  'Sector Overview', 'Ministry Leadership', 'Ministry Vision and Mission',
  'Mandate and Functions', 'Ministry Objectives',
  'Office of the Cabinet Minister', 'Office of the State Minister for Agriculture',
  'Office of the State Minister for Animal Industry', 'Office of the Permanent Secretary']

},
{
  label: 'About Us',
  href: '#',
  children: [
  'Directorate of Animal Resources', 'Directorate of Crop Resources',
  'Directorate of Fisheries Resources', 'Directorate of Agricultural Extension Services',
  'Human Resource Management', 'Finance and Administration',
  'Agricultural Policy and Planning', 'National Farmers Leadership Center',
  'COCTU', 'CDO', 'DDA', 'NAADS', 'NARO', 'NAGRC&DB', 'UCDA']

},
{ label: 'Sector Statistics', href: '#' },
{ label: 'MAAIF Projects', href: '#' },
{ label: 'Programs', href: '#' },
{ label: 'Media', href: '#' },
{ label: 'Opportunities', href: '#' },
{ label: 'Library', href: '#' },
{
  label: 'Import & Export',
  href: '#',
  children: [
  'General Import and Export Guidelines for Uganda',
  'Plants and Plant Products',
  'Online Certification for Fisheries Exports',
  'Import/Export and Transit of Animals and Animal Products']

},
{
  label: 'Guidelines & Services',
  href: '#',
  children: [
  'Enterprise Guides', 'Chemical/Premises and Fumigant Registers',
  'Application Forms', 'Crop Variety Lists',
  'Pest Control Knowledge', 'MAAIF Agricultural Extension Services',
  'Agricultural Mechanisation Services', 'Rabies Info', 'AMR',
  'Animal Feeds Act 2024', 'Veterinary Practitioners Act 2023', 'Training Manuals & Protocols']

},
{ label: 'Weather Advisory', href: '#' }];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {document.body.style.overflow = '';};
  }, [mobileOpen]);

  const primaryNav = navItems?.slice(0, 6);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-xs font-medium tracking-wide z-50 relative">
        <span className="opacity-90">Ministry of Agriculture, Animal Industry and Fisheries — Republic of Uganda</span>
        <span className="mx-3 opacity-40">|</span>
        <a href="mailto:info@agriculture.go.ug" className="underline underline-offset-2 hover:opacity-80 transition-opacity">info@agriculture.go.ug</a>
        <span className="mx-3 opacity-40">|</span>
        <span className="opacity-90">Tel: 041 4320004</span>
      </div>
      {/* Main header */}
      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'}`
        }>

        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
              <AppImage
                src="http://agriculture.go.ug/wp-content/uploads/2019/05/header-bg.png"
                alt="MAAIF Uganda official ministry logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
                priority />

            </div>
            <div className="hidden sm:block">
              <div className={`font-bold text-sm leading-tight transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}>
                MAAIF Uganda
              </div>
              <div className={`text-xs transition-colors ${scrolled ? 'text-muted' : 'text-white/70'}`}>
                Ministry of Agriculture
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryNav?.map((item) =>
            <div
              key={item?.label}
              className="relative group"
              onMouseEnter={() => item?.children && setActiveDropdown(item?.label)}
              onMouseLeave={() => setActiveDropdown(null)}>

                <Link
                href={item?.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                scrolled ?
                'text-foreground hover:bg-primary/10 hover:text-primary' :
                'text-white/90 hover:text-white hover:bg-white/10'}`
                }>

                  {item?.label}
                  {item?.children &&
                <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                }
                </Link>
                {item?.children && activeDropdown === item?.label &&
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-border py-2 z-50">
                    {item?.children?.map((child) =>
                <a
                  key={child}
                  href="#"
                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/8 hover:text-primary transition-colors">

                        {child}
                      </a>
                )}
                  </div>
              }
              </div>
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Social icons */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://www.facebook.com/MAAIFUganda/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                scrolled ? 'hover:bg-primary/10 text-muted hover:text-primary' : 'text-white/70 hover:text-white hover:bg-white/10'}`
                }
                aria-label="MAAIF Facebook page">

                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/MAAIF_Uganda"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                scrolled ? 'hover:bg-primary/10 text-muted hover:text-primary' : 'text-white/70 hover:text-white hover:bg-white/10'}`
                }
                aria-label="MAAIF Twitter page">

                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Services CTA */}
            <a
              href="#services"
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              scrolled ?
              'bg-primary text-white hover:bg-primary/90' : 'bg-white text-foreground hover:bg-white/90'}`
              }>

              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Services
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all ${
              scrolled ? 'hover:bg-primary/10' : 'hover:bg-white/10'}`
              }
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>

              <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile overlay */}
      {mobileOpen &&
      <div
        className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
        onClick={() => setMobileOpen(false)} />

      }
      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white z-40 shadow-2xl transition-transform duration-300 lg:hidden overflow-y-auto ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'}`
        }>

        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <AppImage
                src="http://agriculture.go.ug/wp-content/uploads/2019/05/header-bg.png"
                alt="MAAIF logo"
                width={36}
                height={36}
                className="object-cover w-full h-full rounded-full" />

            </div>
            <span className="font-bold text-sm text-foreground">MAAIF Uganda</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-muted/20 flex items-center justify-center"
            aria-label="Close navigation menu">

            <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          {navItems?.map((item) =>
          <div key={item?.label}>
              <a
              href={item?.href}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-primary/8 hover:text-primary transition-colors"
              onClick={() => !item?.children && setMobileOpen(false)}>

                {item?.label}
                {item?.children &&
              <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              }
              </a>
            </div>
          )}
        </nav>
        <div className="p-6 border-t border-border">
          <div className="flex gap-3 mb-4">
            <a href="https://www.facebook.com/MAAIFUganda/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="MAAIF Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://twitter.com/MAAIF_Uganda" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" aria-label="MAAIF Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
          <a href="mailto:info@agriculture.go.ug" className="text-sm text-muted hover:text-primary transition-colors">info@agriculture.go.ug</a>
        </div>
      </div>
    </>);

}