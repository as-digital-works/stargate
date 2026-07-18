import { useState } from 'react'
import { branches } from '../../data/site'
import { MapPinIcon } from '../icons'

export function LocationsMap() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = branches[activeIndex]
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(active.mapQuery)}&output=embed`

  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
      <div className="flex flex-wrap gap-2 p-4 pb-0">
        {branches.map((branch, index) => (
          <button
            key={branch.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              index === activeIndex
                ? 'bg-brand-green text-white'
                : 'bg-brand-offwhite text-brand-gray hover:bg-brand-green/10 hover:text-brand-dark-green'
            }`}
          >
            {branch.name}
          </button>
        ))}
      </div>

      <iframe
        key={active.name}
        title={`Star Gate Tourism & Travel — ${active.name}`}
        src={embedSrc}
        className="mt-4 h-64 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <p className="flex items-start gap-2 px-4 py-3 text-xs text-brand-gray">
        <MapPinIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-green" />
        {active.address}
      </p>
    </div>
  )
}
