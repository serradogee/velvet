import { MapPin } from 'lucide-react'
import { LOCATION, SITE } from '../../config/site'
import Logo from '../ui/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-velvet-black text-white/70 section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <Logo
          size="md"
          variant="light"
          showTagline
          className="mx-auto mb-5"
        />
        <p className="text-sm font-light mb-6">
          Belleza natural · Profesionalidad · Confianza
        </p>

        <a
          href={LOCATION.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-velvet-gold transition-colors bg-white/5 border border-white/10 px-5 py-2.5 rounded-full mb-8 group"
        >
          <MapPin className="w-4 h-4 text-velvet-gold group-hover:scale-110 transition-transform shrink-0" />
          <span>{LOCATION.full}</span>
          <span className="text-velvet-gold text-xs font-medium ml-1">📍 Ver mapa →</span>
        </a>

        <div className="gold-line mb-6" />
        <p className="text-xs tracking-wide">
          © {year} {SITE.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
