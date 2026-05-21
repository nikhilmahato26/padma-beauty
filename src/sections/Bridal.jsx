import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { BRIDAL_PACKAGES, BRIDAL_INCLUDES } from '../constants/site'
import SectionEyebrow from '../components/SectionEyebrow'
import TickIcon from '../components/TickIcon'
import ArrowIcon from '../components/ArrowIcon'
import { waLink } from '../utils/links'

export default function Bridal() {
  return (
    <section id="bridal" className="py-24 md:py-36 bg-cream text-ink relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <SectionEyebrow dark>The Bridal Atelier</SectionEyebrow>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="h-display text-5xl md:text-7xl lg:text-[88px] text-ink leading-[0.95]"
            >
              Your Dream<br />
              <span className="italic">Bridal Look</span><br />
              Starts Here.
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            custom={2}
            className="lg:col-span-5"
          >
            <p className="text-ink/70 text-[15px] leading-relaxed mb-6">
              A bridal moment is more than makeup — it is a quiet ritual of beauty. Our bridal artists craft each look with precision: skin prep, signature contour, custom palette, and a finish that photographs as beautifully as it feels.
            </p>
            <div className="space-y-3">
              {BRIDAL_PACKAGES.map((p) => (
                <div key={p.name} className="flex items-center justify-between border-b border-ink/15 pb-3">
                  <span className="text-ink/80">{p.name}</span>
                  <span className="h-display text-xl text-ink">{p.price}</span>
                </div>
              ))}
            </div>
            <a href={waLink('Hi, I would like a bridal makeup enquiry.')} target="_blank" rel="noreferrer" className="pill dark mt-8 inline-flex">
              Bridal Enquiry <ArrowIcon />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-12 gap-4 md:gap-6"
        >
          <motion.div variants={fadeUp} className="md:col-span-5 img-zoom rounded-2xl overflow-hidden">
            <img src="https://images.pexels.com/photos/29133472/pexels-photo-29133472.jpeg" alt="Bridal makeup look" className="w-full h-[420px] md:h-[600px] object-cover" />
          </motion.div>
          <motion.div variants={fadeUp} custom={1} className="md:col-span-4 space-y-4 md:space-y-6">
            <div className="img-zoom rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/14089108/pexels-photo-14089108.jpeg" alt="Bridal jewelry detail" className="w-full h-[200px] md:h-[290px] object-cover" />
            </div>
            <div className="img-zoom rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80" alt="Bridal portrait" className="w-full h-[200px] md:h-[290px] object-cover" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={2} className="md:col-span-3">
            <div className="bg-ink text-cream rounded-2xl p-7 h-full flex flex-col justify-between">
              <div>
                <div className="eyebrow text-gold mb-4">Includes</div>
                <ul className="space-y-3 text-[13.5px] text-cream/80">
                  {BRIDAL_INCLUDES.map((it) => (
                    <li key={it} className="flex gap-2"><span className="mt-1"><TickIcon /></span>{it}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <div className="eyebrow text-cream/40">From</div>
                <div className="h-display text-4xl text-gold">₹18,000</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
