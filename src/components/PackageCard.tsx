import { motion, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import type { Package } from '../data/packages'
import { ArrowRightIcon } from './icons'

export function PackageCard({
  pkg,
  onSelect,
}: {
  pkg: Package
  onSelect: (pkg: Package) => void
}) {
  const cardRef = useRef<HTMLButtonElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  function handleMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 14)
    rotateX.set(-py * 14)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(pkg)}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-dark-green">
          {pkg.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-brand-dark">{pkg.title}</h3>
        <p className="mt-2 text-sm text-brand-gray">{pkg.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-dark-green transition-colors group-hover:bg-brand-green group-hover:text-white">
          Enquire Now
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </motion.button>
  )
}
