'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-cream/92 backdrop-blur-[12px] border-b border-rose/12">
      <div className="flex items-center justify-between py-[1.2rem] px-[1.5rem] md:px-[3rem]">
        <Link href="/" onClick={closeMenu} className="font-serif text-[1.5rem] font-semibold text-rose tracking-[0.05em] no-underline">Belanche</Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-[2rem]">
          <Link href="/#collections" className="text-[0.78rem] tracking-[0.12em] uppercase text-muted transition-colors duration-200 hover:text-rose">Collections</Link>
          <Link href="/about" className="text-[0.78rem] tracking-[0.12em] uppercase text-muted transition-colors duration-200 hover:text-rose">About Us</Link>
          <Link href="/#custom" className="text-[0.78rem] tracking-[0.12em] uppercase text-muted transition-colors duration-200 hover:text-rose">Custom</Link>
          <Link href="/#gallery" className="text-[0.78rem] tracking-[0.12em] uppercase text-muted transition-colors duration-200 hover:text-rose">Gallery</Link>
          <Link href="#contact" className="text-[0.78rem] tracking-[0.12em] uppercase text-muted transition-colors duration-200 hover:text-rose">Contact</Link>
        </div>

        <div className="hidden md:block">
          <Link href="/#custom" className="bg-rose text-white border-none py-[0.5rem] px-[1.4rem] text-[0.75rem] tracking-[0.1em] uppercase rounded-[2px] transition-colors duration-200 inline-block hover:bg-[#9a3338] no-underline">Order Now</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-rose text-[1.5rem] p-[0.2rem]" aria-label="Toggle Menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-b border-rose/12 py-[1.5rem] px-[1.5rem] flex flex-col gap-[1.5rem] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <Link href="/#collections" onClick={closeMenu} className="text-[0.85rem] tracking-[0.12em] uppercase text-ink font-medium">Collections</Link>
          <Link href="/about" onClick={closeMenu} className="text-[0.85rem] tracking-[0.12em] uppercase text-ink font-medium">About Us</Link>
          <Link href="/#custom" onClick={closeMenu} className="text-[0.85rem] tracking-[0.12em] uppercase text-ink font-medium">Custom Order</Link>
          <Link href="/#gallery" onClick={closeMenu} className="text-[0.85rem] tracking-[0.12em] uppercase text-ink font-medium">Gallery</Link>
          <Link href="#contact" onClick={closeMenu} className="text-[0.85rem] tracking-[0.12em] uppercase text-ink font-medium">Contact</Link>
          <div className="pt-[1rem] border-t border-rose/10">
            <Link href="/#custom" onClick={closeMenu} className="bg-rose text-white text-center py-[0.8rem] text-[0.75rem] tracking-[0.1em] uppercase rounded-[2px] block w-full">Order Now</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
