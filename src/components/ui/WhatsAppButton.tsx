import { MessageCircle } from 'lucide-react'
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
  variant = 'primary',
  className = '',
  showIcon = true,
  message,
}: WhatsAppButtonProps) {
  const baseClass = variant === 'gold' ? 'btn-whatsapp-gold' : 'btn-whatsapp'
  const targetUrl = message
    ? `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className}`}
      aria-label={label}
    >
      {showIcon && <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />}
      {label}
    </a>
  )
}
