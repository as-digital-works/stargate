import { PageHeader } from '../components/PageHeader'
import { FaqAccordion } from '../components/contact/FaqAccordion'
import { LocationsMap } from '../components/contact/LocationsMap'
import { ScrollRevealGroup, ScrollRevealItem } from '../components/ScrollReveal'
import { site } from '../data/site'
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from '../components/icons'

export function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Plan Your Next Trip"
        description="Reach out to our team on WhatsApp and we'll help you build the perfect itinerary."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-10">
        <ScrollRevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScrollRevealItem>
            <div className="flex h-full flex-col rounded-2xl bg-brand-offwhite p-6 ring-1 ring-black/5 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
                Get in Touch
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-brand-gray">
                <a href={site.phoneHref} className="flex items-start gap-2 hover:text-brand-green">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-start gap-2 hover:text-brand-green">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {site.email}
                </a>
                <p className="flex items-start gap-2">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {site.address}
                </p>
                <p className="flex items-start gap-2">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {site.hours}
                </p>
              </div>

              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5a]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-brand-gray">
                Fastest way to reach us — our team typically replies within minutes.
              </p>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <LocationsMap />
          </ScrollRevealItem>
        </ScrollRevealGroup>

        <ScrollRevealGroup className="mx-auto mt-24 max-w-3xl">
          <ScrollRevealItem>
            <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <div className="mt-10">
              <FaqAccordion />
            </div>
          </ScrollRevealItem>
        </ScrollRevealGroup>
      </section>
    </>
  )
}
