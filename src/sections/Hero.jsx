import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { TRUST_BADGES } from '../constants/site'
import { telLink } from '../utils/links'
import TickIcon from '../components/TickIcon'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pt-28 pb-12 md:pb-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=2000&q=80"
          alt="Bridal makeup artistry"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/60" />
      </div>

      {/* Floating spinning badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute top-32 right-6 md:right-12 z-10 hidden sm:block"
      >
        <div className="badge-circle relative">
          <div className="spin-slow absolute inset-0">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path id="circ" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
              </defs>
              <text fill="#1A1714" fontFamily="Inter" fontSize="10" letterSpacing="6">
                <textPath href="#circ">BRIDAL SPECIALIST · LUXURY BEAUTY · MUMBAI · </textPath>
              </text>
            </svg>
          </div>
          <div className="relative">
            <div className="h-italiana text-[11px] tracking-wider-3 text-ink/60">EST.</div>
            <div className="h-display text-3xl">2014</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10"
      >
        <div className="max-w-3xl">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-gold" />
            <span className="eyebrow text-gold">Luxury Beauty · Bridal · Hair Studio</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="h-display text-[13vw] md:text-[7vw] lg:text-[104px] text-cream mb-5"
          >
            Padma Makeover<br />
            <span className="italic font-light text-gold-soft">& Beauty Parlour</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="h-display text-[8vw] md:text-[3.5vw] lg:text-[48px] text-cream/90 mb-6"
          >
            Enhance Your <span className="italic font-light text-gold-soft">Beauty</span> with Padma.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-cream/75 max-w-md text-[15px] leading-relaxed mb-10">
            Premium makeup, hair & bridal beauty services in Mumbai — crafted by professional artists who treat every face as a canvas.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
            <a href="#book" className="pill gold">Book Appointment</a>
            <a href="#bridal" className="pill text-cream">Bridal Booking</a>
            <a href={telLink()} className="pill text-cream"><FaPhoneAlt size={12} /> Call Now</a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 max-w-2xl text-[12px] text-cream/70">
            {TRUST_BADGES.map((b) => (
              <div key={b} className="flex items-center gap-2"><TickIcon /> {b}</div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl"
        >
          {[
            { n: '12+', label: 'Years of Craft' },
            { n: '500+', label: 'Brides Styled' },
            { n: '5.0', label: 'Client Rating' },
          ].map((s, i) => (
            <div key={s.label} className={`bg-cream/5 backdrop-blur-xl border border-cream/10 rounded-2xl p-5 ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className="num text-4xl text-gold">{s.n}</div>
              <div className="eyebrow text-cream/60 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/40 text-[10px] tracking-wider-3 uppercase flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-10 bg-cream/30 animate-pulse" />
      </div>
    </section>
  )
}
