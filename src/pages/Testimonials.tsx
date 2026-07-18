import { PageHeader } from '../components/PageHeader'
import { ScrollRevealGroup, ScrollRevealItem } from '../components/ScrollReveal'
import { TestimonialCard } from '../components/TestimonialCard'
import { StarIcon } from '../components/icons'
import { ratingSummary, testimonials } from '../data/testimonials'

export function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What Our Travelers Say"
        description="Real reviews from clients who trusted us with their journeys."
      />

      <div className="mx-auto -mt-4 mb-4 flex max-w-7xl items-center justify-center gap-2 px-4">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-amber-400" />
          ))}
        </div>
        <p className="text-sm font-semibold text-brand-dark">
          {ratingSummary.average.toFixed(1)} average, {ratingSummary.basis}
        </p>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-10">
        <ScrollRevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <ScrollRevealItem key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </section>
    </>
  )
}
