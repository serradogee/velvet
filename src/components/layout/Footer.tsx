import { SITE } from '../../config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-velvet-black text-white/70 section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-display text-2xl text-white mb-2">Velvet Clinic</p>
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
