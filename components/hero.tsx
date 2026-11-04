import { ONLINE_CLASSES_INFO_URL } from '@/lib/links'
import { LogoMark } from './logo-mark'
import { PhotoFrame } from './photo-frame'
import { slots } from './schedule'

export function Hero() {
  return (
    <section className="hero">
      <LogoMark className="hero-logo" />
      <div className="wrap grid">
        <div>
          <h1 className="hero-title">Mindful Moments</h1>
          <p className="hero-tagline">Slow down. Breathe. Come home to yourself.</p>
          <p className="lead">
            Yoga, Slo Flo, breathwork and coaching to help you release tension, build resilience and find a touch more
            balance, in the studio or from your living room.
          </p>
          <div className="online-callout">
            <span className="eyebrow">Online classes &middot; Monthly membership</span>
            <p>Join live from anywhere, with recordings afterwards. Sign up to take time out and get class info.</p>
            <fieldset className="class-choices">
              <legend>Choose from 3 classes a week</legend>
              {slots.map((s, i) => (
                <label key={s.day} className="class-choice">
                  <input type="radio" name="hero-class" value={s.name} defaultChecked={i === 0} />
                  <span className="class-choice-info">
                    <span className="class-choice-day">{s.day}</span>
                    <span className="class-choice-name">{s.name}</span>
                  </span>
                  <span className="class-choice-time">{s.time}</span>
                </label>
              ))}
            </fieldset>
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
