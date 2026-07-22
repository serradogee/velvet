export interface Treatment {
  id: string
  emoji: string
  title: string
  description: string
  benefits: string[]
  image: string
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
  type: 'image' | 'video'
  title: string
  before?: string
  after?: string
  src?: string
  poster?: string
}

export interface ClinicVideo {
  id: string
  title: string
  description: string
  src: string
  poster: string
}
