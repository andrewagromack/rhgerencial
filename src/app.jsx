/* App.jsx — RH Gerencial (contenido real basado en rhgerencial.cl)
   Posicionamiento: consultoría senior PYME / mediana empresa.
   RRHH duro + DO + transformación digital. Implementación, no coaching.
*/

const { useState } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "bgVariant": "circuit",
  "bgSpeed": 1,
  "accentColor": "#c9a961",
  "showTagline": true
} /*EDITMODE-END*/;

const BG_OPTIONS = [
{ value: 'circuit', label: 'Circuito' },
{ value: 'grid', label: 'Malla' },
{ value: 'stack', label: 'Stack' },
{ value: 'beam', label: 'Rayos' }];


const ACCENT_OPTIONS = ['#c9a961', '#d4b574', '#b8923e', '#a47e30'];

// ====== Nav ======
function Nav({ accentColor, showTagline }) {
  const [open, setOpen] = useState(false);
  // Cerrar al click en un link
  const close = () => setOpen(false);
  // Bloquear scroll del body cuando está abierto
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className={`nav ${open ? 'is-open' : ''}`}>
      <a className="nav-brand" href="#top" onClick={close}>
        <LogoMonoCompact size={36} color={accentColor} accent="#e8d4a0" />
        <div className="wordmark">
          <b>RH Gerencial</b>
          {showTagline && <span>Estrategia · Personas · Resultados</span>}
        </div>
      </a>

      {/* Burger button — visible sólo en mobile */}
      <button
        className="nav-burger"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      {/* Links + CTA — en mobile se vuelven un drawer */}
      <div className={`nav-collapse ${open ? 'is-open' : ''}`}>
        <div className="nav-links">
          <a href="#servicios" onClick={close}>Servicios</a>
          <a href="#metodologia" onClick={close}>Metodología</a>
          <a href="#paola" onClick={close}>Acerca de</a>
          <a href="#contacto" onClick={close}>Contacto</a>
        </div>
        <a className="nav-cta" href="#contacto" onClick={close}>Agendar diagnóstico →</a>
      </div>
    </nav>);

}

// ====== Hero ======
function Hero({ bgVariant, bgSpeed, accentColor }) {
  return (
    <header id="top" className="hero">
      <div className="hero-bg">
        <Background variant={bgVariant} speed={bgSpeed} color={accentColor} />
      </div>
      <div className="container">
        <div className="hero-content">
          <div>
            <div className="eyebrow">Consultoría Senior en Gestión de Personas</div>
            <h1>
              Escalamos tu área de <em>Personas</em>{" "}<br />
              con experiencia gerencial.
            </h1>
            <p className="hero-sub">
              Acompañamos a PYMEs y Start-Up a estructurar, profesionalizar y digitalizar su gestión de RRHH — con metodología, agilidad y visión estratégica. <strong style={{ color: '#e8d4a0' }}>Sin los costos de una gerencia interna.</strong>
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#contacto">
                Diagnóstico inicial sin costo <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#servicios">
                Ver servicios
              </a>
            </div>
            <div className="hero-tech-bar">
              <span className="tech-label">Implementamos</span>
              <span className="tech-tag">HRIS</span>
              <span className="tech-tag">ATS</span>
              <span className="tech-tag">Firma digital</span>
              <span className="tech-tag">IA aplicada</span>
              <span className="tech-tag">Ley Karin</span>
              <span className="tech-tag">Ley 40h</span>
            </div>
          </div>
          <div className="hero-mark">
            <div className="hero-mark-frame" style={{ borderStyle: "none", maxWidth: "520px", width: "100%" }}>
              <LogoStacked size={300} color={accentColor} accent="#e8d4a0" />
            </div>
          </div>
        </div>
        <div className="hero-stats" style={{ textAlign: "center" }}>
          <div><div className="stat-num">+15</div><div className="stat-label">Años de experiencia</div></div>
          <div style={{ textAlign: "center" }}><div className="stat-num" style={{ textAlign: "center" }}>+800</div><div className="stat-label">Colaboradores gestionados</div></div>
          <div><div className="stat-num" style={{ textAlign: "center" }}>2</div><div className="stat-label">Países · Chile y Perú</div></div>
          <div><div className="stat-num" style={{ textAlign: "center" }}>5</div><div className="stat-label">Industrias</div></div>
        </div>
      </div>
    </header>);

}

// ====== Tagline band ======
function TaglineBand({ accentColor }) {
  return (
    <section className="tagline-band">
      <div className="container">
        <div className="tagline-inner">
          <span className="tagline-word">Estrategia</span>
          <span className="tagline-dot" />
          <span className="tagline-word">Personas</span>
          <span className="tagline-dot" />
          <span className="tagline-word">Resultados</span>
        </div>
      </div>
    </section>);

}

// ====== Servicios ======
const SERVICES = [
{
  n: '01',
  cat: 'DIAGNÓSTICO',
  title: 'Diagnóstico RRHH',
  desc: 'Evaluación integral de cumplimiento, estructura, procesos y brechas críticas del área de personas.',
  deliverables: ['Mapa de cumplimiento', 'Estructura actual', 'Brechas priorizadas']
},
{
  n: '02',
  cat: 'CUMPLIMIENTO',
  title: 'Auditoría Laboral',
  desc: 'Revisión de nómina, cotizaciones, contratos, reglamentos y preparación ante fiscalizaciones.',
  deliverables: ['Auditoría de nómina', 'Revisión contractual', 'Hallazgos y plan']
},
{
  n: '03',
  cat: 'IMPLEMENTACIÓN',
  title: 'Implementación de procesos',
  desc: 'Diseño e instalación de on-boarding, evaluación de desempeño, clima organizacional y políticas.',
  deliverables: ['Onboarding', 'Evaluación desempeño', 'Encuesta de clima']
},
{
  n: '04',
  cat: 'TALENTO',
  title: 'Reclutamiento & Hunting',
  desc: 'Búsqueda y selección de talento clave — posiciones técnicas, profesionales y gerenciales.',
  deliverables: ['Hunting dirigido', 'Assessment técnico', 'Reportes ejecutivos']
},
{
  n: '05',
  cat: 'DIGITAL',
  title: 'Transformación Digital',
  desc: 'Implementación de HRIS, ATS, firma digital, automatización de procesos y herramientas de IA aplicada.',
  deliverables: ['HRIS / ATS', 'Firma digital', 'IA aplicada a RRHH'],
  highlight: true
},
{
  n: '06',
  cat: 'NORMATIVA',
  title: 'Cumplimiento Normativo',
  desc: 'Ley Karin, Ley 40 Horas, protocolos, reglamento interno, código de ética y prevención de riesgos.',
  deliverables: ['Ley Karin', 'Ley 40 Horas', 'Reglamento interno']
},
{
  n: '07',
  cat: 'PUNTUAL',
  title: 'Sesión Express',
  desc: 'Consultoría puntual por hora para resolver dudas específicas de gestión de personas o normativa.',
  deliverables: ['Por hora', 'Respuesta concreta', 'Sin compromiso']
},
{
  n: '08',
  cat: 'CONTINUO',
  title: 'Mentoría & Dirección Externa',
  desc: 'Acompañamiento estratégico continuo al equipo interno para escalar el área de RRHH con guía experta.',
  deliverables: ['Mensual / trimestral', 'Mentoría a Jefes RRHH', 'KPIs y seguimiento']
}];


function Services() {
  return (
    <section id="servicios" className="block services-block">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">Servicios</div>
            <h2>Soluciones integrales para <em>escalar</em> tu gestión de personas</h2>
          </div>
          <p className="lede">
            Cada servicio se adapta a la realidad y madurez de tu empresa. Desde un diagnóstico rápido hasta un acompañamiento estratégico continuo — todo con foco en implementación, no sólo recomendación.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) =>
          <article className={`service-card ${s.highlight ? 'is-highlight' : ''}`} key={s.n}>
              <header className="sc-head">
                <span className="sc-num">{s.n}</span>
                <span className="sc-cat">{s.cat}</span>
              </header>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="sc-list">
                {s.deliverables.map((d) =>
              <li key={d}><span className="dot" /> {d}</li>
              )}
              </ul>
              <a className="more" href="#contacto">Conversemos <span>→</span></a>
            </article>
          )}
        </div>
      </div>
    </section>);

}

// ====== Proceso ======
const STEPS = [
{
  n: '01',
  t: 'Diagnóstico',
  d: 'Evaluamos el estado actual de tu gestión de personas: cumplimiento, procesos, estructura y brechas críticas.',
  meta: 'Semana 1–2',
  out: 'Informe + mapa de brechas'
},
{
  n: '02',
  t: 'Plan de Acción',
  d: 'Diseñamos una hoja de ruta priorizada con entregables concretos, plazos y métricas de avance.',
  meta: 'Semana 2–3',
  out: 'Roadmap + KPIs'
},
{
  n: '03',
  t: 'Implementación',
  d: 'Ejecutamos o acompañamos la implementación — dejando procesos instalados y equipos capacitados internamente.',
  meta: 'Mes 1–6',
  out: 'Capacidades instaladas'
}];


function Process({ bgVariant, bgSpeed, accentColor }) {
  return (
    <section id="metodologia" className="block process-block">
      <div className="section-bg">
        <Background variant={bgVariant === 'circuit' ? 'grid' : bgVariant} speed={bgSpeed * 0.6} color={accentColor} />
      </div>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">Metodología</div>
            <h2>¿Cómo <em>trabajamos?</em></h2>
          </div>
          <p className="lede">
            Tres etapas con entregables claros y plazos definidos. La diferencia: no nos vamos cuando entregamos el informe — nos quedamos hasta que el proceso está instalado.
          </p>
        </div>
        <div className="process-grid">
          {STEPS.map((s) =>
          <div className="process-card" key={s.n}>
              <div className="pc-num">{s.n}</div>
              <div className="pc-meta">{s.meta}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
              <div className="pc-out">
                <span className="k">Entregable</span>
                <span className="v">{s.out}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ====== Industrias ======
function Industries() {
  const items = [
  { code: 'ING', name: 'Ingeniería' },
  { code: 'TLC', name: 'Telecomunicaciones' },
  { code: 'RET', name: 'Retail' },
  { code: 'STA', name: 'Start-ups' },
  { code: 'CHL', name: 'Chile' },
  { code: 'PER', name: 'Perú' }];

  return (
    <section className="clients-block">
      <div className="container">
        <div className="clients-head">
          <span className="label-mono">Industrias y mercados intervenidos</span>
        </div>
        <div className="industries-grid">
          {items.map((i) =>
          <div className="ind" key={i.code}>
              <div className="ind-code">{i.code}</div>
              <div className="ind-name">{i.name}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ====== Sobre Paola ======
function About({ accentColor }) {
  return (
    <section id="paola" className="block about-block">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-frame-mark">
              <LogoMonoCompact size={32} color="#c9a961" accent="#e8d4a0" />
            </div>
            {/* === FOTO DE PAOLA — CAMBIAR AQUÍ EL ENLACE/ARCHIVO === */}
            <img className="about-photo" src="./assets/paola.jpg" alt="Paola González" />
            <div className="about-frame-corner tl" />
            <div className="about-frame-corner tr" />
            <div className="about-frame-corner bl" />
            <div className="about-frame-corner br" />
          </div>
          <div className="about-text">
            <div className="label-mono">Acerca de</div>
            <h2 className="about-name">Paola González</h2>
            <div className="about-role">Consultora Senior · Fundadora</div>
            <p>
              Con más de <strong>15 años</strong> como <strong>Gerente y Sub-Gerente de RRHH</strong> en empresas de ingeniería, telecomunicaciones, retail y start-ups, he liderado la creación y consolidación de áreas de personas desde cero en <strong>Chile y Perú</strong>.
            </p>
            <p>
              Hoy desde RH Gerencial pongo toda esa experiencia al servicio de empresas medianas que necesitan profesionalizar su gestión de personas — actuando como <strong>socia estratégica de la dirección</strong>, con la flexibilidad de una asesoría externa y la profundidad de una gerencia de RRHH.
            </p>
            <div className="about-meta">
              <div className="item"><div className="k">Trayectoria</div><div className="v">15+ años</div></div>
              <div className="item"><div className="k">Colaboradores gestionados</div><div className="v">+800</div></div>
              <div className="item"><div className="k">Países</div><div className="v">CL · PE</div></div>
            </div>
            <a className="linkedin-link" href="https://www.linkedin.com/in/pao-gonzalez/" target="_blank" rel="noopener">
              Ver trayectoria en LinkedIn <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

// ====== Diferenciadores ======
function Diff() {
  const items = [
  {
    n: 'A',
    t: 'Implementamos, no sólo asesoramos',
    d: 'El informe es el inicio, no el final. Acompañamos hasta dejar el proceso instalado y al equipo capacitado.'
  },
  {
    n: 'B',
    t: 'Gerencia externa con costo variable',
    d: 'Acceso a experiencia gerencial senior sin la estructura fija de un Gerente RRHH interno.'
  },
  {
    n: 'C',
    t: 'Transformación digital aplicada',
    d: 'HRIS, ATS, firma digital, automatización y IA — implementadas con criterio operativo, no como moda.'
  },
  {
    n: 'D',
    t: 'Cumplimiento al día',
    d: 'Ley Karin, Ley 40 Horas, fiscalizaciones — operamos con la normativa vigente, no con la del año pasado.'
  }];

  return (
    <section className="diff-block">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="label">Por qué RH Gerencial</div>
            <h2>Cuatro razones <em>concretas</em></h2>
          </div>
          <p className="lede">
            Lo que nos distingue de una consultora tradicional o de un coach genérico — hechos, no eslóganes.
          </p>
        </div>
        <div className="diff-grid">
          {items.map((it) =>
          <div className="diff-item" key={it.n}>
              <div className="diff-letter">{it.n}</div>
              <h4>{it.t}</h4>
              <p>{it.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ====== CTA Contacto ======
function CTA({ bgVariant, bgSpeed, accentColor }) {
  return (
    <section id="contacto" className="cta-block">
      <div className="section-bg">
        <Background variant={bgVariant} speed={bgSpeed * 0.5} color={accentColor} />
      </div>
      <div className="container">
        <div className="cta-inner">
          <div className="cta-mark">
            <LogoCardinal size={420} color={accentColor} accent="#e8d4a0" />
          </div>
          <div className="label-mono" style={{ color: '#c9a961', marginBottom: 24 }}>Solicita tu diagnóstico inicial sin costo</div>
          <h2>Conoce el estado real<br />de tu gestión de personas.</h2>
          <div className="cta-actions">
            <a className="btn btn-primary" href="https://calendly.com/paolagonzalez-rhgerencial/30min" target="_blank" rel="noopener">
              Agendar reunión <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="https://wa.me/56978592310" target="_blank" rel="noopener">
              WhatsApp +56 9 7859 2310
            </a>
          </div>
          <div className="cta-direct">
            <a href="mailto:paolagonzalez@rhgerencial.cl">paolagonzalez@rhgerencial.cl</a>
          </div>
        </div>
      </div>
    </section>);

}

// ====== Footer ======
function Footer({ accentColor }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#f6f2e9' }}>
              <LogoMonoCompact size={36} color={accentColor} accent="#e8d4a0" />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d4b574' }}>RH Gerencial</div>
                <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(246,242,233,0.55)', marginTop: 4 }}>Gestión de Personas</div>
              </div>
            </div>
            <p className="desc">Consultoría senior en gestión de personas para PYMEs y empresas medianas en Chile y Perú. Implementación de procesos duros de RRHH, transformación digital y desarrollo organizacional.</p>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#servicios">Diagnóstico RRHH</a></li>
              <li><a href="#servicios">Auditoría Laboral</a></li>
              <li><a href="#servicios">Transformación Digital</a></li>
              <li><a href="#servicios">Cumplimiento Normativo</a></li>
              <li><a href="#servicios">Mentoría externa</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto directo</h5>
            <ul>
              <li><a href="mailto:paolagonzalez@rhgerencial.cl">paolagonzalez@rhgerencial.cl</a></li>
              <li><a href="https://wa.me/56978592310" target="_blank" rel="noopener">WhatsApp +56 9 7859 2310</a></li>
              <li><a href="https://calendly.com/paolagonzalez-rhgerencial/30min" target="_blank" rel="noopener">Agendar Calendly</a></li>
              <li><a href="https://www.linkedin.com/in/pao-gonzalez/" target="_blank" rel="noopener">LinkedIn ↗</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Mercados</h5>
            <ul>
              <li>Santiago · Chile</li>
              <li>Lima · Perú</li>
              <li style={{ marginTop: 14, opacity: 0.55 }}>Ingeniería · Telco</li>
              <li style={{ opacity: 0.55 }}>Retail · Start-ups</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 RH GERENCIAL · TODOS LOS DERECHOS RESERVADOS</div>
          <div>SANTIAGO · CHILE</div>
        </div>
      </div>
    </footer>);

}

// ====== Tweaks Panel ======
function RHTweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Fondo animado">
        <TweakRadio
          label="Tipo"
          value={tweaks.bgVariant}
          onChange={(v) => setTweak('bgVariant', v)}
          options={BG_OPTIONS.slice(0, 2)} />
        
        <TweakRadio
          label=""
          value={tweaks.bgVariant}
          onChange={(v) => setTweak('bgVariant', v)}
          options={BG_OPTIONS.slice(2)} />
        
        <TweakSlider
          label="Velocidad"
          min={0.2} max={2.5} step={0.1}
          value={tweaks.bgSpeed}
          onChange={(v) => setTweak('bgSpeed', v)} />
        
      </TweakSection>

      <TweakSection label="Tono dorado">
        <TweakColor
          label="Acento"
          value={tweaks.accentColor}
          onChange={(v) => setTweak('accentColor', v)}
          options={ACCENT_OPTIONS} />
        
      </TweakSection>

      <TweakSection label="Marca">
        <TweakToggle
          label="Mostrar bajada"
          value={tweaks.showTagline}
          onChange={(v) => setTweak('showTagline', v)} />
        
      </TweakSection>
    </TweaksPanel>);

}

// ====== WhatsApp floating button ======
function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/56978592310?text=Hola%2C%20me%20interesa%20conversar%20sobre%20los%20servicios%20de%20asesor%C3%ADa%20en%20gesti%C3%B3n%20de%20Recursos%20Humanos"
      target="_blank"
      rel="noopener"
      aria-label="Conversar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.6 2.14 8.03L0 32l8.18-2.14A15.91 15.91 0 0 0 16 32c8.84 0 16-7.16 16-16S24.84 0 16 0zm0 29.18c-2.5 0-4.96-.66-7.12-1.92l-.5-.3-5.04 1.32 1.34-4.92-.32-.52A13.16 13.16 0 0 1 2.82 16C2.82 8.74 8.74 2.82 16 2.82S29.18 8.74 29.18 16 23.26 29.18 16 29.18zm7.6-9.84c-.42-.2-2.46-1.22-2.84-1.36-.38-.14-.66-.2-.94.2-.28.42-1.08 1.36-1.32 1.64-.24.28-.48.32-.9.1-.42-.2-1.78-.66-3.4-2.1-1.26-1.12-2.1-2.5-2.34-2.92-.24-.42-.02-.66.18-.86.18-.18.42-.48.62-.72.2-.24.28-.42.42-.7.14-.28.06-.52-.04-.72-.1-.2-.94-2.26-1.28-3.1-.34-.82-.68-.7-.94-.72h-.8c-.28 0-.72.1-1.1.52-.38.42-1.44 1.4-1.44 3.42 0 2 1.46 3.94 1.66 4.22.2.28 2.86 4.36 6.94 6.12.98.42 1.74.68 2.34.86.98.32 1.88.28 2.58.18.78-.12 2.46-1 2.8-1.96.34-.96.34-1.78.24-1.96-.1-.18-.38-.28-.8-.48z"/>
      </svg>
      <span className="wa-tooltip">Hablemos por WhatsApp</span>
    </a>
  );
}

// ====== Root ======
function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);
  const props = {
    bgVariant: tweaks.bgVariant,
    bgSpeed: tweaks.bgSpeed,
    accentColor: tweaks.accentColor,
    showTagline: tweaks.showTagline
  };
  return (
    <div className="page">
      <Nav {...props} />
      <Hero {...props} />
      <TaglineBand accentColor={tweaks.accentColor} />
      <Services />
      <Diff />
      <Process {...props} />
      <Industries />
      <About {...props} />
      <CTA {...props} />
      <Footer {...props} />
      <WhatsAppFloat />
      <RHTweaks tweaks={tweaks} setTweak={setTweak} />
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);