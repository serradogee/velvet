import { useState } from 'react'
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      </div>
    </section>
  )
}
