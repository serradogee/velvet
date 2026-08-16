import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import WhatsAppButton from '../ui/WhatsAppButton'

const specialties = [
  { icon: '💋', label: 'ICONIC™ Russian Lips', desc: 'Creadora de la técnica' },
  { icon: '✨', label: 'Armonización Facial', desc: 'Medicina estética avanzada' },
  { icon: '🎨', label: 'Micropigmentación Realista', desc: 'Brows · Lips · Freckles · Blush' },
]

const bioParagraphs = [
  'Mi camino en el mundo de la belleza y la estética nació de mi pasión por realzar la belleza natural y ayudar a cada persona a sentirse más segura de sí misma.',
  'Con el tiempo descubrí que la estética era mucho más que transformar una imagen: era encontrar el equilibrio entre técnica, precisión y naturalidad.',
  'A través de ICONIC™ Russian Lips, desarrollo una visión propia de los labios, buscando una forma definida, equilibrada y adaptada a cada rostro.',
  'Así nació Velvet Clinic, un espacio dedicado a la medicina estética avanzada, donde cada tratamiento parte de un estudio personalizado y de una misma filosofía: potenciar tu belleza sin perder tu esencia.',
]

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative bg-black overflow-hidden"
    >
      {/* Decorative background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Portrait (Primero en móvil y a la izquierda en desktop) ── */}
          <AnimatedSection className="relative order-1 lg:order-1">
            {/* Gold corner accent top-left */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-velvet-gold/50 z-10" />
            {/* Gold corner accent bottom-right */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-velvet-gold/50 z-10" />

            <div className="relative overflow-hidden rounded-sm max-w-md mx-auto lg:max-w-none">
              {/* Subtle gold overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src="/images/jennyfer-sobre-mi.jpg"
                alt="Jennyfer Rivera — Fundadora Velvet Clinic"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              {/* Name badge over photo */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-black/70 backdrop-blur-md border border-velvet-gold/30 px-5 py-4 rounded-sm">
                  <p className="text-velvet-gold text-xs tracking-[0.3em] uppercase font-medium mb-1">
                    Fundadora & Directora
                  </p>
                  <p className="text-white font-display text-2xl font-semibold">
                    Jennyfer Rivera
                  </p>
                  <p className="text-white/50 text-xs mt-1 tracking-wide">
                    Velvet Clinic · Madrid
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT: Bio text (Segundo en móvil y a la derecha en desktop) ── */}
          <div className="order-2 lg:order-2 text-white">
            {/* Gold line + label */}
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-velvet-gold" />
                <span className="text-velvet-gold text-xs tracking-[0.3em] uppercase font-medium">
                  Sobre mí
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-4">
                Hola, soy
                <br />
                <em className="not-italic text-velvet-gold">Jennyfer Rivera</em>
              </h2>

              <p className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-8 max-w-lg">
                Fundadora de Velvet Clinic · Creadora de{' '}
                <span className="text-velvet-gold font-medium">ICONIC™ Russian Lips</span>{' '}
                · Especialista en medicina estética avanzada, armonización facial
                y micropigmentación realista.
              </p>
            </AnimatedSection>

            {/* Bio paragraphs */}
            <div className="space-y-5 mb-10">
              {bioParagraphs.map((para, i) => (
                <AnimatedSection key={i} delay={0.1 + i * 0.08}>
                  <p className="text-white/65 text-sm md:text-base font-light leading-relaxed border-l border-velvet-gold/20 pl-4">
                    {para}
                  </p>
                </AnimatedSection>
              ))}
            </div>

            {/* Specialty badges */}
            <AnimatedSection delay={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
                {specialties.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white/5 border border-white/10 hover:border-velvet-gold/40 rounded-sm p-4 text-center transition-colors duration-300"
                  >
                    <span className="text-2xl mb-2 block">{s.icon}</span>
                    <p className="text-white text-xs font-medium tracking-wide leading-tight mb-1">
                      {s.label}
                    </p>
                    <p className="text-white/40 text-[10px] tracking-wide uppercase">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.6}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <WhatsAppButton
                  label="Reserva tu cita →"
                  className="!bg-velvet-gold !text-white !border-velvet-gold hover:!bg-white hover:!text-black"
                />
                <Link
                  to="/tratamientos"
                  className="inline-flex items-center gap-2 text-white/50 text-sm font-light tracking-wide hover:text-velvet-gold transition-colors pt-3 sm:pt-3.5"
                >
                  Ver tratamientos
                  <span className="h-px w-6 bg-current" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom gold separator line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-velvet-gold/30 to-transparent" />
    </section>
  )
}
