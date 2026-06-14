// helpers.jsx — shared primitives for the FreemanFG landing directions.
// Striped image placeholders + a small, restrained institutional icon set.
// Exported to window for the per-direction files.

// Striped placeholder for imagery we don't have yet. label is a short
// monospace note of what belongs there.
function FGPlaceholder({ label = "image", radius = 0, tone = "navy", style = {} }) {
  const palettes = {
    navy:  { bg: "#0d2440", stripe: "rgba(255,255,255,0.045)", text: "rgba(255,255,255,0.55)" },
    light: { bg: "#e9edf3", stripe: "rgba(13,36,64,0.05)",     text: "rgba(13,36,64,0.45)" },
    ink:   { bg: "#12181f", stripe: "rgba(255,255,255,0.04)",  text: "rgba(255,255,255,0.5)" },
    brass: { bg: "#23303f", stripe: "rgba(176,137,79,0.10)",   text: "rgba(214,188,140,0.7)" },
  };
  const p = palettes[tone] || palettes.navy;
  const stripes = `repeating-linear-gradient(135deg, ${p.stripe} 0 1px, transparent 1px 11px)`;
  return (
    <div style={{
      position: "relative", width: "100%", height: "100%",
      background: p.bg, backgroundImage: stripes, borderRadius: radius,
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", ...style,
    }}>
      <span style={{
        fontFamily: "'IBM Plex Mono', ui-monospace, monospace", fontSize: 11,
        letterSpacing: "0.12em", textTransform: "uppercase", color: p.text,
        padding: "4px 10px", border: `1px solid ${p.text}`, borderRadius: 2,
        background: "rgba(0,0,0,0.12)", whiteSpace: "nowrap",
      }}>{label}</span>
    </div>
  );
}

// Minimal line icons (1.6px stroke, geometric). Kept simple on purpose.
function FGIcon({ name, size = 24, stroke = "currentColor", sw = 1.6, style = {} }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round", style,
  };
  const paths = {
    shield: <><path d="M12 3l7 2.5v5c0 4.6-3 8-7 9.5-4-1.5-7-4.9-7-9.5v-5L12 3z" /><path d="M9 12l2 2 4-4" /></>,
    columns: <><path d="M3 8l9-4 9 4" /><path d="M5 8v9M10 8v9M14 8v9M19 8v9" /><path d="M3 21h18M4 17h16" /></>,
    document: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4" /><path d="M10 13h5M10 16h5" /></>,
    lock: <><rect x="5" y="11" width="14" height="9" rx="1.5" /><path d="M8 11V8a4 4 0 018 0v3" /></>,
    chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
    scale: <><path d="M12 4v16M7 20h10" /><path d="M4 8h16" /><path d="M4 8l-2 5h4l-2-5zM20 8l-2 5h4l-2-5z" /></>,
    handshake: <><path d="M3 10l4-3 5 3 5-3 4 3" /><path d="M7 12l3 3 2-2 3 3" /><path d="M3 10v5M21 10v5" /></>,
    globe: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.5 2.2 2.5 13.8 0 16M12 4c-2.5 2.2-2.5 13.8 0 16" /></>,
    check: <path d="M5 12l5 5L19 7" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
    phone: <><path d="M5 4h4l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></>,
    pin: <><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
    quote: <><path d="M8 7H5a2 2 0 00-2 2v3a2 2 0 002 2h2v3M19 7h-3a2 2 0 00-2 2v3a2 2 0 002 2h2v3" /></>,
  };
  return <svg {...common}>{paths[name] || null}</svg>;
}

// Small monogram mark — overlapping "F" set in a ruled box. Pure type, no
// fake logo. accent recolors the rule.
function FGMark({ size = 36, color = "#0d2440", accent = "#b0894f", serif = false }) {
  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      border: `1.5px solid ${color}`, position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: color,
    }}>
      <span style={{
        fontFamily: serif ? "'Spectral', Georgia, serif" : "'Archivo', sans-serif",
        fontWeight: 600, fontSize: size * 0.5, color: "#fff", lineHeight: 1,
        letterSpacing: "-0.04em",
      }}>F</span>
      <span style={{ position: "absolute", right: 3, bottom: 2, width: size * 0.22, height: 2, background: accent }} />
    </div>
  );
}

Object.assign(window, { FGPlaceholder, FGIcon, FGMark });
