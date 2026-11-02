'use client'

import { useState } from 'react'

const links = [
  { href: '#why', label: 'Why it matters' },
  { href: '#offerings', label: 'Offerings' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#membership', label: 'Membership' },
  { href: '#coaching', label: 'Coaching' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Kind words' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="logo" href="#top">
          Mindful Moments<small>&amp; Connected-YOU Events</small>
        </a>
        <nav className="site-nav" aria-label="Main">
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
          <ul id="menu" className={open ? 'open' : undefined}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
