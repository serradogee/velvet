import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { results } from '../../data/content'
import { getImageFocusClass } from '../../lib/imageFocus'
import AnimatedSection from '../ui/AnimatedSection'
import BeforeAfterSlider from '../ui/BeforeAfterSlider'
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
            subtitle="Desliza la línea para comparar el antes y el después. Resultados reales de nuestras clientas."
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
                className={`snap-center shrink-0 ${
                  item.type === 'comparison'
                    ? 'w-[88vw] sm:w-[75vw] md:w-[420px]'
                    : 'w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[340px]'
                }`}
              >
                <div className="premium-card overflow-hidden">
                  {item.type === 'comparison' ? (
                    <BeforeAfterSlider
                      title={item.title}
                      before={item.splitImage ?? item.before ?? ''}
                      after={item.splitImage ? undefined : item.after}
                      imageFocus={item.imageFocus ?? 'profile'}
                    />
                  ) : item.type === 'showcase' && item.src ? (
                    <div className="relative">
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className={`w-full h-80 object-cover bg-velvet-beige ${getImageFocusClass(item.imageFocus ?? 'lips')}`}
                      />
                      <span className="absolute top-3 right-3 bg-velvet-gold text-white text-xs px-2.5 py-1 rounded-full tracking-wide">
                        Resultado real
                      </span>
                    </div>
                  ) : item.type === 'video' && item.src ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-80 object-cover bg-velvet-black"
                    />
                  ) : null}

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
