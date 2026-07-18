import { ScrollRevealGroup, ScrollRevealItem } from './ScrollReveal'

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 pt-32 text-center sm:px-6 lg:px-10 lg:pt-40">
      <ScrollRevealGroup>
        <ScrollRevealItem>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">{eyebrow}</p>
        </ScrollRevealItem>
        <ScrollRevealItem>
          <h1 className="mt-3 text-4xl font-bold text-brand-dark sm:text-5xl">{title}</h1>
        </ScrollRevealItem>
        <ScrollRevealItem>
          <p className="mt-6 text-lg text-brand-gray">{description}</p>
        </ScrollRevealItem>
      </ScrollRevealGroup>
    </section>
  )
}
