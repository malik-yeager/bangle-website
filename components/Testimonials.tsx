const reviews = [
  {
    text: 'The bridal set she made for my mehendi was absolutely gorgeous. Every guest asked where I got them. The colors matched my lehenga perfectly!',
    name: 'Ananya Nair',
    loc: 'Bengaluru · Bridal Order',
    initials: 'AN',
    color: 'bg-rose',
  },
  {
    text: 'Ordered 30 bangles for my sister\'s wedding — received exactly what I requested. Beautifully crafted, packed so carefully. Will order again for sure.',
    name: 'Meera Rajan',
    loc: 'Chennai · Bulk Order',
    initials: 'MR',
    color: 'bg-gold-dark',
  },
  {
    text: 'Quick delivery, beautiful packaging, and the quality exceeded my expectations. The stone work bangles are my favorite purchase this year!',
    name: 'Sneha Pillai',
    loc: 'Kochi · Stone Work',
    initials: 'SP',
    color: 'bg-[#5a8f3c]',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white p-[3rem_1.5rem] lg:p-[5rem]" id="reviews">
      <div className="text-center mb-[3rem]">
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark flex items-center justify-center gap-[0.75rem] mb-[0.75rem]">
          <span className="inline-block w-[32px] h-[1px] bg-gold" />
          Happy Customers
          <span className="inline-block w-[32px] h-[1px] bg-gold" />
        </div>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-ink">What Our <em className="italic text-rose">Brides Say</em></h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.5rem]">
        {reviews.map((r) => (
          <div key={r.name} className="bg-cream rounded-[12px] p-[1.8rem] relative">
            <div className="absolute top-[1.5rem] right-[1.5rem] font-serif text-[3rem] text-rose-light leading-none">&ldquo;</div>
            <div className="text-gold text-[1rem] tracking-[2px] mb-[1rem]">★★★★★</div>
            <p className="font-serif italic text-[1.05rem] leading-[1.65] text-ink mb-[1.5rem]">{r.text}</p>
            <div className="flex items-center gap-[0.75rem]">
              <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center text-[0.8rem] font-medium text-white shrink-0 ${r.color}`}>{r.initials}</div>
              <div>
                <div className="text-[0.85rem] font-medium text-ink">{r.name}</div>
                <div className="text-[0.75rem] text-muted">{r.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
