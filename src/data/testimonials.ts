export type Testimonial = {
  name: string
  role: string
  source: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Runa Simon',
    role: 'Family Travel',
    source: 'Google Review',
    quote:
      'Applying Visa for my parents is so easy and straightforward. They handled everything, making the whole process stress-free, fast in a professional way. Highly recommended for anyone needing visa assistance.',
    rating: 5,
  },
  {
    name: 'Ashraf Ahmad',
    role: 'Corporate Client',
    source: 'Google Review',
    quote:
      'Very fast response, quick services, professional approach, always on spot to update the customers. We are really very happy to deal with AbdulGafoor & the Star Gate team. Wish them all the best.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Leisure Traveler',
    source: 'Google Review',
    quote:
      'Booked our Dubai honeymoon package through Star Gate and it was absolutely perfect. Every detail was handled beautifully — hotel, transfers, activities. Will definitely use them again!',
    rating: 5,
  },
  {
    name: 'Mohammed Al-Rashid',
    role: 'Business Owner',
    source: 'Google Review',
    quote:
      'I manage travel for my entire company and Star Gate has been invaluable. They handle everything seamlessly — visas, flights, hotels. The team is always responsive and professional.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Frequent Flyer',
    source: 'Google Review',
    quote:
      'Used Star Gate for the past 3 years for all my visa needs. They are incredibly efficient and the documentation is always spot-on. Never had an issue. Absolutely trustworthy agency.',
    rating: 5,
  },
]

export const ratingSummary = {
  average: 5.0,
  basis: 'based on Google Reviews',
}
