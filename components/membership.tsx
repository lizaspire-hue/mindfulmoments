import { ONLINE_CLASSES_INFO_URL } from '@/lib/links'
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
const SIGN_UP_URL = 'https://buy.stripe.com/4gM9AV57acGO5kS6E12400l'

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
          <a className="btn" href={SIGN_UP_URL} target="_blank" rel="noopener noreferrer">
            Start your membership
          </a>
          <a className="info-link" href={ONLINE_CLASSES_INFO_URL} target="_blank" rel="noopener noreferrer">
            Not ready yet? Sign up for online class info
          </a>
        </div>
      </div>
    </section>
  )
}
