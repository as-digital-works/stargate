import { motion } from 'framer-motion'
import { timeline } from '../../data/about'

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <motion.div
        className="absolute left-[7px] top-2 w-0.5 origin-top bg-brand-green/30"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ height: '100%' }}
      />

      <div className="space-y-10">
        {timeline.map((item) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-start gap-4 pl-8"
          >
            <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full bg-brand-green ring-4 ring-brand-green/20" />
            <div>
              <p className="text-lg font-bold text-brand-green">{item.year}</p>
              <p className="mt-1 text-sm text-brand-gray">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
