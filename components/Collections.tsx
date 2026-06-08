const collections = [
  { name: 'Bridal Bangles', count: '24 designs', image: '/hero-1.png', badge: 'Bestseller' },
  { name: 'Festival Collection', count: '18 designs', image: '/hero-2.png', badge: null },
  { name: 'Silk Thread Bangles', count: '32 designs', image: '/hero-1.png', badge: null },
  { name: 'Stone Work Bangles', count: '15 designs', image: '/hero-2.png', badge: 'New' },
  { name: 'Kids Collection', count: '20 designs', image: '/hero-1.png', badge: null },
  { name: 'Customized Name Bangles', count: 'Unlimited', image: '/hero-2.png', badge: null },
]

export default function Collections() {
  return (
    <section className="p-[3rem_1.5rem] md:p-[5rem] bg-white" id="collections">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-[2.5rem] gap-[1rem] md:gap-0">
        <div>
          <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark flex items-center gap-[0.75rem] mb-[0.5rem] before:content-[''] before:inline-block before:w-[32px] before:h-[1px] before:bg-gold">Our Work</div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] text-ink">Featured <em className="italic text-rose">Collections</em></h2>
        </div>
        <a href="#" className="text-[0.75rem] tracking-[0.1em] uppercase text-rose border-b border-rose pb-[2px]">View All Collections →</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
        {collections.map((c) => (
          <div key={c.name} className="relative aspect-[4/5] overflow-hidden cursor-pointer group shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <img src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

            {c.badge && (
              <span className="absolute top-[1.5rem] left-[1.5rem] bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.65rem] tracking-[0.2em] uppercase py-[0.4rem] px-[1rem] rounded-[2px]">
                {c.badge}
              </span>
            )}

            <div className="absolute bottom-0 left-0 w-full p-[2rem] transform translate-y-[1rem] transition-transform duration-500 group-hover:translate-y-0">
              <div className="text-[0.7rem] text-gold-light tracking-[0.15em] uppercase mb-[0.5rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">{c.count}</div>
              <h3 className="font-serif text-[1.6rem] md:text-[1.8rem] text-white font-light leading-[1.2] mb-[0.5rem]">{c.name}</h3>
              <div className="w-[40px] h-[1px] bg-rose transition-all duration-500 group-hover:w-[80px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
