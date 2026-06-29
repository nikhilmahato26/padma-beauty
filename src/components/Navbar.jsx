import { useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS, BUSINESS } from '../constants/site'
import useScrolled from '../hooks/useScrolled'
import ArrowIcon from './ArrowIcon'

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-ink-deep/85 backdrop-blur-lg' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-cream/40 flex items-center justify-center">
            <span className="h-italiana text-cream text-lg">P</span>
          </div>
          <div className="leading-tight hidden sm:block">
            <div className="h-italiana text-cream text-base tracking-wider">Padma Makeover</div>
            <div className="eyebrow text-cream/60 text-[9px]">Beauty Parlour</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-cream/80 text-[12px] tracking-wider-2 uppercase">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="btn-line hover:text-cream">{l.label}</a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-5">
          <span className="hidden xl:flex items-center gap-2 text-cream/70 text-[11px] tracking-wider-2 uppercase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            Open {BUSINESS.openHours}
          </span>
          <a href="#book" className="pill text-cream inline-flex">
            Book Now <ArrowIcon />
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-cream"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink-deep border-t border-cream/10">
          <nav className="flex flex-col px-6 py-6 gap-5 text-cream/80 text-[12px] tracking-wider-2 uppercase">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-gold">{l.label}</a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="pill gold w-fit">Book Now</a>
            <span className="flex items-center gap-2 text-cream/60 text-[11px] tracking-wider-2 normal-case">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              Open Daily · {BUSINESS.openHours}
            </span>
          </nav>
        </div>
      )}

      <div className="hairline" />
    </motion.header>
  )
}
