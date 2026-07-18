import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { PackageCard } from '../components/PackageCard'
import { PackageDetailModal } from '../components/PackageDetailModal'
import { SearchIcon } from '../components/icons'
import { packages, type Package } from '../data/packages'

export function Destinations() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Package | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q === '') return packages
    return packages.filter((pkg) => pkg.title.toLowerCase().includes(q))
  }, [query])

  return (
    <>
      <PageHeader
        eyebrow="Destinations"
        title="Popular Destinations"
        description="Enquire today and let us tailor the perfect trip for you."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-xl">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gray" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search destinations..."
              className="w-full rounded-full border border-black/10 bg-white py-3 pl-11 pr-4 text-sm text-brand-dark outline-none transition-colors focus:border-brand-green"
            />
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} onSelect={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-brand-gray">
            No destinations match your search. Try a different name.
          </p>
        )}
      </section>

      <PackageDetailModal pkg={selected} onClose={() => setSelected(null)} />
    </>
  )
}
