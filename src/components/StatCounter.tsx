import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp'

export function StatCounter({
  icon: IconComponent,
  value,
  suffix = '',
  display,
  label,
}: {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  value?: number
  suffix?: string
  display?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value ?? 0, inView && value !== undefined)

  return (
    <div ref={ref} className="text-center">
      {IconComponent && (
        <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white">
          <IconComponent className="h-6 w-6" />
        </span>
      )}
      <p className="text-4xl font-bold text-white sm:text-5xl">
        {display ?? `${count.toLocaleString()}${suffix}`}
      </p>
      <p className="mt-2 text-sm font-medium text-white/70">{label}</p>
    </div>
  )
}
