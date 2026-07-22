import { useCallback, useRef, useState } from 'react'
import { GripVertical } from 'lucide-react'
import { getImageFocusClass, type ImageFocus } from '../../lib/imageFocus'

interface BeforeAfterSliderProps {
  title: string
  before: string
  after?: string
  imageFocus?: ImageFocus
  className?: string
}

export default function BeforeAfterSlider({
  title,
  before,
  after,
  imageFocus = 'profile',
  className = '',
}: BeforeAfterSliderProps) {
  const isSplit = !after
  const afterSrc = after ?? before
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100))
    setPosition(percent)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    containerRef.current?.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    isDragging.current = false
    containerRef.current?.releasePointerCapture(e.pointerId)
  }

  const splitImgClass =
    'absolute top-0 left-0 h-full w-[200%] max-w-none object-cover pointer-events-none select-none'
  const dualFocus = getImageFocusClass(imageFocus)

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden cursor-ew-resize touch-none bg-velvet-black ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label={`Comparar antes y después: ${title}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Capa "después" */}
      <img
        src={afterSrc}
        alt={`Después — ${title}`}
        draggable={false}
        className={
          isSplit
            ? `${splitImgClass} object-right`
            : `absolute inset-0 w-full h-full object-cover pointer-events-none select-none ${dualFocus}`
        }
      />

      {/* Capa "antes" recortada */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={before}
          alt={`Antes — ${title}`}
          draggable={false}
          className={
            isSplit
              ? `${splitImgClass} object-left`
              : `absolute top-0 left-0 h-full object-cover pointer-events-none select-none ${dualFocus}`
          }
          style={
            isSplit
              ? undefined
              : {
                  width: position > 0 ? `${10000 / position}%` : '100%',
                  maxWidth: 'none',
                }
          }
        />
      </div>

      {/* Línea y control */}
      <div
        className="absolute inset-y-0 z-10 w-1 -ml-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white border-2 border-velvet-gold shadow-lg">
          <GripVertical className="w-5 h-5 text-velvet-gold" />
        </div>
      </div>

      <span className="absolute top-3 left-3 z-20 bg-velvet-black/75 text-white text-xs px-2.5 py-1 rounded-full tracking-wide pointer-events-none">
        Antes
      </span>
      <span className="absolute top-3 right-3 z-20 bg-velvet-gold text-white text-xs px-2.5 py-1 rounded-full tracking-wide pointer-events-none">
        Después
      </span>

      <p className="absolute bottom-3 left-0 right-0 z-20 text-center text-white/90 text-xs tracking-wide pointer-events-none">
        Arrastra la línea para comparar
      </p>
    </div>
  )
}
