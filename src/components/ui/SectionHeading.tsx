interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  theme?: 'light' | 'dark'
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  theme = 'light',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleClass = theme === 'dark' ? 'text-white' : 'text-velvet-black'
  const subtitleClass =
    theme === 'dark' ? 'text-white/70' : 'text-velvet-charcoal/70'

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignClass}`}>
      <div className={`gold-line mb-6 ${align === 'left' ? 'mx-0' : ''}`} />
      <h2
        className={`display-heading text-3xl md:text-4xl lg:text-5xl leading-tight ${titleClass}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed font-light ${subtitleClass}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
