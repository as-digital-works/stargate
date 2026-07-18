import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import iataBadge from '../assets/iata-badge.png'
import logo from '../assets/logo.png'
import { site } from '../data/site'
import { MenuIcon, PhoneIcon, XIcon } from './icons'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

function IataBadge() {
  return (
    <div className="flex items-center rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5">
      <img src={iataBadge} alt="IATA Accredited Agent" className="h-6 w-auto" />
    </div>
  )
}

function NavLink({ label, to, active }: { label: string; to: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        active
          ? 'bg-brand-green text-white'
          : 'text-brand-gray hover:bg-brand-green/10 hover:text-brand-dark-green'
      }`}
    >
      {label}
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 shadow-md backdrop-blur-md' : 'bg-white'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Star Gate Tourism & Travel LLC" className="h-10 w-auto sm:h-11" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} label={link.label} to={link.to} active={pathname === link.to} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-medium text-brand-dark">
              <PhoneIcon className="h-4 w-4 text-brand-green" />
              {site.phoneDisplay}
            </a>
            <IataBadge />
          </div>
          <Link
            to="/contact"
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark-green"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-brand-dark lg:hidden"
          >
            {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-black/5 bg-white px-4 py-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} label={link.label} to={link.to} active={pathname === link.to} />
          ))}
          <div className="mt-2 flex items-center justify-between">
            <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-medium text-brand-dark">
              <PhoneIcon className="h-4 w-4 text-brand-green" />
              {site.phoneDisplay}
            </a>
            <IataBadge />
          </div>
        </div>
      )}
    </header>
  )
}
