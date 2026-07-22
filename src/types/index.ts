export interface Treatment {
  id: string
  emoji: string
  title: string
  description: string
  benefits: string[]
  image: string
  /** Enfoque de la imagen: lips, center, profile */
  imageFocus?: 'lips' | 'center' | 'profile'
  /** Rotación en grados para corregir orientación */
  imageRotate?: number
}

export interface Testimonial {
  id: string
  name: string
  treatment: string
  text: string
  rating: number
}

export interface ResultItem {
  id: string
  type: 'comparison' | 'showcase' | 'video'
  title: string
  before?: string
  after?: string
  /** Imagen única con antes (izq) y después (der) para el slider */
  splitImage?: string
  src?: string
  poster?: string
  /** Enfoque visual de la imagen en la galería */
  imageFocus?: 'lips' | 'center' | 'profile'
}

export interface ClinicVideo {
  id: string
  title: string
  description: string
  src: string
  poster: string
}
