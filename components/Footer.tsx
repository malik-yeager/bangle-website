import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 p-[3rem_1.5rem] lg:p-[4rem_5rem]" id="contact">
      <div className="flex flex-col lg:flex-row gap-[3rem] lg:gap-[5rem] mb-[3rem]">
        <div className="lg:w-[35%]">
          <div className="font-serif text-[1.6rem] text-white mb-[0.75rem]">Belanche</div>
          <p className="text-[0.83rem] leading-[1.7] text-white/50 font-light mb-[1.5rem] pr-[2rem]">
            Every bangle tells a story. Handcrafted with love in Bengaluru, shipped across India.
          </p>
          <div className="flex gap-[0.75rem]">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full border border-white/20 flex items-center justify-center text-white/60 text-[1rem] transition-all duration-200 hover:border-rose hover:text-rose"><FaWhatsapp /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full border border-white/20 flex items-center justify-center text-white/60 text-[1rem] transition-all duration-200 hover:border-rose hover:text-rose"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full border border-white/20 flex items-center justify-center text-white/60 text-[1rem] transition-all duration-200 hover:border-rose hover:text-rose"><FaFacebookF /></a>
            <a href="mailto:hello@belanche.in" className="w-[36px] h-[36px] rounded-full border border-white/20 flex items-center justify-center text-white/60 text-[1rem] transition-all duration-200 hover:border-rose hover:text-rose"><FaEnvelope /></a>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-[2rem]">
          <div className="flex flex-col">
            <h4 className="text-[0.72rem] tracking-[0.15em] uppercase text-white/40 mb-[1rem]">Collections</h4>
            <a href="#collections" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">Bridal Bangles</a>
            <a href="#collections" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">Festival Collection</a>
            <a href="#collections" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">Silk Thread</a>
            <a href="#collections" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">Stone Work</a>
            <a href="#collections" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">Kids Collection</a>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[0.72rem] tracking-[0.15em] uppercase text-white/40 mb-[1rem]">Quick Links</h4>
            <a href="#custom" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">Custom Order</a>
            <a href="#about" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">About the Artisan</a>
            <a href="#gallery" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">Gallery</a>
            <a href="#reviews" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">Reviews</a>
            <a href="#faq" className="block text-[0.83rem] text-white/60 mb-[0.6rem] transition-colors duration-200 hover:text-white">FAQ</a>
          </div>

          <div className="flex flex-col col-span-2 sm:col-span-1 mt-[1rem] sm:mt-0">
            <h4 className="text-[0.72rem] tracking-[0.15em] uppercase text-white/40 mb-[1rem]">Contact Us</h4>
            <div className="flex items-center gap-[0.6rem] text-[0.83rem] mb-[0.6rem] text-white/60"><FaPhoneAlt className="text-white/40 shrink-0" /> +91 98765 43210</div>
            <div className="flex items-center gap-[0.6rem] text-[0.83rem] mb-[0.6rem] text-white/60"><FaEnvelope className="text-white/40 shrink-0" /> contact@belanche.in</div>
            <div className="flex items-center gap-[0.6rem] text-[0.83rem] mb-[0.6rem] text-white/60"><FaMapMarkerAlt className="text-white/40 shrink-0" /> Tenali, Andhra Pradesh</div>
            <div className="flex items-center gap-[0.6rem] text-[0.83rem] mb-[0.6rem] text-white/60"><FaClock className="text-white/40 shrink-0" /> Mon–Sat, 9am–7pm</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-[1.5rem] flex flex-col sm:flex-row justify-between items-center text-[0.75rem] text-white/30 gap-[0.5rem] sm:gap-0 sm:text-left text-center">
        <span>© 2025 Belanche. All rights reserved.</span>
      </div>
    </footer>
  )
}
