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
      <svg className={className} viewBox="0 0 420 280" role="img" aria-label="Angular ink sketch of a cat reading a ranking graph">
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M37 216h345M52 216V44" opacity=".4" />
          <path d="M62 185c34-7 48-27 73-24 30 4 34-41 69-37 29 3 30-52 67-48 26 2 37-25 75-35" stroke="#080808" />
          <path d="M244 220l15-69-10-59 31 25 35-28 8 61 25 70" />
          <path d="M259 151l25-17 31 17-12 49-39 0z" />
          <path d="M267 157l18-6 19 6m-34 11 8-1m14 0 8-1M280 181l19-4" stroke="#080808" />
          <path d="M267 151l-11-34m47 33 19-37" />
          <path d="M259 220c-5-16-16-21-30-13m85 13c10-14 24-15 38-4 15 12 31 4 36-7" />
          <path d="M310 63h67v75h-67z" stroke="#080808" />
          <path d="M322 85h42m-42 17h29m-29 17h36m-33-31 8 7 9-14 9 9 8-17" stroke="#080808" />
        </g>
        <path d="M320 60h53l-9-19-12 13-11-20-9 22z" fill="none" stroke="#080808" strokeWidth="3" />
        <text x="321" y="80" fill="#080808" fontFamily="Arial Black, sans-serif" fontSize="13">#1</text>
      </svg>
    );
  }
  if (variant === 'small') {
    return (
      <svg className={className} viewBox="0 0 230 190" role="img" aria-label="Angular ink sketch of a cat">
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M39 153 55 91 51 35l39 31 46-28 28 32-5 77" />
          <path d="M65 105 93 94l21 10-21 12zM120 104l21-10 27 11-22 11z" fill="#B8FF00" stroke="#B8FF00" />
          <path d="M98 124h24m-54 28c-20-10-34-2-42 12m123-14 31 0M53 36l-16-19m99 21 20-20" />
        </g>
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 620 500" role="img" aria-label="Angular ink sketch of a cat stalking a number one organic search result">
      <g fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M43 426h525" opacity=".4" />
        <path d="M109 397 139 314 128 155l76 57 83-63 79 66-2 98 50 84" />
        <path d="M150 304 202 280l42 28-40 27zM285 306l39-27 52 25-45 29z" fill="#B8FF00" stroke="#B8FF00" />
        <path d="M244 334l36 0m-91 51c24 17 49 17 76 0m-93-2c-37-14-66 5-84 31m193-27c27-24 59-19 84 7 28 29 69 22 85-10" />
        <path d="M154 211 119 145m169 2 59-56" />
        <path d="M131 156 89 103m205 14 66-59" opacity=".65" />
        <path d="M365 171h151l38 121H348z" />
        <path d="M384 190h119v66H370z" stroke="#B8FF00" />
        <path d="M389 211h76m-76 15h49m-43-6 11 9 15-22 14 14 15-27" stroke="#B8FF00" />
        <path d="M392 176h73" stroke="#B8FF00" />
        <path d="M403 178v-31l16 16 19-26 6 41" stroke="#B8FF00" />
        <path d="M360 294h184m-136 24h99m-89 13h73" opacity=".65" />
      </g>
      <text x="398" y="210" fill="#B8FF00" fontFamily="Arial Black, sans-serif" fontSize="29">#1</text>
      <text x="38" y="469" fill="currentColor" fontFamily="Space Mono, monospace" fontSize="11">STALK / SCAN / STRIKE</text>
    </svg>
  );
}

function WordmarkLogo() {
  return (
    <span className="wordmark-logo" aria-label="MEDIACATS">
      <CatMark />
      <span>MEDIACATS</span>
    </span>
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
          <WordmarkLogo />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="nav-link" href="#what-we-do" data-testid="link-nav-what">WHAT WE DO</a>
          <a className="nav-link" href="#markets" data-testid="link-nav-markets">MARKETS</a>
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
              <span className="mono">THE MEDIACATS DNA / 05 SIGNALS</span>
            </div>
          </div>
          <div className="facts-grid reveal">
            {[
              ['MARKETS', 'Tier-1 → Tier-2', 'We focus on markets where organic traffic has real commercial value.'],
              ['PAYOUT', 'Hybrid', 'We believe in the quality of traffic and price it accordingly.'],
              ['VERTICAL', 'iGaming', 'SEO built around one of the most competitive search environments on the web.'],
              ['APPROACH', 'Hunt → Test → Scale', 'Find the opening, prove the signal, then compound what works.'],
              ['FOCUS', 'Long game', 'We prioritize durable search opportunities over quick spikes.'],
            ].map(([label, value, note], index) => (
              <div className="fact" key={label} data-testid={`fact-${index}`}>
                <div className="fact-label mono">{label}</div>
                <div className="fact-value">{value}</div>
                <p className="fact-note">{note}</p>
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
              ['06', 'AND MORE', 'TIER-2+'],
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

        <section id="about" className="section-pad container section-rule" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-copy reveal">
              <div className="eyebrow mono">WHY CATS</div>
              <h2 id="about-title" className="display">WHY<br /><span className="acid">CATS?</span></h2>
              <p>Because the best organic acquisition teams behave less like agencies and more like predators. They move quietly. They learn the territory. They don&apos;t waste energy chasing everything.</p>
              <blockquote className="quote">Curious enough to find the opportunity.<br />Patient enough to wait for it.<br /><span className="acid">Fast enough to catch it.</span></blockquote>
            </div>
            <div className="about-art reveal">
              <div className="about-mark"><CatMark /></div>
              <span className="mono">CURIOUS / PATIENT / FAST</span>
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
              <div className="field field-note"><label htmlFor="note">YOUR NOTE</label><textarea id="note" name="note" rows={4} placeholder="Tell us what you&apos;re hunting." data-testid="input-contact-note" /></div>
              <button className="submit-button" type="submit" data-testid="button-contact-submit">START A CONVERSATION →</button>
              {sent && <p className="form-success" role="status" data-testid="status-contact-success">Message received. We&apos;ll come find you.</p>}
            </form>
            <footer className="contact-footer mono">
              <span className="footer-brand"><CatMark /> <span>MEDIACATS / ORGANIC ACQUISITION UNIT / 2025</span></span>
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