import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { TESTIMONIALS } from '../constants/site'

export default function Testimonials() {
  return (
    <section className="bg-cream text-ink py-24 md:py-32 relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="h-display text-4xl md:text-6xl text-ink"
        >
          What Our Clients Are Saying
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          custom={1}
          className="stars text-xl mt-6"
        >
          ★ ★ ★ ★ ★
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-12 mt-16 text-left md:text-center"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} variants={fadeUp} custom={i}>
              <p className="text-[14px] text-ink/80 leading-relaxed italic mb-6">"{t.quote}"</p>
              <div className="hairline-dark w-12 mx-auto mb-3" />
              <div className="eyebrow text-ink/60">— {t.name}, {t.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
