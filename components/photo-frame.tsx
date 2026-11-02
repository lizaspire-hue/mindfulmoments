import Image from 'next/image'

type PhotoFrameProps = {
  src: string
  alt: string
  variant?: 'arch' | 'soft' | 'round'
  sizes?: string
  priority?: boolean
}

export function PhotoFrame({ src, alt, variant = 'arch', sizes = '(max-width: 900px) 100vw, 50vw', priority }: PhotoFrameProps) {
  const className = variant === 'arch' ? 'ph' : `ph ${variant}`
  return (
    <div className={className}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  )
}
