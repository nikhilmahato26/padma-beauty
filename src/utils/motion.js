export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, ease: [0.22, 0.61, 0.36, 1] } },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export const viewportOnce = { once: true, amount: 0.15 }
