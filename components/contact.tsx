import { ContactForm } from '@/components/contact-form'

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
        <ContactForm />
      </div>
    </section>
  )
}
