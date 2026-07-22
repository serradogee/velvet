import { MapPin } from 'lucide-react'
import { LOCATION } from '../../config/site'
import Logo from '../ui/Logo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-velvet-cream/92 backdrop-blur-md border-b border-velvet-beige/60">
      <div className="max-w-7xl mx-auto px-5 py-2.5 md:px-8 md:py-3.5 flex items-center justify-between">
        <a href="#" aria-label="Velvet Clinic — Inicio">
          <Logo size="sm" variant="dark" showTagline={false} />
        </a>

        <a
          href={LOCATION.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-light text-velvet-charcoal hover:text-velvet-gold transition-colors bg-white/70 px-3 py-1.5 rounded-full border border-velvet-beige/80 shadow-2xs"
          title="Ver ubicación en Google Maps"
        >
          <MapPin className="w-3.5 h-3.5 text-velvet-gold shrink-0" />
          <span className="hidden sm:inline">{LOCATION.full}</span>
          <span className="sm:hidden">Plaza Matute 5, Madrid</span>
        </a>
      </div>
    </header>
  )
}
