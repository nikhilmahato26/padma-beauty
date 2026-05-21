import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { SERVICE_CATEGORIES, FEATURED_SERVICES } from '../constants/site'
import SectionEyebrow from '../components/SectionEyebrow'
import ArrowIcon from '../components/ArrowIcon'

export default function Services() {
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
                <div className="h-display text-3xl">₹999</div>
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
            Elegant Salon offers a curated selection of premium beauty services — personalised skincare, luxurious facials, expert makeup artistry, signature hair work, and more.
          </motion.p>
        </div>

        {/* Featured grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6"
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

        {/* Category cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 md:gap-6 mt-16"
        >
          {SERVICE_CATEGORIES.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className={`rounded-2xl p-7 transition-all duration-700 ${
                c.featured
                  ? 'border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent'
                  : 'border border-cream/10 hover:bg-cream/[0.03]'
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
              <h3 className="h-display text-3xl text-cream mb-5">{c.title}</h3>
              <ul className="space-y-3 text-[13.5px]">
                {c.items.map((item, i) => {
                  const name = typeof item === 'string' ? item : item.name
                  const isStar = typeof item === 'object' && item.star
                  return (
                    <li
                      key={name}
                      className={`flex items-center justify-between pb-2 ${i !== c.items.length - 1 ? `border-b ${c.featured ? 'border-gold/20' : 'border-cream/5'}` : ''}`}
                    >
                      <span className={isStar ? 'text-gold' : c.featured ? 'text-cream/75' : 'text-cream/65'}>{name}</span>
                      <span className="text-gold/70">{isStar ? '★' : '→'}</span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mt-14"
        >
          <a href="#book" className="pill text-cream">Book Any Service <ArrowIcon /></a>
        </motion.div>
      </div>
    </section>
  )
}
