import WhatsAppIcon from './WhatsAppIcon'
import { WHATSAPP_URL } from '../../config/site'

type ButtonVariant = 'primary' | 'gold'

interface WhatsAppButtonProps {
  label: string
  variant?: ButtonVariant
  className?: string
  showIcon?: boolean
  message?: string
}

export default function WhatsAppButton({
  label,
  className = '',
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#20ba5a] hover:shadow-[0_12px_35px_rgba(37,211,102,0.55)] border border-[#25D366] group ${className}`}
      aria-label={label}
      title={label}
    >
      {showIcon && (
        <WhatsAppIcon className="w-5 h-5 shrink-0 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />
      )}
      <span className="drop-shadow-sm">{label}</span>
    </a>
  )
}

