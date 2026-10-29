import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import AnimatedSection from '../components/ui/AnimatedSection'
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { results } from '../data/content'
import { getImageFocusClass } from '../lib/imageFocus'

type ResultFilter = 'all' | 'comparison' | 'showcase'

const filterTabs: { id: ResultFilter; label: string }[] = [
  { id: 'all', label: 'Todos los resultados' },
  { id: 'comparison', label: 'Antes y después interactivo' },
  { id: 'showcase', label: 'Casos y resultados' },
]

export default function ResultsPage() {
  const [filter, setFilter] = useState<ResultFilter>('all')

  const filteredResults = filter === 'all'
    ? results
    : results.filter((item) => item.type === filter)

  const cleanTitle = (title?: string) => {
    if (!title) return null
    const lower = title.toLowerCase()
    if (lower.includes('aumento de labios') || lower.includes('micropigmentación') || lower.includes('micropigmentacion')) {
      return null
    }
    return title
  }

  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">
        {/* ── BLOQUE 1: HERO / PORTADA CLÍNICA [FONDO NEGRO] ── */}
        <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/10 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              {/* Breadcrumb */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-light text-white/70 mb-6">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">
                  Inicio
                </Link>
                <span>/</span>
                <span className="text-white font-medium">Resultados</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08] uppercase">
                Resultados Reales & <br />
                <span className="text-white/80 font-light italic">Armonía de Autor</span>
              </h1>

              <blockquote className="max-w-2xl mx-auto border-y border-white/15 py-3 mb-8 bg-white/[0.02]">
                <p className="text-white/85 text-base sm:text-lg font-light italic leading-relaxed">
                  &ldquo;Casos clínicos reales sin artificios. Precisión médica, simetría y naturalidad en cada paciente.&rdquo;
                </p>
              </blockquote>

              <p className="text-white/60 text-sm md:text-base font-light max-w-xl mx-auto mb-8 leading-relaxed">
                Desliza sobre los controles interactivos para apreciar la transición y definición milimétrica conseguida en nuestra consulta de Madrid.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 text-xs md:text-sm text-white/70 mb-10">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  Casos 100% reales en Madrid
                </span>
                <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block" />
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white shrink-0" />
                  Sin filtros ni retoques distorsionados
                </span>
                <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block" />
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-white shrink-0" />
                  Garantía de máxima naturalidad
                </span>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <WhatsAppButton
                  label="Pedir cita por WhatsApp"
                />
                <a
                  href="#galeria-resultados"
                  className="btn-pill-light text-center"
                >
                  Explorar galería ↓
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── BLOQUE 2: CATÁLOGO DE RESULTADOS [FONDO BLANCO / LETRA NEGRA] ── */}
        <section id="galeria-resultados" className="bg-white text-zinc-900 py-20 md:py-28 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-zinc-500 text-xs tracking-[0.25em] uppercase font-bold block mb-2">
                CASOS CLÍNICOS
              </span>
              <h2 className="text-black font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
                Galería de Pacientes
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base font-light mt-3">
                Selecciona la modalidad para explorar comparativas antes/después o fotografías de detalle.
              </p>
            </AnimatedSection>

            {/* Filter buttons on white background */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide py-2 mb-16">
              {filterTabs.map((tab) => {
                const isActive = filter === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-black text-white shadow-md'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResults.map((item) => {
                const displayTitle = cleanTitle(item.title)
                return (
                  <div
                    key={item.id}
                    className="bg-zinc-50 border border-zinc-200/90 rounded-2xl overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:border-black/50 shadow-sm hover:shadow-xl"
                  >
                    {item.type === 'comparison' ? (
                      <div className="flex-1 flex flex-col">
                        <BeforeAfterSlider
                          title={displayTitle ?? 'Antes y después'}
                          before={item.splitImage ?? item.before ?? ''}
                          after={item.splitImage ? undefined : item.after}
                          imageFocus={item.imageFocus ?? 'profile'}
                        />
                        <div className="p-4 bg-zinc-100 border-t border-zinc-200 text-center">
                          <p className="text-xs uppercase tracking-widest text-zinc-600 font-semibold">
                            ↔️ Desliza para comparar
                          </p>
                        </div>
                      </div>
                    ) : item.type === 'showcase' && item.src ? (
                      <div className="flex-1 flex flex-col">
                        <div className="relative h-80 sm:h-96 overflow-hidden bg-black">
                          <img
                            src={item.src}
                            alt={displayTitle ?? 'Resultado real'}
                            loading="lazy"
                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${getImageFocusClass(item.imageFocus ?? 'center')}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <span className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                            Caso Real
                          </span>
                        </div>
                        {displayTitle && (
                          <div className="p-4 bg-zinc-100 border-t border-zinc-200 text-center">
                            <p className="font-display text-sm font-semibold uppercase tracking-wider text-black">
                              {displayTitle}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* ── BLOQUE 3: CIERRE & LLAMADA A LA ACCIÓN [FONDO NEGRO] ── */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <div className="p-8 md:p-14 rounded-3xl bg-[#111113] border border-white/15 text-center shadow-2xl relative overflow-hidden">
                <span className="text-white/60 text-xs tracking-[0.25em] uppercase font-bold mb-3 block">
                  TU VALORACIÓN PERSONALIZADA
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
                  ¿Quieres un resultado como estos?
                </h2>
                <p className="text-white/70 text-sm md:text-base font-light max-w-xl mx-auto mb-8 leading-relaxed">
                  Agenda tu consulta en Madrid con nuestro equipo especializado. Realizaremos un diagnóstico biométrico y facial adaptado a tus expectativas.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <WhatsAppButton
                    label="Pedir cita por WhatsApp"
                  />
                  <Link
                    to="/tratamientos"
                    className="inline-flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors py-2"
                  >
                    <span>Ver todos los tratamientos</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
