'use client'

import { useEffect, useState } from 'react'

const cards = [
  { thought: 'I am allowed to rest without earning it.', practice: 'Take three slow breaths before your next task.' },
  { thought: 'I speak to myself with the kindness I offer others.', practice: 'Notice one harsh thought today and soften it.' },
  { thought: 'My body is my home, and I treat it gently.', practice: 'Place a hand on your heart and say thank you.' },
  { thought: 'I am enough, exactly as I am right now.', practice: 'Write down one thing you like about yourself.' },
  { thought: 'Saying no to others can be saying yes to me.', practice: 'Protect ten minutes of quiet time today.' },
  { thought: 'Progress, not perfection, is my path.', practice: 'Celebrate one small win before bed.' },
  { thought: 'I can hold space for my feelings without judgement.', practice: 'Name what you feel, then breathe into it.' },
  { thought: 'I deserve the same patience I give to those I love.', practice: 'Slow down one everyday moment, like a cup of tea.' },
  { thought: 'Each breath is a fresh beginning.', practice: 'Pause at a doorway today and take one mindful breath.' },
  { thought: 'I trust myself to know what I need.', practice: 'Ask yourself: what would feel nourishing right now?' },
  { thought: 'I let go of what I cannot control.', practice: 'Relax your jaw and drop your shoulders.' },
  { thought: 'I am growing, even when I cannot see it.', practice: 'Spend five minutes outside, noticing nature.' },
]

function dayIndex() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const day = Math.floor((now.getTime() - start.getTime()) / 86_400_000)
  return day % cards.length
}

export function DailyCard() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(dayIndex())
  }, [])

  const card = cards[index]

  return (
    <div className="daily-card" aria-live="polite">
      <p className="daily-card-label">Today&apos;s self-love card</p>
      <p className="daily-card-thought">{card.thought}</p>
      <p className="daily-card-practice">
        <span>Practice:</span> {card.practice}
      </p>
      <button type="button" className="daily-card-btn" onClick={() => setIndex((i) => (i + 1) % cards.length)}>
        Draw another card
      </button>
    </div>
  )
}
