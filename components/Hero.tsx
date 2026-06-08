export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-[72px] overflow-hidden" id="home">
      <div className="flex flex-col justify-center p-[3rem_2rem] lg:p-[5rem_4rem_5rem_5rem]">
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark mb-[1.5rem] flex items-center gap-[0.75rem] before:content-[''] before:inline-block before:w-[32px] before:h-[1px] before:bg-gold">Est. 2025 · Handcrafted</div>
        <h1 className="font-serif text-[clamp(2.8rem,5vw,4.5rem)] leading-[1.1] font-light text-ink mb-[1rem]">
          Bangles Crafted<br />with <em className="italic text-rose">Thread &amp; Love</em>
        </h1>
        <p className="text-[1rem] text-muted leading-[1.7] max-w-[380px] mb-[2.5rem] font-light">
          Customized designs for weddings, festivals, parties, and every cherished
          occasion — each piece a wearable story.
        </p>
        <div className="flex gap-[1rem] flex-wrap">
          <a href="#collections" className="bg-rose text-white py-[0.85rem] px-[2rem] text-[0.78rem] tracking-[0.12em] uppercase rounded-[2px] inline-block transition-colors duration-200 hover:bg-[#9a3338]">Shop Collection</a>
          <a href="#custom" className="bg-transparent text-ink border border-ink py-[0.85rem] px-[2rem] text-[0.78rem] tracking-[0.12em] uppercase rounded-[2px] inline-block transition-all duration-200 hover:bg-ink hover:text-white">Custom Order</a>
        </div>
        <div className="flex gap-[2rem] mt-[3rem] pt-[2rem] border-t border-black/8">
          <div className="text-center">
            <span className="font-serif text-[1.6rem] text-rose block">60+</span>
            <span className="text-[0.7rem] tracking-[0.1em] uppercase text-muted">Orders Completed</span>
          </div>
          <div className="text-center">
            <span className="font-serif text-[1.6rem] text-rose block">⭐ 4.9</span>
            <span className="text-[0.7rem] tracking-[0.1em] uppercase text-muted">Customer Rating</span>
          </div>
          <div className="text-center">
            <span className="font-serif text-[1.6rem] text-rose block">50+</span>
            <span className="text-[0.7rem] tracking-[0.1em] uppercase text-muted">Design Patterns</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#f9eaeb] via-[#f5e6d3] to-[#f0dcc8] flex items-center justify-center min-h-[400px] p-[2rem] lg:p-[4rem]">
        <div className="relative w-full max-w-[500px] aspect-[4/5] grid grid-cols-2 grid-rows-2 gap-[1rem]">
          {/* Top Left */}
          <div className="relative rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] translate-y-[1rem] transition-transform duration-500 hover:-translate-y-1">
            <img src="/hero-1.png" alt="Bridal Bangles" className="w-full h-full object-cover" />
          </div>

          {/* Right - Tall Image */}
          <div className="relative row-span-2 rounded-[16px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-2">
            <img src="/hero-2.png" alt="Silk Thread Bangles" className="w-full h-full object-cover" />
          </div>

          {/* Bottom Left */}
          <div className="relative rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] translate-y-[1rem] transition-transform duration-500 hover:-translate-y-1">
            <img src="/hero-1.png" alt="Detailed Threadwork" className="w-full h-full object-cover" style={{ objectPosition: 'left center' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
