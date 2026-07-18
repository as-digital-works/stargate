import { Link } from 'react-router-dom'

const CTA_IMAGE = 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600&auto=format&fit=crop'

export function CTABanner() {
  return (
    <section
      className="relative bg-cover bg-center py-20 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(79,138,61,0.92), rgba(79,138,61,0.92)), url(${CTA_IMAGE})`,
      }}
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready to Start Your Adventure?</h2>
        <p className="mt-4 text-white/90">
          Let us help you plan the perfect trip. Contact our travel experts today.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-green transition-colors hover:bg-white/90"
          >
            Get a Free Quote
          </Link>
          <Link
            to="/services"
            className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}
