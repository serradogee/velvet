import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

const careFeatures = [
  {
    image: '/images/resultados/labios-resultado-01.png',
    title: 'ICONIC™ Russian Lips',
    desc: 'Técnica exclusiva de diseño labial. Elevación, perfilado y volumen con absoluta naturalidad.',
    badge: 'Técnica Firma',
  },
  {
    image: '/images/resultados/resultado-cliente-01.jpg',
    title: 'Armonización Facial Completa',
    desc: 'Equilibrio y definición de facciones mediante ácido hialurónico de máxima pureza.',
    badge: 'Medicina Avanzada',
  },
  {
    image: '/images/resultados/micropigmentacion-labios.png',
    title: 'Micropigmentación Realista',
    desc: 'Efecto acuarela y realismo para labios y rasgos. Color sutil y definición duradera.',
    badge: 'Realismo & Color',
  },
]

export default function PhilosophyCare() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden border-b border-white/10 bg-black">
      {/* ── BACKGROUND PHOTO OF LIPS WITH LUXURY OVERLAY (Guilty Freckles style) ── */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
        style={{
          backgroundImage: "url('/images/resultados/labios-resultado-01.png')",
        }}
      />
      {/* Dark overlay with slight gold tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-white">
        {/* Section Header (Guilty Freckles style) */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase mb-3">
            VELVET CLINIC CARE
          </h2>
          <p className="text-white/80 font-display italic text-base sm:text-lg lg:text-xl font-light tracking-wide">
            Nuestra <em className="text-velvet-gold not-italic font-medium">filosofía</em> del cuidado de la piel y tratamientos
          </p>
        </AnimatedSection>

        {/* CTA button */}
        <AnimatedSection delay={0.1} className="text-center mb-16 lg:mb-20">
          <Link
            to="/tratamientos"
            className="btn-pill-light hover:!border-velvet-gold hover:!text-velvet-gold hover:!bg-transparent shadow-lg"
          >
            Descubre todos los tratamientos
          </Link>
        </AnimatedSection>

        {/* 3 Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {careFeatures.map((item, idx) => (
            <AnimatedSection key={item.title} delay={0.15 * (idx + 1)}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-black/75 backdrop-blur-md border border-white/15 rounded-2xl overflow-hidden group hover:border-velvet-gold/60 transition-all duration-300 flex flex-col h-full shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] tracking-[0.2em] uppercase font-semibold text-velvet-gold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow text-center">
                  <h3 className="text-white font-display text-lg sm:text-xl font-semibold mb-2.5 group-hover:text-velvet-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
