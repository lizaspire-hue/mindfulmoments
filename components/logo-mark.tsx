type LogoMarkProps = {
  className?: string
  title?: string
}

export function LogoMark({ className, title }: LogoMarkProps) {
  const decorative = !title

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? true : undefined}
      aria-label={title}
    >
      <circle cx="32" cy="8" r="4" fill="var(--brass)" />
      <path
        d="M10 31 V15 L32 29 L54 15 V31"
        stroke="var(--pine)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 35 H58" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path
        d="M10 39 V53 L32 41 L54 53 V39"
        stroke="var(--sage)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  )
}
