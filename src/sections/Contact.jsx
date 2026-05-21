import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../utils/motion'
import { BUSINESS } from '../constants/site'
import { telLink, mailLink, waLink } from '../utils/links'
import SectionEyebrow from '../components/SectionEyebrow'

export default function Contact() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.city}`)}`

  return (
    <section id="contact" className="py-24 md:py-36 bg-cream text-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            <SectionEyebrow dark>Visit The Studio</SectionEyebrow>
            <h2 className="h-display text-5xl md:text-6xl text-ink mb-10">
              Find us in<br /><span className="italic">Jalandhar.</span>
            </h2>

            <div className="space-y-8">
              <div>
                <div className="eyebrow text-ink/50 mb-2">Address</div>
                <p className="text-ink/80 text-[15px] leading-relaxed">
                  {BUSINESS.address.line1},<br />
                  {BUSINESS.address.line2},<br />
                  {BUSINESS.address.city}, {BUSINESS.address.state} — {BUSINESS.address.pincode}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="eyebrow text-ink/50 mb-2">Phone</div>
                  <a href={telLink()} className="text-ink btn-line text-[15px]">{BUSINESS.phone}</a>
                </div>
                <div>
                  <div className="eyebrow text-ink/50 mb-2">Email</div>
                  <a href={mailLink()} className="text-ink btn-line text-[14px] break-all">{BUSINESS.email}</a>
                </div>
              </div>
              <div>
                <div className="eyebrow text-ink/50 mb-2">Studio Hours</div>
                <div className="text-ink/80 text-[14px] space-y-1">
                  {BUSINESS.hours.map((h, i) => (
                    <div key={h.day} className={`flex justify-between ${i !== BUSINESS.hours.length - 1 ? 'border-b border-ink/10 pb-1' : ''}`}>
                      <span>{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 flex-wrap pt-2">
                <a href={waLink('Hi, I would like to know more about your services.')} target="_blank" rel="noreferrer" className="pill dark">WhatsApp</a>
                <a href={directions} target="_blank" rel="noreferrer" className="pill text-ink">Get Directions</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            custom={2}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl overflow-hidden border border-ink/10 h-[480px] md:h-[600px]">
              <iframe
                title="Elegant Salon Location"
                src="https://www.google.com/maps?q=KMV+College+Jalandhar+Punjab&output=embed"
                className="w-full h-full"
                style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
