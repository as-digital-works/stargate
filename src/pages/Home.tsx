import { CTABanner } from '../components/home/CTABanner'
import { FeaturedPackages } from '../components/home/FeaturedPackages'
import { NewsletterBar } from '../components/home/NewsletterBar'
import { StatsBand } from '../components/home/StatsBand'
import { TestimonialsPreview } from '../components/home/TestimonialsPreview'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { Hero } from '../components/Hero'

export function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <FeaturedPackages />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CTABanner />
      <NewsletterBar />
    </>
  )
}
