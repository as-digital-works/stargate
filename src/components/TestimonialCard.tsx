import type { Testimonial } from '../data/testimonials'
import { QuoteIcon, StarIcon } from './icons'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-brand-offwhite p-6 text-left ring-1 ring-black/5">
      <QuoteIcon className="h-8 w-8 text-brand-green/30" />
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-amber-400" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-dark">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white">
          {testimonial.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-dark">{testimonial.name}</p>
          <p className="text-xs text-brand-gray">
            {testimonial.role} &middot; {testimonial.source}
          </p>
        </div>
      </div>
    </div>
  )
}
