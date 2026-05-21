import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../utils/motion'
import { telLink } from '../utils/links'

export default function MeetExpert() {
  return (
    <section className="bg-cream text-ink py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-6"
        >
          <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[0.95] mb-3">
            Meet The Expert<br />
            Behind <span className="italic">Elegant.</span>
          </h2>
          <div className="eyebrow text-ink/60 mt-6 mb-6">A Passion For Beauty. A Dedication To You.</div>
          <p className="text-ink/75 text-[14.5px] leading-relaxed mb-4">
            Versha has over a decade of experience in skincare, makeup artistry and bridal beauty — driven by a passion for enhancing natural beauty and creating meaningful client experiences. With a keen eye for detail and a quiet commitment to excellence, she has built a name in Jalandhar for helping clients feel confident and radiant.
          </p>
          <p className="text-ink/65 text-[14px] leading-relaxed mb-8">
            Her journey began with a love for creativity and connection. Today, she combines her expertise with a personalised approach to deliver results that go beyond skin-deep — at Elegant Salon & Makeup Studio.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="#book" className="pill dark">Book a Session</a>
            <a href={telLink()} className="pill text-ink">Call the Studio</a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          custom={2}
          className="lg:col-span-6"
        >
          <div className="img-zoom rounded-2xl aspect-[4/5] max-w-md mx-auto lg:ml-auto">
            <img src="https://images.unsplash.com/photo-1620331317374-7d8d52e6a2a2?auto=format&fit=crop&w=900&q=80" alt="Makeup artist applying brow" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
