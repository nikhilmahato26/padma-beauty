import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { waLink, telLink } from '../utils/links'

export default function FloatingActions() {
  return (
    <>
      <motion.a
        href={waLink('Hi Padma Makeover, I would like to know more about your services.')}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        whileHover={{ scale: 1.1 }}
        className="float-wa fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={22} />
      </motion.a>

      <motion.a
        href={telLink()}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
        className="float-call fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-3 px-5 h-14 rounded-full bg-gold text-ink"
        aria-label="Call"
      >
        <FaPhoneAlt size={16} />
        <span className="eyebrow">Call Studio</span>
      </motion.a>
    </>
  )
}
