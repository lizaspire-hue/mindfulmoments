const slots = [
  { day: 'Monday', time: '7:00pm', name: 'Mindful Yoga' },
  { day: 'Wednesday', time: '7:00pm', name: 'Breathe & Yin' },
  { day: 'Sunday', time: '5:00pm', name: 'Slo Flo & Meditation/Sound' },
]

export function Schedule() {
  return (
    <section className="sched" id="schedule">
      <div className="wrap grid">
        <div>
          <h2>Weekly online classes</h2>
          <p className="lead">
            <strong>3 classes a week, and more to come.</strong> From myself and guest teachers.
          </p>
          <p className="lead">
            Practise from anywhere in the world, and if you can&apos;t make it live, the recording is available
            afterwards.
          </p>
          <p className="note">All times are UK time (London). Class links are sent to members before each session.</p>
          <p className="cta">
            <a className="btn" href="#membership">
              Join with 40% off
            </a>
          </p>
        </div>
        <ul className="slots" aria-label="Class timetable">
          {slots.map((s) => (
            <li key={s.day}>
              <span className="slot-info">
                <span className="day">{s.day}</span>
                <span className="class-name">{s.name}</span>
              </span>
              <span className="time">{s.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
