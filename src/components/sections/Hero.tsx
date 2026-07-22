import { motion } from 'framer-motion'
import { HERO_POSTER, HERO_VIDEO } from '../../data/content'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-velvet-black/60 via-velvet-black/40 to-velvet-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 pt-24 pb-20 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-velvet-gold-light mb-6 font-medium"
        >
          Clínica estética premium
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6"
        >
          Realza tu belleza natural con Velvet Clinic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg lg:text-xl font-light text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Tratamientos estéticos personalizados para conseguir resultados
          naturales y adaptados a ti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <WhatsAppButton
            label="Pedir cita por WhatsApp"
            className="!bg-white !text-velvet-black hover:!bg-velvet-gold hover:!text-white"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-velvet-gold to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
