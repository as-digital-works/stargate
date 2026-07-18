import { ClockIcon, CompassIcon, HeadsetIcon, UserIcon } from '../icons'
import { StatCounter } from '../StatCounter'

const STATS = [
  { icon: ClockIcon, value: 10, suffix: '+', label: 'Years of Experience' },
  { icon: UserIcon, value: 5000, suffix: '+', label: 'Happy Clients' },
  { icon: CompassIcon, value: 50, suffix: '+', label: 'Destinations Covered' },
  { icon: HeadsetIcon, display: '24/7', label: 'Customer Support' },
]

export function StatsBand() {
  return (
    <section className="bg-brand-dark-green py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-10">
        {STATS.map((stat) => (
          <StatCounter
            key={stat.label}
            icon={stat.icon}
            value={'value' in stat ? stat.value : undefined}
            suffix={'suffix' in stat ? stat.suffix : undefined}
            display={'display' in stat ? stat.display : undefined}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  )
}
