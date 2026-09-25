import { useState } from 'react'
import primePointLogo from '../../assets/prime-point-logo.jpg'
import { branches, sisterCompanies } from '../../data/site'
import { ClockIcon, MapPinIcon, PhoneIcon } from '../icons'

type LocationItem =
  | {
      kind: 'branch'
      tabLabel: string
      name: string
      address: string
      hours: string
      mapQuery: string
    }
  | {
      kind: 'sister'
      tabLabel: string
      name: string
      address: string
      phones: readonly { display: string; href: string }[]
      mapQuery: string
      logo: string
    }

const LOCATIONS: LocationItem[] = [
  ...branches.map((branch) => ({ kind: 'branch' as const, tabLabel: branch.name, ...branch })),
  ...sisterCompanies.map((company) => ({ kind: 'sister' as const, ...company, logo: primePointLogo })),
]

export function LocationsMap() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = LOCATIONS[activeIndex]
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(active.mapQuery)}&output=embed`

  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
      <div className="flex flex-wrap gap-2 p-4 pb-0">
        {LOCATIONS.map((loc, index) => (
          <button
            key={loc.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              index === activeIndex
                ? 'bg-brand-green text-white'
                : 'bg-brand-offwhite text-brand-gray hover:bg-brand-green/10 hover:text-brand-dark-green'
            }`}
          >
            {loc.tabLabel}
          </button>
        ))}
      </div>

      <iframe
        key={active.name}
        title={active.name}
        src={embedSrc}
        className="mt-4 h-64 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {active.kind === 'sister' && (
        <div className="flex items-center gap-3 border-b border-black/5 px-4 py-3">
          <img src={active.logo} alt={active.name} className="h-10 w-10 shrink-0 rounded-lg object-contain" />
          <p className="text-sm font-semibold text-brand-dark">{active.name}</p>
        </div>
      )}

      <div className="space-y-1.5 px-4 py-3">
        <p className="flex items-start gap-2 text-xs text-brand-gray">
          <MapPinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
          {active.address}
        </p>
        {active.kind === 'branch' ? (
          <p className="flex items-start gap-2 text-xs text-brand-gray">
            <ClockIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
            {active.hours}
          </p>
        ) : (
          active.phones.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="flex items-start gap-2 text-xs text-brand-gray hover:text-brand-green"
            >
              <PhoneIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
              {phone.display}
            </a>
          ))
        )}
      </div>
    </div>
  )
}
