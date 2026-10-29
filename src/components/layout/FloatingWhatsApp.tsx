import WhatsAppIcon from '../ui/WhatsAppIcon'
import { WHATSAPP_URL } from '../../config/site'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_12px_40px_rgba(37,211,102,0.65)] animate-whatsapp-wobble group"
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      {/* Halo de pulsación suave */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 pointer-events-none"
        style={{ animationDuration: '3s' }}
      />

      {/* Emoticono / Icono de WhatsApp */}
      <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
    </a>
  )
}
