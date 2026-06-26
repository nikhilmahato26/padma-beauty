import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { SERVICE_CATEGORIES, FEATURED_SERVICES } from '../constants/site'
import SectionEyebrow from '../components/SectionEyebrow'
import ArrowIcon from '../components/ArrowIcon'

const TABS = [
  { id: 'all', label: 'All Services' },
  { id: 'facial-threading', label: 'Facial & Threading' },
  { id: 'waxing', label: 'Waxing' },
  { id: 'hair-makeup', label: 'Hair & Makeup' },
  { id: 'nails', label: 'Manicure & Pedicure' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredCategories = SERVICE_CATEGORIES.filter((c) => {
    if (activeTab === 'all') return true
    if (activeTab === 'facial-threading') return c.title === 'Threading' || c.title === 'Facial'
    if (activeTab === 'waxing') return c.title.includes('Wax')
    if (activeTab === 'hair-makeup') return c.title === 'Hair Cute' || c.title === 'Make Up'
    if (activeTab === 'nails') return c.title === 'Manicure' || c.title === 'Pedicure'
    return true
  })

  return (
    <section id="services" className="py-24 md:py-36 bg-ink-deep relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="relative mb-16 md:mb-24">
          {/* Floating "Starts At" badge like reference */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="hidden md:flex absolute -top-6 right-0"
          >
            <div className="badge-circle">
              <div>
                <div className="eyebrow text-ink/60 text-[10px] mb-1">Starts At</div>
                <div className="h-display text-3xl font-semibold">₹50</div>
              </div>
            </div>
          </motion.div>

          <SectionEyebrow>Our Services</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="h-display text-5xl md:text-7xl text-cream max-w-2xl"
          >
            Services.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            custom={1}
            className="text-cream/60 max-w-xl mt-6 text-[15px] leading-relaxed"
          >
            Padma Makeover offers a curated selection of premium beauty services — personalised skincare, luxurious facials, expert makeup artistry, signature hair work, and more.
          </motion.p>
        </div>

        {/* Featured grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16"
        >
          {FEATURED_SERVICES.map((s) => (
            <motion.div key={s.title} variants={fadeUp} className="service-card">
              <div className="img-zoom rounded-2xl aspect-[4/5] mb-5">
                <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-end justify-between">
                <h3 className="h-display text-2xl text-cream">{s.title}</h3>
                <span className="eyebrow text-cream/40">{s.n}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-3 mb-16 border-b border-cream/5 pb-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-[11px] uppercase tracking-wider eyebrow transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gold text-ink font-semibold shadow-lg shadow-gold/10 scale-105'
                  : 'border border-cream/10 text-cream/60 hover:border-gold/30 hover:text-cream hover:bg-cream/[0.02] bg-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category cards */}
        <motion.div
          layout
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((c) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={c.title}
                className={`rounded-2xl p-7 transition-all duration-500 ${
                  c.featured
                    ? 'border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent shadow-xl shadow-gold/[0.02]'
                    : 'border border-cream/10 hover:border-cream/20 bg-cream/[0.01] hover:bg-cream/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${c.featured ? 'bg-gold text-ink' : 'border border-gold/40 text-gold'}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div className={`eyebrow ${c.featured ? 'text-gold' : 'text-cream/40'}`}>{c.cat}</div>
                </div>
                <h3 className="h-display text-3xl text-cream mb-6 tracking-wide">{c.title === 'Hair Cute' ? 'Hair Care & Cut' : c.title}</h3>
                <ul className="space-y-4 text-[13.5px]">
                  {c.items.map((item, i) => {
                    const name = item.name
                    const price = item.price
                    const isStar = item.star
                    return (
                      <li
                        key={name}
                        className="flex items-center justify-between gap-4 pb-1 group"
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          {isStar && <span className="text-gold text-xs">★</span>}
                          <span className={`truncate ${isStar ? 'text-gold font-medium' : c.featured ? 'text-cream' : 'text-cream/90'} group-hover:text-cream transition-colors duration-200`}>
                            {name}
                          </span>
                        </div>
                        {/* Dot leaders */}
                        <div className="flex-grow border-b border-dotted border-cream/15 group-hover:border-cream/30 self-end mb-1 mx-1 transition-colors duration-200"></div>
                        <span className="text-gold font-medium text-[14px] shrink-0 group-hover:scale-105 transition-transform duration-200">
                          ₹{price}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <a href="#book" className="pill text-cream">Book Any Service <ArrowIcon /></a>
        </motion.div>
      </div>
    </section>
  )
}
