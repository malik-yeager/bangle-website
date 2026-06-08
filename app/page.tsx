import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Collections from '@/components/Collections'
import About from '@/components/About'
import CustomOrder from '@/components/CustomOrder'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <About />
        <CustomOrder />
        <Testimonials />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
