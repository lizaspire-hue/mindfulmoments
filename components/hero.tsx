import { ONLINE_CLASSES_INFO_URL } from '@/lib/links'
import { LogoMark } from './logo-mark'
import { PhotoFrame } from './photo-frame'

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap grid">
        <div>
          <h1 className="hero-title">
            <span>Mindful Moments</span>
            <LogoMark className="hero-logo" />
          </h1>
          <p className="hero-tagline">Slow down. Breathe. Come home to yourself.</p>
          <p className="lead">
            Yoga, Slo Flo, breathwork and coaching to help you release tension, build resilience and find a touch more
            balance, in the studio or from your living room.
          </p>
          <div className="online-callout">
            <span className="eyebrow">Online classes &middot; Monthly membership</span>
            <p>Join live from anywhere, with recordings afterwards. Sign up to take time out and get class info.</p>
            <div className="actions">
              <a className="btn" href={ONLINE_CLASSES_INFO_URL} target="_blank" rel="noopener noreferrer">
                Sign up for online class info
              </a>
              <a className="btn ghost" href="#membership">
                Join online, 40% off
              </a>
            </div>
          </div>
          <a className="text-link" href="#offerings">
            Explore all offerings
          </a>
        </div>
        <PhotoFrame
          src="/images/liz-namaste.jpg"
          alt="Liz in a white lace top with hands in prayer, beside an ivy-covered wall"
          priority
        />
      </div>
    </section>
  )
}
