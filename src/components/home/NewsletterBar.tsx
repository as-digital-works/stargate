import { useState } from 'react'
import { CheckIcon, SendIcon } from '../icons'

export function NewsletterBar() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!email.includes('@')) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-brand-green py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-10">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-white">Get Travel Deals &amp; Updates</p>
          <p className="text-sm text-white/80">Subscribe to our newsletter for exclusive offers</p>
        </div>
        {submitted ? (
          <p className="flex items-center gap-2 text-sm font-medium text-white">
            <CheckIcon className="h-4 w-4" />
            Subscribed! Watch your inbox for travel deals.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="w-full min-w-0 rounded-full border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder-white/70 outline-none transition-colors focus:border-white"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-green transition-colors hover:bg-white/90"
            >
              <SendIcon className="h-4 w-4" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
