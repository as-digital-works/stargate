import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { SERVICE_NAMES, site } from '../data/site'
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  XSocialIcon,
} from './icons'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'X', href: '#', icon: XSocialIcon },
]

export function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Star Gate Tourism & Travel LLC" className="h-11 w-auto rounded-lg bg-white/95 px-3 py-2" />
          </Link>
          <p className="mt-4 text-sm text-slate-400">{site.corePromise}</p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
          <nav className="mt-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Our Services</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {SERVICE_NAMES.map((service) => (
              <li key={service} className="text-sm text-slate-400">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact Us</h3>
          <ul className="mt-4 flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-dark-green text-white">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-slate-400">Call Us</p>
                <a href={site.phoneHref} className="text-white hover:text-brand-green">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-dark-green text-white">
                <MailIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-slate-400">Email</p>
                <a href={`mailto:${site.email}`} className="text-white hover:text-brand-green">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-dark-green text-white">
                <MapPinIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-white">{site.location}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-slate-400 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.hours}</p>
        </div>
      </div>
    </footer>
  )
}
