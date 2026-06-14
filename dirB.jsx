// dirB.jsx — Direction B · "Modern Fiduciary"
// Clean grotesque sans, navy + azure, card-driven. Closest in spirit to the
// reference: floating proof cards in the hero, stat band, FAQ accordion.

(function () {
  const C = {
    navy: "#0f2740", navy2: "#15375c", ink: "#16202e",
    azure: "#1f6fe0", azureL: "#4f93f5", azureBg: "#eaf1fd",
    bg: "#f4f7fb", bg2: "#eaeef4", white: "#ffffff",
    line: "#e2e8f1", lineD: "rgba(15,39,64,.10)",
    body: "#54627a",
  };
  const sans = "'Archivo', system-ui, sans-serif";
  const body = "'Public Sans', system-ui, sans-serif";
  const mono = "'IBM Plex Mono', ui-monospace, monospace";

  if (!document.getElementById("fb-styles")) {
    const s = document.createElement("style");
    s.id = "fb-styles";
    s.textContent = `
      .fb{font-family:${body};color:${C.ink};background:${C.bg};width:1440px;-webkit-font-smoothing:antialiased}
      .fb h1,.fb h2,.fb h3,.fb h4{font-family:${sans};font-weight:700;letter-spacing:-0.02em;margin:0;line-height:1.08}
      .fb a{text-decoration:none;color:inherit}
      .fb-eyebrow{font-family:${mono};font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:${C.azure}}
      .fb-navlink{font-family:${body};font-size:14.5px;font-weight:500;color:${C.body};transition:color .15s}
      .fb-navlink:hover{color:${C.navy}}
      .fb-btn{font-family:${sans};font-weight:600;font-size:14px;padding:13px 24px;border-radius:8px;border:1px solid ${C.azure};
        background:${C.azure};color:#fff;cursor:pointer;display:inline-flex;align-items:center;gap:9px;transition:background .16s,transform .16s,box-shadow .16s}
      .fb-btn:hover{background:${C.azureL};box-shadow:0 10px 24px rgba(31,111,224,.28);transform:translateY(-1px)}
      .fb-btn--ghost{background:transparent;color:${C.navy};border-color:${C.lineD}}
      .fb-btn--ghost:hover{background:#fff;box-shadow:0 6px 18px rgba(15,39,64,.08)}
      .fb-card{background:#fff;border:1px solid ${C.line};border-radius:14px;transition:transform .2s,box-shadow .2s}
      .fb-svc:hover{transform:translateY(-5px);box-shadow:0 22px 48px rgba(15,39,64,.10)}
      .fb-faq{cursor:pointer}
      .fb-chip{display:inline-flex;align-items:center;gap:7px;font-family:${mono};font-size:11px;letter-spacing:.1em;
        text-transform:uppercase;color:${C.navy};background:#fff;border:1px solid ${C.line};border-radius:999px;padding:7px 13px}
    `;
    document.head.appendChild(s);
  }

  const { useState } = React;

  function DirectionB() {
    const [open, setOpen] = useState(0);
    const faqs = [
      ["Is Freeman Financial Group a registered legal entity?", "Yes. The firm is organized as a Freeman Financial Group LLC, a registered Ohio limited liability company in good standing with the Ohio Secretary of State. Formation documents are available to institutions on request."],
      ["What licenses does the firm hold?", "Freeman Financial Group holds an Ohio resident insurance producer license with documented lines of authority. Our National Producer Number (NPN) is verifiable through the NIPR national database."],
      ["Where is the firm located?", "Our principal office is located at 200 Public Square in Cleveland, Ohio. A statutory registered agent is on file with the State of Ohio."],
      ["How can a bank verify the business for account approval?", "We provide a due-diligence packet including EIN documentation, formation filings, licensing, and references. Most verification requests are fulfilled within one business day."],
    ];
    const services = [
      { icon: "shield", t: "Life Insurance Solutions", d: "Term, whole, and indexed universal life placed through A-rated carriers to protect income, families, and key-person interests." },
      { icon: "lock", t: "Wealth Protection Planning", d: "Asset protection, estate liquidity, and risk-transfer strategy to preserve and transition capital efficiently." },
      { icon: "chart", t: "Financial Advisory", d: "Independent, fiduciary-minded guidance across retirement income, business continuity, and allocation." },
    ];

    return (
      <div className="fb">
        {/* nav */}
        <nav style={{ background: "#fff", borderBottom: `1px solid ${C.line}`, position: "relative", zIndex: 3 }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <window.FGMark size={36} color={C.navy} accent={C.azure} />
              <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 17, color: C.navy, letterSpacing: "-.02em" }}>Freeman Financial Group</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
              {["Services", "The Firm", "Credentials", "Insights"].map((n) => <a key={n} className="fb-navlink" href="#">{n}</a>)}
              <a className="fb-btn fb-btn--ghost" href="#">Client login</a>
              <a className="fb-btn" href="#">Contact us</a>
            </div>
          </div>
        </nav>

        {/* hero */}
        <header style={{ background: `radial-gradient(120% 120% at 80% 0%, ${C.navy2} 0%, ${C.navy} 55%)`, color: "#fff", padding: "0 40px", position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center", minHeight: 600, padding: "72px 0" }}>
            <div>
              <div className="fb-chip" style={{ background: "rgba(255,255,255,.06)", borderColor: "rgba(255,255,255,.16)", color: "rgba(255,255,255,.85)", marginBottom: 26 }}>
                <span style={{ width: 7, height: 7, borderRadius: 99, background: "#46d39a" }} />
                Registered Ohio LLC · Licensed Producer
              </div>
              <h1 style={{ fontSize: 56, color: "#fff", letterSpacing: "-.025em" }}>Financial protection, built on a foundation banks can trust.</h1>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,.78)", maxWidth: 500, marginTop: 24, fontFamily: body }}>
                A licensed Cleveland firm delivering life insurance, wealth protection, and fiduciary advisory services to individuals, families, and businesses.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
                <a className="fb-btn" href="#">Request documentation <window.FGIcon name="arrow" size={16} stroke="#fff" /></a>
                <a className="fb-btn fb-btn--ghost" href="#" style={{ background: "rgba(255,255,255,.06)", color: "#fff", borderColor: "rgba(255,255,255,.2)" }}>Our services</a>
              </div>
            </div>
            {/* floating proof cards */}
            <div style={{ position: "relative", height: 420 }}>
              <div className="fb-card" style={{ position: "absolute", top: 0, right: 0, width: 320, padding: 22, boxShadow: "0 30px 60px rgba(0,0,0,.30)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                  <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: C.body }}>Coverage in force</span>
                  <span className="fb-chip" style={{ padding: "4px 9px", color: "#1b8a5a", borderColor: "#bfe6cf", background: "#eafaf1" }}>Active</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 84 }}>
                  {[38, 52, 46, 64, 58, 76, 70, 88].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === 7 ? C.azure : C.azureBg }} />
                  ))}
                </div>
                <div style={{ marginTop: 16, fontSize: 13, color: C.body }}>Policy review · <span style={{ color: C.navy, fontWeight: 600 }}>quarterly</span></div>
              </div>
              <div className="fb-card" style={{ position: "absolute", top: 150, left: 0, width: 270, padding: 20, boxShadow: "0 24px 50px rgba(0,0,0,.28)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: C.azureBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <window.FGIcon name="shield" size={24} stroke={C.azure} />
                  </div>
                  <div>
                    <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 15, color: C.navy }}>License verified</div>
                    <div style={{ fontSize: 12.5, color: C.body }}>OH Producer · NPN on file</div>
                  </div>
                </div>
              </div>
              <div className="fb-card" style={{ position: "absolute", bottom: 0, right: 36, width: 230, padding: 20, boxShadow: "0 24px 50px rgba(0,0,0,.28)" }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: C.body, marginBottom: 8 }}>Response time</div>
                <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 34, color: C.navy, letterSpacing: "-.03em" }}>&lt; 1 day</div>
                <div style={{ fontSize: 12.5, color: C.body, marginTop: 4 }}>for verification requests</div>
              </div>
            </div>
          </div>
        </header>

        {/* trust strip */}
        <section style={{ background: "#fff", borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "30px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 30 }}>
            <span style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: ".14em", textTransform: "uppercase", color: C.body, whiteSpace: "nowrap" }}>A-rated carrier partners</span>
            <div style={{ display: "flex", gap: 18, flex: 1, justifyContent: "flex-end" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} style={{ width: 124, height: 38, opacity: .8 }}>
                  <window.FGPlaceholder label="carrier" tone="light" radius={6} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* stats band */}
        <section style={{ background: C.bg, padding: "70px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {[["Ohio", "Registered & licensed entity"], ["A-rated", "Carrier appointments"], ["1:1", "Principal-led relationships"], ["< 1 day", "Due-diligence turnaround"]].map(([n, l]) => (
              <div key={l} className="fb-card" style={{ padding: "30px 28px" }}>
                <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 38, color: C.navy, letterSpacing: "-.03em" }}>{n}</div>
                <div style={{ fontSize: 14, color: C.body, marginTop: 10, lineHeight: 1.45 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* services */}
        <section style={{ padding: "96px 40px", background: C.bg }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ maxWidth: 640, marginBottom: 56 }}>
              <div className="fb-eyebrow" style={{ marginBottom: 16 }}>What we do</div>
              <h2 style={{ fontSize: 40, color: C.navy }}>Comprehensive protection, delivered with discipline.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {services.map((s) => (
                <div key={s.t} className="fb-card fb-svc" style={{ padding: "36px 32px" }}>
                  <div style={{ width: 54, height: 54, borderRadius: 12, background: C.azureBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                    <window.FGIcon name={s.icon} size={26} stroke={C.azure} />
                  </div>
                  <h3 style={{ fontSize: 21, color: C.navy, marginBottom: 12 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.66, color: C.body, margin: "0 0 22px" }}>{s.d}</p>
                  <a href="#" style={{ fontFamily: sans, fontWeight: 600, fontSize: 13.5, color: C.azure, display: "inline-flex", alignItems: "center", gap: 8 }}>
                    Learn more <window.FGIcon name="arrow" size={15} stroke={C.azure} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* how we work + product plate */}
        <section style={{ padding: "0 40px 96px", background: C.bg }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="fb-card" style={{ padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1.1fr" }}>
              <div style={{ padding: "56px 52px" }}>
                <div className="fb-eyebrow" style={{ marginBottom: 16 }}>How we work</div>
                <h2 style={{ fontSize: 32, color: C.navy, marginBottom: 32 }}>A transparent, documented process.</h2>
                {[["01", "Discovery & verification", "We establish needs and provide our credentials up front."], ["02", "Strategy & placement", "Independent recommendations, placed through A-rated carriers."], ["03", "Ongoing stewardship", "Scheduled reviews and proactive servicing as circumstances change."]].map(([n, t, d], i) => (
                  <div key={n} style={{ display: "flex", gap: 20, padding: "20px 0", borderTop: `1px solid ${C.line}` }}>
                    <div style={{ fontFamily: mono, fontSize: 14, color: C.azure, fontWeight: 600, paddingTop: 2 }}>{n}</div>
                    <div>
                      <h4 style={{ fontSize: 17, color: C.navy, marginBottom: 6 }}>{t}</h4>
                      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: C.body, margin: 0 }}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ minHeight: 460, padding: 28, background: C.navy }}>
                <window.FGPlaceholder label="advisor dashboard / policy summary UI" tone="navy" radius={10} />
              </div>
            </div>
          </div>
        </section>

        {/* credentials + verify card */}
        <section style={{ background: "#fff", padding: "92px 40px", borderTop: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "start" }}>
            <div>
              <div className="fb-eyebrow" style={{ marginBottom: 16 }}>Credentials</div>
              <h2 style={{ fontSize: 34, color: C.navy, marginBottom: 20 }}>Built to pass due diligence.</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: C.body, marginBottom: 28 }}>Everything an underwriting or onboarding team needs to verify Freeman Financial Group as a legitimate, regulated business.</p>
              <div className="fb-card" style={{ padding: 24, background: C.navy, border: "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <window.FGIcon name="document" size={22} stroke={C.azureL} />
                  <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 16, color: "#fff" }}>Due-diligence packet</div>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: "0 0 18px" }}>EIN, formation filings, licensing, and references — delivered on request.</p>
                <a className="fb-btn" href="#" style={{ width: "100%", justifyContent: "center" }}>Request packet</a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.line, border: `1px solid ${C.line}`, borderRadius: 14, overflow: "hidden" }}>
              {[
                ["Legal entity", "Freeman Financial Group LLC", "Ohio LLC · good standing"],
                ["Insurance license", "OH Producer · No. 0 000 000", "Resident producer, lines on file"],
                ["NAIC / NPN", "NPN 00000000", "Verifiable via NIPR"],
                ["Principal office", "200 Public Square", "Cleveland, Ohio"],
                ["Registered agent", "On file with OH SOS", "Statutory agent of record"],
                ["E&O coverage", "In force", "Professional liability maintained"],
              ].map(([k, v, d]) => (
                <div key={k} style={{ background: "#fff", padding: "26px 26px" }}>
                  <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: C.azure, marginBottom: 10 }}>{k}</div>
                  <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 18, color: C.navy, marginBottom: 6, letterSpacing: "-.01em" }}>{v}</div>
                  <div style={{ fontSize: 13, color: C.body, lineHeight: 1.5 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: C.bg, padding: "92px 40px" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="fb-eyebrow" style={{ marginBottom: 16 }}>For partners & institutions</div>
              <h2 style={{ fontSize: 38, color: C.navy }}>Questions banks ask us.</h2>
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {faqs.map(([q, a], i) => (
                <div key={i} className="fb-card fb-faq" onClick={() => setOpen(open === i ? -1 : i)} style={{ padding: "24px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
                    <h4 style={{ fontSize: 18, color: C.navy }}>{q}</h4>
                    <div style={{ width: 30, height: 30, flexShrink: 0, borderRadius: 8, background: open === i ? C.azure : C.azureBg, display: "flex", alignItems: "center", justifyContent: "center", transition: "background .18s" }}>
                      <window.FGIcon name={open === i ? "check" : "arrow"} size={16} stroke={open === i ? "#fff" : C.azure} />
                    </div>
                  </div>
                  {open === i && <p style={{ fontSize: 15, lineHeight: 1.7, color: C.body, margin: "16px 0 0", maxWidth: 680 }}>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: C.navy, padding: "80px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", borderRadius: 18, background: `linear-gradient(120deg, ${C.navy2}, ${C.navy})`, border: "1px solid rgba(255,255,255,.1)", padding: "64px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
            <div>
              <h2 style={{ fontSize: 40, color: "#fff", marginBottom: 16, maxWidth: 620 }}>Ready to verify or work with us?</h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,.74)", margin: 0, maxWidth: 540, lineHeight: 1.6, fontFamily: body }}>Reach our principal office in Cleveland. We respond to documentation requests within one business day.</p>
            </div>
            <a className="fb-btn" href="#" style={{ padding: "16px 30px", fontSize: 15, whiteSpace: "nowrap" }}>Contact the firm <window.FGIcon name="arrow" size={16} stroke="#fff" /></a>
          </div>
        </section>

        {/* footer */}
        <footer style={{ background: C.ink, color: "rgba(255,255,255,.6)", padding: "60px 40px 36px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, paddingBottom: 44, borderBottom: "1px solid rgba(255,255,255,.12)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
                  <window.FGMark size={32} color="#fff" accent={C.azureL} />
                  <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 16, color: "#fff" }}>Freeman Financial Group</div>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>200 Public Square<br />Cleveland, Ohio · United States</p>
              </div>
              {[["Services", ["Life insurance", "Wealth protection", "Advisory"]], ["Firm", ["About", "Credentials", "Insights"]], ["Contact", ["Schedule a call", "Request documents", "Client login"]]].map(([h, items]) => (
                <div key={h}>
                  <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: C.azureL, marginBottom: 16 }}>{h}</div>
                  {items.map((i) => <a key={i} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.6)", marginBottom: 10 }}>{i}</a>)}
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 26, fontSize: 12, lineHeight: 1.7, color: "rgba(255,255,255,.4)", fontFamily: mono }}>
              © 2026 Freeman Financial Group LLC. Licensed Ohio insurance producer. Services offered where licensed. License numbers and entity details shown are placeholders pending final copy.
            </div>
          </div>
        </footer>
      </div>
    );
  }

  window.DirectionB = DirectionB;
})();
