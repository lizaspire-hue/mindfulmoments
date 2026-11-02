const slots = [
  { day: 'Monday', time: '7:00pm' },
  { day: 'Wednesday', time: '7:00pm' },
  { day: 'Sunday', time: '5:00pm' },
]

export function Schedule() {
  return (
    <section className="sched" id="schedule">
      <div className="wrap grid">
        <div>
          <h2>Weekly online classes</h2>
          <p className="lead">
            Three live classes every week, taught by me and guest teachers. Practise from anywhere in the world, and if
            you can&apos;t make it live, the recording is available afterwards.
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
              <span className="day">{s.day}</span>
              <span className="time">{s.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
