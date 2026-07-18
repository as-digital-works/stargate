import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { ArrowRightIcon, CalendarIcon } from './icons'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-20 lg:pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
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
