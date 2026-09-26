import { type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function CatMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 27" aria-hidden="true">
      <path d="M3 23V5l8 7L16 3l5 9 8-7v18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="bevel" />
      <path d="M10 19h12" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function CatIllustration({ variant = 'hero', className = '' }: { variant?: 'hero' | 'hunt' | 'small'; className?: string }) {
  if (variant === 'hunt') {
    return (
      <svg className={className} viewBox="0 0 420 280" role="img" aria-label="Ink sketch of a cat watching a ranking graph">
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M37 216h345M52 216V44" opacity=".4" />
          <path d="M62 185c34-7 48-27 73-24 30 4 34-41 69-37 29 3 30-52 67-48 26 2 37-25 75-35" stroke="#080808" />
          <path d="M250 220c-4-34 1-59 17-77l-8-42 25 18 23-20 4 46c16 12 29 38 21 75" />
          <path d="M269 127c9-12 28-12 39 0M276 141h2m20 0h2M280 149c7 5 14 5 21 0" />
          <path d="M288 102l-3-21 16 13 13-18 5 26" />
          <path d="M299 220c15-12 30-13 46-1 19 13 36 2 39-10" />
          <circle cx="335" cy="63" r="20" />
          <path d="M321 48l-13-14 20 6m18 1 16-9-8 18M328 63h-1m15 0h-1" />
        </g>
        <text x="300" y="70" fill="#080808" fontFamily="Space Mono, monospace" fontSize="10">DATA?</text>
      </svg>
    );
  }
  if (variant === 'small') {
    return (
      <svg className={className} viewBox="0 0 230 190" role="img" aria-label="Sharp ink sketch of a cat">
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M36 147c7-33 34-55 69-51l-3-49 25 22 30-25 1 52c25 17 27 45 14 62" />
          <path d="M65 111c9-10 20-10 29 0m14 0c9-10 20-10 29 0M82 130c12 9 24 9 37 0" />
          <path d="M93 94h2m26 0h2M80 68 70 49l25 11m26 0 20-17-7 24" />
          <path d="M46 145c-28-8-39 12-31 24 10 16 47 3 54-11" />
          <path d="M161 159h39M18 169h34" />
        </g>
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 520 490" role="img" aria-label="Ink sketch of a cat stalking a search result">
      <g fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M76 399c9-77 66-126 142-112l-4-111 52 44 62-45 5 119c56 32 75 78 60 132" />
        <path d="M130 312c17-21 39-21 57 0m28 0c17-21 40-20 57 0" />
        <path d="M157 352c24 18 53 18 79-1" />
        <path d="M174 270h3m54 0h3" />
        <path d="m140 230-26-50 58 30m80 0 49-45-17 63" />
        <path d="M104 393c-42-13-71 11-58 37 14 29 80 12 99-18" />
        <path d="M289 398c36-25 71-18 98 10 36 37 84 10 81-28" />
        <path d="M369 115h95v128h-95z" stroke="#B8FF00" />
        <path d="M388 151h58M388 174h42M388 198h50" stroke="#B8FF00" />
        <path d="m399 157 11 9 13-22 13 13 12-25" stroke="#B8FF00" />
        <path d="M378 92h35M426 92h30" stroke="#B8FF00" />
        <path d="M394 95v-22l12 12 13-18 4 27" stroke="#B8FF00" />
        <path d="M365 255c28 4 61 4 91 0" stroke="#B8FF00" />
      </g>
      <text x="383" y="140" fill="#B8FF00" fontFamily="Arial Black, sans-serif" fontSize="28">#1</text>
      <text x="28" y="459" fill="currentColor" fontFamily="Space Mono, monospace" fontSize="11">STALK / SCAN / STRIKE</text>
    </svg>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function SiteHeader({ menuOpen, onToggle }: { menuOpen: boolean; onToggle: () => void }) {
  const close = () => {
    if (menuOpen) onToggle();
  };
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" data-testid="link-brand" onClick={close}>
          <CatMark />
          <span>MEDIACATS</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="nav-link" href="#what-we-do" data-testid="link-nav-what">WHAT WE DO</a>
          <a className="nav-link" href="#markets" data-testid="link-nav-markets">MARKETS</a>
          <a className="nav-link" href="#results" data-testid="link-nav-results">RESULTS</a>
          <a className="nav-link" href="#about" data-testid="link-nav-about">ABOUT</a>
          <a className="nav-link" href="#contact" data-testid="link-nav-contact">CONTACT</a>
        </nav>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={onToggle} data-testid="button-mobile-menu">
          <span className="menu-lines"><span /><span /></span>
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>
        <a className="nav-link" href="#what-we-do" onClick={close} data-testid="link-mobile-what">WHAT WE DO</a>
        <a className="nav-link" href="#markets" onClick={close} data-testid="link-mobile-markets">MARKETS</a>
        <a className="nav-link" href="#results" onClick={close} data-testid="link-mobile-results">RESULTS</a>
        <a className="nav-link" href="#about" onClick={close} data-testid="link-mobile-about">ABOUT</a>
        <a className="nav-link" href="#contact" onClick={close} data-testid="link-mobile-contact">CONTACT</a>
      </nav>
    </header>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'MEDIACATS — We Hunt Traffic';
    const description = 'SEO and organic acquisition for iGaming brands across Tier-1 and Tier-2 markets.';
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);
    let og = document.querySelector('meta[property="og:title"]');
    if (!og) {
      og = document.createElement('meta');
      og.setAttribute('property', 'og:title');
      document.head.appendChild(og);
    }
    og.setAttribute('content', 'MEDIACATS — We Hunt Traffic');
  }, []);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="site-shell" id="top">
      <div className="noise" aria-hidden="true" />
      <SiteHeader menuOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} />

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-top mono">
            <span>MC / 001 — ORGANIC ACQUISITION UNIT</span>
            <span>EST. SOMEWHERE BETWEEN DATA &amp; INSTINCT</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow mono">SEARCH IS A JUNGLE</div>
              <h1 id="hero-title" className="hero-title display">WE HUNT<br /><span className="acid">TRAFFIC.</span></h1>
              <div className="hero-sub">
                <strong>SEO &amp; organic acquisition for iGaming brands.</strong>
                <p>Tier-1 &amp; Tier-2 markets.<br />Performance-driven.<br />Built to scale.</p>
              </div>
              <a className="hero-cta" href="#contact" data-testid="link-hero-cta">LET&apos;S TALK <span>→</span></a>
            </div>
            <div className="hero-art reveal">
              <CatIllustration variant="hero" className="cat-hero" />
            </div>
          </div>
          <div className="scroll-note mono">
            <span>SCROLL TO ENTER THE HUNT</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </section>

        <div className="intro-band" aria-hidden="true">
          <div className="marquee">
            <span>FIND THE GAP</span><i /><span>OWN THE SERP</span><i /><span>MAKE IT COMPOUND</span><i /><span>FIND THE GAP</span><i /><span>OWN THE SERP</span><i /><span>MAKE IT COMPOUND</span>
          </div>
        </div>

        <section id="what-we-do" className="section-pad container section-rule" aria-labelledby="what-title">
          <div className="section-heading reveal">
            <h2 id="what-title" className="display">WHAT<br /><span className="acid">WE DO.</span></h2>
            <div className="section-heading-copy">
              <p>We turn search intent into a repeatable acquisition channel. No vanity traffic. No generic playbooks. Just the right people, in the right market, at the right moment.</p>
              <span className="mono">THE MEDIACATS DNA / 06 SIGNALS</span>
            </div>
          </div>
          <div className="facts-grid reveal">
            {[
              ['MARKETS', 'Tier-1 + Tier-2'],
              ['PAYOUT', 'Commercial intent'],
              ['TRAFFIC', 'Organic / compounding'],
              ['VERTICAL', 'iGaming'],
              ['APPROACH', 'Data × instinct'],
              ['FOCUS', 'Long game / sharp moves'],
            ].map(([label, value], index) => (
              <div className="fact" key={label} data-testid={`fact-${index}`}>
                <div className="fact-label mono">{label}</div>
                <div className="fact-value">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="hunt-section section-pad" aria-labelledby="hunt-title">
          <div className="container section-rule">
            <div className="hunt-layout">
              <div className="reveal">
                <div className="eyebrow mono">HOW WE HUNT</div>
                <h2 id="hunt-title" className="display">THREE<br />MOVES.<br /><span className="acid">ONE<br />TARGET.</span></h2>
                <p className="hunt-lede">Search doesn&apos;t reward the loudest brand. It rewards the one that sees the opening first.</p>
                <CatIllustration variant="hunt" className="hunt-doodle" />
              </div>
              <div className="steps reveal">
                {[
                  ['01', 'FIND', 'We map demand, competition and commercial intent until the whitespace shows itself.'],
                  ['02', 'RANK', 'We build the technical, editorial and authority systems that make visibility stick.'],
                  ['03', 'SCALE', 'We turn early wins into a market machine — more pages, more markets, more value.'],
                ].map(([number, title, description]) => (
                  <div className="step" key={number}>
                    <span className="step-number">{number}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                    <span className="step-arrow">↗</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="section-heading-copy" style={{ marginTop: 65 }}>
              <span className="mono">CAPABILITIES</span>
              <p style={{ marginTop: 15 }}>Technical SEO / Content systems / Digital PR / Link acquisition / Market intelligence / CRO for organic</p>
            </div>
          </div>
        </section>

        <section id="markets" className="section-pad container section-rule" aria-labelledby="markets-title">
          <div className="markets-head reveal">
            <div>
              <div className="eyebrow mono">THE TERRITORY</div>
              <h2 id="markets-title" className="display">MARKETS<br /><span className="acid">WE STALK.</span></h2>
            </div>
            <p>High-value search, mapped by market. We go where the intent is loud and the competition is asleep.</p>
          </div>
          <div className="market-list reveal">
            {[
              ['01', 'UNITED KINGDOM', 'TIER-1'],
              ['02', 'GERMANY', 'TIER-1'],
              ['03', 'CANADA', 'TIER-1'],
              ['04', 'AUSTRALIA', 'TIER-1'],
              ['05', 'NORDICS', 'TIER-1'],
              ['06', 'LATAM + MORE', 'TIER-2'],
            ].map(([code, name, type]) => (
              <div className="market-row" key={code} data-testid={`market-row-${code}`}>
                <span className="market-code mono">{code}</span>
                <span className="market-name">{name}</span>
                <span className="market-type mono">{type}</span>
                <span className="market-plus">+</span>
              </div>
            ))}
          </div>
          <p className="market-note mono">MARKET LIST IS ALWAYS OPEN / ASK US ABOUT YOURS</p>
        </section>

        <section id="results" className="results-section section-pad" aria-labelledby="results-title">
          <div className="container">
            <div className="results-top reveal">
              <div>
                <div className="eyebrow mono">THE RECEIPTS</div>
                <h2 id="results-title" className="display">RESULTS<br /><span className="acid">PENDING.</span></h2>
              </div>
              <p>We&apos;re not here to publish made-up numbers. This space is reserved for the work we&apos;re proud to put our name on.</p>
            </div>
            <div className="placeholder-metrics reveal" aria-label="Results metrics pending">
              <div className="metric"><span className="metric-label mono">ORGANIC SESSIONS</span><div className="metric-value acid">TBD</div><small>Real data coming after the first hunt.</small></div>
              <div className="metric"><span className="metric-label mono">COMMERCIAL KEYWORDS</span><div className="metric-value acid">TBD</div><small>No inflated reach. Only search terms that can pay their rent.</small></div>
              <div className="metric"><span className="metric-label mono">MARKETS LIVE</span><div className="metric-value acid">TBD</div><small>We&apos;ll show the map when it&apos;s ours.</small></div>
            </div>
            <div className="case-studies reveal">
              <article className="case-card featured">
                <span className="case-index mono">CASE FILE / 001</span>
                <h3>YOUR BRAND<br />COULD GO<br />HERE.</h3>
                <p>Editorial case study slot. The only placeholder we&apos;re willing to defend.</p>
                <span className="case-corner mono">COMING SOON ↗</span>
              </article>
              <article className="case-card">
                <span className="case-index mono">CASE FILE / 002</span>
                <h3>NO FICTION.<br />JUST<br />FINDINGS.</h3>
                <CatIllustration variant="small" className="cat-small" />
                <span className="case-corner mono">REDACTED ↗</span>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad container section-rule" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-copy reveal">
              <div className="eyebrow mono">WHY CATS</div>
              <h2 id="about-title" className="display">WHY<br /><span className="acid">CATS?</span></h2>
              <p>Because the best organic acquisition teams behave less like agencies and more like predators. They move quietly. They learn the territory. They don&apos;t waste energy chasing everything.</p>
              <blockquote className="quote">Curious enough to find the opportunity.<br />Patient enough to wait for it.<br /><span className="acid">Fast enough to catch it.</span></blockquote>
            </div>
            <div className="team-panel reveal">
              <div className="mono muted" style={{ padding: '20px 0' }}>THE DEN / TEAM PLACEHOLDERS</div>
              {[
                ['MC', 'THE STRATEGIST', 'SEARCH'],
                ['??', 'THE OPERATOR', 'GROWTH'],
                ['??', 'THE STORYTELLER', 'EDITORIAL'],
                ['??', 'THE SCOUT', 'MARKETS'],
              ].map(([initials, name, role]) => (
                <div className="team-item" key={name}>
                  <span className="team-avatar">{initials}</span>
                  <div><div className="team-name">{name}</div><div className="team-role">{role}</div></div>
                  <span className="team-status mono">ON HUNT</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact-top reveal">
              <h2 id="contact-title" className="display">GOT TRAFFIC<br />TO <span className="paper">HUNT?</span></h2>
              <p>Bring us the market, the ambition, or the problem nobody else has cracked. We&apos;ll bring the binoculars.</p>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="field"><label htmlFor="name">YOUR NAME</label><input id="name" name="name" required placeholder="Name" data-testid="input-contact-name" /></div>
              <div className="field"><label htmlFor="email">YOUR EMAIL</label><input id="email" type="email" name="email" required placeholder="you@brand.com" data-testid="input-contact-email" /></div>
              <button className="submit-button" type="submit" data-testid="button-contact-submit">START A CONVERSATION →</button>
              {sent && <p className="form-success" role="status" data-testid="status-contact-success">Message received. We&apos;ll come find you.</p>}
            </form>
            <footer className="contact-footer mono">
              <span>MEDIACATS / ORGANIC ACQUISITION UNIT / 2025</span>
              <div className="footer-links"><a href="mailto:hello@mediacats.com" data-testid="link-email">EMAIL</a><a href="#top" data-testid="link-back-top">BACK TO TOP ↑</a></div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;