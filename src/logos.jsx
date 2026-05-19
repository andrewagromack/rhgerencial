/* Logos.jsx — Logo oficial RH Gerencial v4
   Wordmark tipográfico puro. Sin mark decorativo, sin frames.
   La estructura (wordmark + regla + tagline) y el dorado cargan
   la identidad. Como Hermès, A.P.C., editoriales serias.
*/

// ====== LOGO OFICIAL: Wordmark horizontal ======
// Lockup completo de marca — usado en hero, CTA y aplicaciones grandes.
function LogoCardinal({ size = 480, color = '#c9a961', accent = '#e8d4a0' }) {
  // viewBox 480×92 — ratio ~5:1, generoso para el tagline
  const W = 480, H = 92;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={size} height={size * H / W} fill="none">
      {/* === WORDMARK === */}
      <text
        x="0" y="44"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="46"
        fontWeight="800"
        fill={color}
        letterSpacing="-0.5"
      >RH GERENCIAL</text>

      {/* Regla horizontal con cap dorado (terminator) */}
      <line x1="0" y1="62" x2="468" y2="62" stroke={color} strokeWidth="0.8" opacity="0.5" />
      <rect x="468" y="59" width="6" height="6" fill={accent} />

      {/* === TAGLINE === */}
      <text
        x="0" y="82"
        fontFamily="Manrope, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill={color}
        letterSpacing="2.6"
        opacity="0.92"
      >ESTRATEGIA · PERSONAS · RESULTADOS</text>
    </svg>
  );
}

// Versión apilada vertical — el mismo sistema en formato más compacto
// para columnas verticales (hero, sobre Paola, CTA centrado).
function LogoStacked({ size = 320, color = '#c9a961', accent = '#e8d4a0' }) {
  // viewBox 480×136 — ancho suficiente para "RH GERENCIAL" a 64px sin clip
  const W = 480, H = 136;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={size} height={size * H / W} fill="none">
      {/* Pequeño tick superior — punto de partida */}
      <line x1="0" y1="0" x2="48" y2="0" stroke={accent} strokeWidth="2" />
      {/* WORDMARK */}
      <text
        x="0" y="62"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="64"
        fontWeight="800"
        fill={color}
        letterSpacing="-1"
      >RH GERENCIAL</text>
      {/* Regla */}
      <line x1="0" y1="88" x2="468" y2="88" stroke={color} strokeWidth="0.8" opacity="0.5" />
      <rect x="468" y="85" width="6" height="6" fill={accent} />
      {/* Tagline */}
      <text
        x="0" y="118"
        fontFamily="Manrope, sans-serif"
        fontSize="13"
        fontWeight="600"
        fill={color}
        letterSpacing="3"
        opacity="0.92"
      >ESTRATEGIA · PERSONAS · RESULTADOS</text>
    </svg>
  );
}

// Versión compacta: sólo "RH." con punto dorado — favicon, navbar, footer
function LogoMonoCompact({ size = 56, color = '#c9a961', accent = '#e8d4a0' }) {
  // viewBox 76×56 — wordmark mini con punto
  const W = 76, H = 56;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={size * W / H} height={size} fill="none">
      <text
        x="0" y="44"
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="48"
        fontWeight="800"
        fill={color}
        letterSpacing="-2"
      >RH</text>
      <rect x="62" y="34" width="10" height="10" fill={accent} />
    </svg>
  );
}

// Versión sello — para papelería y aplicaciones especiales
function LogoSeal({ size = 200, color = '#c9a961', accent = '#e8d4a0', dark = '#050d24' }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="none">
      <rect x="0" y="0" width="200" height="200" rx="4" fill={dark} />
      <line x1="20" y1="40" x2="68" y2="40" stroke={accent} strokeWidth="2" />
      <text
        x="20" y="100"
        fontFamily="Manrope, sans-serif"
        fontSize="36"
        fontWeight="800"
        fill={color}
        letterSpacing="-0.5"
      >RH</text>
      <text
        x="20" y="138"
        fontFamily="Manrope, sans-serif"
        fontSize="36"
        fontWeight="800"
        fill={color}
        letterSpacing="-0.5"
      >GERENCIAL</text>
      <line x1="20" y1="154" x2="172" y2="154" stroke={color} strokeWidth="0.8" opacity="0.6" />
      <rect x="172" y="151" width="6" height="6" fill={accent} />
      <text
        x="20" y="172"
        fontFamily="Manrope, sans-serif"
        fontSize="8"
        fontWeight="600"
        fill={color}
        letterSpacing="2.4"
        opacity="0.85"
      >ESTRATEGIA · PERSONAS · RESULTADOS</text>
    </svg>
  );
}

// ====== LOGO MARK (alias para compatibilidad) ======
function LogoMark({ size = 36, color = '#d4b574', accent = '#e8d4a0' }) {
  return <LogoMonoCompact size={size} color={color} accent={accent} />;
}

window.LogoCardinal = LogoCardinal;
window.LogoStacked = LogoStacked;
window.LogoMonoCompact = LogoMonoCompact;
window.LogoSeal = LogoSeal;
window.LogoMark = LogoMark;
