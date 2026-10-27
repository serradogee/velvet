import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Clock, ArrowRight, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import AnimatedSection from '../components/ui/AnimatedSection'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { treatments } from '../data/content'
import { getImageFocusClass } from '../lib/imageFocus'

type CategoryFilter = 'all' | 'labios' | 'facial' | 'micropigmentacion' | 'personalizado' | 'pestanas'

const categories: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'Todos los tratamientos' },
  { id: 'labios', label: 'Labios ICONIC™' },
  { id: 'facial', label: 'Armonización Facial & Nariz' },
  { id: 'micropigmentacion', label: 'Micropigmentación' },
  { id: 'pestanas', label: 'Pestañas & Lifting' },
  { id: 'personalizado', label: 'Diagnóstico en Consulta' },
]

const steps = [
  {
    number: '01',
    title: 'Diagnóstico Anatómico & Biometría',
    desc: 'Evaluamos minuciosamente los ángulos faciales, calidad tisular y proporciones de tu rostro para definir la estrategia más armónica y personalizada.',
  },
  {
    number: '02',
    title: 'Planificación Médica Exclusiva',
    desc: 'Seleccionamos los productos de máxima pureza médica y adaptamos la técnica exacta a tus objetivos.',
  },
  {
    number: '03',
    title: 'Ejecución Clínica de Alta Precisión',
    desc: 'Procedimiento milimétrico con cánulas o microagujas ultra-finas bajo los más estrictos estándares de asepsia y confort para el paciente.',
  },
  {
    number: '04',
    title: 'Acompañamiento & Garantía Velvet',
    desc: 'Seguimiento continuado post-tratamiento con revisiones programadas para certificar una evolución óptima y resultados naturales duraderos.',
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
      <main className="bg-black text-white min-h-screen">
        
        {/* ── BLOQUE 1: HERO / PORTADA CLÍNICA [FONDO NEGRO] ── */}
        <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/10 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text Column */}
              <div className="order-2 lg:order-1 lg:col-span-7">
                <AnimatedSection>
                  {/* Breadcrumb */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-light text-white/70 mb-6">
                    <Link to="/" className="text-white/60 hover:text-white transition-colors">
                      Inicio
                    </Link>
                    <span>/</span>
                    <span className="text-white font-medium">Tratamientos</span>
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08] uppercase">
                    Procedimientos Médicos & <br />
                    <span className="text-white/80 font-light italic">Estética de Autor</span>
                  </h1>

                  <blockquote className="border-l-2 border-white/50 pl-5 py-2 mb-8 bg-white/[0.02] rounded-r-md">
                    <p className="text-white/85 text-base sm:text-lg font-light italic leading-relaxed">
                      &ldquo;Técnicas de vanguardia, precisión anatómica y rigor médico para potenciar tu belleza natural con total equilibrio y naturalidad.&rdquo;
                    </p>
                  </blockquote>

                  <p className="text-white/60 text-sm md:text-base font-light mb-8 max-w-xl leading-relaxed">
                    En Velvet Clinic cada procedimiento se fundamenta en un diagnóstico exhaustivo de tus proporciones, seleccionando exclusivamente productos de grado farmacéutico con marcado CE y máxima biocompatibilidad.
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-xs md:text-sm text-white/70 mb-10">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                      Productos médicos certificados CE
                    </span>
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-white shrink-0" />
                      Resultados naturales garantizados
                    </span>
                    <span className="flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-white shrink-0" />
                      Atención individualizada en Madrid
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <WhatsAppButton
                      label="Pedir cita por WhatsApp"
                      className="btn-pill-light !bg-white !text-black !border-white hover:!bg-transparent hover:!text-white font-medium shadow-md"
                    />
                    <a
                      href="#catalogo-tratamientos"
                      className="btn-pill-light text-center"
                    >
                      Explorar catálogo ↓
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Photo Column - Capsule oval frame */}
              <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
                <AnimatedSection delay={0.2} className="relative w-full max-w-[340px] sm:max-w-[380px]">
                  <div className="relative w-full aspect-[3/4] rounded-[180px] overflow-hidden border border-white/20 shadow-2xl bg-zinc-950">
                    <img
                      src="/images/jennyfer-tratamientos.jpg"
                      alt="Velvet Clinic — Dirección Técnica"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-7 left-0 right-0 text-center px-6">
                      <p className="text-white/80 text-[10px] tracking-[0.25em] uppercase font-semibold">
                        Dirección & Técnica
                      </p>
                      <p className="text-white font-display text-lg font-medium mt-0.5">
                        Velvet Clinic
                      </p>
                      <p className="text-white/50 text-[11px] mt-0.5">
                        Creadores de ICONIC™ Russian Lips
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ── BLOQUE 2: CATÁLOGO Y FILTROS [FONDO BLANCO / LETRA NEGRA] ── */}
        <section id="catalogo-tratamientos" className="bg-white text-zinc-900 py-20 md:py-28 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-zinc-500 text-xs tracking-[0.25em] uppercase font-bold block mb-2">
                CATÁLOGO PROFESIONAL
              </span>
              <h2 className="text-black font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase">
                Tratamientos de la Clínica
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base font-light mt-3">
                Selecciona la categoría deseada para explorar los protocolos clínicos y sus especificaciones técnicas.
              </p>
            </AnimatedSection>

            {/* Filter buttons on white background */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide py-2 mb-16">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-black text-white shadow-md'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>

            {/* Treatments Grid */}
          <!-- Begin Alternating Treatment Sections -->
          <section className="space-y-24 md:space-y-32">
            {filteredTreatments.map((treatment, idx) => (
              <AnimatedSection key={treatment.id} className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
                {idx % 2 === 0 ? (
                  <>
                    <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${getImageFocusClass(treatment.imageFocus)}`}
                      />
                      {treatment.tag && (
                        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                          {treatment.tag}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 md:max-w-lg space-y-5">
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-black">
                        {treatment.title}
                      </h3>
                      {treatment.subtitle && (
                        <p className="text-zinc-500 uppercase text-sm font-medium">
                          {treatment.subtitle}
                        </p>
                      )}
                      <p className="text-zinc-700 text-base leading-relaxed">
                        {treatment.description}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600 text-sm">
                        {treatment.benefits.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                      {treatment.duration && (
                        <p className="text-sm text-zinc-500 mt-2">Duración: {treatment.duration}</p>
                      )}
                      <WhatsAppButton
                        label={`Consultar ${treatment.title}`}
                        message={`¡Hola Velvet Clinic! Me gustaría info y cita para ${treatment.title}.`}
                        className="mt-4 !rounded-full !border !border-black !bg-transparent !text-black !px-6 !py-2 !text-sm !font-medium hover:!bg-black hover:!text-white transition"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 md:max-w-lg space-y-5 order-2 md:order-1">
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-black">
                        {treatment.title}
                      </h3>
                      {treatment.subtitle && (
                        <p className="text-zinc-500 uppercase text-sm font-medium">
                          {treatment.subtitle}
                        </p>
                      )}
                      <p className="text-zinc-700 text-base leading-relaxed">
                        {treatment.description}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600 text-sm">
                        {treatment.benefits.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                      {treatment.duration && (
                        <p className="text-sm text-zinc-500 mt-2">Duración: {treatment.duration}</p>
                      )}
                      <WhatsAppButton
                        label={`Consultar ${treatment.title}`}
                        message={`¡Hola Velvet Clinic! Me gustaría info y cita para ${treatment.title}.`}
                        className="mt-4 !rounded-full !border !border-black !bg-transparent !text-black !px-6 !py-2 !text-sm !font-medium hover:!bg-black hover:!text-white transition"
                      />
                    </div>
                    <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg order-1 md:order-2">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${getImageFocusClass(treatment.imageFocus)}`}
                      />
                      {treatment.tag && (
                        <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                          {treatment.tag}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </AnimatedSection>
            ))}
          </section>
          <!-- End Alternating Treatment Sections -->
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredTreatments.map((treatment) => (
                  <motion.article
                    key={treatment.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="bg-zinc-50 border border-zinc-200/90 rounded-2xl overflow-hidden group flex flex-col hover:border-black/50 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    {/* Image container */}
                    <div className="relative h-60 overflow-hidden bg-black">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${getImageFocusClass(treatment.imageFocus)}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Top tag */}
                      {treatment.tag && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                            {treatment.tag}
                          </span>
                        </div>
                      )}

                      {/* Duration badge */}
                      {treatment.duration && (
                        <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-xs font-light text-white/90 border border-white/10">
                          <Clock className="w-3.5 h-3.5 text-white/80" />
                          <span>{treatment.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-black mb-1">
                        {treatment.title}
                      </h3>

                      {treatment.subtitle && (
                        <p className="text-zinc-500 text-[11px] tracking-wider uppercase font-semibold mb-3">
                          {treatment.subtitle}
                        </p>
                      )}

                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light mb-5">
                        {treatment.description}
                      </p>

                      {/* Benefits Checklist */}
                      <div className="bg-white border border-zinc-200 rounded-xl p-4 mb-6 flex-1">
                        <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-2.5">
                          Especificaciones & Beneficios:
                        </p>
                        <ul className="space-y-2">
                          {treatment.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 font-light">
                              <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Button */}
                      <div className="pt-1">
                        <WhatsAppButton
                          label={`Consultar ${treatment.title}`}
                          message={`¡Hola Velvet Clinic! Me gustaría solicitar información y pedir cita para el tratamiento: ${treatment.title}.`}
                          className="w-full !rounded-full !border !border-black !bg-transparent !text-black !py-3 !text-xs !font-semibold !tracking-[0.12em] !uppercase hover:!bg-black hover:!text-white transition-all duration-300"
                        />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* ── BLOQUE 3: EL MÉTODO Y PROTOCOLO CLÍNICO [FONDO NEGRO] ── */}
        <section className="py-24 bg-black text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-semibold mb-3 block">
                METODOLOGÍA MÉDICA
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
                El Protocolo Velvet Clinic
              </h2>
              <p className="text-white/60 text-sm md:text-base font-light">
                Cada detalle está estructurado bajo rigor clínico para que disfrutes de un procedimiento seguro, cómodo y con resultados de máxima naturalidad.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <AnimatedSection key={step.number} delay={idx * 0.1}>
                  <div className="p-6 md:p-8 rounded-2xl bg-[#111113] border border-white/15 hover:border-white/40 transition-colors h-full flex flex-col shadow-lg">
                    <span className="font-display text-4xl font-bold text-white/30 mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2">
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

        {/* ── BLOQUE 4: ASESORAMIENTO MÉDICO [FONDO BLANCO / LETRA NEGRA] ── */}
        <section className="py-24 bg-[#FAFAFA] text-zinc-900">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <div className="p-8 md:p-14 rounded-3xl bg-white border border-zinc-200 text-center shadow-lg relative overflow-hidden">
                <span className="text-zinc-500 text-xs tracking-[0.25em] uppercase font-bold mb-3 block">
                  ATENCIÓN PERSONALIZADA
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                  ¿Dudas sobre qué procedimiento elegir?
                </h2>
                <p className="text-zinc-600 text-sm md:text-base font-light max-w-xl mx-auto mb-8 leading-relaxed">
                  Cuéntanos tus expectativas o inquietudes. Nuestro equipo especialista te asesorará con total transparencia y criterio médico sobre la opción idónea para tu fisionomía.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <WhatsAppButton
                    label="Asesoramiento por WhatsApp"
                    message="¡Hola Velvet Clinic! No estoy segura de qué tratamiento es el más adecuado para mí. ¿Podríais asesorarme?"
                    className="!rounded-full !border !border-black !bg-black !text-white !px-8 !py-3.5 !text-xs !font-semibold !tracking-[0.15em] !uppercase hover:!bg-transparent hover:!text-black transition-all duration-300 shadow-md"
                  />
                  <Link
                    to="/#sobre-nosotros"
                    className="inline-flex items-center gap-2 text-zinc-700 text-xs font-semibold uppercase tracking-wider hover:text-black transition-colors py-2"
                  >
                    <span>Conocer al equipo</span>
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
