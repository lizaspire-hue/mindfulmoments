import { CopyCodeButton } from './copy-code-button'

const perks = [
  'Yoga and Slo Flo classes',
  'Varied sessions from me and guest teachers',
  'Guided breathing exercises',
  'Join live from anywhere in the world',
  'Class recordings available afterwards',
  'Cancel any time',
]

const DISCOUNT_CODE = 'MINDFUL40'

export function Membership() {
  return (
    <section className="member" id="membership">
      <div className="wrap grid">
        <div>
          <h2>Monthly online membership</h2>
          <p>
            Build a steady, nourishing routine with access to online classes taught by me and a rotating team of guest
            teachers. No pressure, no long contract: just a regular space to move, breathe and reset.
          </p>
          <ul>
            {perks.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="price">
          <span className="tag">40% off your first month</span>
          <div className="amt">£17.99</div>
          <div className="was">first month, then £29.99 per month</div>
          <div className="code" aria-label="Discount code">
            <span>Use code</span>
            <strong>{DISCOUNT_CODE}</strong>
            <CopyCodeButton code={DISCOUNT_CODE} />
          </div>
          <a className="btn" href="#contact">
            Start your membership
          </a>
        </div>
      </div>
    </section>
  )
}
