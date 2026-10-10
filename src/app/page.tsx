import { portfolio } from "../../data/portfolio";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header} id="top">
        <a className={styles.wordmark} href="#top" aria-label={`${portfolio.profile.name} home`}>
          <span className={styles.logoMark}>N</span>
          <span>{portfolio.profile.name}</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
        </nav>
        <a className={styles.navCta} href={`mailto:${portfolio.profile.email}`}>Let’s connect <span aria-hidden="true">↗</span></a>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroVisual} aria-label="Decorative monogram illustration">
          <div className={styles.visualTopline}><span>INDEPENDENT THINKER</span><span>DAVAO · PH</span></div>
          <div className={styles.visualSun} />
          <div className={styles.visualArch} />
          <div className={styles.visualMonogram}>{portfolio.profile.monogram}</div>
          <div className={styles.visualBlock} />
          <div className={styles.visualCaption}><span>GOOD WORK</span><span>STARTS WITH</span><strong>GOOD PEOPLE.</strong></div>
          <span className={styles.visualIndex}>01 / 05</span>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span />{portfolio.hero.eyebrow}</p>
          <h1 id="hero-title">{portfolio.hero.headline[0]}<br />{portfolio.hero.headline[1]}<br /><em>{portfolio.hero.headline[2]}</em></h1>
          <p className={styles.heroName}>{portfolio.profile.name} <span>· {portfolio.profile.title}</span></p>
          <p className={styles.heroDescription}>{portfolio.hero.description}</p>
          <a className={styles.primaryButton} href="#about">{portfolio.hero.action}<span aria-hidden="true">↓</span></a>
          <p className={styles.availability}><span />{portfolio.profile.availability}</p>
        </div>
        <div className={styles.heroFooter}><span>DETAIL-MINDED BY NATURE</span><span>SCROLL TO GET TO KNOW ME ↓</span></div>
      </section>

      <section className={styles.contactBand} aria-label="Get in touch">
        <div className={styles.contactIntro}>
          <p className={styles.eyebrow}>A GOOD PLACE TO START</p>
          <h2>{portfolio.contact.heading}</h2>
          <p>{portfolio.contact.description}</p>
          <a className={styles.darkButton} href={`mailto:${portfolio.profile.email}`}>{portfolio.contact.action}<span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.contactCard}>
          <span className={styles.cardNumber}>LET’S TALK</span>
          <span className={styles.cardMonogram}>{portfolio.profile.monogram}</span>
          <a href={`mailto:${portfolio.profile.email}`}>{portfolio.profile.email}</a>
          <span>{portfolio.profile.location}</span>
          <span className={styles.cardOrbit} aria-hidden="true">✳</span>
        </div>
      </section>

      <section className={styles.stats} aria-label="At a glance">
        {portfolio.stats.map((stat) => (
          <div className={styles.stat} key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
        ))}
      </section>

      <section className={styles.about} id="about">
        <p className={styles.scriptLabel}>a little about me</p>
        <div className={styles.aboutCard}>
          <p className={styles.eyebrow}>{portfolio.introduction.eyebrow}</p>
          <h2>{portfolio.introduction.heading}</h2>
          <p>{portfolio.introduction.description}</p>
          <a href="#experience">See where I’ve been <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className={styles.experience} id="experience">
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>A FEW CHAPTERS SO FAR</p><h2>Experience that<br /><em>travels well.</em></h2></div>
          <p>Different settings, shared strengths: clear communication, careful coordination, and reliable follow-through.</p>
        </div>
        <div className={styles.experienceList}>
          {portfolio.experience.map((job, index) => (
            <article className={`${styles.experienceItem} ${index % 2 ? styles.alternate : ""}`} key={`${job.organization}-${job.period}`}>
              <div className={styles.jobVisual} aria-hidden="true">
                <span className={styles.jobNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.jobCategory}>{job.category}</span>
                <span className={styles.jobGlyph}>{index === 0 ? "↗" : index === 1 ? "⌘" : index === 2 ? "＋" : index === 3 ? "✳" : "◎"}</span>
              </div>
              <div className={styles.jobCopy}>
                <p className={styles.jobPeriod}>{job.period}</p>
                <h3>{job.organization}</h3>
                {job.role && <p className={styles.jobRole}>{job.role}</p>}
                <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.expertise} id="expertise">
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>THE THINGS I BRING</p><h2>Practical skills.<br /><em>Human approach.</em></h2></div>
          <p>Organized, curious, and comfortable moving between people, information, and tools.</p>
        </div>
        <div className={styles.skillColumns}>
          <div className={styles.skillPanel}>
            <span className={styles.skillIndex}>01 / HOW I WORK</span>
            <h3>Core strengths</h3>
            <ul className={styles.skillList}>{portfolio.skills.core.map((skill) => <li key={skill}><span aria-hidden="true">✳</span>{skill}</li>)}</ul>
          </div>
          <div className={`${styles.skillPanel} ${styles.toolsPanel}`}>
            <span className={styles.skillIndex}>02 / WHAT I WORK WITH</span>
            <h3>Tools & systems</h3>
            <ul className={styles.skillList}>{portfolio.skills.tools.map((skill) => <li key={skill}><span aria-hidden="true">✳</span>{skill}</li>)}</ul>
            <div className={styles.education}>
              <span className={styles.skillIndex}>A FOUNDATION IN ANALYTICS</span>
              <h4>{portfolio.education.degree}</h4>
              <p>{portfolio.education.institution}</p>
            </div>
          </div>
        </div>
        <div className={styles.credentials}>
          <p className={styles.eyebrow}>LEARNING, ALWAYS</p>
          <div>{portfolio.certifications.map((certification) => <span key={certification}>{certification}</span>)}</div>
        </div>
      </section>

      <section className={styles.publication}>
        <div className={styles.publicationMark} aria-hidden="true">“</div>
        <div><p className={styles.eyebrow}>RESEARCH & PUBLICATION · 2021</p><h2>{portfolio.publication.citation}</h2><p className={styles.journal}>{portfolio.publication.journal}</p></div>
        <span className={styles.publicationFlower} aria-hidden="true">✳</span>
      </section>

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#top"><span className={styles.logoMark}>N</span><span>{portfolio.profile.name}</span></a>
        <a href={`mailto:${portfolio.profile.email}`}>{portfolio.profile.email}</a>
        <span>© {new Date().getFullYear()} · MADE WITH INTENTION</span>
      </footer>
    </main>
  );
}