import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { ABOUT_HIGHLIGHTS } from '../constants/site'
import SectionEyebrow from '../components/SectionEyebrow'
import ArrowIcon from '../components/ArrowIcon'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <SectionEyebrow>About The Studio</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="h-display text-5xl md:text-6xl lg:text-7xl text-cream mb-8"
          >
            Welcome to<br />
            <span className="italic text-gold-soft">Padma.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            custom={1}
            className="text-cream/70 text-[15px] leading-relaxed mb-6"
          >
            At Padma Makeover Beauty Parlour, we believe beauty is confidence. We provide premium salon, bridal makeup, skincare, nail, and hair services — tailored to make every client look and feel beautiful.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            custom={2}
            className="text-cream/55 text-[14px] leading-relaxed mb-10"
          >
            Whether it's a bridal makeover, party glam, or a complete beauty transformation, we deliver luxury experiences with the professionalism and care every woman deserves.
          </motion.p>
          <a href="#services" className="text-cream btn-line eyebrow inline-flex items-center gap-3">
            Discover Services <ArrowIcon size={14} />
          </a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6"
        >
          <motion.div variants={fadeUp} className="img-zoom rounded-2xl aspect-[3/4]">
            <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80" alt="Bridal makeup artist at work" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div variants={fadeUp} className="img-zoom rounded-2xl aspect-[3/4] mt-12">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80" alt="Luxury salon interior" className="w-full h-full object-cover" />
          </motion.div>

          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {ABOUT_HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.n}
                variants={fadeUp}
                custom={i % 3}
                className="border border-cream/10 rounded-xl p-5"
              >
                <div className="h-italiana text-gold text-2xl mb-1">{h.n}</div>
                <div className="eyebrow text-cream/70">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
