import { PhotoFrame } from './photo-frame'

export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap grid">
        <PhotoFrame
          src="/images/liz.jpg"
          alt="Liz Marsland laughing outdoors in the sunshine with a horse"
          variant="round"
          sizes="260px"
        />
        <div className="story">
          <h2>My story</h2>
          <p>
            I&apos;m Liz Marsland, BSc: ex-athlete, personal trainer and massage therapist, and someone who learned the
            hard way why slowing down matters.
          </p>
          <p>
            For years, my identity was linked to work, making money in a tough city, looking strong and lean, and
            performing well in my sports. My nervous system never had space to rest, and so I burned out.
          </p>
          <p>
            What followed was a long journey of slowing down. I tried what worked for me: yoga, sound, meditation,
            breathwork, time in nature and community. I learned what helps me feel balanced, and just as importantly,
            how to recognise the signs when I am not. Now I notice them sooner and know how to respond with kindness
            instead of pushing through.
          </p>
          <h3>Why I do this</h3>
          <p>
            Making space in our lives by promising ourselves more slow moments is an ongoing practice, just like work
            and exercise. It is so needed, yet it is the least talked about, because we all want a quick fix.
          </p>
          <p>
            I see this gap all the time with my clients in personal training and massage. Now I want to use my lifelong
            learning to help others, so they can perform well in every area of life, feel comfortable in their own skin
            and build a better relationship with themselves.
          </p>
        </div>
      </div>
    </section>
  )
}
