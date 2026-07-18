import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { ArrowRightIcon, CalendarIcon } from './icons'

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
    alt: 'Dubai skyline at sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop',
    alt: 'Overwater villa on a tropical holiday',
  },
  {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop',
    alt: 'Airplane wing above the clouds',
  },
  {
    src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop',
    alt: 'Map and travel gear laid out for trip planning',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

function HeroSlideshow() {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [reduceMotion])

  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        <motion.div
          key={SLIDES[index].src}
          role="img"
          aria-label={SLIDES[index].alt}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[index].src})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              slideIndex === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-20 lg:pt-24">
      <HeroSlideshow />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 pb-20 pt-10 text-center sm:px-6"
      >
        <motion.span
          variants={fadeUp}
          className="mb-6 inline-flex items-center rounded-full bg-brand-green px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-lg shadow-brand-green/30"
        >
          Your Trusted Travel Partner Since {site.founded}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Explore the <span className="text-brand-green">World</span> With Us
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
          {site.corePromise}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/destinations"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-green/30 transition-colors hover:bg-brand-dark-green"
          >
            Explore Packages
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-24 right-6 z-10 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white">
          <CalendarIcon className="h-5 w-5" />
        </span>
        <div className="text-left text-sm leading-tight">
          <p className="text-brand-gray">Quick Booking</p>
          <p className="font-bold text-brand-dark">Available 24/7</p>
        </div>
      </motion.div>
    </section>
  )
}
