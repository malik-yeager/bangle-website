const items = [
  { image: '/hero-1.png' },
  { image: '/hero-2.png' },
  { image: '/hero-1.png' },
  { image: '/hero-2.png' },
  { image: '/hero-2.png' },
  { image: '/hero-1.png' },
  { image: '/hero-2.png' },
  { image: '/hero-1.png' },
]

export default function Gallery() {
  return (
    <section className="bg-cream p-[3rem_1.5rem] lg:p-[5rem]" id="gallery">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-[2rem] gap-[1rem] lg:gap-0">
        <div>
          <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark flex items-center gap-[0.75rem] mb-[0.5rem] before:content-[''] before:inline-block before:w-[32px] before:h-[1px] before:bg-gold">Instagram</div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-ink">From Our <em className="italic text-rose">Studio</em></h2>
        </div>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[0.5rem] text-[0.85rem] font-medium border-b border-rose pb-[2px] text-rose">
          @belanche.bangles →
        </a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[0.75rem]">
        {items.map((item, i) => (
          <div key={i} className="aspect-square rounded-[8px] overflow-hidden relative cursor-pointer group">
            <img src={item.image} alt={`Gallery item ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
        ))}
      </div>
    </section>
  )
}
