import { useNavigate } from 'react-router-dom'
import type { Service } from '../../data/services'
import { Modal } from '../Modal'
import { CheckIcon } from '../icons'

export function ServiceDetailModal({
  service,
  onClose,
}: {
  service: Service | null
  onClose: () => void
}) {
  const navigate = useNavigate()

  function handleEnquire() {
    if (!service) return
    onClose()
    navigate(`/contact?service=${encodeURIComponent(service.title)}`)
  }

  return (
    <Modal open={service !== null} onClose={onClose}>
      {service && (
        <div>
          <h2 className="inline-block rounded-lg bg-brand-green/10 px-3 py-1.5 text-2xl font-bold text-brand-dark-green">
            {service.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-gray">{service.description}</p>

          {service.variants && (
            <div className="mt-4 flex flex-wrap gap-2">
              {service.variants.map((variant) => (
                <span
                  key={variant}
                  className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-dark-green"
                >
                  {variant}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">Process</h3>
            <ol className="mt-3 space-y-3">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm text-brand-gray">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-xs font-bold text-brand-dark-green">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <button
            type="button"
            onClick={handleEnquire}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark-green sm:w-auto"
          >
            <CheckIcon className="h-4 w-4" />
            Enquire Now
          </button>
        </div>
      )}
    </Modal>
  )
}
