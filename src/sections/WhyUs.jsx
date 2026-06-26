import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { WHY_US } from '../constants/site'
import SectionEyebrow from '../components/SectionEyebrow'

export default function WhyUs() {
  return (
    <section className="py-24 md:py-36 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <SectionEyebrow>Why Padma</SectionEyebrow>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="h-display text-5xl md:text-7xl text-cream"
            >
              Crafted with<br />
              <span className="italic text-gold-soft">intention,</span><br />
              finished with care.
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            custom={2}
            className="lg:col-span-5 lg:col-start-8"
          >
            <p className="text-cream/65 leading-relaxed text-[15px]">
              Premium products. Sanitised tools. Artists with a decade of stage, editorial and bridal experience — all in one quiet studio in Sakinaka.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {WHY_US.map((w, i) => (
            <motion.div
              key={w.n}
              variants={fadeUp}
              custom={i % 3}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5 }}
              className="group border border-cream/10 rounded-2xl p-8 hover:border-gold/40 transition-colors duration-700"
            >
              <div className="h-italiana text-gold text-3xl mb-6">{w.n}</div>
              <h3 className="h-display text-2xl text-cream mb-3">{w.title}</h3>
              <p className="text-cream/55 text-[13.5px] leading-relaxed">{w.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
