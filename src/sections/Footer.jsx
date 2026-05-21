import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { BUSINESS } from '../constants/site'
import { telLink, mailLink, waLink } from '../utils/links'

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-cream pt-24 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <div className="eyebrow text-gold mb-6">{BUSINESS.name}</div>
          <h2 className="h-display text-[14vw] md:text-[10vw] lg:text-[150px] text-cream leading-[0.9]">
            Elegant.
          </h2>
          <p className="text-cream/50 max-w-md mx-auto mt-6 text-[14px]">{BUSINESS.tagline} — Jalandhar, Punjab.</p>
        </div>

        <div className="hairline mb-12" />

        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="eyebrow text-cream/40 mb-5">Studio</div>
            <p className="text-cream/70 text-[13.5px] leading-relaxed">
              {BUSINESS.address.line1},<br />
              {BUSINESS.address.line2},<br />
              {BUSINESS.address.city} — {BUSINESS.address.pincode}
            </p>
          </div>
          <div>
            <div className="eyebrow text-cream/40 mb-5">Quick Links</div>
            <ul className="space-y-2 text-cream/70 text-[13.5px]">
              <li><a href="#about" className="btn-line">About</a></li>
              <li><a href="#services" className="btn-line">Services</a></li>
              <li><a href="#bridal" className="btn-line">Bridal Atelier</a></li>
              <li><a href="#gallery" className="btn-line">Gallery</a></li>
              <li><a href="#book" className="btn-line">Book Appointment</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow text-cream/40 mb-5">Services</div>
            <ul className="space-y-2 text-cream/70 text-[13.5px]">
              <li>Bridal Makeup</li>
              <li>HD / Party Makeup</li>
              <li>Hair Styling</li>
              <li>Skin & Facials</li>
              <li>Nail Extensions</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow text-cream/40 mb-5">Reach Us</div>
            <ul className="space-y-2 text-cream/70 text-[13.5px]">
              <li><a href={telLink()} className="btn-line">{BUSINESS.phone}</a></li>
              <li><a href={mailLink()} className="btn-line">{BUSINESS.email}</a></li>
              <li><a href={waLink()} target="_blank" rel="noreferrer" className="btn-line">WhatsApp</a></li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href={BUSINESS.socials.instagram} className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ink transition" aria-label="Instagram"><FaInstagram size={14} /></a>
              <a href={BUSINESS.socials.facebook} className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ink transition" aria-label="Facebook"><FaFacebookF size={14} /></a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-ink transition" aria-label="WhatsApp"><FaWhatsapp size={14} /></a>
            </div>
          </div>
        </div>

        <div className="hairline mb-6" />
        <div className="flex flex-col md:flex-row justify-between gap-3 text-cream/40 text-[11px] uppercase tracking-wider-2">
          <div>© 2026 {BUSINESS.name}. All rights reserved.</div>
          <div>Designed with care · Jalandhar, Punjab</div>
        </div>
      </div>
    </footer>
  )
}
