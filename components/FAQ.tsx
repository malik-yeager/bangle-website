'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How long does a custom order take?',
    a: 'Custom orders typically take 5–10 working days depending on complexity and quantity. Bulk bridal orders may need 2–3 weeks. We\'ll confirm the timeline when you place the order.',
  },
  {
    q: 'Do you ship outside Bengaluru?',
    a: 'Yes! We ship PAN India through reliable courier services. Shipping is free on orders above ₹800. International shipping is available on request — contact us for rates.',
  },
  {
    q: 'How do I measure my wrist size?',
    a: 'Use a measuring tape or a strip of paper to measure around the widest part of your hand (with fingers together). Standard sizes are 2.2", 2.4", 2.6", and 2.8". We\'ll guide you on WhatsApp too!',
  },
  {
    q: 'Can I request a specific design I saw elsewhere?',
    a: 'Absolutely! Share a reference image via WhatsApp and we\'ll recreate it with our thread work. We respect original designs and never copy exact patterns from other artisans.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash on delivery for local orders. A 50% advance is required for custom orders above ₹1,000.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white p-[3rem_1.5rem] lg:p-[5rem]" id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[5rem]">
        <div>
          <div className="text-[0.72rem] tracking-[0.2em] uppercase text-gold-dark flex items-center gap-[0.75rem] mb-[0.75rem] before:content-[''] before:inline-block before:w-[32px] before:h-[1px] before:bg-gold">Questions</div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.2] text-ink mb-[1rem]">Frequently<br /><em className="italic text-rose">Asked</em></h2>
          <div className="w-[48px] h-[2px] bg-rose my-[1rem] mb-[2rem]" />
          <p className="text-[0.87rem] text-muted leading-[1.7] font-light mb-[1.5rem]">
            Still have questions? Drop a message on WhatsApp — we respond within hours.
          </p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-block bg-rose text-white py-[0.85rem] px-[2rem] text-[0.78rem] tracking-[0.12em] uppercase rounded-[2px] transition-colors duration-200 hover:bg-[#9a3338]">
            Chat on WhatsApp
          </a>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className={`border-b border-black/8 ${open === i ? 'group is-open' : 'group'}`}>
              <button className="w-full py-[1.2rem] flex justify-between items-center font-normal text-[0.95rem] text-ink bg-none border-none text-left font-sans cursor-pointer transition-colors duration-200 hover:text-rose" onClick={() => setOpen(open === i ? null : i)}>
                {faq.q}
                <span className={`text-[1.2rem] text-rose shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && <div className="pb-[1.2rem] text-[0.87rem] text-muted leading-[1.7] font-light">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
