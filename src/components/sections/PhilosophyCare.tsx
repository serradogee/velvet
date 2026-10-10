import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

const careFeatures = [
  {
    image: '/images/resultados/labios-principal.png',
    title: 'Técnicas Mínimamente Invasivas',
    desc: 'Resultados sutiles, armónicos y perfectamente integrados con tu anatomía facial.',
    badge: 'Técnica de Autor',
  },
  {
    image: '/images/resultados/perfil-cliente-despues.jpg',
    title: 'Fórmulas y Viales Certificados',
    desc: 'Ácido hialurónico y principios activos de máxima pureza médica aprobados por sanidad.',
    badge: 'Máxima Calidad Médica',
  },
  {
    image: '/images/resultados/micropigmentacion-labios.png',
    title: 'Atención & Seguridad Exclusiva',
    desc: 'Diagnóstico previo milimétrico, máxima esterilidad y seguimiento post-tratamiento.',
    badge: 'Atención Personalizada',
  },
]

export default function PhilosophyCare() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden border-b border-white/10">
      {/* Background soft ambient gradient */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#A17A27_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header (Guilty Freckles style) */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase mb-3">
            VELVET CLINIC CARE
          </h2>
          <p className="text-white/70 font-display italic text-base sm:text-lg lg:text-xl font-light tracking-wide">
            Nuestra <em className="text-velvet-gold not-italic">filosofía</em> del cuidado facial y la estética médica
          </p>
        </AnimatedSection>

        {/* CTA button (Guilty Freckles style) */}
        <AnimatedSection delay={0.1} className="text-center mb-16 lg:mb-20">
          <Link
            to="/tratamientos"
            className="btn-pill-light hover:!border-velvet-gold hover:!text-velvet-gold hover:!bg-transparent"
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
                className="bg-[#111113] border border-white/10 rounded-xl overflow-hidden group hover:border-velvet-gold/40 transition-colors duration-300 flex flex-col h-full shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/15 text-[10px] tracking-[0.2em] uppercase font-semibold text-velvet-gold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow text-center">
                  <h3 className="text-white font-display text-lg sm:text-xl font-semibold mb-2.5 group-hover:text-velvet-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed mb-4">
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
