import { PhotoFrame } from './photo-frame'

const offerings = [
  {
    title: 'Yoga',
    image: '/images/yoga-park.jpg',
    alt: 'Three women holding tree pose on yoga mats in a sunny park',
    text: 'Mindful, grounded classes that build strength and flexibility while calming a busy mind. Suitable for beginners and regular practitioners.',
  },
  {
    title: 'Slo Flo',
    image: '/images/sloflo.png',
    alt: 'Arms extended in a slow, flowing stretch',
    text: 'Slow, flowing movement linked with the breath. Take your time, move with ease and let tension soften with every transition.',
  },
  {
    title: 'Breathing exercises',
    image: '/images/breath.png',
    alt: 'Hands resting on the belly during calm breathing',
    text: 'Simple, effective techniques to settle the nervous system, ease anxiety and help you reset in the middle of a hectic day.',
  },
  {
    title: 'Online classes',
    image: '/images/online.png',
    alt: 'A yoga mat rolled out at home in front of a laptop',
    text: 'Practise from home, at a time that suits you. A range of offerings from me and guest teachers, joined from anywhere.',
  },
]

export function Offerings() {
  return (
    <section className="offer" id="offerings">
      <div className="wrap">
        <h2>Ways to practise with me</h2>
        <p className="lead">
          Whether you have ten minutes or an hour, there is a gentle way in. Everyone is welcome, whatever your
          experience or flexibility. Online classes are led by me and by guest teachers, so you will find a variety of
          styles and approaches.
        </p>
        <div className="cards">
          {offerings.map((o) => (
            <article className="card" key={o.title}>
              <PhotoFrame src={o.image} alt={o.alt} variant="soft" sizes="(max-width: 760px) 100vw, (max-width: 900px) 50vw, 25vw" />
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
