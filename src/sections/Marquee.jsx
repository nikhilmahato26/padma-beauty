export default function Marquee() {
  const items = ['Bridal Makeup', 'HD Glam', 'Hair Styling', 'Skin Therapy', 'Nail Artistry']
  return (
    <section className="py-6 border-y border-cream/10 overflow-hidden bg-ink-deep">
      <div className="marquee-track h-italiana text-2xl md:text-3xl text-cream/70">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-16">
            {item} <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
