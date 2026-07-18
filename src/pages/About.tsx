import { AboutBanner } from '../components/about/AboutBanner'
import { TeamCard } from '../components/about/TeamCard'
import { Timeline } from '../components/about/Timeline'
import { MapPinIcon } from '../components/icons'
import { ScrollRevealGroup, ScrollRevealItem } from '../components/ScrollReveal'
import { mission, story, team, values, vision } from '../data/about'
import { branches } from '../data/site'

export function About() {
  return (
    <>
      <AboutBanner />

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-10">
        <ScrollRevealGroup>
          <ScrollRevealItem>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">Our Story</p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="mt-4 text-lg leading-relaxed text-brand-gray">{story}</p>
          </ScrollRevealItem>
        </ScrollRevealGroup>
      </section>

      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
          <ScrollRevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ScrollRevealItem>
              <div className="h-full rounded-2xl bg-white p-8 text-left shadow-sm ring-1 ring-black/5">
                <h2 className="text-xl font-bold text-brand-dark">Mission</h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{mission}</p>
              </div>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <div className="h-full rounded-2xl bg-white p-8 text-left shadow-sm ring-1 ring-black/5">
                <h2 className="text-xl font-bold text-brand-dark">Vision</h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{vision}</p>
              </div>
            </ScrollRevealItem>
          </ScrollRevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <ScrollRevealGroup className="mx-auto max-w-2xl text-center">
          <ScrollRevealItem>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">Our Values</p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">What Drives Us</h2>
          </ScrollRevealItem>
        </ScrollRevealGroup>

        <ScrollRevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <ScrollRevealItem key={value.title}>
              <div className="h-full rounded-2xl bg-brand-offwhite p-6 text-left ring-1 ring-black/5">
                <h3 className="text-lg font-bold text-brand-dark-green">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-gray">{value.description}</p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </section>

      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <ScrollRevealGroup className="mx-auto max-w-2xl text-center">
            <ScrollRevealItem>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
                Our Journey
              </p>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">Milestones</h2>
            </ScrollRevealItem>
          </ScrollRevealGroup>

          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <ScrollRevealGroup className="mx-auto max-w-2xl text-center">
          <ScrollRevealItem>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">
              Our Locations
            </p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">Find Us Across the UAE</h2>
          </ScrollRevealItem>
        </ScrollRevealGroup>

        <ScrollRevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {branches.map((branch) => (
            <ScrollRevealItem key={branch.name}>
              <div className="h-full rounded-2xl bg-brand-offwhite p-6 text-left ring-1 ring-black/5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-dark">{branch.name}</h3>
                <p className="mt-1 text-sm text-brand-gray">{branch.address}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-green">
                  Since {branch.opened}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <ScrollRevealGroup className="mx-auto max-w-2xl text-center">
          <ScrollRevealItem>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">Our Team</p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
              The People Behind Star Gate
            </h2>
          </ScrollRevealItem>
        </ScrollRevealGroup>

        <ScrollRevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <ScrollRevealItem key={member.role}>
              <TeamCard role={member.role} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </section>
    </>
  )
}
