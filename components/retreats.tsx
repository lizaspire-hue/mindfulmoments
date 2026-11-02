import { PhotoFrame } from './photo-frame'
import { RETREATS_URL } from '@/lib/links'

const highlights = ['Daily yoga & breathwork', 'Meditation & sound', 'Nourishing food', 'Time in nature']

export function Retreats() {
  return (
    <section className="coach retreats" id="retreats">
      <div className="wrap grid">
        <PhotoFrame src="/images/stones.png" alt="A stack of balanced stones on a misty lake shore at dawn" />
        <div>
          <h2>Retreats</h2>
          <p className="lead">
            Step away from the everyday and give yourself space to rest, move and reconnect. Our retreats combine
            gentle yoga, breathwork and meditation with good food, beautiful surroundings and a small, welcoming group,
            so you return home feeling calmer, stronger and more like yourself.
          </p>
          <ul className="tags">
            {highlights.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a className="btn" href={RETREATS_URL} target="_blank" rel="noopener noreferrer">
            Explore upcoming retreats
          </a>
        </div>
      </div>
    </section>
  )
}
