// dirA.jsx — Direction A · "The Establishment"
// Serif headlines, navy + brass, centered & conservative. Private-bank gravitas.

(function () {
  const C = {
    navy: "#0d2440", navy2: "#14365c", ink: "#1a2230",
    brass: "#a9824a", brassL: "#c6a468",
    paper: "#f5f3ee", paper2: "#eceae2", white: "#fffefb",
    line: "rgba(13,36,64,0.14)", lineL: "rgba(13,36,64,0.08)",
    body: "rgba(26,34,48,0.74)",
  };
  const serif = "'Spectral', Georgia, 'Times New Roman', serif";
  const sans = "'Libre Franklin', system-ui, sans-serif";
  const mono = "'IBM Plex Mono', ui-monospace, monospace";

  if (!document.getElementById("fa-styles")) {
    const s = document.createElement("style");
    s.id = "fa-styles";
    s.textContent = `
      .fa{font-family:${sans};color:${C.ink};background:${C.paper};width:1440px;-webkit-font-smoothing:antialiased}
      .fa-eyebrow{font-family:${mono};font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:${C.brass}}
      .fa h1,.fa h2,.fa h3{font-family:${serif};font-weight:500;letter-spacing:-0.01em;margin:0}
      .fa a{color:inherit;text-decoration:none}
      .fa-navlink{font-size:14px;letter-spacing:.01em;color:rgba(26,34,48,.72);transition:color .15s}
      .fa-navlink:hover{color:${C.navy}}
      .fa-btn{font-family:${sans};font-size:13.5px;letter-spacing:.06em;text-transform:uppercase;
        padding:14px 26px;border:1px solid ${C.navy};background:${C.navy};color:#fff;cursor:pointer;
        transition:background .18s,color .18s;display:inline-flex;align-items:center;gap:10px}
      .fa-btn:hover{background:${C.navy2}}
      .fa-btn--ghost{background:transparent;color:${C.navy}}
      .fa-btn--ghost:hover{background:${C.navy};color:#fff}
      .fa-btn--brass{background:${C.brass};border-color:${C.brass}}
      .fa-btn--brass:hover{background:${C.brassL};border-color:${C.brassL}}
      .fa-svc{transition:transform .2s, box-shadow .2s}
      .fa-svc:hover{transform:translateY(-4px);box-shadow:0 24px 50px rgba(13,36,64,.12)}
      .fa-rule{height:1px;background:${C.line}}
    `;
    document.head.appendChild(s);
  }

  const Eyebrow = ({ children, style }) => (
    <div className="fa-eyebrow" style={style}>{children}</div>
  );

  // utility credential pill used across the page
  const Cred = ({ k, v }) => (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: C.brass, marginBottom: 8 }}>{k}</div>
      <div style={{ fontFamily: serif, fontSize: 19, color: C.navy }}>{v}</div>
    </div>
  );

  function DirectionA() {
    const services = [
      { icon: "shield", t: "Life Insurance Solutions", d: "Term, whole, and indexed universal life structured to protect families and business interests, placed through A-rated carriers." },
      { icon: "scale", t: "Wealth Protection Planning", d: "Asset-protection strategy, estate liquidity, and risk transfer designed to preserve capital across generations." },
      { icon: "columns", t: "Financial Advisory", d: "Independent, fiduciary-minded guidance on retirement income, business continuity, and long-horizon allocation." },
    ];
    const principles = [
      ["Independence", "We answer to clients, not to a parent institution or proprietary product shelf."],
      ["Fiduciary discipline", "Recommendations are documented, suitable, and reviewed against a written standard of care."],
      ["Permanence", "Built as a registered Ohio entity with continuity planning, not a sole-practitioner shop."],
    ];

    return (
      <div className="fa">
        {/* ── utility strip ── */}
        <div style={{ background: C.navy, color: "rgba(255,255,255,.72)", fontFamily: mono, fontSize: 11.5, letterSpacing: ".08em" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "9px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>200 PUBLIC SQUARE · CLEVELAND, OHIO</span>
            <span style={{ display: "flex", gap: 26 }}>
              <span>OHIO INSURANCE PRODUCER · LIC. NO. 0&nbsp;000&nbsp;000</span>
              <span style={{ color: C.brassL }}>CLIENT LOGIN</span>
            </span>
          </div>
        </div>

        {/* ── nav ── */}
        <nav style={{ borderBottom: `1px solid ${C.line}`, background: C.paper, position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "22px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <window.FGMark size={38} color={C.navy} accent={C.brass} serif />
              <div>
                <div style={{ fontFamily: serif, fontSize: 19, color: C.navy, lineHeight: 1.05, letterSpacing: "-.01em" }}>Freeman Financial Group</div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".26em", color: C.brass, marginTop: 3 }}>L L C  ·  EST. CLEVELAND</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
              {["Firm", "Services", "Approach", "Credentials"].map((n) => (
                <a key={n} className="fa-navlink" href="#">{n}</a>
              ))}
              <a className="fa-btn fa-btn--ghost" href="#" style={{ padding: "11px 22px" }}>Contact</a>
            </div>
          </div>
        </nav>

        {/* ── hero ── */}
        <header style={{ background: `linear-gradient(180deg, ${C.paper} 0%, ${C.paper2} 100%)`, padding: "92px 40px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <Eyebrow style={{ marginBottom: 26 }}>Independent Financial Services · Cleveland, Ohio</Eyebrow>
            <h1 style={{ fontSize: 62, lineHeight: 1.08, color: C.navy, letterSpacing: "-0.018em" }}>
              A measured approach to protecting <span style={{ fontStyle: "italic", color: C.brass }}>capital, families,</span> and enterprises.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: C.body, maxWidth: 620, margin: "28px auto 0" }}>
              Freeman Financial Group LLC is a licensed Ohio firm providing life insurance, wealth protection, and fiduciary advisory services to individuals, families, and closely held businesses.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 38 }}>
              <a className="fa-btn" href="#">Request firm documentation <window.FGIcon name="arrow" size={16} stroke="#fff" /></a>
              <a className="fa-btn fa-btn--ghost" href="#">Schedule a consultation</a>
            </div>
          </div>
          {/* HQ image plate */}
          <div style={{ maxWidth: 1080, margin: "64px auto 0", height: 340, position: "relative" }}>
            <window.FGPlaceholder label="200 Public Square — Cleveland HQ exterior" tone="navy" />
            <div style={{ position: "absolute", left: 24, bottom: 24, background: C.paper, padding: "14px 20px", textAlign: "left" }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: ".18em", color: C.brass, textTransform: "uppercase" }}>Headquarters</div>
              <div style={{ fontFamily: serif, fontSize: 17, color: C.navy, marginTop: 4 }}>200 Public Square, Cleveland, OH</div>
            </div>
          </div>
        </header>

        {/* ── credibility bar ── */}
        <section style={{ background: C.paper2, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "40px 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1 }}>
            <Cred k="Entity" v="Registered Ohio LLC" />
            <Cred k="Licensing" v="Insurance Producer" />
            <Cred k="Headquarters" v="Cleveland, Ohio" />
            <Cred k="Standard" v="Fiduciary-Minded" />
          </div>
        </section>

        {/* ── services ── */}
        <section style={{ padding: "104px 40px", background: C.paper }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <Eyebrow style={{ marginBottom: 18 }}>What we do</Eyebrow>
              <h2 style={{ fontSize: 42, color: C.navy, maxWidth: 640, margin: "0 auto", lineHeight: 1.15 }}>Three disciplines, one fiduciary standard.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {services.map((s) => (
                <div key={s.t} className="fa-svc" style={{ background: C.white, border: `1px solid ${C.line}`, padding: "44px 38px" }}>
                  <div style={{ width: 56, height: 56, border: `1px solid ${C.brass}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
                    <window.FGIcon name={s.icon} size={26} stroke={C.brass} />
                  </div>
                  <h3 style={{ fontSize: 25, color: C.navy, marginBottom: 14 }}>{s.t}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.7, color: C.body, margin: 0 }}>{s.d}</p>
                  <div className="fa-rule" style={{ margin: "28px 0 18px" }} />
                  <a href="#" style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", color: C.navy, display: "inline-flex", alignItems: "center", gap: 9 }}>
                    Learn more <window.FGIcon name="arrow" size={14} stroke={C.navy} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── stats band ── */}
        <section style={{ background: C.navy, color: "#fff", padding: "84px 40px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
            {[["A-rated", "carrier relationships"], ["Ohio", "registered & licensed"], ["1:1", "principal-led service"], ["Fiduciary", "written standard of care"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: serif, fontSize: 46, color: C.brassL, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", marginTop: 14 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── approach / about ── */}
        <section style={{ padding: "104px 40px", background: C.paper }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div style={{ height: 520 }}>
              <window.FGPlaceholder label="Principal portrait / boardroom" tone="brass" />
            </div>
            <div>
              <Eyebrow style={{ marginBottom: 20 }}>The firm</Eyebrow>
              <h2 style={{ fontSize: 40, color: C.navy, lineHeight: 1.18, marginBottom: 26 }}>Established to last, structured to be trusted.</h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.78, color: C.body, marginBottom: 38 }}>
                Freeman Financial Group operates as a registered Ohio limited liability company with formal governance, documented procedures, and the carrier relationships expected of an established advisory practice.
              </p>
              <div style={{ display: "grid", gap: 0 }}>
                {principles.map(([t, d], i) => (
                  <div key={t} style={{ display: "flex", gap: 22, padding: "22px 0", borderTop: i === 0 ? `1px solid ${C.line}` : "none", borderBottom: `1px solid ${C.line}` }}>
                    <window.FGIcon name="check" size={22} stroke={C.brass} style={{ flexShrink: 0, marginTop: 3 }} />
                    <div>
                      <h3 style={{ fontSize: 19, color: C.navy, marginBottom: 6 }}>{t}</h3>
                      <p style={{ fontSize: 15, lineHeight: 1.6, color: C.body, margin: 0 }}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── credentials / compliance ── */}
        <section style={{ background: C.paper2, padding: "96px 40px", borderTop: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <Eyebrow style={{ marginBottom: 18 }}>Credentials & registration</Eyebrow>
              <h2 style={{ fontSize: 38, color: C.navy }}>Documentation available on request.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: C.line, border: `1px solid ${C.line}` }}>
              {[
                ["Legal entity", "Freeman Financial Group LLC", "Ohio limited liability company in good standing"],
                ["Insurance license", "OH Producer · No. 0 000 000", "Resident insurance producer, Lines of authority on file"],
                ["NAIC / NPN", "NPN 00000000", "National Producer Number, verifiable via NIPR"],
                ["Registered agent", "On file with Ohio Secretary of State", "Statutory agent & principal office of record"],
                ["E&O coverage", "Errors & omissions in force", "Professional liability maintained continuously"],
                ["Carrier appointments", "A-rated life & annuity carriers", "Appointments documented per carrier"],
              ].map(([k, v, d]) => (
                <div key={k} style={{ background: C.paper, padding: "30px 30px" }}>
                  <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: ".16em", textTransform: "uppercase", color: C.brass, marginBottom: 12 }}>{k}</div>
                  <div style={{ fontFamily: serif, fontSize: 20, color: C.navy, marginBottom: 8 }}>{v}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.6, color: C.body }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.navy, padding: "92px 40px", textAlign: "center", position: "relative" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Eyebrow style={{ marginBottom: 22, color: C.brassL }}>For institutions & partners</Eyebrow>
            <h2 style={{ fontSize: 44, color: "#fff", lineHeight: 1.16, marginBottom: 24 }}>Verifying our firm? We make it straightforward.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.72)", marginBottom: 40 }}>
              We provide formation documents, licensing, and references promptly to banks and partners conducting due diligence.
            </p>
            <a className="fa-btn fa-btn--brass" href="#">Request a due-diligence packet <window.FGIcon name="arrow" size={16} stroke="#fff" /></a>
          </div>
        </section>

        {/* ── footer ── */}
        <footer style={{ background: C.ink, color: "rgba(255,255,255,.62)", padding: "64px 40px 40px" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,.12)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <window.FGMark size={34} color="#fff" accent={C.brass} serif />
                  <div style={{ fontFamily: serif, fontSize: 17, color: "#fff" }}>Freeman Financial Group</div>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, maxWidth: 280, margin: 0 }}>200 Public Square<br />Cleveland, Ohio<br />United States</p>
              </div>
              {[["Firm", ["About", "Approach", "Credentials", "Careers"]], ["Services", ["Life insurance", "Wealth protection", "Advisory", "Business continuity"]], ["Contact", ["Schedule a call", "Request documents", "Client login", "Directions"]]].map(([h, items]) => (
                <div key={h}>
                  <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: C.brassL, marginBottom: 18 }}>{h}</div>
                  {items.map((i) => <a key={i} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.62)", marginBottom: 11 }}>{i}</a>)}
                </div>
              ))}
            </div>
            <div style={{ paddingTop: 28, fontSize: 12, lineHeight: 1.7, color: "rgba(255,255,255,.42)", fontFamily: mono, letterSpacing: ".02em" }}>
              © 2026 Freeman Financial Group LLC. All rights reserved. Freeman Financial Group LLC is a licensed Ohio insurance producer. Insurance and advisory services offered where licensed. License numbers and entity details shown are placeholders pending final copy.
            </div>
          </div>
        </footer>
      </div>
    );
  }

  window.DirectionA = DirectionA;
})();
