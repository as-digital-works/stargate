import { Link } from 'react-router-dom'
import { testimonials } from '../../data/testimonials'
import { ScrollRevealGroup, ScrollRevealItem } from '../ScrollReveal'
import { TestimonialCard } from '../TestimonialCard'
import { ArrowRightIcon } from '../icons'

const preview = testimonials.slice(0, 3)

export function TestimonialsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
      <ScrollRevealGroup className="mx-auto max-w-2xl text-center">
        <ScrollRevealItem>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Testimonials
          </p>
        </ScrollRevealItem>
        <ScrollRevealItem>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
            What Our Travelers Say
          </h2>
        </ScrollRevealItem>
      </ScrollRevealGroup>

      <ScrollRevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((testimonial) => (
          <ScrollRevealItem key={testimonial.name}>
            <TestimonialCard testimonial={testimonial} />
          </ScrollRevealItem>
        ))}
      </ScrollRevealGroup>

      <div className="mt-10 text-center">
        <Link
          to="/testimonials"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-dark-green"
        >
          See All Testimonials
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
