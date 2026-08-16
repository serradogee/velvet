import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MapPin, Menu, X } from 'lucide-react'
import { LOCATION } from '../../config/site'
import Logo from '../ui/Logo'

const navLinks = [
  { label: 'Sobre mí', to: '/#sobre-mi' },
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
    if (to === '/#sobre-mi' && location.pathname === '/') return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-3 md:px-8 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Velvet Clinic — Inicio" className="shrink-0">
          <Logo size="sm" variant="light" showTagline={false} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const active = isLinkActive(link.to)

            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 font-medium relative py-1 ${
                  active
                    ? 'text-velvet-gold font-semibold'
                    : 'text-white/70 hover:text-velvet-gold'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-velvet-gold rounded-full" />
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
            className="flex items-center gap-1.5 text-xs font-light text-white/80 hover:text-velvet-gold transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/15 hover:border-velvet-gold/50"
            title="Ver ubicación en Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-velvet-gold shrink-0" />
            <span className="hidden sm:inline">{LOCATION.full}</span>
            <span className="sm:hidden">Madrid</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-white/80 hover:text-velvet-gold transition-colors"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => {
            const active = isLinkActive(link.to)

            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`block text-sm tracking-[0.2em] uppercase py-2 border-b border-white/5 transition-colors ${
                  active
                    ? 'text-velvet-gold font-semibold'
                    : 'text-white/75 hover:text-velvet-gold'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
