import { motion, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import { UserIcon } from '../icons'

export function TeamCard({ role }: { role: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 12)
    rotateX.set(-py * 12)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl"
    >
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
        <UserIcon className="h-9 w-9" />
      </span>
      <p className="mt-4 text-sm font-semibold text-brand-dark">{role}</p>
    </motion.div>
  )
}
