import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { LOCATION } from '../../config/site'
import Logo from '../ui/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white/70 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <Logo
          size="md"
          variant="light"
          showTagline
          className="mx-auto mb-6"
        />

        {/* Quick links */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-xs tracking-[0.2em] uppercase font-medium">
          <Link to="/#sobre-nosotros" className="text-white/70 hover:text-velvet-gold transition-colors">
            Sobre nosotros
          </Link>
          <span className="text-white/20">·</span>
          <Link to="/tratamientos" className="text-white/70 hover:text-velvet-gold transition-colors">
            Tratamientos
          </Link>
          <span className="text-white/20">·</span>
          <Link to="/resultados" className="text-white/70 hover:text-velvet-gold transition-colors">
            Resultados
          </Link>
        </div>

        <div className="mb-8">
          <a
            href={LOCATION.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-velvet-gold transition-colors bg-white/5 border border-white/10 px-5 py-2.5 rounded-full group"
          >
            <MapPin className="w-3.5 h-3.5 text-velvet-gold group-hover:scale-110 transition-transform shrink-0" />
            <span>{LOCATION.full}</span>
            <span className="text-velvet-gold font-medium ml-1">📍 Ver en Google Maps →</span>
          </a>
        </div>

        <div className="h-px w-24 bg-white/10 mx-auto mb-6" />

        <p className="text-[12px] tracking-wide text-white/40 font-light font-display">
          © {year} Todos los derechos reservados | <span className="text-white/60">Velvet Clinic</span> — <span className="text-velvet-gold font-medium">ICONIC™ Russian Lips™</span>
        </p>
      </div>
    </footer>
  )
}
