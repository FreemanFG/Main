// dirC.jsx — Direction C · "Editorial Authority"
// Minimal & editorial. Big Newsreader display serif, ink + navy, hairlines,
// generous whitespace. Reads like a private-equity / boutique advisory firm.

(function () {
  const C = {
    ink: "#14181d", navy: "#1b3a5b", navy2: "#274d73",
    paper: "#f7f6f2", paper2: "#efede7", white: "#fffefb",
    line: "rgba(20,24,29,0.16)", lineL: "rgba(20,24,29,0.08)",
    body: "rgba(20,24,29,0.66)",
  };
  const disp = "'Newsreader', Georgia, serif";
  const sans = "'IBM Plex Sans', system-ui, sans-serif";
  const mono = "'IBM Plex Mono', ui-monospace, monospace";

  if (!document.getElementById("fc-styles")) {
    const s = document.createElement("style");
    s.id = "fc-styles";
    s.textContent = `
      .fc{font-family:${sans};color:${C.ink};background:${C.paper};width:1440px;-webkit-font-smoothing:antialiased}
      .fc h1,.fc h2,.fc h3{font-family:${disp};font-weight:400;margin:0;letter-spacing:-0.01em}
      .fc a{text-decoration:none;color:inherit}
      .fc-meta{font-family:${mono};font-size:11.5px;letter-spacing:.18em;text-transform:uppercase;color:${C.navy}}
      .fc-navlink{font-family:${sans};font-size:14px;color:${C.body};transition:color .15s;letter-spacing:.01em}
      .fc-navlink:hover{color:${C.ink}}
      .fc-link{font-family:${sans};font-size:14px;color:${C.navy};display:inline-flex;align-items:center;gap:9px;
        border-bottom:1px solid ${C.navy};padding-bottom:3px;transition:gap .18s}
      .fc-link:hover{gap:14px}
      .fc-row{transition:background .18s}
      .fc-row:hover{background:${C.paper2}}
      .fc-hr{height:1px;background:${C.line};border:0;margin:0}
    `;
    document.head.appendChild(s);
  }

  function DirectionC() {
    const practices = [
      ["01", "Life Insurance Solutions", "Term, whole, and indexed universal life — structured to protect income, families, and key-person interests, and placed exclusively through A-rated carriers."],
      ["02", "Wealth Protection Planning", "Asset-protection architecture, estate liquidity, and risk transfer engineered to preserve and transition capital across generations."],
      ["03", "Financial Advisory", "Independent, fiduciary-minded counsel spanning retirement income, business continuity, and long-horizon allocation."],
    ];
    const register = [
      ["Legal entity", "Freeman Financial Group LLC"],
      ["Jurisdiction", "State of Ohio — limited liability company"],
      ["Standing", "Active & in good standing"],
      ["Insurance license", "Ohio Resident Producer · No. 0 000 000"],
      ["National Producer Number", "NPN 00000000 — verifiable via NIPR"],
      ["Principal office", "200 Public Square, Cleveland, Ohio"],
      ["Registered agent", "On file with the Ohio Secretary of State"],
      ["Professional liability", "Errors & omissions coverage in force"],
    ];

    return (
      <div className="fc">
        {/* nav */}
        <nav style={{ borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "26px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontFamily: disp, fontSize: 21, color: C.ink, letterSpacing: "-.01em" }}>
              Freeman <span style={{ color: C.navy }}>Financial Group</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
              {["The Firm", "Practice", "Register", "Contact"].map((n) => <a key={n} className="fc-navlink" href="#">{n}</a>)}
              <span className="fc-meta" style={{ color: C.body }}>Est. · Cleveland, OH</span>
            </div>
          </div>
        </nav>

        {/* hero */}
        <header style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 48px 72px" }}>
          <div className="fc-meta" style={{ marginBottom: 40 }}>Independent Financial Services — Ohio</div>
          <div style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 64, alignItems: "end" }}>
            <h1 style={{ fontSize: 76, lineHeight: 1.04, color: C.ink, letterSpacing: "-.025em" }}>
              The stewardship of <span style={{ fontStyle: "italic", color: C.navy }}>capital</span> demands permanence.
            </h1>
            <div style={{ paddingBottom: 10 }}>
              <p style={{ fontSize: 17, lineHeight: 1.72, color: C.body, margin: 0 }}>
                Freeman Financial Group LLC is a licensed Ohio firm advising individuals, families, and closely held businesses on life insurance, wealth protection, and fiduciary financial strategy.
              </p>
              <a className="fc-link" href="#" style={{ marginTop: 28 }}>Request firm documentation <window.FGIcon name="arrow" size={15} stroke={C.navy} /></a>
            </div>
          </div>
        </header>

        {/* full-bleed plate */}
        <section style={{ padding: "0 48px" }}>
          <div style={{ maxWidth: 1344, margin: "0 auto", height: 440, position: "relative" }}>
            <window.FGPlaceholder label="Public Square, Cleveland — full-bleed cityscape" tone="ink" />
            <div style={{ position: "absolute", left: 0, bottom: 0, background: C.paper, padding: "18px 28px 0" }}>
              <span className="fc-meta" style={{ color: C.body }}>Headquarters · 200 Public Square</span>
            </div>
          </div>
        </section>

        {/* statement */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "104px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 72 }}>
            <div className="fc-meta">The Firm</div>
            <div>
              <p style={{ fontFamily: disp, fontSize: 34, lineHeight: 1.34, color: C.ink, margin: "0 0 36px", letterSpacing: "-.01em" }}>
                We were established as a registered Ohio entity — with formal governance, documented procedures, and the carrier relationships expected of an enduring advisory practice.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                <p style={{ fontSize: 15.5, lineHeight: 1.78, color: C.body, margin: 0 }}>
                  Independence is structural. We answer to clients rather than to a parent institution or a proprietary product shelf, and every recommendation is documented against a written standard of care.
                </p>
                <p style={{ fontSize: 15.5, lineHeight: 1.78, color: C.body, margin: 0 }}>
                  That discipline is also what allows partner institutions to onboard us with confidence — our standing, licensing, and references are maintained in good order and furnished on request.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* practice areas */}
        <section style={{ background: C.paper2, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 48px" }}>
            <div className="fc-meta" style={{ marginBottom: 52 }}>Practice</div>
            {practices.map(([n, t, d], i) => (
              <div key={n} className="fc-row" style={{ display: "grid", gridTemplateColumns: "100px 1fr 1.2fr 70px", gap: 32, alignItems: "baseline", padding: "36px 16px", borderTop: i === 0 ? "none" : `1px solid ${C.line}` }}>
                <div style={{ fontFamily: mono, fontSize: 14, color: C.navy, letterSpacing: ".1em" }}>{n}</div>
                <h3 style={{ fontSize: 30, color: C.ink, lineHeight: 1.1 }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: C.body, margin: 0 }}>{d}</p>
                <div style={{ textAlign: "right" }}><window.FGIcon name="arrow" size={18} stroke={C.navy} /></div>
              </div>
            ))}
          </div>
        </section>

        {/* register — document-style table */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "104px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 72, alignItems: "start" }}>
            <div>
              <div className="fc-meta" style={{ marginBottom: 22 }}>Register of Record</div>
              <h2 style={{ fontSize: 40, color: C.ink, lineHeight: 1.12, marginBottom: 24 }}>Verifiable. Documented. On request.</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.74, color: C.body, marginBottom: 28 }}>
                The particulars a bank or partner requires to approve and onboard the business — furnished promptly as a due-diligence packet.
              </p>
              <a className="fc-link" href="#">Request the packet <window.FGIcon name="arrow" size={15} stroke={C.navy} /></a>
            </div>
            <div style={{ borderTop: `2px solid ${C.ink}` }}>
              {register.map(([k, v], i) => (
                <div key={k} className="fc-row" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.3fr", gap: 24, padding: "20px 12px", borderBottom: `1px solid ${C.line}`, alignItems: "baseline" }}>
                  <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: ".1em", textTransform: "uppercase", color: C.body }}>{k}</div>
                  <div style={{ fontFamily: disp, fontSize: 19, color: C.ink, lineHeight: 1.3 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* positioning quote */}
        <section style={{ background: C.ink, color: "#fff", padding: "112px 48px" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto", textAlign: "center" }}>
            <window.FGIcon name="quote" size={34} stroke={C.navy2} style={{ marginBottom: 28 }} />
            <p style={{ fontFamily: disp, fontSize: 40, lineHeight: 1.34, color: "#fff", margin: 0, letterSpacing: "-.01em" }}>
              We built Freeman Financial Group to be the kind of firm a bank can approve without a second question — regulated, documented, and accountable.
            </p>
            <div className="fc-meta" style={{ color: "rgba(255,255,255,.55)", marginTop: 40 }}>Freeman Financial Group LLC — Cleveland, Ohio</div>
          </div>
        </section>

        {/* contact */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "104px 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
            <h2 style={{ fontSize: 56, color: C.ink, lineHeight: 1.08, letterSpacing: "-.02em" }}>
              Begin a conversation, <span style={{ fontStyle: "italic", color: C.navy }}>or a verification.</span>
            </h2>
            <div style={{ paddingBottom: 12 }}>
              <div style={{ display: "grid", gap: 22 }}>
                {[["Office", "200 Public Square\nCleveland, Ohio"], ["Correspondence", "inquiries@freemanfg.com"], ["Hours", "By appointment · Mon–Fri"]].map(([k, v]) => (
                  <div key={k}>
                    <div className="fc-meta" style={{ color: C.body, marginBottom: 7 }}>{k}</div>
                    <div style={{ fontFamily: disp, fontSize: 20, color: C.ink, whiteSpace: "pre-line", lineHeight: 1.4 }}>{v}</div>
                  </div>
                ))}
              </div>
              <a className="fc-link" href="#" style={{ marginTop: 30 }}>Request documentation <window.FGIcon name="arrow" size={15} stroke={C.navy} /></a>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer style={{ borderTop: `1px solid ${C.line}`, padding: "44px 48px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div style={{ fontFamily: disp, fontSize: 17, color: C.ink }}>Freeman <span style={{ color: C.navy }}>Financial Group</span></div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".06em", color: C.body, maxWidth: 720, textAlign: "right", lineHeight: 1.7 }}>
              © 2026 FREEMAN FINANCIAL GROUP LLC · LICENSED OHIO INSURANCE PRODUCER · SERVICES OFFERED WHERE LICENSED · LICENSE NUMBERS &amp; ENTITY DETAILS SHOWN ARE PLACEHOLDERS PENDING FINAL COPY
            </div>
          </div>
        </footer>
      </div>
    );
  }

  window.DirectionC = DirectionC;
})();
