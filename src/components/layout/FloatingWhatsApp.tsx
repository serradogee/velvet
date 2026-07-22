import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../../config/site'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] md:bottom-8 md:right-8 md:px-6 md:py-4 md:text-base"
      aria-label="Reservar cita por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span>Reservar cita</span>
    </a>
  )
}
