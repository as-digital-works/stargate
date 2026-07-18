import { ScrollRevealGroup, ScrollRevealItem } from '../ScrollReveal'
import {
  BriefcaseIcon,
  ClockIcon,
  FileCheckIcon,
  HeadsetIcon,
  ShieldCheckIcon,
  SlidersIcon,
} from '../icons'

const REASONS = [
  {
    icon: ShieldCheckIcon,
    title: 'IATA Accredited',
    description:
      'Licensed and recognized by the International Air Transport Association, ensuring trusted, industry-standard service.',
  },
  {
    icon: FileCheckIcon,
    title: 'Fast Visa Processing',
    description:
      'Streamlined documentation and follow-up so your visa is never the bottleneck in your travel plans.',
  },
  {
    icon: SlidersIcon,
    title: 'Personalized Itineraries',
    description:
      'Every package is tailored to your budget, timeline, and travel style — not a one-size-fits-all template.',
  },
  {
    icon: HeadsetIcon,
    title: '24/7 Support',
    description: 'Our team is reachable before, during, and after your trip via phone, WhatsApp, or email.',
  },
  {
    icon: ClockIcon,
    title: 'Transparent Pricing',
    description: 'No hidden fees. What we quote is what you pay.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Corporate & Group Travel',
    description: 'Dedicated account management for businesses and group bookings of any size.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-brand-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <ScrollRevealGroup className="mx-auto max-w-2xl text-center">
          <ScrollRevealItem>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Why Choose Us
            </p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
              Travel Planning Made Simple
            </h2>
          </ScrollRevealItem>
        </ScrollRevealGroup>

        <ScrollRevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <ScrollRevealItem key={reason.title}>
              <div className="h-full rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <reason.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-dark">{reason.title}</h3>
                <p className="mt-2 text-sm text-brand-gray">{reason.description}</p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  )
}
