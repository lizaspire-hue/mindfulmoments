import { PhotoFrame } from './photo-frame'

const journey = [
  {
    title: 'Deep massage',
    time: '75–90 mins',
    text: 'Slow, deep work to ease tight muscles and relieve the tension your body has been holding onto.',
  },
  {
    title: '1:1 sound bath',
    time: 'To close',
    text: 'Gong and chimes wash over you as you sink into deep relaxation, giving body and mind the space to release and restore.',
  },
]

export function Massage() {
  return (
    <section className="massage" id="massage">
      <div className="wrap grid">
        <div>
          <h2>Massage therapy &amp; sound bath healing</h2>
          <p className="lead">
            A deeply restorative treatment that begins with hands-on massage and ends in sound. Allow yourself to
            fully let go, so your body and mind can release any tensions and gently restore themselves.
          </p>
          <ol className="journey">
            {journey.map((step) => (
              <li key={step.title}>
                <div className="journey-head">
                  <h3>{step.title}</h3>
                  <span>{step.time}</span>
                </div>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="massage-where">Home visits or Stoke Newington Therapy Rooms.</p>
          <a className="btn" href="#contact">
            Book a massage &amp; sound bath
          </a>
        </div>
        <PhotoFrame src="/images/liz-massage.png" alt="Liz giving a client a deep shoulder massage on a treatment table" />
      </div>
    </section>
  )
}
