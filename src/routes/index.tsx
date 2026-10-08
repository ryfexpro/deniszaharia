import { createFileRoute } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { storyScrubScenes, storyScrubTheme } from "@/story-scrub-scenes";

export const Route = createFileRoute("/")({ component: Index });

const years = [
  ["2009", "FIRST COURSE WITH ALFIO BARDOLLA, ITALY - FOREX", "THE FIRST SYSTEM.", "My first real introduction to financial markets, risk management, discipline and decision-making. Numbers became a language. Systems became a way of thinking."],
  ["2010", "ONLINE BUSINESS", "THE INTERNET CHANGED THE RULES.", "I decided to learn them. Digital business opened a new world of products, customers, marketing, testing and opportunities without borders."],
  ["2011", "WAKE UP", "I STOPPED ASKING WHAT JOB I WANTED.", "I started asking what I could build. From that point, learning became execution and ideas became real businesses."],
  ["2026", "CONVERGENCE", "I PUT IT ALL TOGETHER.", "Business experience, digital systems and AI now connect. The tools change, but the focus stays the same: build something real and make it work."],
];

const projects = [
  ["AEROPARK", "AIRPORT PARKING & MOBILITY", "Airport parking and mobility built around real daily operations. From secure parking and airport transfers to customer communication, every detail depends on speed, reliability and a consistent service experience."],
  ["TRAVEL MOLDOVA AGENCY", "TRAVEL & EXPERIENCES", "A travel and destination service connecting international visitors with Moldova through private transfers, tours, hospitality and curated local experiences. Built to make the destination easier to discover and experience."],
  ["E-COMMERCE", "DIGITAL COMMERCE", "Building and testing products, online stores, content and advertising across digital markets. A continuous cycle of testing, learning, adapting and improving as customer behavior and platforms evolve."],
  ["KEVOT", "AI BUSINESS INFRASTRUCTURE", "The next chapter: practical AI systems, agents, automation and digital infrastructure designed around real business problems. Less manual work, faster processes and more control for growing companies."],
];

function Index() {
  return <main className="dz-site">
    <header className="dz-nav">
      <a className="dz-mark" href="#top" aria-label="Denis Zaharia home">DZ.</a>
      <nav aria-label="Primary"><a href="#story">STORY</a><a href="#work">WORK</a><a href="#kevot">KEVOT</a><a href="#beyond">BEYOND</a></nav>
      <div className="dz-nav-end"><span>EN / IT / RO / RU</span><a className="dz-nav-cta" href="#contact">BUILD WITH ME</a></div>
    </header>

    <section id="top" className="dz-hero dz-hero-primary"><ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} /></section>

    <section id="story" className="dz-manifesto dz-section">
      <p className="dz-kicker">STILL BUILDING</p>
      <h2>NOT EVERYTHING<br/>WORKED.</h2>
      <h2 className="dz-blue">EVERYTHING TAUGHT<br/>ME SOMETHING.</h2>
    </section>

    <section className="dz-timeline dz-section" aria-label="Entrepreneurial timeline">
      {years.map(([year, label, title, body]) => <article className="dz-year" key={year}>
        <div className="dz-year-number">{year}</div><div className="dz-year-copy"><p>{label}</p><h3>{title}</h3><span>{body}</span></div>
      </article>)}
    </section>

    <section className="dz-velocity dz-section"><div>IDEAS.</div><div>BUSINESSES.</div><div>MISTAKES.</div><div>CLIENTS.</div><div>SYSTEMS.</div><div>GROWTH.</div><strong>I KEPT BUILDING.</strong></section>

    <section className="dz-stats dz-section" aria-label="Business statistics">
      <div><strong>10<sup>+</sup></strong><span>YEARS IN BUSINESS</span><small>BUILDING, TESTING, LEARNING</small></div>
      <div><strong>10<sup>+</sup></strong><span>BUSINESSES BUILT</span><small>ACROSS DIFFERENT INDUSTRIES</small></div>
      <div><strong>10,000<sup>+</sup></strong><span>PEOPLE SERVED</span><small>THROUGH PRODUCTS AND SERVICES</small></div>
      <div><strong>5</strong><span>COUNTRIES</span><small>EXPERIENCE ACROSS MARKETS</small></div>
    </section>

    <section id="work" className="dz-work dz-section">
      <div className="dz-section-title"><p>BUILT IN THE REAL WORLD.</p><h2>DIFFERENT INDUSTRIES.<br/>SAME OBSESSION:<br/><span>MAKE IT WORK.</span></h2></div>
      <div className="dz-projects">{projects.map((p,i)=><article className="dz-project" key={p[0]}><span>0{i+1}</span><div><h3>{p[0]}</h3><p>{p[1]}</p></div><p>{p[2]}</p><b>↗</b></article>)}</div>
    </section>

    <section id="kevot" className="dz-kevot dz-section">
      <p>NOW EVERYTHING CONNECTS.</p><h2>AI CHANGES<br/>THE <span>SPEED.</span></h2>
      <div className="dz-kevot-grid"><div><h3>KEVOT</h3><p>AI BUSINESS INFRASTRUCTURE</p></div><div className="dz-capabilities">AI AGENTS / AUTOMATION / AI WEBSITES / CRM & SALES SYSTEMS / LEAD SYSTEMS / BUSINESS WORKFLOWS / INTERNAL AI TOOLS</div></div>
      <blockquote>AI ISN'T THE BUSINESS.<br/><strong>WHAT YOU BUILD WITH IT IS.</strong></blockquote>
      <a className="dz-kevot-link" href="https://kevot.ai" rel="noreferrer">DISCOVER KEVOT ↗</a>
    </section>

    <section className="dz-story-film" aria-label="Denis Zaharia in motion"><ScrollScrub scenes={storyScrubScenes} theme={storyScrubTheme} /></section>
    <section id="beyond" className="dz-beyond-v2 dz-section">
      <div className="dz-beyond-v2-head"><p>BEYOND BUSINESS.</p><h2>BUSINESS IS WHAT I BUILD.<br/><span>LIFE IS WHY I BUILD IT.</span></h2></div>
      <div className="dz-beyond-v2-grid">
        <figure className="dz-life-photo dz-life-photo-main"><img src="/assets/brand/beyond-life-01.png" alt="Denis Zaharia beyond business"/><figcaption>MOVEMENT / TRAVEL / LIFE</figcaption></figure>
        <div className="dz-beyond-v2-note"><p>THE WORK MATTERS.<br/>SO DOES EVERYTHING<br/>AROUND IT.</p><a href="https://www.instagram.com/denny_zaharia?stkn=MWpxYnltc2hvc3dncw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">FOLLOW ME ON INSTAGRAM <span>↗</span></a></div>
        <figure className="dz-life-photo dz-life-photo-side"><img src="/assets/brand/beyond-life-02.png" alt="Denis Zaharia lifestyle"/><figcaption>FAMILY / SPORT / CURIOSITY</figcaption></figure>
      </div>
    </section>

    <section className="dz-geo dz-section"><span>WE CAN WORK</span><i>+</i><span>CREATE</span><i>→</i><span>WORLDWIDE STORIES</span></section>

    <section id="contact" className="dz-contact dz-section"><p>THE NEXT 10 YEARS START NOW.</p><h2>LET'S BUILD<br/>WHAT'S NEXT.</h2><a className="dz-build" href="mailto:hello@deniszaharia.com?subject=Build%20with%20Denis">BUILD WITH ME <span>↗</span></a></section>

    <footer><div>DENIS ZAHARIA</div><p>ENTREPRENEUR / BUSINESS BUILDER / AI FOUNDER</p><strong>STILL BUILDING.</strong><small>© 2026 DENIS ZAHARIA</small></footer>
  </main>;
}
