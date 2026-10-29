import WhatsAppIcon from '../ui/WhatsAppIcon'
import { WHATSAPP_URL } from '../../config/site'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 md:px-5 md:py-3.5 text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] animate-whatsapp-wobble group"
      aria-label="Reserva tu cita por WhatsApp"
      title="Reserva tu cita por WhatsApp"
    >
      {/* Halo de pulsación suave */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 pointer-events-none"
        style={{ animationDuration: '3s' }}
      />

      {/* Emoticono / Icono de WhatsApp */}
      <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />

      {/* Texto RESERVA TU CITA */}
      <span className="font-semibold text-xs md:text-sm tracking-wider uppercase whitespace-nowrap drop-shadow-sm">
        RESERVA TU CITA
      </span>
    </a>
  )
}
