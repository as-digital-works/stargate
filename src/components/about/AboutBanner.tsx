import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

function ParticleField() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true }}>
      <ambientLight intensity={0.6} color="#ffb37b" />
      <Sparkles count={90} scale={[8, 4, 4]} size={2.5} speed={0.3} color="#2eaf4a" opacity={0.5} />
      <Sparkles count={60} scale={[8, 4, 4]} size={1.5} speed={0.2} color="#ff9a4d" opacity={0.35} />
    </Canvas>
  )
}

function MobileBanner() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/4 top-1/3 h-2 w-2 animate-pulse rounded-full bg-brand-green/60" />
      <div className="absolute right-1/4 top-1/2 h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff9a4d]/60 [animation-delay:0.5s]" />
      <div className="absolute bottom-1/3 left-1/2 h-2 w-2 animate-pulse rounded-full bg-brand-green/50 [animation-delay:1s]" />
    </div>
  )
}

export function AboutBanner() {
  const isMobile = useIsMobile()

  return (
    <section className="relative flex h-[45vh] min-h-[320px] w-full items-center justify-center overflow-hidden bg-[#0b1a15] pt-20 lg:pt-24">
      <div className="absolute inset-0">{isMobile ? <MobileBanner /> : <ParticleField />}</div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-4 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">About Us</p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Your Journey, Our Passion</h1>
      </motion.div>
    </section>
  )
}
