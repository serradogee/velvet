import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { results } from '../../data/content'
import { getImageFocusClass } from '../../lib/imageFocus'
import AnimatedSection from '../ui/AnimatedSection'
import BeforeAfterSlider from '../ui/BeforeAfterSlider'
import SectionHeading from '../ui/SectionHeading'

export default function Results() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15)
  }

  useEffect(() => {
    checkScroll()
    const current = scrollRef.current
    if (current) {
      current.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
    }
    return () => {
      if (current) {
        current.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.85
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const [isMouseDown, setIsMouseDown] = useState(false)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button, video, input, select, textarea, [role="slider"]')) return
    isDraggingRef.current = true
    setIsMouseDown(true)
    if (scrollRef.current) {
      startXRef.current = e.pageX - scrollRef.current.offsetLeft
      scrollLeftRef.current = scrollRef.current.scrollLeft
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startXRef.current) * 1.4
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk
  }

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false
    setIsMouseDown(false)
  }

  const cleanTitle = (title?: string) => {
    if (!title) return null
    const lower = title.toLowerCase()
    if (lower.includes('aumento de labios') || lower.includes('micropigmentación') || lower.includes('micropigmentacion')) {
      return null
    }
    return title
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

        {/* Indicador visual para versión móvil */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-4 text-xs font-light text-velvet-black/80 bg-white/90 backdrop-blur-xs py-1.5 px-4 rounded-full border border-velvet-beige shadow-xs w-fit mx-auto animate-pulse">
          <span>Desliza para ver más resultados</span>
          <ChevronRight className="w-4 h-4 text-velvet-gold" />
        </div>

        <div className="relative group">
          {/* Botón Navegación Izquierda (Móvil y Desktop) */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-1 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-velvet-beige shadow-xl text-velvet-black transition-all duration-300 hover:bg-velvet-gold hover:text-white hover:scale-105 active:scale-95 ${
              !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-90 hover:opacity-100'
            }`}
            aria-label="Anterior resultado"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 md:mx-0 md:px-0 select-none ${
              isMouseDown ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
            }`}
          >
            {results.map((item, index) => {
              const displayTitle = cleanTitle(item.title)
              return (
                <AnimatedSection
                  key={item.id}
                  delay={index * 0.08}
                  className={`snap-center shrink-0 ${
                    item.type === 'comparison'
                      ? 'w-[88vw] sm:w-[75vw] md:w-[420px]'
                      : 'w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[340px]'
                  }`}
                >
                  <div className="premium-card overflow-hidden h-full flex flex-col justify-between">
                    {item.type === 'comparison' ? (
                      <BeforeAfterSlider
                        title={displayTitle ?? 'Antes y después'}
                        before={item.splitImage ?? item.before ?? ''}
                        after={item.splitImage ? undefined : item.after}
                        imageFocus={item.imageFocus ?? 'profile'}
                      />
                    ) : item.type === 'showcase' && item.src ? (
                      <div className="relative">
                        <img
                          src={item.src}
                          alt={displayTitle ?? 'Resultado real'}
                          loading="lazy"
                          className={`w-full h-80 sm:h-96 object-cover bg-velvet-beige ${getImageFocusClass(item.imageFocus ?? 'center')}`}
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
                        className="w-full h-80 sm:h-96 object-cover bg-velvet-black"
                      />
                    ) : null}

                    {displayTitle && (
                      <p className="p-4 text-center font-display text-base sm:text-lg text-velvet-black">
                        {displayTitle}
                      </p>
                    )}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>

          {/* Botón Navegación Derecha (Móvil y Desktop) */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-1 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/95 backdrop-blur-md border border-velvet-beige shadow-xl text-velvet-black transition-all duration-300 hover:bg-velvet-gold hover:text-white hover:scale-105 active:scale-95 ${
              !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-90 hover:opacity-100'
            }`}
            aria-label="Siguiente resultado"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  )
}
