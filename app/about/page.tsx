import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import Link from 'next/link'

export const metadata = {
  title: 'Our Story | Belanche',
  description: 'The story behind Belanche, our craftsmanship, and the artisan who makes every piece unique.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Editorial Hero */}
        <section className="relative h-[30vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/hero-1.png" alt="Belanche Craftsmanship" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-ink/40" />
          </div>
          <div className="relative z-10 text-center text-white px-[2rem] max-w-[800px]">
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] mb-[1rem]">
              The Story of <em className="italic text-rose-light">Belanche</em>
            </h1>
            <p className="text-[1.1rem] font-light text-white/90 max-w-[600px] mx-auto">
              Rooted in tradition. Crafted for the modern soul.
            </p>
          </div>
        </section>

        {/* The Beginning */}
        <section className="py-[4rem] px-[1.5rem] md:py-[5rem] bg-cream">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark mb-[1.5rem] flex items-center justify-center gap-[0.75rem] before:content-[''] before:inline-block before:w-[32px] before:h-[1px] before:bg-gold after:content-[''] after:inline-block after:w-[32px] after:h-[1px] after:bg-gold">Our Genesis</div>
            <h2 className="font-serif text-[2.5rem] md:text-[3.2rem] font-light text-ink leading-[1.2] mb-[2rem]">
              Where Passion Meets Thread
            </h2>
            <p className="text-[1.05rem] text-muted leading-[1.8] font-light mb-[1.5rem]">
              Belanche started with a simple belief: that jewelry shouldn't just be worn, it should be felt. Traditional Indian jewelry is beautiful, but often heavy and mass-produced. We wanted to create pieces that carry the grandeur of heritage, but are light enough to dance in.
            </p>
            <p className="text-[1.05rem] text-muted leading-[1.8] font-light">
              Through the meticulous art of silk thread wrapping, combined with premium Kundan stones and modern aesthetics, Belanche was born. What started as a small passion project in Bengaluru has now adorned thousands of brides and women across the globe.
            </p>
          </div>
        </section>

        {/* The Craft (Split Section) */}
        <section className="py-[5rem] px-[1.5rem] lg:px-[5rem] bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
            <div className="order-2 lg:order-1">
              <div className="text-[0.72rem] tracking-[0.2em] uppercase text-rose mb-[1rem]">The Process</div>
              <h3 className="font-serif text-[2.2rem] md:text-[2.8rem] text-ink font-light leading-[1.2] mb-[1.5rem]">
                Artistry in Every Detail
              </h3>
              <p className="text-[1rem] text-muted leading-[1.8] font-light mb-[1.5rem]">
                There are no machines here. Every single bangle is wrapped tightly by hand with premium, color-fast silk thread. It takes immense patience and precision to ensure the thread lays perfectly flat, giving the bangle its signature rich, seamless sheen.
              </p>
              <p className="text-[1rem] text-muted leading-[1.8] font-light mb-[2rem]">
                After the base is prepared, we meticulously hand-place each stone, bead, and pearl. Depending on the complexity, a single bridal set can take anywhere from 3 to 7 days to complete. It's a slow craft, but we believe that anything made with rushed hands cannot hold enduring love.
              </p>
              <Link href="/#collections" className="inline-block bg-transparent text-ink border border-ink py-[0.85rem] px-[2.5rem] text-[0.75rem] tracking-[0.12em] uppercase rounded-[2px] transition-all duration-300 hover:bg-ink hover:text-white">
                Explore The Collections
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square md:aspect-[4/5] rounded-[2px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <img src="/hero-2.png" alt="The Crafting Process" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Quote / Closing */}
        <section className="py-[4rem] px-[1.5rem] md:py-[6rem] bg-gradient-to-br from-[#f9eaeb] to-[#f5e6d3] text-center flex items-center justify-center">
          <div className="max-w-[700px]">
            <div className="text-rose text-[4rem] mb-[1rem] leading-none opacity-40 font-serif">"</div>
            <p className="font-serif text-[1.8rem] md:text-[2.3rem] text-ink font-light leading-[1.4] mb-[2rem]">
              We don't just make bangles. We weave your stories, your joy, and your heritage into pieces you can hold.
            </p>
            <div className="text-[0.85rem] text-rose tracking-[0.15em] uppercase font-medium">— The Artisan</div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
