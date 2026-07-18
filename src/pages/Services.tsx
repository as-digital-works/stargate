import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ScrollRevealGroup, ScrollRevealItem } from '../components/ScrollReveal'
import { ServiceCard } from '../components/services/ServiceCard'
import { ServiceDetailModal } from '../components/services/ServiceDetailModal'
import { services, type Service } from '../data/services'
import { BusIcon, CompassIcon, FileCheckIcon, PlaneIcon, ShieldCheckIcon, TagIcon } from '../components/icons'

const ICONS = [FileCheckIcon, BusIcon, PlaneIcon, TagIcon, ShieldCheckIcon, CompassIcon]

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Our Services"
        description="Everything you need for seamless travel, under one roof."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-10">
        <ScrollRevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollRevealItem key={service.slug}>
              <ServiceCard service={service} icon={ICONS[index]} onLearnMore={setSelected} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </section>

      <ServiceDetailModal service={selected} onClose={() => setSelected(null)} />
    </>
  )
}
