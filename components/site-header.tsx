'use client'

import { useState } from 'react'
import { ONLINE_CLASSES_INFO_URL } from '@/lib/links'

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
      <div className="announce">
        <div className="wrap announce-row">
          <p>
            <strong>Online classes with the monthly membership.</strong> Sign up to take time out.
          </p>
          <a href={ONLINE_CLASSES_INFO_URL} target="_blank" rel="noopener noreferrer">
            Get class info
          </a>
        </div>
      </div>
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
