// Password-manager extensions (e.g. LastPass) inject icon nodes into the
// field's parent before hydration, causing a mismatch. These opt the
// non-credential contact fields out of that injection.
const ignorePasswordManagers = {
  'data-lpignore': 'true',
  'data-1p-ignore': 'true',
  'data-form-type': 'other',
} as const

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap grid">
        <div>
          <h2>Say hello</h2>
          <p>Questions about classes, membership or coaching? I&apos;m always happy to answer.</p>
          <dl>
            <dt>Email</dt>
            <dd>
              <a href="mailto:lizaspire@gmail.com">lizaspire@gmail.com</a>
            </dd>
            <dt>Phone / WhatsApp</dt>
            <dd>
              <a href="tel:+447457405030">07457 405030</a>
            </dd>
            <dt>Social</dt>
            <dd>Instagram @mindful.moments.sound.healing · Facebook: Connected-YOU events</dd>
          </dl>
        </div>
        <form action="mailto:lizaspire@gmail.com" method="post" encType="text/plain">
          <label>
            Name
            <input name="name" required autoComplete="name" {...ignorePasswordManagers} />
          </label>
          <label>
            Email
            <input type="email" name="email" required autoComplete="email" {...ignorePasswordManagers} />
          </label>
          <label>
            Subject
            <input name="subject" {...ignorePasswordManagers} />
          </label>
          <label>
            Message
            <textarea name="message" required {...ignorePasswordManagers} />
          </label>
          <button className="btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
