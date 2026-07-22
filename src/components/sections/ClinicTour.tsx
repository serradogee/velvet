import { useState } from 'react'
import { MapPin, Navigation } from 'lucide-react'
import { LOCATION } from '../../config/site'
import { clinicVideos } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function ClinicTour() {
  const [activeVideo, setActiveVideo] = useState(0)

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Conoce nuestro espacio"
            subtitle="Un entorno diseñado para que te sientas cómoda, segura y mimada en cada visita."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="premium-card overflow-hidden mb-6">
            <video
              key={clinicVideos[activeVideo].id}
              src={clinicVideos[activeVideo].src}
              poster={clinicVideos[activeVideo].poster}
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover bg-velvet-black"
            />
            <div className="p-6 md:p-8 text-center">
              <h3 className="font-display text-2xl font-semibold mb-2">
                {clinicVideos[activeVideo].title}
              </h3>
              <p className="text-velvet-charcoal/70 font-light">
                {clinicVideos[activeVideo].description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {clinicVideos.map((video, index) => (
            <AnimatedSection key={video.id} delay={index * 0.1}>
              <button
                onClick={() => setActiveVideo(index)}
                className={`premium-card overflow-hidden text-left w-full transition-all ${
                  activeVideo === index
                    ? 'ring-2 ring-velvet-gold border-velvet-gold/50'
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-32 object-cover"
                />
                <p className="p-4 text-sm font-medium">{video.title}</p>
              </button>
            </AnimatedSection>
          ))}
        </div>

        {/* Tarjeta de Ubicación */}
        <AnimatedSection delay={0.35}>
          <div className="premium-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-velvet-cream via-white to-velvet-beige/30 border border-velvet-beige/80">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-velvet-gold/15 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-velvet-gold" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-velvet-black">
                  ¿Dónde estamos?
                </h4>
                <p className="text-velvet-charcoal/80 text-sm font-light">
                  {LOCATION.full} — Madrid
                </p>
              </div>
            </div>

            <a
              href={LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-velvet-black text-white hover:bg-velvet-gold text-sm font-medium px-5 py-3 rounded-full transition-colors shadow-sm shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Cómo llegar (Google Maps)</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
