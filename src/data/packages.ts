export type ItineraryDay = {
  day: string
  description: string
}

export type Package = {
  slug: string
  title: string
  category: string
  image: string
  description: string
  includes: string[]
  excludes: string[]
  itinerary: ItineraryDay[]
}

export const packages: Package[] = [
  {
    slug: 'azerbaijan',
    title: 'Azerbaijan',
    category: 'Caucasus',
    image: 'https://picsum.photos/seed/stargate-azerbaijan/700/500',
    description:
      "Discover Baku's futuristic skyline and the ancient Old City — a striking blend of modern and historic Azerbaijan.",
    includes: [],
    excludes: [],
    itinerary: [],
  },
  {
    slug: 'georgia',
    title: 'Georgia',
    category: 'Caucasus',
    image: 'https://picsum.photos/seed/stargate-georgia/700/500',
    description:
      "From Tbilisi's charming old town to the Caucasus mountains, Georgia offers stunning scenery and rich culture.",
    includes: [],
    excludes: [],
    itinerary: [],
  },
  {
    slug: 'armenia',
    title: 'Armenia',
    category: 'Caucasus',
    image: 'https://picsum.photos/seed/stargate-armenia/700/500',
    description:
      'Explore ancient monasteries, dramatic mountain landscapes, and the vibrant capital of Yerevan.',
    includes: [],
    excludes: [],
    itinerary: [],
  },
  {
    slug: 'turkey',
    title: 'Turkey',
    category: 'Europe',
    image: 'https://picsum.photos/seed/stargate-turkey/700/500',
    description:
      "Istanbul's iconic skyline, Cappadocia's hot air balloons, and centuries of history across two continents.",
    includes: [],
    excludes: [],
    itinerary: [],
  },
  {
    slug: 'kenya',
    title: 'Kenya',
    category: 'Africa',
    image: 'https://picsum.photos/seed/stargate-kenya/700/500',
    description:
      'Experience world-class safaris and the wildlife of the Maasai Mara on an unforgettable Kenyan adventure.',
    includes: [],
    excludes: [],
    itinerary: [],
  },
]
