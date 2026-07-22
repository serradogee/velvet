import { Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 justify-center mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-velvet-gold text-velvet-gold"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Lo que dicen nuestras clientas"
            subtitle="La confianza de quienes ya han vivido la experiencia Velvet."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.12}>
              <blockquote className="premium-card p-8 h-full flex flex-col text-center">
                <StarRating rating={testimonial.rating} />
                <p className="text-velvet-charcoal/80 text-sm md:text-base leading-relaxed font-light italic flex-1 mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer>
                  <p className="font-display text-lg font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-velvet-gold mt-1">
                    {testimonial.treatment}
                  </p>
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
