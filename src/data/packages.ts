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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Baku_Seaside_Bulevard.JPG/1280px-Baku_Seaside_Bulevard.JPG',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/View_of_Tbilisi_from_Tabori_Church_2023-10-08-2.jpg/1280px-View_of_Tbilisi_from_Tabori_Church_2023-10-08-2.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mount_Ararat_and_the_Yerevan_skyline_%28June_2018%29.jpg/1280px-Mount_Ararat_and_the_Yerevan_skyline_%28June_2018%29.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/1280px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Masai_Mara_at_Sunset.jpg/1280px-Masai_Mara_at_Sunset.jpg',
    description:
      'Experience world-class safaris and the wildlife of the Maasai Mara on an unforgettable Kenyan adventure.',
    includes: [],
    excludes: [],
    itinerary: [],
  },
  {
    slug: 'salalah-oman',
    title: 'Salalah, Oman',
    category: 'Middle East',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dunst_Oman_scan0322_-_Burj_al_Nahda.jpg/1280px-Dunst_Oman_scan0322_-_Burj_al_Nahda.jpg',
    description:
      "Known for the lush greenery of the khareef season, pristine beaches, and Dhofari culture — a refreshing escape close to home.",
    includes: [],
    excludes: [],
    itinerary: [],
  },
]
