import Link from 'next/link'

export default function About() {
  return (
    <section className="bg-cream grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-[5rem] items-center p-[3rem_1.5rem] md:p-[5rem]" id="about">
      <div className="relative">
        <div className="w-full h-[280px] md:h-[420px] rounded-[8px] overflow-hidden relative">
          <img src="/hero-1.png" alt="Artisan at work" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="absolute bottom-[-1rem] right-[1rem] md:bottom-[-1.5rem] md:right-[-1.5rem] bg-gold-light border border-gold py-[1.5rem] px-[2rem] rounded-[8px] text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <span className="font-serif text-[2rem] text-gold-dark block font-semibold">7+</span>
          <span className="text-[0.72rem] tracking-[0.1em] uppercase text-muted">Years of Craft</span>
        </div>
      </div>

      <div>
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark flex items-center gap-[0.75rem] mb-[0.75rem] before:content-[''] before:inline-block before:w-[32px] before:h-[1px] before:bg-gold">Our Story</div>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] text-ink mb-[1rem]">
          Crafted by <em className="not-italic italic text-rose">Hand,</em><br />Guided by Heart
        </h2>
        <div className="w-[48px] h-[2px] bg-rose my-[1rem] mb-[2rem]" />
        <p className="text-[0.95rem] text-muted font-light leading-[1.7] mb-[1.5rem]">
          What started as a small passion project has grown into a destination for thousands seeking beautifully handcrafted, personalized jewelry. We blend traditional thread-work techniques with modern, elegant aesthetics.
        </p>
        <p className="text-[0.87rem] text-muted leading-[1.7] mb-[2.5rem] font-light">
          Every piece is meticulously woven by hand in our studio, ensuring that it isn't just an accessory, but a wearable piece of art made exclusively for you.
        </p>

        <Link href="/about" className="inline-block bg-transparent text-rose border border-rose py-[0.8rem] px-[2rem] text-[0.75rem] tracking-[0.12em] uppercase rounded-[2px] transition-all duration-300 hover:bg-rose hover:text-white">
          Read Our Full Story →
        </Link>
      </div>
    </section>
  )
}
