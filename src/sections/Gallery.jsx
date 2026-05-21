import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { GALLERY } from '../constants/site'
import { waLink } from '../utils/links'
import ArrowIcon from '../components/ArrowIcon'

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-36 bg-ink-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex items-center justify-center gap-6 mb-4"
        >
          <button className="text-cream/40 hover:text-cream transition" aria-label="prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="h-display text-5xl md:text-7xl text-cream text-center">The Gallery</h2>
          <button className="text-cream/40 hover:text-cream transition" aria-label="next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          custom={1}
          className="text-cream/50 text-center max-w-xl mx-auto text-[14px] mb-16"
        >
          A window into our most loved transformations — bridal, glam, hair, skin and nails.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
        >
          {GALLERY.map((g, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i % 4}
              className={`img-zoom rounded-2xl ${g.class}`}
            >
              <img src={g.src} alt={g.alt} className="w-full h-full object-cover" />
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
          <a href={waLink('Hi, I would like to see more of your work.')} target="_blank" rel="noreferrer" className="pill text-cream">
            View More on Instagram <ArrowIcon />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
