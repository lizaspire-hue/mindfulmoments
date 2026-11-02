const quotes = [
  {
    name: 'Ann-Marie Ramm-Richter',
    text: 'Liz creates a serene and welcoming space, perfect for relaxation and grounding. Highly recommend her sessions for anyone looking to unwind and find inner peace.',
  },
  {
    name: 'Charlie Green',
    text: 'Liz is such a lovely facilitator. I felt deeply grounded and embodied the session. I will be back!',
  },
  {
    name: 'Samy Jay',
    text: "The whole experience from start to finish was wonderful. I felt extremely well held and wouldn't hesitate to come back for more.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <h2>Kind words</h2>
        <div className="quotes">
          {quotes.map((q) => (
            <blockquote key={q.name}>
              {q.text}
              <cite>{q.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
