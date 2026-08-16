import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { LOCATION, SITE } from '../../config/site'
import Logo from '../ui/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-velvet-black text-white/70 section-padding border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <Logo
          size="md"
          variant="light"
          showTagline
          className="mx-auto mb-5"
        />
        <p className="text-sm font-light mb-6 text-white/60">
          Belleza natural · Profesionalidad · Confianza
        </p>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-xs tracking-[0.15em] uppercase font-medium">
          <Link to="/#sobre-mi" className="text-white/60 hover:text-velvet-gold transition-colors">
            Sobre mí
          </Link>
          <span className="text-white/20">·</span>
          <Link to="/tratamientos" className="text-white/60 hover:text-velvet-gold transition-colors">
            Tratamientos
          </Link>
          <span className="text-white/20">·</span>
          <Link to="/resultados" className="text-white/60 hover:text-velvet-gold transition-colors">
            Resultados
          </Link>
          <span className="text-white/20">·</span>
          <Link to="/#clinica" className="text-white/60 hover:text-velvet-gold transition-colors">
            La Clínica
          </Link>
        </div>

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
        <p className="text-xs tracking-wide text-white/40">
          © {year} {SITE.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
