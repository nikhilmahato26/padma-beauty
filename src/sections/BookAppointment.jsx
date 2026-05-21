import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { fadeUp, viewportOnce } from '../utils/motion'
import SectionEyebrow from '../components/SectionEyebrow'
import ArrowIcon from '../components/ArrowIcon'
import { BUSINESS } from '../constants/site'
import { waLink, telLink, mailLink, buildAppointmentMessage } from '../utils/links'

export default function BookAppointment() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const msg = buildAppointmentMessage(data)
    window.open(waLink(msg), '_blank')
  }

  const contactItems = [
    {
      label: 'WhatsApp',
      sub: BUSINESS.phone,
      icon: <FaWhatsapp size={18} />,
      iconClass: 'bg-[#25D366]/15 text-[#25D366]',
      href: waLink('Hi Elegant Salon, I would like to book an appointment'),
      external: true,
    },
    {
      label: 'Call the Studio',
      sub: BUSINESS.phone,
      icon: <FaPhoneAlt size={16} />,
      iconClass: 'bg-gold/15 text-gold',
      href: telLink(),
    },
    {
      label: 'Email Us',
      sub: BUSINESS.email,
      icon: <FaEnvelope size={16} />,
      iconClass: 'bg-rose/20 text-rose',
      href: mailLink(),
    },
  ]

  return (
    <section id="book" className="py-24 md:py-36 bg-ink relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-display text-[180px] text-cream/[0.03] hidden md:block">Reserve.</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5"
        >
          <SectionEyebrow>Book an Appointment</SectionEyebrow>
          <h2 className="h-display text-5xl md:text-6xl text-cream mb-6">
            Reserve your<br /><span className="italic text-gold-soft">beauty</span> moment.
          </h2>
          <p className="text-cream/60 text-[15px] leading-relaxed mb-10 max-w-md">
            Tell us what you'd love — bridal, glam, skin, hair, nails. We'll confirm your slot personally on WhatsApp or phone within minutes.
          </p>

          <div className="space-y-5 max-w-sm">
            {contactItems.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className="flex items-center justify-between p-5 border border-cream/10 rounded-2xl hover:bg-cream/5 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${c.iconClass}`}>{c.icon}</div>
                  <div>
                    <div className="text-cream text-sm">{c.label}</div>
                    <div className="text-cream/40 text-[12px]">{c.sub}</div>
                  </div>
                </div>
                <ArrowIcon className="text-gold" size={14} />
              </a>
            ))}
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-cream/[0.03] backdrop-blur border border-cream/10 rounded-3xl p-8 md:p-12"
          >
            <div className="eyebrow text-gold mb-2">Appointment Form</div>
            <h3 className="h-display text-3xl md:text-4xl text-cream mb-10">Tell us your dream look.</h3>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="eyebrow text-cream/50 mb-2 block">Full Name</label>
                <input className="field" placeholder="Your name" {...register('name', { required: true })} />
                {errors.name && <span className="text-rose text-[11px]">Required</span>}
              </div>
              <div>
                <label className="eyebrow text-cream/50 mb-2 block">Phone</label>
                <input className="field" placeholder="+91 ..." {...register('phone', { required: true })} />
                {errors.phone && <span className="text-rose text-[11px]">Required</span>}
              </div>
              <div>
                <label className="eyebrow text-cream/50 mb-2 block">Service</label>
                <select className="field bg-ink" {...register('service', { required: true })}>
                  <option value="">Select a service</option>
                  <option>Bridal Makeup</option>
                  <option>HD / Party Makeup</option>
                  <option>Hair Styling</option>
                  <option>Facial / Skin Care</option>
                  <option>Nails / Extensions</option>
                  <option>Full Beauty Package</option>
                </select>
              </div>
              <div>
                <label className="eyebrow text-cream/50 mb-2 block">Preferred Date</label>
                <input type="date" className="field" {...register('date', { required: true })} />
              </div>
              <div className="md:col-span-2">
                <label className="eyebrow text-cream/50 mb-2 block">Message</label>
                <textarea rows="3" className="field resize-none" placeholder="Any specific look, references or questions..." {...register('message')} />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button type="submit" className="pill gold">Book Your Appointment</button>
              <span className="text-cream/40 text-[12px]">We confirm within minutes during studio hours.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
