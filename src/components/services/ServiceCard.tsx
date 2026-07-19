import { motion } from 'framer-motion'
import type { Service } from '../../data/services'
import type { ComponentType, SVGProps } from 'react'

export function ServiceCard({
  service,
  icon: Icon,
  onLearnMore,
}: {
  service: Service
  icon: ComponentType<SVGProps<SVGSVGElement>>
  onLearnMore: (service: Service) => void
}) {
  return (
    <div className="group flex h-full flex-col rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl hover:-translate-y-1 will-change-transform">
      <motion.span
        className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green"
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <Icon className="h-6 w-6" />
      </motion.span>
      <h3 className="mt-4 inline-block rounded-lg bg-brand-green/10 px-3 py-1.5 text-lg font-bold text-brand-dark-green">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-brand-gray">{service.short}</p>
      {service.variants && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {service.variants.map((variant) => (
            <span
              key={variant}
              className="rounded-full bg-brand-offwhite px-2.5 py-1 text-xs font-medium text-brand-gray"
            >
              {variant}
            </span>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => onLearnMore(service)}
        className="mt-5 self-start rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-dark-green transition-colors hover:bg-brand-green hover:text-white"
      >
        Learn More
      </button>
    </div>
  )
}
