import { useNavigate } from 'react-router-dom'
import type { Package } from '../data/packages'
import { Modal } from './Modal'
import { CheckIcon, XIcon } from './icons'

export function PackageDetailModal({
  pkg,
  onClose,
}: {
  pkg: Package | null
  onClose: () => void
}) {
  const navigate = useNavigate()

  function handleEnquire() {
    if (!pkg) return
    onClose()
    navigate(
      `/contact?service=${encodeURIComponent('Holiday Package')}&package=${encodeURIComponent(pkg.title)}`,
    )
  }

  return (
    <Modal open={pkg !== null} onClose={onClose}>
      {pkg && (
        <div>
          <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-dark-green">
            {pkg.category}
          </span>
          <h2 className="mt-3 text-2xl font-bold text-brand-dark">{pkg.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-gray">{pkg.description}</p>

          {pkg.includes.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">Includes</h3>
              <ul className="mt-3 space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {pkg.excludes.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">Excludes</h3>
              <ul className="mt-3 space-y-2">
                {pkg.excludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-gray">
                    <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-gray" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {pkg.itinerary.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">Itinerary</h3>
              <ol className="mt-3 space-y-3 border-l-2 border-brand-green/30 pl-4">
                {pkg.itinerary.map((day) => (
                  <li key={day.day}>
                    <p className="text-sm font-semibold text-brand-dark">{day.day}</p>
                    <p className="text-sm text-brand-gray">{day.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <button
            type="button"
            onClick={handleEnquire}
            className="mt-8 w-full rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark-green sm:w-auto"
          >
            Enquire Now
          </button>
        </div>
      )}
    </Modal>
  )
}
