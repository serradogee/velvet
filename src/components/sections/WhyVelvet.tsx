import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import WhatsAppButton from '../ui/WhatsAppButton'

const checklistItems = [
  'Diseño y estudio anatómico personalizado de cada rostro',
  'Técnica ICONIC™ Russian Lips exclusiva sin proyecciones artificiales',
  'Viales y productos certificados de máxima pureza médica',
  'Técnicas de confort y protocolos mínimamente invasivos',
  'Seguimiento y acompañamiento post-tratamiento continuo',
  'Atención profesional de alta especialización médica en Madrid',
]

export default function WhyVelvet() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden border-b border-white/10">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image showcase */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <AnimatedSection className="relative w-full max-w-[440px]">
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-velvet-gold/40 z-10" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-velvet-gold/40 z-10" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-zinc-950">
                <img
                  src="/images/jennyfer-tratamientos.jpg"
                  alt="Velvet Clinic — Armonización Facial y Medicina Estética"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Bottom badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/80 backdrop-blur-md border border-velvet-gold/30 px-5 py-3.5 rounded-lg">
                    <p className="text-velvet-gold text-[10px] tracking-[0.25em] uppercase font-semibold">
                      Garantía & Excelencia
                    </p>
                    <p className="text-white font-display text-lg font-medium">
                      Velvet Clinic Madrid
                    </p>
                    <p className="text-white/50 text-[11px] mt-0.5">
                      Técnicas de Autor & Resultados Naturales
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: Checklist Content (Guilty Freckles style) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <AnimatedSection>
              <div className="mb-3">
                <span className="text-velvet-gold text-xs tracking-[0.25em] uppercase font-semibold">
                  VELVET CLINIC EXCLUSIVE
                </span>
              </div>

              <h2 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                ¿Por qué elegir los tratamientos de Velvet Clinic?
              </h2>

              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed mb-8">
                En Velvet Clinic combinamos la ciencia médica más rigurosa con una sensibilidad artística única. Cada procedimiento está minuciosamente planificado para realzar tu belleza sin alterar tu identidad:
              </p>

              {/* Guilty Freckles signature check list */}
              <div className="space-y-3.5 mb-10">
                {checklistItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-lg p-3 sm:p-3.5 hover:border-velvet-gold/30 transition-colors"
                  >
                    <span className="text-velvet-gold text-base shrink-0 leading-none mt-0.5">
                      ✔️
                    </span>
                    <span className="text-white/85 text-xs sm:text-sm font-light">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Pill CTA Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <WhatsAppButton
                  label="Consultar disponibilidad / Reservar"
                  message="¡Hola Velvet Clinic! Me gustaría solicitar información sobre los tratamientos y reservar una cita."
                  className="btn-pill-light !bg-transparent !border-white hover:!bg-white hover:!text-black"
                />
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
