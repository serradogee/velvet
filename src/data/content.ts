import type { ClinicVideo, ResultItem, Testimonial, Treatment } from '../types'

export const treatments: Treatment[] = [
  {
    id: 'labios-iconic',
    emoji: '💋',
    title: 'ICONIC™ Russian Lips',
    subtitle: 'Técnica exclusiva creada por Jennyfer Rivera',
    category: 'labios',
    tag: 'Firma Velvet',
    description:
      'Nuestra técnica insignia diseñada para definir el arco de cupido, aportar volumen vertical equilibrado y crear una forma plana y estilizada sin sobreproyección ni efecto migración.',
    benefits: [
      'Proyección vertical elegante sin volumen desmedido',
      'Definición milimétrica del arco de cupido y comisuras',
      'Ácido hialurónico premium de alta pureza',
      'Resultados naturales que respetan la simetría facial',
    ],
    duration: '45 - 60 min',
    image: '/images/resultados/labios-principal.png',
    imageFocus: 'lips',
  },
  {
    id: 'micropigmentacion-realista',
    emoji: '✨',
    title: 'Micropigmentación Realista',
    subtitle: 'Lips Blush, Brows & Freckles',
    category: 'micropigmentacion',
    tag: 'Larga duración',
    description:
      'Técnica hiperrealista de pigmentación semipermanente para realzar labios con efecto acuarela (Lips Blush) y perfilar cejas con naturalidad impecable (Powder Brows).',
    benefits: [
      'Color saludable y efecto labios jugosos 24/7',
      'Diseño personalizado según tu tonalidad y estructura ósea',
      'Pigmentos orgánicos premium hipoalergénicos',
      'Durabilidad de 18 a 36 meses',
    ],
    duration: '90 - 120 min',
    image: '/images/resultados/micropigmentacion-labios.png',
    imageFocus: 'center',
  },
  {
    id: 'armonizacion-facial',
    emoji: '💎',
    title: 'Armonización Facial Integral',
    subtitle: 'Medicina estética avanzada',
    category: 'facial',
    tag: 'Resultados globales',
    description:
      'Tratamiento médico-estético integral para equilibrar ángulos, mentón, pómulos y línea mandibular, logrando rejuvenecimiento y proporciones armónicas en todo el rostro.',
    benefits: [
      'Efecto lifting sin cirugía',
      'Definición de contorno mandibular y perfiloplastia',
      'Corrección de asimetrías y reposicionamiento de volúmenes',
      'Tratamiento seguro y de recuperación inmediata',
    ],
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    imageFocus: 'profile',
  },
  {
    id: 'rejuvenecimiento-facial',
    emoji: '💆',
    title: 'Protocolos Faciales & Skin Boosters',
    subtitle: 'Hidratación profunda, luminosidad y colágeno',
    category: 'facial',
    tag: 'Regeneración celular',
    description:
      'Cóctel de bioestimuladores, polinucleótidos y ácido hialurónico no reticulado para devolver la firmeza, hidratar desde las capas profundas y atenuar líneas de expresión.',
    benefits: [
      'Piel jugosa, elástica y con luz propia',
      'Estimulación natural de síntesis de colágeno',
      'Atenuación de poros y textura irregular',
      'Efecto antienvejecimiento preventivo y correctivo',
    ],
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1512290900672-1f486d34bbf3?auto=format&fit=crop&w=800&q=80',
    imageFocus: 'center',
  },
  {
    id: 'tratamientos-personalizados',
    emoji: '✨',
    title: 'Planes Velvet Personalizados',
    subtitle: 'Diagnóstico 360° a tu medida',
    category: 'personalizado',
    tag: '100% Exclusivo',
    description:
      'Combinamos múltiples técnicas exclusivas en un protocolo a la medida exacta de tus objetivos y fisionomía, garantizando la máxima naturalidad y elegancia.',
    benefits: [
      'Estudio facial minucioso con la especialista',
      'Combinación estratégica de volumen, color y textura',
      'Seguimiento cercano y personalizado en cada fase',
      'Presupuesto y planificación por etapas',
    ],
    duration: 'Sesión personalizada',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
    imageFocus: 'center',
  },
]

export const results: ResultItem[] = [
  {
    id: 'r-comparison-perfil-nuevo',
    type: 'comparison',
    title: 'Antes y después',
    before: '/images/resultados/perfil-cliente-antes.jpg',
    after: '/images/resultados/perfil-cliente-despues.jpg',
    imageFocus: 'profile',
  },
  {
    id: 'r-comparison-perfil',
    type: 'comparison',
    title: 'Antes y después',
    before: '/images/resultados/perfil-antes.png',
    after: '/images/resultados/perfil-despues.png',
    imageFocus: 'profile',
  },
  {
    id: 'r-showcase-nuevo-1',
    type: 'showcase',
    title: 'Resultado real',
    src: '/images/resultados/resultado-cliente-01.jpg',
    imageFocus: 'lips',
  },
  {
    id: 'r-showcase-nuevo-2',
    type: 'showcase',
    title: 'Resultado real',
    src: '/images/resultados/resultado-cliente-02.jpg',
    imageFocus: 'lips',
  },
  {
    id: 'r-showcase-nuevo-3',
    type: 'showcase',
    title: 'Resultado real',
    src: '/images/resultados/resultado-cliente-03.jpg',
    imageFocus: 'center',
  },
  {
    id: 'r-showcase-nuevo-4',
    type: 'showcase',
    title: 'Resultado real',
    src: '/images/resultados/resultado-cliente-04.jpg',
    imageFocus: 'center',
  },
  {
    id: 'r-showcase-labios-1',
    type: 'showcase',
    title: 'Resultado real',
    src: '/images/resultados/labios-resultado-03.png',
    imageFocus: 'lips',
  },
]

export const clinicVideos: ClinicVideo[] = [
  {
    id: 'v1',
    title: 'Recorrido por la clínica',
    description: 'Espacios diseñados para tu comodidad y tranquilidad.',
    src: 'https://videos.pexels.com/video-files/3997983/3997983-uhd_2560_1440_25fps.mp4',
    poster: '/images/resultados/resultado-cliente-03.jpg',
  },
  {
    id: 'v2',
    title: 'Tratamientos y resultados',
    description: 'Técnicas exclusivas para potenciar tu belleza natural.',
    src: 'https://videos.pexels.com/video-files/853189/853189-hd_1920_1080_30fps.mp4',
    poster: '/images/resultados/resultado-cliente-04.jpg',
  },
  {
    id: 'v3',
    title: 'Experiencia Velvet',
    description: 'Cada detalle pensado para una experiencia exclusiva.',
    src: 'https://videos.pexels.com/video-files/3999358/3999358-uhd_2560_1440_25fps.mp4',
    poster: '/images/resultados/resultado-cliente-01.jpg',
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
