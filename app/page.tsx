import Link from 'next/link';

const courses = [
  ['Cryptocurrency Fundamentals','Beginner','14 modules','4–6 weeks','Build a strong foundation in Bitcoin, blockchain, wallets, exchanges, tokenomics, liquidity and security.'],
  ['Technical Analysis Masterclass','Intermediate','15 modules','6–8 weeks','Learn market structure, price action, indicators, chart patterns and multi-timeframe analysis.'],
  ['Crypto Risk Management','All levels','10 modules','3–4 weeks','Protect capital with position sizing, stop loss, risk/reward, trading journals and discipline.'],
  ['Advanced Crypto Trading','Advanced','9 modules','8–10 weeks','Develop a repeatable trading framework using liquidity, order blocks, FVGs, volume and backtesting.'],
];

const features = [
  ['01','Structured Learning','A clear path from crypto beginner to advanced market analysis, without information overload.'],
  ['02','Practical Analysis','Learn how to read charts, identify market structure and build a repeatable analysis process.'],
  ['03','Risk First','Trading education built around capital preservation, position sizing and disciplined execution.'],
  ['04','TradingView Skills','Learn the tools, timeframes, drawing techniques and workflows used for practical chart analysis.'],
  ['05','Student Progress','Track lessons, quizzes, course completion and certificates from one professional dashboard.'],
  ['06','Global Mindset','International-quality education designed to be clear, practical and accessible to learners anywhere.'],
];

export default function Home() {
  return <>
    <div className="topbar"><div className="container"><span>THOOZANE CRYPTO TRADER • CRYPTO EDUCATION ACADEMY</span><span>Education First. Risk Management Always.</span></div></div>
    <header className="site-header"><div className="container nav">
      <Link href="/" className="brand"><span className="logo">TC</span><span>THOOZANE CRYPTO<small>TRADER • ACADEMY</small></span></Link>
      <nav className="navlinks"><Link href="#courses">Courses</Link><Link href="#roadmap">Learning Path</Link><Link href="#resources">Resources</Link><Link href="#about">About</Link><Link href="#contact">Contact</Link></nav>
      <div className="navactions"><Link className="btn btn-ghost" href="/login">Student Login</Link><Link className="btn btn-primary" href="/register">Get Started</Link></div>
      <span className="mobile-menu">☰</span>
    </div></header>

    <main>
      <section className="hero"><div className="container hero-grid">
        <div>
          <div className="eyebrow">CRYPTO • TRADING • BLOCKCHAIN EDUCATION</div>
          <h1>Master Crypto.<br/><span>Understand the Market.</span></h1>
          <p>Build real market knowledge through structured lessons in cryptocurrency, technical analysis, TradingView, risk management, trading psychology and blockchain.</p>
          <div className="actions"><Link className="btn btn-primary" href="#courses">Explore Courses →</Link><Link className="btn btn-ghost" href="/register">Join the Academy</Link></div>
          <div className="trust"><span>✓ <strong>Structured curriculum</strong></span><span>✓ <strong>Practical learning</strong></span><span>✓ <strong>Risk-aware education</strong></span></div>
        </div>
        <div className="market-card">
          <div className="market-head"><span className="market-title">Market Learning View</span><span className="live">● EDUCATIONAL</span></div>
          <div className="chart"><svg viewBox="0 0 600 250" preserveAspectRatio="none"><polyline fill="none" stroke="#e4bd67" strokeWidth="3" points="0,190 55,165 95,180 145,125 190,145 230,95 275,120 320,75 365,105 405,55 450,80 500,38 545,60 600,22"/><polyline fill="none" stroke="#55d6a2" strokeWidth="2" opacity=".65" points="0,215 80,200 145,205 220,165 300,170 380,125 455,135 530,100 600,95"/></svg></div>
          <div className="coin-row"><div className="coin"><b>BTC</b><span>Market leader</span></div><div className="coin"><b>ETH</b><span>Smart contracts</span></div><div className="coin"><b>SOL</b><span>High-performance chain</span></div><div className="coin"><b>XRP</b><span>Payments ecosystem</span></div><div className="coin"><b>BNB</b><span>Exchange ecosystem</span></div><div className="coin"><b>+ MORE</b><span>Market research</span></div></div>
        </div>
      </div></section>

      <section className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">WHY THOOZANE</div><h2>Learn with a system.</h2></div><p className="section-intro">No hype. No guaranteed-profit promises. Just structured education designed to help you understand markets and make more disciplined decisions.</p></div><div className="features">{features.map(([n,t,d])=><article className="feature" key={t}><div className="icon">{n}</div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section" id="roadmap"><div className="container"><div className="eyebrow">LEARNING ROADMAP</div><h2>From beginner to market-ready.</h2><p className="section-intro">Follow a progression that turns scattered crypto information into an organized learning journey.</p><div className="roadmap" style={{marginTop:30}}>{['Crypto Beginner','Market Fundamentals','Technical Analysis','Trading Strategy','Risk Management','Advanced Analysis','Professional Framework'].map((x,i)=><div className="step" key={x}><b>LEVEL 0{i+1}</b><h4>{x}</h4></div>)}</div></div></section>

      <section className="section" id="courses"><div className="container"><div className="section-head"><div><div className="eyebrow">ACADEMY COURSES</div><h2>Build your knowledge.</h2></div><Link className="btn btn-ghost" href="/courses">View all courses →</Link></div><div className="courses">{courses.map(([title,level,mods,duration,desc])=><article className="course" key={title}><div className="course-top"><h3>{title}</h3><span className="badge">{level}</span></div><p>{desc}</p><div className="meta"><span>{mods}</span><span>{duration}</span><span>Quizzes</span></div><Link href="/register">Start learning →</Link></article>)}</div></div></section>

      <section className="section"><div className="container"><div className="eyebrow">HOW IT WORKS</div><h2>A simple path to progress.</h2><div className="process" style={{marginTop:30}}>{['Create your account','Choose a course','Complete lessons & quizzes','Earn your certificate'].map((x,i)=><div className="feature" key={x}><div className="icon">0{i+1}</div><h3>{x}</h3><p>Everything you need is organized inside your student learning environment.</p></div>)}</div></div></section>

      <section className="section" id="resources"><div className="container"><div className="eyebrow">FREE RESOURCES</div><h2>Start learning today.</h2><div className="resource-grid" style={{marginTop:28}}>{['Crypto Beginner Guide','Risk Management Checklist','Trading Journal Template','Crypto A–Z Glossary'].map(x=><article className="resource" key={x}><h3>{x}</h3><p>Practical educational material to support your learning journey.</p><Link className="course" style={{padding:0,border:0,background:'transparent',color:'var(--gold)'}} href="/register">Access resource →</Link></article>)}</div></div></section>

      <section className="section" id="about"><div className="container"><div className="contact"><div><div className="eyebrow">ABOUT THOOZANE</div><h2>Education before speculation.</h2><p className="section-intro">Our mission is to make high-quality cryptocurrency education structured, practical and understandable for learners around the world. We focus on knowledge, discipline, security and risk awareness.</p></div><Link className="btn btn-primary" href="/register">Join the Academy</Link></div></div></section>

      <section className="section" id="contact"><div className="container"><div className="disclaimer"><strong>Risk Disclaimer</strong><br/>Cryptocurrency and trading involve significant financial risk. Educational content provided by Thoozane Crypto Trader is for informational and educational purposes only and does not constitute financial, investment or trading advice. No profits are guaranteed.</div><div className="contact" style={{marginTop:30}}><div><div className="eyebrow">CONTACT</div><h2>Ready to learn?</h2><p className="section-intro">Questions about courses, enrollment or mentorship? Contact Thoozane Crypto Trader directly.</p></div><a className="btn btn-primary" href="https://wa.me/252634279818">WhatsApp +252 63 4279818</a></div></div></section>
    </main>

    <footer className="footer"><div className="container footer-grid"><div>© 2026 Thoozane Crypto Trader. All rights reserved.</div><div>Education First. Risk Management Always.</div></div></footer>
  </>;
}
