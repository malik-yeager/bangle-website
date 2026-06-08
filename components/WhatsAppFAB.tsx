import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[1.5rem] right-[1.5rem] z-[200] bg-[#25D366] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center no-underline shadow-[0_8px_24px_rgba(37,211,102,0.4)] animate-[wa-pulse_2.5s_ease-in-out_infinite] transition-transform hover:scale-110"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp className="text-[2.2rem]" />
    </a>
  )
}
