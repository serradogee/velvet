import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MapPin, Menu, X } from 'lucide-react'
import { LOCATION } from '../../config/site'
import Logo from '../ui/Logo'

const navLinks = [
  { label: 'Sobre nosotros', to: '/#sobre-nosotros' },
  { label: 'Tratamientos', to: '/tratamientos' },
  { label: 'Resultados', to: '/resultados' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (to: string) => {
    setMobileMenuOpen(false)
    if (to.startsWith('/#')) {
      const hash = to.replace('/', '')
      if (location.pathname === '/') {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const isLinkActive = (to: string) => {
    if (to === '/tratamientos' && location.pathname === '/tratamientos') return true
    if (to === '/resultados' && location.pathname === '/resultados') return true
    if ((to === '/#sobre-nosotros' || to === '/#sobre-mi') && location.pathname === '/') return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Sticky Announcement Bar (Guilty Freckles style) */}
      <div className="bg-white text-black py-2 px-4 text-center border-b border-black/10">
        <p className="text-[11px] sm:text-xs tracking-[0.25em] font-semibold uppercase font-display">
          VELVET CLINIC BRAND · MEDICINA ESTÉTICA & ARMONIZACIÓN FACIAL · MADRID
        </p>
      </div>

      {/* Main Sticky Navbar */}
      <div className="bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-3.5 md:px-8 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="Velvet Clinic — Inicio" className="shrink-0">
            <Logo size="sm" variant="light" showTagline={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const active = isLinkActive(link.to)

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className={`text-xs tracking-[0.22em] uppercase transition-all duration-300 font-medium relative py-1 ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right side: Location + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href={LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-light text-white/85 hover:text-white transition-colors bg-white/5 px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/40"
              title="Ver ubicación en Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-white/80 shrink-0" />
              <span className="hidden sm:inline">{LOCATION.full}</span>
              <span className="sm:hidden">Madrid</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-white/80 hover:text-white transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/98 border-t border-white/10 px-6 py-6 space-y-4 backdrop-blur-xl animate-fadeIn">
            {navLinks.map((link) => {
              const active = isLinkActive(link.to)

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className={`block text-sm tracking-[0.2em] uppercase py-2 border-b border-white/5 transition-colors ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
