import type { ClinicVideo, ResultItem, Testimonial, Treatment } from '../types'

export const treatments: Treatment[] = [
  {
    id: 'labios',
    emoji: '💋',
    title: 'Aumento de labios',
    description:
      'Realza el volumen y la definición de tus labios con técnicas avanzadas que respetan la armonía de tu rostro.',
    benefits: [
      'Resultados naturales y personalizados',
      'Procedimiento rápido y mínimamente invasivo',
      'Recuperación inmediata',
    ],
    image: '/images/resultados/labios-principal.png',
    imageFocus: 'center',
  },
  {
    id: 'micropigmentacion',
    emoji: '✨',
    title: 'Micropigmentación',
    description:
      'Cejas, labios y ojos con acabado impecable. Pigmentos de alta calidad para un look duradero y elegante.',
    benefits: [
      'Diseño adaptado a tu rostro',
      'Pigmentos hipoalergénicos premium',
      'Efecto natural durante años',
    ],
    image: '/images/resultados/micropigmentacion-labios.png',
    imageFocus: 'center',
  },
  {
    id: 'faciales',
    emoji: '💆',
    title: 'Tratamientos faciales',
    description:
      'Rejuvenece, hidrata y revitaliza tu piel con protocolos faciales diseñados para cada tipo de cutis.',
    benefits: [
      'Piel luminosa y uniforme',
      'Protocolos anti-edad avanzados',
      'Sensación de bienestar inmediata',
    ],
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'personalizados',
    emoji: '✨',
    title: 'Tratamientos estéticos personalizados',
    description:
      'Combinamos técnicas y productos premium para crear un plan único que potencie tu belleza natural.',
    benefits: [
      'Plan 100% adaptado a ti',
      'Asesoramiento experto continuo',
      'Resultados progresivos y armoniosos',
    ],
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
  },
]

export const results: ResultItem[] = [
  {
    id: 'r-comparison-labios-nariz',
    type: 'comparison',
    title: 'Labios y nariz — Antes y después',
    before: '/images/resultados/perfil-antes.png',
    after: '/images/resultados/perfil-despues.png',
    imageFocus: 'profile',
  },
  {
    id: 'r-showcase-labios-1',
    type: 'showcase',
    title: 'Aumento de labios',
    src: '/images/resultados/labios-resultado-03.png',
    imageFocus: 'lips',
  },
  {
    id: 'r-showcase-labios-2',
    type: 'showcase',
    title: 'Aumento de labios',
    src: '/images/resultados/labios-resultado-04.png',
    imageFocus: 'lips',
  },
  {
    id: 'r-showcase-micropigmentacion',
    type: 'showcase',
    title: 'Micropigmentación de labios',
    src: '/images/resultados/micropigmentacion-labios.png',
    imageFocus: 'center',
  },
]

export const clinicVideos: ClinicVideo[] = [
  {
    id: 'v1',
    title: 'Recorrido por la clínica',
    description: 'Espacios diseñados para tu comodidad y tranquilidad.',
    src: 'https://videos.pexels.com/video-files/3997983/3997983-uhd_2560_1440_25fps.mp4',
    poster:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v2',
    title: 'Nuestro equipo',
    description: 'Profesionales especializados en estética avanzada.',
    src: 'https://videos.pexels.com/video-files/853189/853189-hd_1920_1080_30fps.mp4',
    poster:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v3',
    title: 'Ambiente premium',
    description: 'Cada detalle pensado para una experiencia exclusiva.',
    src: 'https://videos.pexels.com/video-files/3999358/3999358-uhd_2560_1440_25fps.mp4',
    poster:
      'https://images.unsplash.com/photo-1519494026891-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
  },
]

export const trustPoints = [
  'Profesionales especializados',
  'Atención personalizada',
  'Resultados naturales',
  'Tratamientos adaptados a cada cliente',
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'María G.',
    treatment: 'Aumento de labios',
    text: 'El resultado es increíblemente natural. Me sentí escuchada desde la primera consulta y el equipo fue muy profesional en todo momento.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Laura S.',
    treatment: 'Micropigmentación',
    text: 'Llevaba años buscando alguien que entendiera lo que quería. En Velvet Clinic consiguieron exactamente el look que buscaba.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Carmen R.',
    treatment: 'Tratamiento facial',
    text: 'La clínica transmite mucha confianza. El ambiente es precioso y los resultados se notan desde la primera sesión.',
    rating: 5,
  },
]

export const HERO_VIDEO =
  'https://videos.pexels.com/video-files/3997983/3997983-uhd_2560_1440_25fps.mp4'

export const HERO_POSTER =
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80'
