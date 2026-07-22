import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { results } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Results() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.85
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="section-padding bg-velvet-beige/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Resultados antes y después"
            subtitle="Transformaciones reales de nuestras clientas. Resultados naturales que hablan por sí solos."
          />
        </AnimatedSection>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/90 border border-velvet-beige shadow-lg hover:bg-velvet-gold hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0"
          >
            {results.map((item, index) => (
              <AnimatedSection
                key={item.id}
                delay={index * 0.08}
                className="snap-center shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[380px]"
              >
                <div className="premium-card overflow-hidden">
                  {item.type === 'image' && item.before && item.after ? (
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <img
                          src={item.before}
                          alt={`Antes - ${item.title}`}
                          loading="lazy"
                          className="w-full h-64 object-cover"
                        />
                        <span className="absolute bottom-2 left-2 bg-velvet-black/70 text-white text-xs px-2 py-1 rounded">
                          Antes
                        </span>
                      </div>
                      <div className="relative">
                        <img
                          src={item.after}
                          alt={`Después - ${item.title}`}
                          loading="lazy"
                          className="w-full h-64 object-cover"
                        />
                        <span className="absolute bottom-2 left-2 bg-velvet-gold text-white text-xs px-2 py-1 rounded">
                          Después
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <video
                        src={item.src}
                        poster={item.poster}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-64 object-cover bg-velvet-black"
                      />
                    </div>
                  )}
                  <p className="p-4 text-center font-display text-lg text-velvet-black">
                    {item.title}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/90 border border-velvet-beige shadow-lg hover:bg-velvet-gold hover:text-white transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
