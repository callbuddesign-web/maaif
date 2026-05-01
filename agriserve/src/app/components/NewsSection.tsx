'use client';
import React, { useEffect, useRef } from 'react';

const newsItems = [
{
  id: 1,
  category: 'Health Advisory',
  title: 'COVID-19 Prevention Advisory for Livestock Sub-Sector',
  excerpt: 'All livestock related services and activities shall continue to be rendered with the exception of those that require gatherings of more than 10 people.',
  date: 'March 15, 2024',
  image: 'https://www.agriculture.go.ug/wp-content/uploads/2020/11/ghfk.jpg',
  imageAlt: 'Ugandan livestock farmers working in fields during COVID-19 advisory period, open pasture, warm daylight',
  readTime: '3 min read',
  featured: true
},
{
  id: 2,
  category: 'Ministry News',
  title: 'Hon. Tumwebaze Promises Hands-On Approach in Agriculture Sector',
  excerpt: 'The new Minister of Agriculture promises to spend more time with farmers in the fields than in conferences, directly engaging on ministry policies.',
  date: 'June 22, 2023',
  image: 'https://www.agriculture.go.ug/wp-content/uploads/2021/06/FROST-20-of-149.jpg',
  imageAlt: 'Agriculture minister meeting with farmers in rural Uganda, overcast sky, green agricultural landscape',
  readTime: '5 min read',
  featured: false
},
{
  id: 3,
  category: 'Sector Report',
  title: 'Uganda National Household Survey: 65% Workforce in Agriculture',
  excerpt: 'Agriculture remains the major source of livelihood in Uganda. The UNHS 2016/17 confirms the bigger proportion of the working population is in agriculture, forestry and fishing.',
  date: 'January 10, 2024',
  image: 'https://www.agriculture.go.ug/wp-content/uploads/2020/11/fgh.jpg',
  imageAlt: 'Wide view of Ugandan agricultural landscape with diverse farming activities, golden hour light, deep shadows',
  readTime: '7 min read',
  featured: false
},
{
  id: 4,
  category: 'Projects',
  title: 'MAAIF Launches New Agricultural Development Projects Nationwide',
  excerpt: 'The Ministry, in cooperation with partner organisations, is implementing Agricultural Development Projects under the Agriculture Sector Development Strategy and Investment Plan.',
  date: 'February 28, 2024',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/05/projectsg-1.jpg',
  imageAlt: 'Agricultural development project site in Uganda with workers and equipment, dark earth tones, industrial setting',
  readTime: '4 min read',
  featured: false
}];


export default function NewsSection() {
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

  const featured = newsItems[0];
  const rest = newsItems.slice(1);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-xs font-semibold text-primary tracking-widest uppercase mb-5">
              News & Media
            </span>
            <h2 className="font-serif-display text-4xl md:text-5xl font-medium text-foreground leading-tight tracking-tight">
              Latest Updates
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-primary border-b-2 border-primary/30 pb-0.5 hover:border-primary transition-colors self-start md:self-auto">

            View all news
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* News grid: Featured large + 3 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Featured — spans 2 cols */}
          <div className="col-span-1 lg:col-span-2 reveal reveal-delay-100">
            <a
              href="#"
              className="group block relative rounded-3xl overflow-hidden cursor-pointer h-full min-h-[420px]">

              <div className="absolute inset-0">
                <img
                  src={featured?.image}
                  alt={featured?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>
              <div className="relative z-10 p-7 flex flex-col h-full justify-between min-h-[420px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-accent/80 text-white">
                    {featured?.category}
                  </span>
                  <span className="text-white/50 text-xs">{featured?.readTime}</span>
                </div>
                <div>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-medium text-white mb-3 leading-tight">
                    {featured?.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-sm">{featured?.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">{featured?.date}</span>
                    <span className="flex items-center gap-1.5 text-white text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Remaining 3 news cards */}
          {rest?.map((item, i) =>
          <div
            key={item?.id}
            className={`col-span-1 reveal ${i === 0 ? 'reveal-delay-200' : i === 1 ? 'reveal-delay-300' : 'reveal-delay-200'}`}>

              <a
              href="#"
              className="group flex flex-col rounded-3xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 cursor-pointer h-full">

                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                  src={item?.image}
                  alt={item?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" />

                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/80 text-white">
                      {item?.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                      {item?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{item?.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-muted text-xs">{item?.date}</span>
                    <span className="text-primary text-xs font-semibold">{item?.readTime}</span>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>);

}