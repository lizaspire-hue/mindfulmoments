import { PhotoFrame } from './photo-frame'

const focusAreas = [
  'Stress management',
  'Resilience',
  'Self understanding',
  'Movement',
  'Breath and nervous system care',
  'Work-life balance',
]

export function Coaching() {
  return (
    <section className="coach" id="coaching">
      <div className="wrap grid">
        <PhotoFrame src="/images/path.png" alt="A footpath leading through a meadow towards the hills" />
        <div>
          <h2>One-to-one coaching</h2>
          <p className="lead">
            Supportive, practical coaching that blends movement, breath and honest conversation. If you want to find
            ways to bring more balance into your life, start with a free consultation call. We&apos;ll talk about where
            you are now, what you&apos;d like to change, and whether coaching feels right for you, with no pressure.
          </p>
          <div className="coach-focus">
            <h3>Stress management &amp; resilience</h3>
            <p>
              When life feels like too much, it&apos;s easy to lose yourself in the rush. Together we&apos;ll slow
              things down and find what actually helps you: simple, practical tools to ease overwhelm, steady your
              nervous system and bounce back when things get hard. No quick fixes, just small, kind habits that build
              a calmer, more grounded and more focused you, one step at a time.
            </p>
          </div>
          <ul className="tags">
            {focusAreas.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a className="btn" href="#contact">
            Book your free consultation call
          </a>
        </div>
      </div>
    </section>
  )
}
