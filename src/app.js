/* App.jsx — RH Gerencial (contenido real basado en rhgerencial.cl)
   Posicionamiento: consultoría senior PYME / mediana empresa.
   RRHH duro + DO + transformación digital. Implementación, no coaching.
*/

const {
  useState
} = React;
const BG_OPTIONS = [{
  value: 'circuit',
  label: 'Circuito'
}, {
  value: 'grid',
  label: 'Malla'
}, {
  value: 'stack',
  label: 'Stack'
}, {
  value: 'beam',
  label: 'Rayos'
}];
const ACCENT_OPTIONS = ['#c9a961', '#d4b574', '#b8923e', '#a47e30'];

// ====== Nav ======
function Nav({
  accentColor,
  showTagline
}) {
  const [open, setOpen] = useState(false);
  // Cerrar al click en un link
  const close = () => setOpen(false);
  // Bloquear scroll del body cuando está abierto
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${open ? 'is-open' : ''}`
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-brand",
    href: "#top",
    onClick: close
  }, /*#__PURE__*/React.createElement(LogoMonoCompact, {
    size: 36,
    color: accentColor,
    accent: "#e8d4a0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wordmark"
  }, /*#__PURE__*/React.createElement("b", null, "RH Gerencial"), showTagline && /*#__PURE__*/React.createElement("span", null, "Estrategia \xB7 Personas \xB7 Resultados"))), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    "aria-label": open ? 'Cerrar menú' : 'Abrir menú',
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: `nav-collapse ${open ? 'is-open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#servicios",
    onClick: close
  }, "Servicios"), /*#__PURE__*/React.createElement("a", {
    href: "#metodologia",
    onClick: close
  }, "Metodolog\xEDa"), /*#__PURE__*/React.createElement("a", {
    href: "#paola",
    onClick: close
  }, "Acerca de"), /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    onClick: close
  }, "Contacto")), /*#__PURE__*/React.createElement("a", {
    className: "nav-cta",
    href: "#contacto",
    onClick: close
  }, "Agendar diagn\xF3stico \u2192")));
}

// ====== Hero ======
function Hero({
  bgVariant,
  bgSpeed,
  accentColor
}) {
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }, /*#__PURE__*/React.createElement(Background, {
    variant: bgVariant,
    speed: bgSpeed,
    color: accentColor
  })), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Consultor\xEDa Senior en Gesti\xF3n de Personas"), /*#__PURE__*/React.createElement("h1", null, "Escalamos tu \xE1rea de ", /*#__PURE__*/React.createElement("em", null, "Personas"), " ", /*#__PURE__*/React.createElement("br", null), "con experiencia gerencial."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Acompa\xF1amos a PYMEs y Start-Up a estructurar, profesionalizar y digitalizar su gesti\xF3n de RRHH \u2014 con metodolog\xEDa, agilidad y visi\xF3n estrat\xE9gica. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#e8d4a0'
    }
  }, "Sin los costos de una gerencia interna.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#contacto"
  }, "Diagn\xF3stico inicial sin costo ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#servicios"
  }, "Ver servicios")), /*#__PURE__*/React.createElement("div", {
    className: "hero-tech-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tech-label"
  }, "Implementamos"), /*#__PURE__*/React.createElement("span", {
    className: "tech-tag"
  }, "HRIS"), /*#__PURE__*/React.createElement("span", {
    className: "tech-tag"
  }, "ATS"), /*#__PURE__*/React.createElement("span", {
    className: "tech-tag"
  }, "Firma digital"), /*#__PURE__*/React.createElement("span", {
    className: "tech-tag"
  }, "IA aplicada"), /*#__PURE__*/React.createElement("span", {
    className: "tech-tag"
  }, "Ley Karin"), /*#__PURE__*/React.createElement("span", {
    className: "tech-tag"
  }, "Ley 40h"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-mark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-mark-frame",
    style: {
      borderStyle: "none",
      maxWidth: "520px",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(LogoStacked, {
    size: 300,
    color: accentColor,
    accent: "#e8d4a0"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, "+15"), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "A\xF1os de experiencia")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num",
    style: {
      textAlign: "center"
    }
  }, "+800"), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "Colaboradores gestionados")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stat-num",
    style: {
      textAlign: "center"
    }
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "Pa\xEDses \xB7 Chile y Per\xFA")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "stat-num",
    style: {
      textAlign: "center"
    }
  }, "5"), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "Industrias")))));
}

// ====== Tagline band ======
function TaglineBand({
  accentColor
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "tagline-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tagline-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tagline-word"
  }, "Estrategia"), /*#__PURE__*/React.createElement("span", {
    className: "tagline-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tagline-word"
  }, "Personas"), /*#__PURE__*/React.createElement("span", {
    className: "tagline-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tagline-word"
  }, "Resultados"))));
}

// ====== Servicios ======
const SERVICES = [{
  n: '01',
  cat: 'DIAGNÓSTICO',
  title: 'Diagnóstico RRHH',
  desc: 'Evaluación integral de cumplimiento, estructura, procesos y brechas críticas del área de personas.',
  deliverables: ['Mapa de cumplimiento', 'Estructura actual', 'Brechas priorizadas']
}, {
  n: '02',
  cat: 'CUMPLIMIENTO',
  title: 'Auditoría Laboral',
  desc: 'Revisión de nómina, cotizaciones, contratos, reglamentos y preparación ante fiscalizaciones.',
  deliverables: ['Auditoría de nómina', 'Revisión contractual', 'Hallazgos y plan']
}, {
  n: '03',
  cat: 'IMPLEMENTACIÓN',
  title: 'Implementación de procesos',
  desc: 'Diseño e instalación de on-boarding, evaluación de desempeño, clima organizacional y políticas.',
  deliverables: ['Onboarding', 'Evaluación desempeño', 'Encuesta de clima']
}, {
  n: '04',
  cat: 'TALENTO',
  title: 'Reclutamiento & Hunting',
  desc: 'Búsqueda y selección de talento clave — posiciones técnicas, profesionales y gerenciales.',
  deliverables: ['Hunting dirigido', 'Assessment técnico', 'Reportes ejecutivos']
}, {
  n: '05',
  cat: 'DIGITAL',
  title: 'Transformación Digital',
  desc: 'Implementación de HRIS, ATS, firma digital, automatización de procesos y herramientas de IA aplicada.',
  deliverables: ['HRIS / ATS', 'Firma digital', 'IA aplicada a RRHH'],
  highlight: true
}, {
  n: '06',
  cat: 'NORMATIVA',
  title: 'Cumplimiento Normativo',
  desc: 'Ley Karin, Ley 40 Horas, protocolos, reglamento interno, código de ética y prevención de riesgos.',
  deliverables: ['Ley Karin', 'Ley 40 Horas', 'Reglamento interno']
}, {
  n: '07',
  cat: 'PUNTUAL',
  title: 'Sesión Express',
  desc: 'Consultoría puntual por hora para resolver dudas específicas de gestión de personas o normativa.',
  deliverables: ['Por hora', 'Respuesta concreta', 'Sin compromiso']
}, {
  n: '08',
  cat: 'CONTINUO',
  title: 'Mentoría & Dirección Externa',
  desc: 'Acompañamiento estratégico continuo al equipo interno para escalar el área de RRHH con guía experta.',
  deliverables: ['Mensual / trimestral', 'Mentoría a Jefes RRHH', 'KPIs y seguimiento']
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    className: "block services-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Servicios"), /*#__PURE__*/React.createElement("h2", null, "Soluciones integrales para ", /*#__PURE__*/React.createElement("em", null, "escalar"), " tu gesti\xF3n de personas")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Cada servicio se adapta a la realidad y madurez de tu empresa. Desde un diagn\xF3stico r\xE1pido hasta un acompa\xF1amiento estrat\xE9gico continuo \u2014 todo con foco en implementaci\xF3n, no s\xF3lo recomendaci\xF3n.")), /*#__PURE__*/React.createElement("div", {
    className: "services-grid"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("article", {
    className: `service-card ${s.highlight ? 'is-highlight' : ''}`,
    key: s.n
  }, /*#__PURE__*/React.createElement("header", {
    className: "sc-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-num"
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "sc-cat"
  }, s.cat)), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc), /*#__PURE__*/React.createElement("ul", {
    className: "sc-list"
  }, s.deliverables.map(d => /*#__PURE__*/React.createElement("li", {
    key: d
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " ", d))), /*#__PURE__*/React.createElement("a", {
    className: "more",
    href: "#contacto"
  }, "Conversemos ", /*#__PURE__*/React.createElement("span", null, "\u2192")))))));
}

// ====== Proceso ======
const STEPS = [{
  n: '01',
  t: 'Diagnóstico',
  d: 'Evaluamos el estado actual de tu gestión de personas: cumplimiento, procesos, estructura y brechas críticas.',
  meta: 'Semana 1–2',
  out: 'Informe + mapa de brechas'
}, {
  n: '02',
  t: 'Plan de Acción',
  d: 'Diseñamos una hoja de ruta priorizada con entregables concretos, plazos y métricas de avance.',
  meta: 'Semana 2–3',
  out: 'Roadmap + KPIs'
}, {
  n: '03',
  t: 'Implementación',
  d: 'Ejecutamos o acompañamos la implementación — dejando procesos instalados y equipos capacitados internamente.',
  meta: 'Mes 1–6',
  out: 'Capacidades instaladas'
}];
function Process({
  bgVariant,
  bgSpeed,
  accentColor
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "metodologia",
    className: "block process-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-bg"
  }, /*#__PURE__*/React.createElement(Background, {
    variant: bgVariant === 'circuit' ? 'grid' : bgVariant,
    speed: bgSpeed * 0.6,
    color: accentColor
  })), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Metodolog\xEDa"), /*#__PURE__*/React.createElement("h2", null, "\xBFC\xF3mo ", /*#__PURE__*/React.createElement("em", null, "trabajamos?"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Tres etapas con entregables claros y plazos definidos. La diferencia: no nos vamos cuando entregamos el informe \u2014 nos quedamos hasta que el proceso est\xE1 instalado.")), /*#__PURE__*/React.createElement("div", {
    className: "process-grid"
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "process-card",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc-num"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "pc-meta"
  }, s.meta), /*#__PURE__*/React.createElement("h4", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d), /*#__PURE__*/React.createElement("div", {
    className: "pc-out"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Entregable"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, s.out)))))));
}

// ====== Industrias ======
function Industries() {
  const items = [{
    code: 'ING',
    name: 'Ingeniería'
  }, {
    code: 'TLC',
    name: 'Telecomunicaciones'
  }, {
    code: 'RET',
    name: 'Retail'
  }, {
    code: 'STA',
    name: 'Start-ups'
  }, {
    code: 'CHL',
    name: 'Chile'
  }, {
    code: 'PER',
    name: 'Perú'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "clients-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "clients-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-mono"
  }, "Industrias y mercados intervenidos")), /*#__PURE__*/React.createElement("div", {
    className: "industries-grid"
  }, items.map(i => /*#__PURE__*/React.createElement("div", {
    className: "ind",
    key: i.code
  }, /*#__PURE__*/React.createElement("div", {
    className: "ind-code"
  }, i.code), /*#__PURE__*/React.createElement("div", {
    className: "ind-name"
  }, i.name))))));
}

// ====== Sobre Paola ======
function About({
  accentColor
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "paola",
    className: "block about-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-frame-mark"
  }, /*#__PURE__*/React.createElement(LogoMonoCompact, {
    size: 32,
    color: "#c9a961",
    accent: "#e8d4a0"
  })), /*#__PURE__*/React.createElement("img", {
    className: "about-photo",
    src: "./assets/paola.jpg",
    alt: "Paola Gonz\xE1lez"
  }), /*#__PURE__*/React.createElement("div", {
    className: "about-frame-corner tl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "about-frame-corner tr"
  }), /*#__PURE__*/React.createElement("div", {
    className: "about-frame-corner bl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "about-frame-corner br"
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-mono"
  }, "Acerca de"), /*#__PURE__*/React.createElement("h2", {
    className: "about-name"
  }, "Paola Gonz\xE1lez"), /*#__PURE__*/React.createElement("div", {
    className: "about-role"
  }, "Consultora Senior \xB7 Fundadora"), /*#__PURE__*/React.createElement("p", null, "Con m\xE1s de ", /*#__PURE__*/React.createElement("strong", null, "15 a\xF1os"), " como ", /*#__PURE__*/React.createElement("strong", null, "Gerente y Sub-Gerente de RRHH"), " en empresas de ingenier\xEDa, telecomunicaciones, retail y start-ups, he liderado la creaci\xF3n y consolidaci\xF3n de \xE1reas de personas desde cero en ", /*#__PURE__*/React.createElement("strong", null, "Chile y Per\xFA"), "."), /*#__PURE__*/React.createElement("p", null, "Hoy desde RH Gerencial pongo toda esa experiencia al servicio de empresas medianas que necesitan profesionalizar su gesti\xF3n de personas \u2014 actuando como ", /*#__PURE__*/React.createElement("strong", null, "socia estrat\xE9gica de la direcci\xF3n"), ", con la flexibilidad de una asesor\xEDa externa y la profundidad de una gerencia de RRHH."), /*#__PURE__*/React.createElement("div", {
    className: "about-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Trayectoria"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "15+ a\xF1os")), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Colaboradores gestionados"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "+800")), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Pa\xEDses"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "CL \xB7 PE"))), /*#__PURE__*/React.createElement("a", {
    className: "linkedin-link",
    href: "https://www.linkedin.com/in/pao-gonzalez/",
    target: "_blank",
    rel: "noopener"
  }, "Ver trayectoria en LinkedIn ", /*#__PURE__*/React.createElement("span", null, "\u2197"))))));
}

// ====== Diferenciadores ======
function Diff() {
  const items = [{
    n: 'A',
    t: 'Implementamos, no sólo asesoramos',
    d: 'El informe es el inicio, no el final. Acompañamos hasta dejar el proceso instalado y al equipo capacitado.'
  }, {
    n: 'B',
    t: 'Gerencia externa con costo variable',
    d: 'Acceso a experiencia gerencial senior sin la estructura fija de un Gerente RRHH interno.'
  }, {
    n: 'C',
    t: 'Transformación digital aplicada',
    d: 'HRIS, ATS, firma digital, automatización y IA — implementadas con criterio operativo, no como moda.'
  }, {
    n: 'D',
    t: 'Cumplimiento al día',
    d: 'Ley Karin, Ley 40 Horas, fiscalizaciones — operamos con la normativa vigente, no con la del año pasado.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "diff-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label"
  }, "Por qu\xE9 RH Gerencial"), /*#__PURE__*/React.createElement("h2", null, "Cuatro razones ", /*#__PURE__*/React.createElement("em", null, "concretas"))), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Lo que nos distingue de una consultora tradicional o de un coach gen\xE9rico \u2014 hechos, no esl\xF3ganes.")), /*#__PURE__*/React.createElement("div", {
    className: "diff-grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    className: "diff-item",
    key: it.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "diff-letter"
  }, it.n), /*#__PURE__*/React.createElement("h4", null, it.t), /*#__PURE__*/React.createElement("p", null, it.d))))));
}

// ====== CTA Contacto ======
function CTA({
  bgVariant,
  bgSpeed,
  accentColor
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    className: "cta-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-bg"
  }, /*#__PURE__*/React.createElement(Background, {
    variant: bgVariant,
    speed: bgSpeed * 0.5,
    color: accentColor
  })), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-mark"
  }, /*#__PURE__*/React.createElement(LogoCardinal, {
    size: 420,
    color: accentColor,
    accent: "#e8d4a0"
  })), /*#__PURE__*/React.createElement("div", {
    className: "label-mono",
    style: {
      color: '#c9a961',
      marginBottom: 24
    }
  }, "Solicita tu diagn\xF3stico inicial sin costo"), /*#__PURE__*/React.createElement("h2", null, "Conoce el estado real", /*#__PURE__*/React.createElement("br", null), "de tu gesti\xF3n de personas."), /*#__PURE__*/React.createElement("div", {
    className: "cta-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "https://calendly.com/paolagonzalez-rhgerencial/30min",
    target: "_blank",
    rel: "noopener"
  }, "Agendar reuni\xF3n ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "https://wa.me/56978592310",
    target: "_blank",
    rel: "noopener"
  }, "WhatsApp +56 9 7859 2310")), /*#__PURE__*/React.createElement("div", {
    className: "cta-direct"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:paolagonzalez@rhgerencial.cl"
  }, "paolagonzalez@rhgerencial.cl")))));
}

// ====== Footer ======
function Footer({
  accentColor
}) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: '#f6f2e9'
    }
  }, /*#__PURE__*/React.createElement(LogoMonoCompact, {
    size: 36,
    color: accentColor,
    accent: "#e8d4a0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#d4b574'
    }
  }, "RH Gerencial"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'rgba(246,242,233,0.55)',
      marginTop: 4
    }
  }, "Gesti\xF3n de Personas"))), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, "Consultor\xEDa senior en gesti\xF3n de personas para PYMEs y empresas medianas en Chile y Per\xFA. Implementaci\xF3n de procesos duros de RRHH, transformaci\xF3n digital y desarrollo organizacional.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Servicios"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Diagn\xF3stico RRHH")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Auditor\xEDa Laboral")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Transformaci\xF3n Digital")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Cumplimiento Normativo")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#servicios"
  }, "Mentor\xEDa externa")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Contacto directo"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:paolagonzalez@rhgerencial.cl"
  }, "paolagonzalez@rhgerencial.cl")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/56978592310",
    target: "_blank",
    rel: "noopener"
  }, "WhatsApp +56 9 7859 2310")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://calendly.com/paolagonzalez-rhgerencial/30min",
    target: "_blank",
    rel: "noopener"
  }, "Agendar Calendly")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/pao-gonzalez/",
    target: "_blank",
    rel: "noopener"
  }, "LinkedIn \u2197")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Mercados"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Santiago \xB7 Chile"), /*#__PURE__*/React.createElement("li", null, "Lima \xB7 Per\xFA"), /*#__PURE__*/React.createElement("li", {
    style: {
      marginTop: 14,
      opacity: 0.55
    }
  }, "Ingenier\xEDa \xB7 Telco"), /*#__PURE__*/React.createElement("li", {
    style: {
      opacity: 0.55
    }
  }, "Retail \xB7 Start-ups")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 RH GERENCIAL \xB7 TODOS LOS DERECHOS RESERVADOS"), /*#__PURE__*/React.createElement("div", null, "SANTIAGO \xB7 CHILE"))));
}

// ====== Tweaks Panel ======
// ====== WhatsApp floating button ======
function WhatsAppFloat() {
  return /*#__PURE__*/React.createElement("a", {
    className: "wa-float",
    href: "https://wa.me/56978592310?text=Hola%2C%20me%20interesa%20conversar%20sobre%20los%20servicios%20de%20asesor%C3%ADa%20en%20gesti%C3%B3n%20de%20Recursos%20Humanos",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Conversar por WhatsApp"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "28",
    height: "28",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.6 2.14 8.03L0 32l8.18-2.14A15.91 15.91 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm0 29.18c-2.5 0-4.96-.66-7.12-1.92l-.5-.3-5.04 1.32 1.34-4.92-.32-.52A13.16 13.16 0 0 1 2.82 16C2.82 8.74 8.74 2.82 16 2.82S29.18 8.74 29.18 16 23.26 29.18 16 29.18zm7.6-9.84c-.42-.2-2.46-1.22-2.84-1.36-.38-.14-.66-.2-.94.2-.28.42-1.08 1.36-1.32 1.64-.24.28-.48.32-.9.1-.42-.2-1.78-.66-3.4-2.1-1.26-1.12-2.1-2.5-2.34-2.92-.24-.42-.02-.66.18-.86.18-.18.42-.48.62-.72.2-.24.28-.42.42-.7.14-.28.06-.52-.04-.72-.1-.2-.94-2.26-1.28-3.1-.34-.82-.68-.7-.94-.72h-.8c-.28 0-.72.1-1.1.52-.38.42-1.44 1.4-1.44 3.42 0 2 1.46 3.94 1.66 4.22.2.28 2.86 4.36 6.94 6.12.98.42 1.74.68 2.34.86.98.32 1.88.28 2.58.18.78-.12 2.46-1 2.8-1.96.34-.96.34-1.78.24-1.96-.1-.18-.38-.28-.8-.48z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "wa-tooltip"
  }, "Hablemos por WhatsApp"));
}

// ====== Root ======
function App() {
  const props = {
    bgVariant: "circuit",
    bgSpeed: 1,
    accentColor: "#c9a961",
    showTagline: true
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Nav, props), /*#__PURE__*/React.createElement(Hero, props), /*#__PURE__*/React.createElement(TaglineBand, {
    accentColor: props.accentColor
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Diff, null), /*#__PURE__*/React.createElement(Process, props), /*#__PURE__*/React.createElement(Industries, null), /*#__PURE__*/React.createElement(About, props), /*#__PURE__*/React.createElement(CTA, props), /*#__PURE__*/React.createElement(Footer, props), /*#__PURE__*/React.createElement(WhatsAppFloat, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
