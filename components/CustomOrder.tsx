'use client'
import { useState } from 'react'

export default function CustomOrder() {
  const [form, setForm] = useState({ name: '', occasion: '', wrist: '', color: '', notes: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    alert("We'll reach out on WhatsApp within 24 hours!")
  }

  return (
    <section className="bg-rose p-[3rem_1.5rem] lg:p-[5rem]" id="custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] items-center">
        <div>
          <div className="text-[0.72rem] tracking-[0.2em] uppercase text-white/60 flex items-center gap-[0.75rem] mb-[0.75rem] before:content-[''] before:inline-block before:w-[32px] before:h-[1px] before:bg-white/40">Bespoke for You</div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] text-white mb-[1rem]">
            Your <em className="italic">Dream Bangle,</em><br />Made to Order
          </h2>
          <div className="w-[48px] h-[2px] bg-white/40 my-[1rem] mb-[2rem]" />
          <p className="text-[0.95rem] text-white/75 font-light leading-[1.7] mb-[2rem]">
            From bridal sets to birthday gifts — describe what you have in mind and I&apos;ll
            bring it to life. No design is too unique. Minimum order of 2 pieces for custom orders.
          </p>
          <ul className="list-none flex flex-col gap-[0.75rem]">
            <li className="text-[0.85rem] text-white/70 flex items-center gap-[0.75rem] before:content-['✓'] before:text-white/90">Free design consultation</li>
            <li className="text-[0.85rem] text-white/70 flex items-center gap-[0.75rem] before:content-['✓'] before:text-white/90">Exact color matching</li>
            <li className="text-[0.85rem] text-white/70 flex items-center gap-[0.75rem] before:content-['✓'] before:text-white/90">PAN India shipping</li>
            <li className="text-[0.85rem] text-white/70 flex items-center gap-[0.75rem] before:content-['✓'] before:text-white/90">Delivery in 5–10 days</li>
          </ul>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-[12px] p-[2rem] backdrop-blur-[10px]">
          <div className="mb-[1.2rem]">
            <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-white/70 mb-[0.5rem]">Your Name</label>
            <input className="w-full bg-white/15 border border-white/25 rounded-[6px] p-[0.65rem_1rem] text-white font-sans text-[0.9rem] outline-none transition-colors duration-200 placeholder:text-white/40 focus:border-white/60" name="name" placeholder="Priya Sharma" value={form.name} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] mb-[1.2rem]">
            <div className="mb-[1.2rem] md:mb-0">
              <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-white/70 mb-[0.5rem]">Occasion</label>
              <input className="w-full bg-white/15 border border-white/25 rounded-[6px] p-[0.65rem_1rem] text-white font-sans text-[0.9rem] outline-none transition-colors duration-200 placeholder:text-white/40 focus:border-white/60" name="occasion" placeholder="Wedding, Puja..." value={form.occasion} onChange={handleChange} />
            </div>
            <div className="mb-[1.2rem] md:mb-0">
              <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-white/70 mb-[0.5rem]">Wrist Size</label>
              <input className="w-full bg-white/15 border border-white/25 rounded-[6px] p-[0.65rem_1rem] text-white font-sans text-[0.9rem] outline-none transition-colors duration-200 placeholder:text-white/40 focus:border-white/60" name="wrist" placeholder="e.g. 2.4 inches" value={form.wrist} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-[1.2rem]">
            <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-white/70 mb-[0.5rem]">Color Preference</label>
            <input className="w-full bg-white/15 border border-white/25 rounded-[6px] p-[0.65rem_1rem] text-white font-sans text-[0.9rem] outline-none transition-colors duration-200 placeholder:text-white/40 focus:border-white/60" name="color" placeholder="Red & Gold, Pastel Pink..." value={form.color} onChange={handleChange} />
          </div>
          <div className="mb-[1.2rem]">
            <label className="block text-[0.72rem] tracking-[0.1em] uppercase text-white/70 mb-[0.5rem]">Quantity & Special Notes</label>
            <input className="w-full bg-white/15 border border-white/25 rounded-[6px] p-[0.65rem_1rem] text-white font-sans text-[0.9rem] outline-none transition-colors duration-200 placeholder:text-white/40 focus:border-white/60" name="notes" placeholder="12 bangles, matching blouse color..." value={form.notes} onChange={handleChange} />
          </div>
          <button className="w-full bg-white text-rose border-none p-[0.85rem] font-sans text-[0.78rem] tracking-[0.12em] uppercase rounded-[6px] font-medium mt-[0.5rem] cursor-pointer transition-colors duration-200 hover:bg-gold-light" onClick={handleSubmit}>
            Send Custom Order Request →
          </button>
        </div>
      </div>
    </section>
  )
}
