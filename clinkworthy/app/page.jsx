export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="wordmark">
          clinkworthy<span className="accent">.</span>
        </div>
        <a className="nav-cta" href="#waitlist">
          Get early access
        </a>
      </header>

      <section className="hero">
        <p className="eyebrow">🥂 For best men, maids of honor & terrified parents</p>
        <h1>
          Don&apos;t wing the most-watched
          <br />
          <em>4&nbsp;minutes</em> of your year.
        </h1>
        <p className="sub">
          Clinkworthy interviews you like a real speechwriter would — your stories, your
          voice, your inside jokes — then drafts your wedding speech and coaches you until
          you can deliver it without your hands shaking.
        </p>
        <a className="cta" href="#waitlist">
          Join the waitlist — launching this wedding season
        </a>
        <p className="fine">One-time price. No subscription. No clichés, guaranteed.</p>
      </section>

      <section className="how">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Tell your stories</h3>
            <p>
              A 12-minute guided interview — talk or type. How you met, the moment you knew
              they&apos;d found their person, the joke only you two get.
            </p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Get a speech that sounds like you</h3>
            <p>
              Not a template. Your own phrases, structured by people who&apos;ve heard a
              hundred wedding speeches land — and a hundred die.
            </p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Rehearse until you&apos;re ready</h3>
            <p>
              Teleprompter mode, pacing timer, and markers for where the laughs come.
              Walk up to that mic knowing exactly what happens next.
            </p>
          </div>
        </div>
      </section>

      <section className="proof">
        <blockquote>
          &ldquo;We hear 2–5 wedding speeches every single weekend. The good ones aren&apos;t
          written by better writers — they&apos;re written from better questions.&rdquo;
        </blockquote>
        <p className="attribution">— the wedding-band musicians behind Clinkworthy</p>
      </section>

      <section className="waitlist" id="waitlist">
        <h2>Speech coming up?</h2>
        <p>
          Join the waitlist and get <strong>early access + launch pricing</strong>. If your
          wedding is soon, tell us the date — we&apos;ll bump you up the list.
        </p>
        <form
          action="https://formsubmit.co/hello@clinkworthy.com"
          method="POST"
          className="waitlist-form"
        >
          <input type="hidden" name="_subject" value="Clinkworthy waitlist signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
          />
          <select name="role" aria-label="Your role" defaultValue="">
            <option value="" disabled>
              I&apos;m the…
            </option>
            <option>Best man</option>
            <option>Maid of honor</option>
            <option>Father of the bride/groom</option>
            <option>Mother of the bride/groom</option>
            <option>Groom / Bride</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            name="wedding_date"
            placeholder="Wedding date (optional)"
            aria-label="Wedding date"
          />
          <button type="submit">Save my spot</button>
        </form>
      </section>

      <footer>
        <p>
          Make it clinkworthy. <span className="accent">🥂</span>
        </p>
        <p className="fine">© {new Date().getFullYear()} Clinkworthy · hello@clinkworthy.com</p>
      </footer>
    </main>
  )
}
