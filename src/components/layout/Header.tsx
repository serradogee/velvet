import Logo from '../ui/Logo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-velvet-cream/92 backdrop-blur-md border-b border-velvet-beige/60">
      <div className="max-w-7xl mx-auto px-5 py-3 md:px-8 md:py-4 flex items-center justify-center">
        <a href="#" aria-label="Velvet Clinic — Inicio">
          <Logo size="sm" variant="dark" showTagline={false} />
        </a>
      </div>
    </header>
  )
}
