const pillars = [
  {
    title: 'Recovery',
    text: 'Bodies and minds adapt and grow during rest, not only during effort. Without real downtime, stress builds up quietly until it shows as tiredness, tension, low mood or burnout.',
  },
  {
    title: 'Creativity',
    text: 'Clear ideas rarely arrive when we are rushing. Pausing gives your mind the space to wander, connect the dots and bring fresh energy to your work and your life.',
  },
  {
    title: 'Energy to give',
    text: 'You cannot pour from an empty cup. Restoring your own energy means you have more patience, presence and warmth for the people and things that matter to you.',
  },
]

const benefits = [
  'Calmer, steadier mood',
  'Less stress and anxiety',
  'Better quality sleep',
  'Reduced muscle tension',
  'Improved focus',
  'Greater resilience',
  'Easier mobility',
  'A kinder inner voice',
]

export function Why() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <h2>Why mindful moments matter</h2>
        <p className="lead intro">
          We are all encouraged to do more, give more and go faster. Rarely are we shown how to stop. Slow moments are
          not a luxury or a reward for when everything is done. They are what makes everything else possible.
        </p>
        <div className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <div className="benefits">
          <div>
            <h3>Benefits for body and mind</h3>
            <p>
              Regular slow practice, such as gentle movement, breathwork and stillness, helps the nervous system shift
              out of constant &quot;fight or flight&quot;.
            </p>
          </div>
          <ul>
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
