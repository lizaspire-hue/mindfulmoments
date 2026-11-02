'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

// Password-manager extensions (e.g. LastPass) inject icon nodes beside inputs
// before React hydrates, which causes a hydration mismatch. Rendering the
// fields only on the client means there is no server HTML for them to alter.
function useHasHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}

const ignorePasswordManagers = {
  'data-lpignore': 'true',
  'data-1p-ignore': 'true',
  'data-form-type': 'other',
} as const

export function ContactForm() {
  const hydrated = useHasHydrated()

  return (
    <form action="mailto:lizaspire@gmail.com" method="post" encType="text/plain" aria-busy={!hydrated}>
      {hydrated ? (
        <>
          <label>
            Name
            <input name="name" required autoComplete="name" {...ignorePasswordManagers} />
          </label>
          <label>
            Email
            <input type="email" name="email" required autoComplete="email" {...ignorePasswordManagers} />
          </label>
          <label>
            Subject
            <input name="subject" {...ignorePasswordManagers} />
          </label>
          <label>
            Message
            <textarea name="message" required {...ignorePasswordManagers} />
          </label>
          <button className="btn" type="submit">
            Send message
          </button>
        </>
      ) : (
        <div className="contact-form-placeholder" aria-hidden="true" />
      )}
    </form>
  )
}
