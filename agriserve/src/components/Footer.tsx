import React from 'react';


// Pattern 2: Stripe Two-Row Compact (government adaptation)
const directorateLinks = [
{ label: 'Directorate of Animal Resources', href: '#' },
{ label: 'Directorate of Crop Resources', href: '#' },
{ label: 'Directorate of Fisheries Resources', href: '#' },
{ label: 'Directorate of Agricultural Extension Services', href: '#' }];


const agencyLinks = [
{ label: 'COCTU', href: '#' },
{ label: 'CDO', href: '#' },
{ label: 'DDA', href: '#' },
{ label: 'NAADS', href: '#' },
{ label: 'NARO', href: '#' },
{ label: 'NAGRC&DB', href: '#' },
{ label: 'UCDA', href: '#' }];


const quickLinks = [
{ label: 'Import & Export', href: '#' },
{ label: 'Guidelines & Services', href: '#' },
{ label: 'Weather Advisory', href: '#' },
{ label: 'Sector Statistics', href: '#' },
{ label: 'MAAIF Projects', href: '#' },
{ label: 'Media', href: '#' }];


export default function Footer() {
  return (
    <footer className="bg-[#111009] text-white border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-14 pb-8">

        {/* Row 1: 4 groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img
                  src="http://agriculture.go.ug/wp-content/uploads/2019/05/header-bg.png"
                  alt="MAAIF Uganda logo"
                  className="w-full h-full object-cover" />

              </div>
              <span className="font-bold text-sm text-white">MAAIF Uganda</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-xs">
              Ministry of Agriculture, Animal Industry and Fisheries.<br />
              P.O Box 102, Entebbe, Uganda.
            </p>
            <div className="flex gap-2">
              {[
              { href: 'https://www.facebook.com/MAAIFUganda/', label: 'Facebook', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
              { href: 'https://twitter.com/MAAIF_Uganda', label: 'Twitter', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
              { href: '#', label: 'LinkedIn', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
              { href: '#', label: 'YouTube', icon: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> }]?.
              map((s) =>
              <a
                key={s?.label}
                href={s?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
                aria-label={`MAAIF ${s?.label}`}>

                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">{s?.icon}</svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              {quickLinks?.map((link) =>
              <li key={link?.label}>
                  <a href={link?.href} className="text-white/60 text-sm hover:text-white transition-colors font-medium">
                    {link?.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Directorates */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Directorates</p>
            <ul className="space-y-2.5">
              {directorateLinks?.map((link) =>
              <li key={link?.label}>
                  <a href={link?.href} className="text-white/60 text-sm hover:text-white transition-colors font-medium leading-tight block">
                    {link?.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Agencies */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Agencies</p>
            <ul className="space-y-2.5">
              {agencyLinks?.map((link) =>
              <li key={link?.label}>
                  <a href={link?.href} className="text-white/60 text-sm hover:text-white transition-colors font-medium">
                    {link?.label}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Row 2: Legal */}
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm font-medium">
            © 2026 Ministry of Agriculture, Animal Industry and Fisheries · National Agricultural Sector Portal
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/35 text-sm hover:text-white/70 transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-white/35 text-sm hover:text-white/70 transition-colors font-medium">Terms of Use</a>
            <a href="mailto:info@agriculture.go.ug" className="text-white/35 text-sm hover:text-white/70 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>);

}