import { DailyCard } from './daily-card'
import { PhotoFrame } from './photo-frame'

const photos = [
  { src: '/images/stones.png', alt: 'Balanced stones beside a calm lake' },
  { src: '/images/leaves.png', alt: 'A leafy branch in soft sunlight' },
  { src: '/images/moon.png', alt: 'Crescent moon over gentle hills' },
]

export function Gallery() {
  return (
    <section className="strip" aria-label="Gallery">
      <div className="wrap row">
        {photos.map((p, i) =>
          i === 1 ? (
            <div key={p.src} className="card-photo">
              <PhotoFrame src={p.src} alt={p.alt} variant="soft" sizes="(max-width: 900px) 100vw, 33vw" />
              <DailyCard />
            </div>
          ) : (
            <PhotoFrame key={p.src} src={p.src} alt={p.alt} variant="soft" sizes="(max-width: 900px) 100vw, 33vw" />
          ),
        )}
      </div>
    </section>
  )
}
