import { motion } from 'framer-motion'
import { LOCATION } from '../../config/site'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] bg-black flex flex-col lg:flex-row overflow-hidden"
    >
      {/* ── LEFT PANEL ── text content */}
      <div className="relative z-10 flex flex-col justify-center px-8 py-28 lg:py-0 lg:pl-16 xl:pl-24 lg:w-[52%] text-white">
        {/* Gold tagline line */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-velvet-gold" />
          <span className="text-velvet-gold text-xs tracking-[0.3em] uppercase font-medium">
            Clínica Estética · Madrid
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-[1.05] mb-8 text-white"
        >
          Realza
          <br />
          <em className="not-italic text-velvet-gold">tu belleza</em>
          <br />
          natural
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-white/65 text-base md:text-lg font-light max-w-md mb-10 leading-relaxed"
        >
          Tratamientos estéticos personalizados — resultados naturales y
          adaptados a ti. Madrid, {LOCATION.city}.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <WhatsAppButton
            label="Pedir cita →"
            className="!bg-velvet-gold !text-white !border-velvet-gold hover:!bg-white hover:!text-black"
          />
          <a
            href="#tratamientos"
            className="inline-flex items-center gap-2 text-white/70 text-sm font-light tracking-wide hover:text-velvet-gold transition-colors"
          >
            Ver tratamientos
            <span className="h-px w-8 bg-current transition-all group-hover:w-14" />
          </a>
        </motion.div>

        {/* Location badge */}
        <motion.a
          href={LOCATION.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 inline-flex items-center gap-2 text-white/40 text-xs tracking-widest uppercase hover:text-velvet-gold transition-colors w-fit"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-velvet-gold" />
          {LOCATION.full}
        </motion.a>
      </div>

      {/* ── RIGHT PANEL ── portrait photo */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] h-[55vw] lg:h-auto overflow-hidden">
        {/* Gradient fade on left edge (desktop) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 hidden lg:block" />
        {/* Gradient fade bottom (mobile) */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10 lg:hidden" />

        <motion.img
          src="/images/hero-portrait.jpg"
          alt="Velvet Clinic — estética premium"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="w-full h-full object-cover object-top"
        />

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-8 lg:left-16 xl:left-24 z-20 flex items-center gap-3"
      >
        <div className="w-px h-10 bg-gradient-to-b from-velvet-gold/0 via-velvet-gold to-velvet-gold/0 animate-pulse" />
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase rotate-90 origin-left translate-x-2">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
