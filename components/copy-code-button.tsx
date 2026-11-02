'use client'

import { useState } from 'react'

export function CopyCodeButton({ code }: { code: string }) {
  const [label, setLabel] = useState('Copy')

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setLabel('Copied')
    } catch {
      setLabel(code)
    }
    setTimeout(() => setLabel('Copy'), 2000)
  }

  return (
    <button type="button" onClick={handleCopy} aria-live="polite">
      {label}
    </button>
  )
}
