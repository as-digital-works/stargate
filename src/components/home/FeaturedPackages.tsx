import { useState } from 'react'
import { Link } from 'react-router-dom'
import { packages } from '../../data/packages'
import { ArrowRightIcon } from '../icons'
import { PackageCard } from '../PackageCard'
import { PackageDetailModal } from '../PackageDetailModal'
import { ScrollRevealGroup, ScrollRevealItem } from '../ScrollReveal'
import type { Package } from '../../data/packages'

export function FeaturedPackages() {
  const [selected, setSelected] = useState<Package | null>(null)

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
      <ScrollRevealGroup className="mx-auto max-w-2xl text-center">
        <ScrollRevealItem>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
            Popular Destinations
          </p>
        </ScrollRevealItem>
        <ScrollRevealItem>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
            Handpicked Packages, Ready to Customize
          </h2>
        </ScrollRevealItem>
      </ScrollRevealGroup>

      <ScrollRevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => (
          <ScrollRevealItem key={pkg.slug}>
            <PackageCard pkg={pkg} onSelect={setSelected} />
          </ScrollRevealItem>
        ))}
      </ScrollRevealGroup>

      <div className="mt-10 text-center">
        <Link
          to="/destinations"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-dark-green"
        >
          View All Packages
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      <PackageDetailModal pkg={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
