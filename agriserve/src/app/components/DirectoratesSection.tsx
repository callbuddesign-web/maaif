'use client';
import React, { useEffect, useRef } from 'react';


// BENTO GRID AUDIT — Directorates Grid (8 cards)
// Array: [DAR, DCR, DFR, DAES, FA, DAIMWAP, APD, HRM]
// Row 1: [col-1: DAR cs-1] [col-2: DCR cs-1] [col-3: DFR cs-1]
// Row 2: [col-1: DAES cs-2] [col-3: FA cs-1]
// Row 3: [col-1: DAIMWAP cs-1] [col-2: APD cs-1] [col-3: HRM cs-1]
// Placed 8/8 ✓

const directorates = [
{
  id: 'dar',
  name: 'Directorate of Animal Resources',
  abbr: 'DAR',
  objective: 'To support sustainable animal disease and vector control, market oriented animal production, food quality and safety; for improved food security and household income.',
  image: 'https://www.agriculture.go.ug/wp-content/uploads/2020/04/Agriculture-Uganda.jpg',
  imageAlt: 'Ugandan cattle herders managing livestock in open savanna, warm afternoon light, dust rising from herd',
  color: 'bg-amber-50',
  colSpan: 'col-span-1',
  type: 'directorate'
},
{
  id: 'dcr',
  name: 'Directorate of Crop Resources',
  abbr: 'DCR',
  objective: 'To support sustainable, market oriented crop production, pest and disease control, quality and safety of plants and plant products; for improved food security and household income.',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/04/crop-resources.jpg',
  imageAlt: 'Rows of healthy crops growing in a well-maintained Ugandan farm, bright overcast sky, rich green foliage',
  color: 'bg-green-50',
  colSpan: 'col-span-1',
  type: 'directorate'
},
{
  id: 'dfr',
  name: 'Directorate of Fisheries Resources',
  abbr: 'DFR',
  objective: 'To support sustainable, market oriented fish production, management, development, control quality and safety of fisheries products; for improved food security and household income.',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/05/fisheries.jpg',
  imageAlt: 'Ugandan fishermen with nets on Lake Victoria at dawn, misty blue water, wooden boats, dim atmospheric morning light',
  color: 'bg-sky-50',
  colSpan: 'col-span-1',
  type: 'directorate'
},
{
  id: 'daes',
  name: 'Directorate of Agricultural Extension Services',
  abbr: 'DAES',
  objective: 'To promote adoption of appropriate information, knowledge, and technological innovations for commercialization of agriculture.',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/05/extension-services.jpg',
  imageAlt: 'Agricultural extension officer demonstrating modern farming techniques to a group of Ugandan farmers in a field, bright daylight',
  color: 'bg-primary/5',
  colSpan: 'md:col-span-2',
  type: 'directorate',
  large: true
},
{
  id: 'fa',
  name: 'Finance & Administration',
  abbr: 'F&A',
  objective: 'To provide financial, administrative, human resource management, development, information and communication systems and services to enable achievement of sector objectives.',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/05/FA1.jpg',
  imageAlt: 'MAAIF administrative office interior, staff working at desks, bright indoor lighting, professional government setting',
  color: 'bg-stone-50',
  colSpan: 'col-span-1',
  type: 'department'
},
{
  id: 'daimwap',
  name: 'Dept. of Agricultural Infrastructure, Mechanisation & Water',
  abbr: 'DAIMWAP',
  objective: 'To support the development of agricultural infrastructure, water for agricultural production and mechanisation to enable achievement of sector objectives.',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/05/DAIMP.jpg',
  imageAlt: 'Agricultural irrigation infrastructure and machinery in Uganda, open fields, overcast sky, heavy equipment visible',
  color: 'bg-slate-50',
  colSpan: 'col-span-1',
  type: 'department'
},
{
  id: 'apd',
  name: 'Dept. of Agricultural Planning & Development',
  abbr: 'APD',
  objective: 'Provide technical support to policy formulation, review and planning processes, design and implementation of programs and projects to enable achievement of sector objectives.',
  image: 'https://www.agriculture.go.ug/wp-content/uploads/2021/10/MAF_6468-150x150.jpg',
  imageAlt: 'MAAIF planning team reviewing agricultural sector development documents, conference room, bright professional lighting',
  color: 'bg-blue-50',
  colSpan: 'col-span-1',
  type: 'department'
},
{
  id: 'hrm',
  name: 'Dept. of Human Resource Management',
  abbr: 'HRM',
  objective: 'To initiate and implement human resource policies, plans, systems and procedures for attraction of the requisite human resource that works towards achieving the Ministry objective.',
  image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
  imageAlt: 'Professional team meeting in a bright Ugandan government office, collaborative atmosphere, diverse group of officials',
  color: 'bg-rose-50',
  colSpan: 'col-span-1',
  type: 'department'
}];


const agencies = [
{
  id: 'naro',
  name: 'National Agricultural Research Organisation',
  abbr: 'NARO',
  mandate: 'To coordinate, oversee and guide agricultural research in Uganda.',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/04/naro.jpg',
  imageAlt: 'NARO research scientists examining crop samples in a laboratory, bright scientific environment, green plants under study'
},
{
  id: 'nagrc',
  name: 'National Animal Genetic Resources Center & Databank',
  abbr: 'NAGRC&DB',
  mandate: 'To play a leading role in the commercialization of animal breeding activities in Uganda and carry out development activities that enhance animal genetic improvement and productivity.',
  image: 'http://agriculture.go.ug/wp-content/uploads/2019/04/NAGRCDB.jpg',
  imageAlt: 'NAGRC animal breeding facility with healthy livestock in clean enclosures, Uganda, warm natural lighting'
},
{ id: 'coctu', name: 'Co-operative College of Uganda', abbr: 'COCTU', mandate: 'Cooperative education and training for Uganda\'s agricultural sector.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80', imageAlt: 'Cooperative college campus in Uganda with students, bright outdoor campus, lush greenery' },
{ id: 'cdo', name: 'Cotton Development Organisation', abbr: 'CDO', mandate: 'Development and promotion of cotton growing in Uganda.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', imageAlt: 'Cotton fields in Uganda ready for harvest, white cotton bolls against green leaves, bright sunny day' },
{ id: 'dda', name: 'Dairy Development Authority', abbr: 'DDA', mandate: 'Regulate and promote the dairy industry in Uganda.', image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400&q=80', imageAlt: 'Modern dairy farm in Uganda with healthy cows, clean facility, bright indoor lighting' },
{ id: 'naads', name: 'National Agricultural Advisory Services', abbr: 'NAADS', mandate: 'Delivery of agricultural advisory services to farmers in Uganda.', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80', imageAlt: 'Agricultural advisor meeting with Ugandan farmers in a field, bright daylight, green crops' },
{ id: 'ucda', name: 'Uganda Coffee Development Authority', abbr: 'UCDA', mandate: 'Oversee the development of the coffee industry in Uganda.', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80', imageAlt: 'Ugandan coffee plantation with ripe red coffee cherries on branches, lush green foliage, soft natural light' }];


export default function DirectoratesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-20 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            Structure
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-tight mb-4">
            Directorates &{' '}
            <span className="text-primary">Departments</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Four directorates and four departments delivering Uganda's agricultural mandate across the nation.
          </p>
        </div>

        {/* Directorates Bento Grid */}
        {/* Row 1: DAR cs-1 | DCR cs-1 | DFR cs-1 */}
        {/* Row 2: DAES cs-2 | FA cs-1 */}
        {/* Row 3: DAIMWAP cs-1 | APD cs-1 | HRM cs-1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">

          {/* DAR — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-100">
            <DirectorateCard item={directorates[0]} />
          </div>

          {/* DCR — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-200">
            <DirectorateCard item={directorates[1]} />
          </div>

          {/* DFR — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-300">
            <DirectorateCard item={directorates[2]} />
          </div>

          {/* DAES — md:col-span-2 */}
          <div className="col-span-1 md:col-span-2 reveal reveal-delay-100">
            <DirectorateLargeCard item={directorates[3]} />
          </div>

          {/* FA — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-200">
            <DirectorateCard item={directorates[4]} />
          </div>

          {/* DAIMWAP — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-100">
            <DirectorateCard item={directorates[5]} />
          </div>

          {/* APD — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-200">
            <DirectorateCard item={directorates[6]} />
          </div>

          {/* HRM — col-span-1 */}
          <div className="col-span-1 reveal reveal-delay-300">
            <DirectorateCard item={directorates[7]} />
          </div>

        </div>

        {/* Agencies section */}
        <div className="reveal">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-xs font-semibold text-accent tracking-widest uppercase mb-4">
                Semi-Autonomous Agencies
              </span>
              <h3 className="font-serif-display text-3xl md:text-4xl font-medium text-foreground leading-tight">
                Ministry Agencies
              </h3>
            </div>
            <p className="text-muted-foreground text-base max-w-sm">Seven specialised agencies implementing Uganda's agricultural development agenda.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {agencies.map((agency, i) =>
            <div
              key={agency.id}
              className={`reveal ${i < 3 ? 'reveal-delay-100' : i < 5 ? 'reveal-delay-200' : 'reveal-delay-300'}`}>

                <a
                href="#"
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer h-full">

                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-muted/20">
                    <img
                    src={agency.image}
                    alt={agency.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy" />

                  </div>
                  <span className="font-bold text-primary text-sm mb-1">{agency.abbr}</span>
                  <span className="text-xs text-muted-foreground leading-tight">{agency.name}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function DirectorateCard({ item }: {item: typeof directorates[0];}) {
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-border min-h-[280px] flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-500 h-full">
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 p-5 flex justify-between items-start">
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
        item.type === 'directorate' ? 'bg-primary/80 text-white' : 'bg-accent/80 text-white'}`
        }>
          {item.type === 'directorate' ? 'Directorate' : 'Department'}
        </span>
        <span className="text-white/60 text-xs font-bold">{item.abbr}</span>
      </div>
      <div className="relative z-10 p-5">
        <h3 className="font-semibold text-white text-base mb-2 leading-tight">{item.name}</h3>
        <p className="text-white/65 text-xs leading-relaxed line-clamp-3">{item.objective}</p>
      </div>
    </div>);

}

function DirectorateLargeCard({ item }: {item: typeof directorates[3];}) {
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-border min-h-[280px] flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-500 h-full">
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      </div>
      <div className="relative z-10 p-6 flex justify-between items-start">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/80 text-white">
          Directorate
        </span>
        <span className="text-white/60 text-xs font-bold">{item.abbr}</span>
      </div>
      <div className="relative z-10 p-6">
        <h3 className="font-semibold text-white text-xl mb-3 leading-tight">{item.name}</h3>
        <p className="text-white/70 text-sm leading-relaxed max-w-lg">{item.objective}</p>
      </div>
    </div>);

}