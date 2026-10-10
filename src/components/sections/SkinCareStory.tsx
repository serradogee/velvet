import AnimatedSection from '../ui/AnimatedSection'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function SkinCareStory() {
  return (
    <section className="relative bg-[#FAFAFA] text-zinc-900 py-24 md:py-32 overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-6 flex justify-center order-1">
            <AnimatedSection className="relative w-full max-w-[460px]">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xl bg-white">
                <img
                  src="/images/resultados/perfil-cliente-despues.jpg"
                  alt="Velvet Clinic Skin Care"
                  className="w-full aspect-[4/5] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <p className="text-velvet-gold text-xs tracking-[0.25em] uppercase font-semibold mb-1">
                    Tratamientos Faciales
                  </p>
                  <p className="font-display text-xl font-medium">
                    Pureza, Equilibrio & Precisión
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: Text content (Guilty Freckles white section style) */}
          <div className="lg:col-span-6 order-2">
            <AnimatedSection>
              <div className="mb-2">
                <p className="text-black font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase">
                  VELVET CLINIC SKIN & BEAUTY
                </p>
                <p className="text-velvet-gold text-xs tracking-[0.2em] uppercase font-semibold mt-1">
                  Filosofía del cuidado médico
                </p>
              </div>

              <div className="space-y-4 text-zinc-700 text-sm sm:text-base font-light leading-relaxed my-6">
                <p>
                  En <strong className="text-black font-semibold">Velvet Clinic</strong>, cada protocolo está diseñado para <strong className="text-black font-semibold">proteger, realzar y mantener la piel bonita, tersa y natural</strong>.
                </p>
                <p>
                  Una gama de tratamientos pensada especialmente para acompañar el envejecimiento saludable y mantener resultados armónicos sin perder la frescura de tu rostro.
                </p>
                <p className="text-xs tracking-[0.2em] font-semibold text-black uppercase pt-2">
                  BIOMÉDICO · NATURAL · SEGUIMIENTO CONTINUO
                </p>
              </div>

              <div className="border-t border-zinc-200 pt-6 space-y-5 mb-8">
                <h3 className="text-black font-display text-xl font-bold">
                  ¿Por qué confiar en nuestros protocolos?
                </h3>

                <div>
                  <h4 className="text-sm font-semibold text-black mb-1">
                    1. Viales y productos de máxima calidad médica
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    Formulados con ácido hialurónico y principios activos de primera gama internacional, con la mayor biocompatibilidad y pureza.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black mb-1">
                    2. Protocolos anatómicos de alta precisión
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    Aplicación milimétrica por zonas para lograr volumen, luminosidad y armonía sin sobrecargar los rasgos faciales.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black mb-1">
                    3. Eficacia real y durabilidad natural
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    Desde la hidratación profunda hasta la definición del contorno labial y facial con resultados comprobables.
                  </p>
                </div>
              </div>

              {/* Pill Button */}
              <WhatsAppButton
                label="Pedir asesoramiento por WhatsApp"
                message="¡Hola Velvet Clinic! Me gustaría recibir asesoramiento personalizado sobre los tratamientos."
                className="!rounded-full !border !border-black !bg-transparent !text-black !px-8 !py-3.5 !text-xs !font-semibold !tracking-[0.15em] !uppercase hover:!bg-black hover:!text-white transition-all duration-300 shadow-sm"
              />
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
