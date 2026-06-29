import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../utils/motion'
import { GALLERY } from '../constants/site'
import { waLink } from '../utils/links'
import ArrowIcon from '../components/ArrowIcon'

export default function Gallery() {
  const [active, setActive] = useState(null) // index of open image, or null

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    []
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, prev, next])

  return (
    <section id="gallery" className="py-24 md:py-36 bg-ink-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="h-display text-5xl md:text-7xl text-cream text-center mb-4"
        >
          The Gallery
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          custom={1}
          className="text-cream/50 text-center max-w-xl mx-auto text-[14px] mb-14 md:mb-16"
        >
          A window into our most loved transformations — bridal, glam, hair, skin and nails.
        </motion.p>

        {/* Masonry: scales gracefully to any number of images */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-5 [column-fill:_balance]"
        >
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              variants={fadeUp}
              custom={i % 4}
              className="img-zoom group relative mb-3 md:mb-5 block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-[12px] tracking-wide text-cream/90">{g.alt}</span>
              </span>
            </motion.button>
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

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-deep/95 backdrop-blur-sm p-4 md:p-10"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 text-cream/60 hover:text-cream transition"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
              className="absolute left-3 md:left-8 text-cream/60 hover:text-cream transition"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <motion.img
              key={active}
              src={GALLERY[active].src}
              alt={GALLERY[active].alt}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
              className="absolute right-3 md:right-8 text-cream/60 hover:text-cream transition"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[12px] tracking-wide text-cream/60">
              {active + 1} / {GALLERY.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
