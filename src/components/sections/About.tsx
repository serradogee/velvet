import { Link } from 'react-router-dom'
import AnimatedSection from '../ui/AnimatedSection'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="relative bg-black text-white pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── TOP HEADLINE (Guilty Freckles style) ── */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-white/70 font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.15em] mb-2">
            Conoce la técnica y esencia de
          </p>
          <h1 className="text-white font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
            VELVET CLINIC<span className="text-velvet-gold">™</span>
          </h1>
        </AnimatedSection>

        {/* ── 2-COLUMN GRID (Bio Left + Oval Image Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Bio & Presentation */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AnimatedSection>
              <div className="mb-4">
                <p className="text-white/80 font-display text-sm sm:text-base tracking-[0.15em] uppercase">
                  Especialistas en armonización facial |
                </p>
                <p className="text-white font-display text-sm sm:text-base tracking-[0.15em] uppercase font-semibold">
                  Creadores de la técnica <span className="text-velvet-gold font-bold">ICONIC™ RUSSIAN LIPS™</span>
                </p>
              </div>

              <h2 className="text-white font-display text-4xl sm:text-5xl font-light tracking-tight mb-8">
                Velvet Clinic
              </h2>

              <div className="space-y-5 text-white/75 text-sm sm:text-base font-light leading-relaxed mb-10">
                <p>
                  Somos <strong className="text-white font-medium">Velvet Clinic</strong>, un equipo referente en medicina estética avanzada y micropigmentación realista en Madrid, dedicados a transformar y cuidar la imagen personal desde la sutileza y el rigor médico.
                </p>
                <p>
                  Nuestro camino en el mundo de la belleza nació de una auténtica pasión por <strong className="text-white font-medium">el arte sobre la piel</strong>. Con el tiempo y una formación internacional continua, descubrimos que la excelencia radica en encontrar el perfecto equilibrio entre técnica, precisión anatómica y máxima naturalidad.
                </p>
                <p>
                  A través de <strong className="text-velvet-gold font-medium">ICONIC™ Russian Lips™</strong>, desarrollamos un método propio para conseguir unos labios definidos, elevados y armoniosos, perfectamente integrados con las facciones de cada persona.
                </p>
                <p>
                  En Velvet Clinic cada tratamiento parte de un diagnóstico exhaustivo e individualizado bajo una misma premisa: <strong className="text-white font-medium">potenciar tu belleza sin perder tu esencia</strong>.
                </p>
              </div>

              {/* Quote Highlight */}
              <blockquote className="border-l-2 border-velvet-gold pl-5 py-2 mb-10 bg-white/[0.02] rounded-r-md">
                <p className="text-white/90 text-base sm:text-lg italic font-light leading-relaxed">
                  &ldquo;La verdadera estética avanzada no transforma quién eres, resalta tu mejor versión con armonía y elegancia.&rdquo;
                </p>
              </blockquote>

              {/* CTA Buttons (Pill styling) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <WhatsAppButton
                  label="Reservar cita en Madrid"
                  className="btn-pill-light !bg-transparent !border-white hover:!bg-white hover:!text-black"
                />
                <Link
                  to="/tratamientos"
                  className="btn-pill-gold text-center"
                >
                  Ver todos los tratamientos
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: Signature Oval Frame (Guilty Freckles oval mask) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <AnimatedSection delay={0.2} className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Oval Image Container */}
              <div className="relative w-full aspect-[3/4.2] rounded-[196px] overflow-hidden border border-white/20 shadow-2xl bg-zinc-950 group">
                <img
                  src="/images/jennyfer-sobre-mi.jpg"
                  alt="Velvet Clinic — Medicina Estética Avanzada"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-8 left-0 right-0 text-center px-6">
                  <p className="text-velvet-gold text-[11px] tracking-[0.25em] uppercase font-semibold">
                    Clínica Estética Avanzada
                  </p>
                  <p className="text-white font-display text-xl font-medium mt-0.5">
                    Velvet Clinic
                  </p>
                  <p className="text-white/50 text-xs tracking-wider mt-1">
                    Plaza de Matute 5 · Madrid
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
