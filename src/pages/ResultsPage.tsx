import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import AnimatedSection from '../components/ui/AnimatedSection'
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { results } from '../data/content'
import { getImageFocusClass } from '../lib/imageFocus'

type ResultFilter = 'all' | 'comparison' | 'showcase' | 'video'

const filterTabs: { id: ResultFilter; label: string }[] = [
  { id: 'all', label: 'Todos los resultados' },
  { id: 'comparison', label: '↔️ Antes y después interactivo' },
  { id: 'showcase', label: '✨ Galería de casos reales' },
  { id: 'video', label: '🎬 Experiencias en vídeo' },
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
      <main className="pt-20 bg-velvet-black text-white min-h-screen">
        {/* ── HERO BANNER ── */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-velvet-gold/10 blur-[130px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '36px 36px',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              {/* Breadcrumb */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-velvet-gold/30 text-xs font-light text-velvet-gold mb-6">
                <Link to="/" className="text-white/60 hover:text-velvet-gold transition-colors">
                  Inicio
                </Link>
                <span>/</span>
                <span className="text-velvet-gold font-medium">Resultados</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
                Resultados{' '}
                <em className="not-italic text-velvet-gold">Reales</em>
              </h1>

              <p className="text-white/70 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-8">
                Desliza sobre las imágenes interactivas para comparar el antes y después. Transformaciones auténticas que reflejan naturalidad, armonía y máxima precisión.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6 text-xs md:text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-velvet-gold" />
                  Casos 100% reales de pacientes en Madrid
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block" />
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-velvet-gold" />
                  Sin filtros ni retoques engañosos
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block" />
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-velvet-gold" />
                  Garantía de naturalidad
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FILTER TABS ── */}
        <section className="sticky top-[61px] md:top-[69px] z-30 bg-velvet-black/90 backdrop-blur-md border-b border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
              {filterTabs.map((tab) => {
                const isActive = filter === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-velvet-gold text-black shadow-md shadow-velvet-gold/20 font-semibold'
                        : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── RESULTS GALLERY ── */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredResults.map((item) => {
                const displayTitle = cleanTitle(item.title)
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#121212] border border-white/10 hover:border-velvet-gold/40 rounded-xl overflow-hidden group flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-velvet-gold/5"
                  >
                    {item.type === 'comparison' ? (
                      <div className="flex-1 flex flex-col">
                        <BeforeAfterSlider
                          title={displayTitle ?? 'Antes y después'}
                          before={item.splitImage ?? item.before ?? ''}
                          after={item.splitImage ? undefined : item.after}
                          imageFocus={item.imageFocus ?? 'profile'}
                        />
                        <div className="p-4 bg-white/5 border-t border-white/5 text-center">
                          <p className="text-xs uppercase tracking-widest text-velvet-gold font-medium">
                            Desliza para comparar
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
                          <span className="absolute top-4 right-4 bg-velvet-gold text-black text-xs font-semibold px-3 py-1 rounded-full tracking-wide shadow-md">
                            Caso real
                          </span>
                        </div>
                        {displayTitle && (
                          <div className="p-4 bg-white/5 border-t border-white/5 text-center">
                            <p className="font-display text-sm font-medium text-white">
                              {displayTitle}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : item.type === 'video' && item.src ? (
                      <div className="flex-1 flex flex-col">
                        <div className="relative h-80 sm:h-96 overflow-hidden bg-black">
                          <video
                            src={item.src}
                            poster={item.poster}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 bg-white/5 border-t border-white/5 text-center">
                          <p className="font-display text-sm font-medium text-white">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-20 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="p-8 md:p-12 lg:p-16 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-velvet-gold/30 text-center relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-velvet-gold/10 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-velvet-gold text-xs tracking-[0.3em] uppercase font-medium mb-3 block">
                Tu transformación personalizada
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                ¿Quieres conseguir un resultado como estos?
              </h2>
              <p className="text-white/70 text-sm md:text-base font-light max-w-xl mx-auto mb-8 leading-relaxed">
                Agenda tu cita o consulta con nuestro equipo médico y estético para recibir un estudio facial a medida.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppButton
                  label="Pedir cita por WhatsApp"
                  message="¡Hola Velvet Clinic! He visto los resultados en vuestra web y me gustaría pedir cita o información personalizada."
                  className="!bg-velvet-gold !text-black !border-velvet-gold hover:!bg-white font-medium"
                />
                <Link
                  to="/tratamientos"
                  className="inline-flex items-center gap-2 text-white/70 text-sm font-light hover:text-velvet-gold transition-colors py-2"
                >
                  <span>Ver todos los tratamientos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
