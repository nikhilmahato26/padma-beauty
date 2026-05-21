import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../utils/motion'

export default function SectionEyebrow({ children, dark = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex items-center gap-3 mb-6"
    >
      <span className={`w-10 h-px ${dark ? 'bg-ink/40' : 'bg-gold'}`} />
      <span className={`eyebrow ${dark ? 'text-ink/60' : 'text-gold'}`}>{children}</span>
    </motion.div>
  )
}
