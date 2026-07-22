export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-velvet-cream/90 backdrop-blur-md border-b border-velvet-beige/50">
      <div className="max-w-7xl mx-auto px-5 py-4 md:px-8 flex items-center justify-center">
        <a href="#" className="group flex flex-col items-center">
          <span className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-velvet-black">
            Velvet
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-velvet-gold font-medium -mt-1">
            Clinic
          </span>
        </a>
      </div>
    </header>
  )
}
