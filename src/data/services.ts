export type Service = {
  slug: string
  title: string
  short: string
  description: string
  variants?: string[]
  process: string[]
}

export const services: Service[] = [
  {
    slug: 'uae-tourist-visa',
    title: 'UAE Tourist Visa',
    short: 'Fast, reliable UAE tourist visa processing for 30 or 60 day stays.',
    description:
      'We handle the full UAE tourist visa application from document review to submission, keeping you updated at every step so there are no surprises.',
    variants: ['30 Days Tourist', '60 Days Tourist'],
    process: [
      'Submit required documents',
      'We review and prepare application',
      'Submission to immigration authority',
      'Status updates until approval',
    ],
  },
  {
    slug: 'visa-change-by-bus',
    title: 'Visa Change By Bus',
    short: 'Visa status change via land border crossing, for 30 or 60 day validity.',
    description:
      'A cost-effective way to change your visa status through a land border run, fully coordinated by our team from paperwork to travel logistics.',
    variants: ['30 Days Visa Change', '60 Days Visa Change'],
    process: [
      'Submit required documents',
      'We prepare the visa change application',
      'Land border crossing coordinated',
      'New visa issued',
    ],
  },
  {
    slug: 'visa-change-by-flight',
    title: 'Visa Change By Flight',
    short: 'Visa status change via a short flight exit and re-entry, for 30 or 60 day validity.',
    description:
      'For a faster turnaround, we arrange a flight-based exit and re-entry to process your visa status change with minimal time away.',
    variants: ['30 Days Visa Change', '60 Days Visa Change'],
    process: [
      'Submit required documents',
      'We prepare the visa change application and flight booking',
      'Exit and re-entry flight completed',
      'New visa issued',
    ],
  },
  {
    slug: 'air-tickets',
    title: 'Air Tickets',
    short: 'Worldwide air ticket bookings for leisure and business travel.',
    description:
      'We search across global airline networks to find the best combination of price, schedule, and convenience for your trip, and handle bookings, seat selection, and any changes directly with the airline on your behalf.',
    process: [
      'Share your travel dates',
      'We send fare options within hours',
      'You confirm',
      'E-ticket issued and sent to you',
    ],
  },
  {
    slug: 'travel-insurance',
    title: 'Travel Insurance',
    short: 'Comprehensive travel insurance covering medical, cancellation, and baggage.',
    description:
      "We help you compare and select coverage appropriate to your destination and trip type, so you're protected against the unexpected — medical emergencies, trip cancellations, delays, and lost luggage.",
    process: [
      'Share trip details',
      'We recommend suitable plans',
      'Choose coverage',
      'Policy issued instantly',
    ],
  },
  {
    slug: 'holiday-package',
    title: 'Holiday Package',
    short: 'Curated holiday packages to Azerbaijan, Georgia, Armenia, Turkey, Kenya, and more.',
    description:
      'Fully planned holiday packages built around your interests — flights, hotels, transfers, and activities — so you just show up and travel. Enquire for our current destinations.',
    process: [
      'Consultation call',
      'Custom itinerary proposal',
      'Adjustments',
      'Full package booked and documented',
    ],
  },
]
