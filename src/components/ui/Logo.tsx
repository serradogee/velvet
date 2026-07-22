interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light'
  showTagline?: boolean
}

const sizes = {
  sm: {
    monogram: 'text-[2rem] md:text-[2.35rem]',
    monogramC: 'text-[1.65rem] md:text-[1.9rem] -ml-[0.55rem] md:-ml-[0.65rem]',
    name: 'text-[0.52rem] md:text-[0.58rem] tracking-[0.38em]',
    tagline: 'text-[0.38rem] md:text-[0.42rem] tracking-[0.28em]',
    gap: 'mt-0.5',
  },
  md: {
    monogram: 'text-[2.75rem] md:text-[3.25rem]',
    monogramC: 'text-[2.2rem] md:text-[2.6rem] -ml-[0.7rem] md:-ml-[0.85rem]',
    name: 'text-[0.62rem] md:text-[0.7rem] tracking-[0.4em]',
    tagline: 'text-[0.45rem] md:text-[0.5rem] tracking-[0.3em]',
    gap: 'mt-1',
  },
  lg: {
    monogram: 'text-[4rem] md:text-[5rem]',
    monogramC: 'text-[3.2rem] md:text-[4rem] -ml-[1rem] md:-ml-[1.2rem]',
    name: 'text-[0.75rem] md:text-[0.85rem] tracking-[0.42em]',
    tagline: 'text-[0.52rem] md:text-[0.58rem] tracking-[0.32em]',
    gap: 'mt-1.5',
  },
}

export default function Logo({
  className = '',
  size = 'md',
  variant = 'dark',
  showTagline = true,
}: LogoProps) {
  const s = sizes[size]
  const color =
    variant === 'light'
      ? 'text-white'
      : 'text-velvet-black'
  const taglineColor =
    variant === 'light' ? 'text-white/65' : 'text-velvet-charcoal/55'

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${color} ${className}`}
      aria-label="Velvet Clinic — Luxury Aesthetic Medicine"
    >
      <div className="flex items-end justify-center leading-none">
        <span className={`font-display font-semibold ${s.monogram}`}>V</span>
        <span
          className={`font-display font-light ${s.monogramC} mb-[0.1em]`}
        >
          C
        </span>
      </div>

      <p className={`font-display uppercase font-medium ${s.name} ${s.gap}`}>
        Velvet Clinic
      </p>

      {showTagline && (
        <p
          className={`font-body uppercase font-light ${s.tagline} ${taglineColor} mt-1`}
        >
          Luxury Aesthetic Medicine
        </p>
      )}
    </div>
  )
}
