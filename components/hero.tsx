import { PhotoFrame } from './photo-frame'

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap grid">
        <div>
          <h1>Slow down. Breathe. Come home to yourself.</h1>
          <p className="lead">
            Yoga, Slo Flo, breathwork and coaching to help you release tension, build resilience and find a touch more
            balance, in the studio or from your living room.
          </p>
          <div className="actions">
            <a className="btn" href="#membership">
              Join online, 40% off
            </a>
            <a className="btn ghost" href="#offerings">
              Explore offerings
            </a>
          </div>
        </div>
        <PhotoFrame src="/images/hero.png" alt="Sunrise over soft misty hills" priority />
      </div>
    </section>
  )
}
