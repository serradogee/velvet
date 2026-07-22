import { SITE } from '../../config/site'
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
        <div className="gold-line mb-6" />
        <p className="text-xs tracking-wide">
          © {year} {SITE.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
