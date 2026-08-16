import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import AnimatedSection from '../components/ui/AnimatedSection'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { treatments } from '../data/content'
import { getImageFocusClass } from '../lib/imageFocus'

type CategoryFilter = 'all' | 'labios' | 'micropigmentacion' | 'facial' | 'personalizado'

const categories: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'Todos los tratamientos' },
  { id: 'labios', label: '💋 Labios ICONIC™' },
  { id: 'micropigmentacion', label: '🎨 Micropigmentación' },
  { id: 'facial', label: '✨ Medicina Facial' },
  { id: 'personalizado', label: '💎 Planes a Medida' },
]

const steps = [
  {
    number: '01',
    title: 'Diagnóstico y Estudio Facial',
    desc: 'Analizamos detenidamente la armonía y fisionomía de tu rostro para diseñar el enfoque más natural y favorecedor.',
  },
  {
    number: '02',
    title: 'Planificación Exclusiva',
    desc: 'Seleccionamos los productos de máxima pureza médica y adaptamos la técnica exacta a tus objetivos.',
  },
  {
    number: '03',
    title: 'Aplicación de Alta Precisión',
    desc: 'Procedimiento meticuloso, seguro y cómodo bajo los más estrictos estándares clínicos y estéticos.',
  },
  {
    number: '04',
    title: 'Seguimiento y Garantía Velvet',
    desc: 'Acompañamiento continuo post-tratamiento para verificar la evolución y asegurar resultados impecables.',
  },
]

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all')

  const filteredTreatments = selectedCategory === 'all'
    ? treatments
    : treatments.filter((t) => t.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="pt-20 bg-velvet-black text-white min-h-screen">
        {/* ── HERO BANNER WITH PHOTO & PHRASE ── */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/10">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-velvet-gold/10 blur-[140px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '36px 36px',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text / Phrase Column (Left) */}
              <div className="lg:col-span-7">
                <AnimatedSection>
                  {/* Breadcrumb / Top label */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-velvet-gold/30 text-xs font-light text-velvet-gold mb-6">
                    <Link to="/" className="text-white/60 hover:text-velvet-gold transition-colors">
                      Inicio
                    </Link>
                    <span>/</span>
                    <span className="text-velvet-gold font-medium">Tratamientos</span>
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
                    Tratamientos{' '}
                    <em className="not-italic text-velvet-gold">Exclusivos</em>
                  </h1>

                  <blockquote className="relative border-l-2 border-velvet-gold pl-5 py-1 mb-8">
                    <p className="text-white/85 text-lg md:text-xl font-light italic leading-relaxed">
                      &ldquo;Técnicas de vanguardia, precisión anatómica y la visión artística de Jennyfer Rivera para potenciar tu belleza natural con total armonía.&rdquo;
                    </p>
                  </blockquote>

                  <p className="text-white/60 text-sm md:text-base font-light mb-8 max-w-xl leading-relaxed">
                    Cada procedimiento es diseñado de forma individualizada tras un estudio exhaustivo de tus proporciones, buscando resultados elegantes, sutiles y respetuosos con tu propia esencia.
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-xs md:text-sm text-white/70 mb-8">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-velvet-gold shrink-0" />
                      Productos médicos certificados
                    </span>
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-velvet-gold shrink-0" />
                      Resultados naturales
                    </span>
                    <span className="flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-velvet-gold shrink-0" />
                      Atención personalizada
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <WhatsAppButton
                      label="Pedir cita por WhatsApp"
                      className="!bg-velvet-gold !text-black !border-velvet-gold hover:!bg-white font-medium"
                    />
                    <a
                      href="#catalogo-tratamientos"
                      className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-velvet-gold transition-colors py-2"
                    >
                      Explorar catálogo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Photo Column (Right) */}
              <div className="lg:col-span-5">
                <AnimatedSection delay={0.2} className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Corner accents */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-velvet-gold/50 z-10" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-velvet-gold/50 z-10" />

                  <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <img
                      src="/images/jennyfer-tratamientos.jpg"
                      alt="Jennyfer Rivera — Velvet Clinic"
                      className="w-full aspect-[3/4] object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                    {/* Bottom photo badge */}
                    <div className="absolute bottom-5 left-5 right-5 z-20">
                      <div className="bg-black/80 backdrop-blur-md border border-velvet-gold/30 px-4 py-3 rounded-md">
                        <p className="text-velvet-gold text-[10px] tracking-[0.25em] uppercase font-semibold">
                          Dirección y Creación Técnica
                        </p>
                        <p className="text-white font-display text-lg font-medium">
                          Jennyfer Rivera
                        </p>
                        <p className="text-white/50 text-[11px] mt-0.5">
                          Creadora de ICONIC™ Russian Lips
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ── FILTER CATEGORIES ── */}
        <section id="catalogo-tratamientos" className="sticky top-[61px] md:top-[69px] z-30 bg-velvet-black/90 backdrop-blur-md border-b border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-velvet-gold text-black shadow-md shadow-velvet-gold/20 font-semibold'
                        : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── TREATMENTS LISTING ── */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence>
              {filteredTreatments.map((treatment) => (
                <motion.article
                  key={treatment.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#121212] border border-white/10 hover:border-velvet-gold/40 rounded-xl overflow-hidden group flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-velvet-gold/5"
                >
                  {/* Image container */}
                  <div className="relative h-64 md:h-72 overflow-hidden bg-black">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${getImageFocusClass(treatment.imageFocus)}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/30 to-transparent" />
                    
                    {/* Top tags */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="text-2xl drop-shadow-md">{treatment.emoji}</span>
                      {treatment.tag && (
                        <span className="bg-velvet-gold/90 text-black text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                          {treatment.tag}
                        </span>
                      )}
                    </div>

                    {/* Duration badge */}
                    {treatment.duration && (
                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-light text-white/80 border border-white/10">
                        <Clock className="w-3.5 h-3.5 text-velvet-gold" />
                        <span>{treatment.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-1 group-hover:text-velvet-gold transition-colors">
                      {treatment.title}
                    </h2>

                    {treatment.subtitle && (
                      <p className="text-velvet-gold/90 text-xs tracking-wider uppercase font-medium mb-3">
                        {treatment.subtitle}
                      </p>
                    )}

                    <p className="text-white/65 text-sm md:text-base leading-relaxed font-light mb-6">
                      {treatment.description}
                    </p>

                    {/* Benefits List */}
                    <div className="bg-white/5 border border-white/5 rounded-lg p-4 mb-6 flex-1">
                      <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3">
                        Beneficios destacados:
                      </p>
                      <ul className="space-y-2.5">
                        {treatment.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-light">
                            <Check className="w-4 h-4 text-velvet-gold shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2">
                      <WhatsAppButton
                        label={`Pedir cita para ${treatment.title}`}
                        message={`¡Hola Velvet Clinic! Me gustaría recibir información y pedir cita para el tratamiento: ${treatment.title}.`}
                        className="w-full !bg-velvet-gold !text-black !border-velvet-gold hover:!bg-white font-medium shadow-md"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ── CLINICAL PROTOCOL (EL MÉTODO VELVET) ── */}
        <section className="py-20 bg-[#0a0a0a] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-velvet-gold text-xs tracking-[0.3em] uppercase font-medium mb-3 block">
                Nuestra Metodología
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                El Protocolo Velvet Clinic
              </h2>
              <p className="text-white/60 text-sm md:text-base font-light">
                Cada detalle está meticulosamente estructurado para que disfrutes de una experiencia segura, personalizada y con resultados que superen tus expectativas.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <AnimatedSection key={step.number} delay={idx * 0.1}>
                  <div className="p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-velvet-gold/40 transition-colors h-full flex flex-col">
                    <span className="font-display text-4xl font-bold text-velvet-gold/40 mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed flex-1">
                      {step.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADVISORY BANNER ON TREATMENTS PAGE ── */}
        <section className="py-20 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="p-8 md:p-12 lg:p-16 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-velvet-gold/30 text-center relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-velvet-gold/10 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-velvet-gold text-xs tracking-[0.3em] uppercase font-medium mb-3 block">
                Asesoramiento sin compromiso
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                ¿No estás segura de qué tratamiento elegir?
              </h2>
              <p className="text-white/70 text-sm md:text-base font-light max-w-xl mx-auto mb-8 leading-relaxed">
                Cuéntanos qué te gustaría mejorar o qué dudas tienes. Nuestro equipo médico y estético te recomendará el protocolo ideal adaptado a tu rostro.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppButton
                  label="Consultar por WhatsApp"
                  message="¡Hola Velvet Clinic! No estoy segura de qué tratamiento es el más adecuado para mí. ¿Podríais asesorarme?"
                  className="!bg-velvet-gold !text-black !border-velvet-gold hover:!bg-white font-medium"
                />
                <Link
                  to="/#sobre-mi"
                  className="inline-flex items-center gap-2 text-white/70 text-sm font-light hover:text-velvet-gold transition-colors py-2"
                >
                  <span>Conocer a Jennyfer Rivera</span>
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
