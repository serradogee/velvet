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
    <section className="relative bg-white text-zinc-900 py-24 md:py-32 overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Checklist Content (Guilty Freckles white section style) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AnimatedSection>
              <div className="mb-3">
                <span className="text-zinc-900 text-xs tracking-[0.25em] uppercase font-bold">
                  VELVET CLINIC EXCLUSIVE
                </span>
              </div>

              <h2 className="text-black font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                ¿Qué aprenderás y qué resultados obtendrás en Velvet Clinic?
              </h2>

              <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed mb-8">
                En Velvet Clinic combinamos la ciencia médica más rigurosa con una sensibilidad estética única. Cada procedimiento está minuciosamente planificado para realzar tu belleza sin alterar tu identidad:
              </p>

              {/* Guilty Freckles signature check list on light background */}
              <div className="space-y-3 mb-10">
                {checklistItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index }}
                    className="flex items-start gap-3 bg-zinc-50 border border-zinc-200/80 rounded-lg p-3.5 hover:border-black/40 transition-colors shadow-sm"
                  >
                    <span className="text-black text-base shrink-0 leading-none mt-0.5 font-bold">
                      ✔️
                    </span>
                    <span className="text-zinc-800 text-xs sm:text-sm font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Pill CTA Button (Black border & black text, exactly like Guilty Freckles) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <WhatsAppButton
                  label="Reservar cita ahora"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: Image showcase */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <AnimatedSection delay={0.2} className="relative w-full max-w-[400px]">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-100">
                <img
                  src="/images/jennyfer-tratamientos.jpg"
                  alt="Velvet Clinic — Armonización Facial y Medicina Estética"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Bottom badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/85 backdrop-blur-md border border-white/20 px-5 py-3.5 rounded-lg text-white">
                    <p className="text-white/80 text-[10px] tracking-[0.25em] uppercase font-semibold">
                      Garantía & Excelencia
                    </p>
                    <p className="text-white font-display text-lg font-medium">
                      Velvet Clinic Madrid
                    </p>
                    <p className="text-white/60 text-[11px] mt-0.5">
                      Técnicas de Autor & Resultados Naturales
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
