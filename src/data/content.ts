import type { ClinicVideo, ResultItem, Testimonial, Treatment } from '../types'

export const treatments: Treatment[] = [
  {
    id: 'labios-iconic',
    emoji: '💋',
    title: 'ICONIC™ Russian Lips',
    subtitle: 'Diseño Labial de Autor · Inyección Micro-Vertical',
    category: 'labios',
    tag: 'Técnica Firma',
    description:
      'Protocolo médico de autor enfocado en la elevación vertical del bermellón y definición anatómica del arco de cupido sin sobreproyección anteroposterior. Permite obtener labios planos, simétricos y proporcionados mediante ácido hialurónico reticulado de grado farmacéutico con marcado CE y máxima pureza.',
    benefits: [
      'Estructuración plana vertical sin sobreproyección («sin efecto pico»)',
      'Técnica de microdepósitos controlados que previene la migración perioral',
      'Ácido hialurónico ultrapuro con lidocaína para máximo confort',
      'Diseño biométrico adaptado a la armonía y fisionomía de cada paciente',
    ],
    duration: '45 - 60 min',
    image: '/images/resultados/labios-principal.png',
    imageFocus: 'lips',
  },
  {
    id: 'armonizacion-facial',
    emoji: '💎',
    title: 'Armonización Facial & Perfiloplastia',
    subtitle: 'Medicina Estética Avanzada · Proyección Tridimensional',
    category: 'facial',
    tag: 'Médico Avanzado',
    description:
      'Abordaje médico integral orientado al equilibrio de los tercios faciales. Reposicionamiento de volúmenes malares (pómulos), definición del ángulo mandibular y proyección del mentón para restaurar la juventud y la firmeza tisular sin recurrir a cirugía.',
    benefits: [
      'Marcaje del contorno mandibular y perfiloplastia equilibrada',
      'Soporte estructural y reposición del tercio medio facial',
      'Efecto tensor no quirúrgico con biomateriales 100% biocompatibles',
      'Incorporación inmediata a la actividad diaria sin tiempo de baja',
    ],
    duration: '60 - 75 min',
    image: '/images/resultados/armonizacion-facial-care.jpg',
    imageFocus: 'profile',
  },
  {
    id: 'rinomodelacion',
    emoji: '👃',
    title: 'Rinomodelación Médica No Quirúrgica',
    subtitle: 'Corrección Nasal de Precisión con Ácido Hialurónico',
    category: 'facial',
    tag: 'Precisión Clínica',
    description:
      'Corrección ambulatoria de irregularidades del dorso nasal (caballete), estilización del puente y elevación controlada de la punta nasal mediante microdepósitos en puntos anatómicos de anclaje seguros.',
    benefits: [
      'Rectificación estética del perfil nasal sin intervención quirúrgica',
      'Elevación sutil de la punta caída y armonización del ángulo nasolabial',
      'Resultados visibles al instante con mínima inflamación',
      'Durabilidad clínica estimada entre 12 y 18 meses',
    ],
    duration: '35 - 45 min',
    image: '/images/resultados/perfil-despues.png',
    imageFocus: 'profile',
  },
  {
    id: 'micropigmentacion-realista',
    emoji: '✨',
    title: 'Micropigmentación Hiperrealista',
    subtitle: 'Aquarelle Lips Blush & Micro-Pixel Brows',
    category: 'micropigmentacion',
    tag: 'Dermocosmética',
    description:
      'Dermopigmentación subepidérmica avanzada con efecto acuarela translúcido. Neutraliza tonos fríos o apagados, redibuja contornos desdibujados y aporta luminosidad continua mediante pigmentos minerales certificados y biocompatibles.',
    benefits: [
      'Efecto labios jugosos y contorno perfeccionado las 24 horas',
      'Neutralización de tonos oscuros y corrección óptica de asimetrías',
      'Pigmentos orgánicos estériles libres de óxidos de hierro pesados',
      'Retención de color uniforme con durabilidad clínica de 18 a 36 meses',
    ],
    duration: '90 - 120 min',
    image: '/images/resultados/micropigmentacion-realista-care.jpg',
    imageFocus: 'center',
  },
  {
    id: 'pecas-micropigmentacion',
    emoji: '✨',
    title: 'Pecas Hiperrealistas (Micropigmentación)',
    subtitle: 'Técnica Semi-Permanente de Efecto Natural',
    category: 'micropigmentacion',
    tag: 'Técnica Exclusiva',
    description:
      'Dermopigmentación estética de pecas hiperrealistas diseñada de manera asimétrica y orgánica. Recrea el efecto fresco, juvenil y «sun-kissed» sobre mejillas y nariz con pigmentos biocompatibles de desvanecimiento suave y natural.',
    benefits: [
      'Distribución personalizada según fisionomía y tono de piel',
      'Pigmentos minerales estériles y biocompatibles certificados',
      'Aspecto hiperrealista con micro-graduación de tonalidades',
      'Durabilidad estimada de 12 a 24 meses con acabado sutil',
    ],
    duration: '60 - 90 min',
    image: '/images/tratamientos/pecas-micropigmentacion.jpg',
    imageFocus: 'center',
  },
  {
    id: 'pestanas-lifting-extensiones',
    emoji: '👁️',
    title: 'Lifting & Extensiones de Pestañas',
    subtitle: 'Diseño de Mirada · Curvatura, Volumen & Densidad',
    category: 'pestanas',
    tag: 'Mirada Velvet',
    description:
      'Servicio profesional de realce y estilización de la mirada. Desde lifting con nutrición de queratina para arquear y potenciar la pestaña natural, hasta extensiones pelo a pelo y volumen ruso adaptadas con máxima precisión a la forma del ojo.',
    benefits: [
      'Estudio previo del ojo para seleccionar la curvatura y longitud ideal',
      'Adhesivos y productos hipoalergénicos de máxima seguridad ocular',
      'Efecto rímel y mirada abierta, densa y luminosa 24/7',
      'Mantenimiento cómodo y respetuoso con la pestaña natural',
    ],
    duration: '60 - 90 min',
    image: '/images/tratamientos/pestanas-lifting.jpg',
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
