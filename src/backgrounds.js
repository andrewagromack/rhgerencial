/* Backgrounds.jsx v2 — Fondos técnicos para RH Gerencial
   Cero "aurora suave". Vocabulario: grid de ingeniería, flujos de datos,
   stack de capas, circuito. Profesional + innovador + serio.

   1. Grid       — malla técnica con nodos pulsantes (sistemas)
   2. Circuit    — líneas de datos corriendo entre nodos (transformación digital)
   3. Stack      — barras horizontales escalonadas (capas / implementación)
   4. Beam       — rayos verticales finos desplazándose (precisión / flujo)
*/

const {
  useEffect: useEffect2,
  useRef: useRef2
} = React;

// ====== 1. GRID — Malla técnica precisa ======
function BGGrid({
  speed = 1,
  color = '#c9a961'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-grid"
  }, /*#__PURE__*/React.createElement("style", null, `
        .bg-grid {
          position: absolute; inset: 0; overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 40%, rgba(28, 47, 96, 0.45), transparent 70%),
            #050d24;
        }
        .bg-grid .grid-svg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.55; }
        .bg-grid .scan {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, ${color} 50%, transparent);
          opacity: 0.4;
          animation: scan-y ${10 / speed}s linear infinite;
        }
        .bg-grid .node {
          position: absolute; width: 6px; height: 6px;
          background: ${color}; border-radius: 1px;
          box-shadow: 0 0 12px ${color};
          animation: node-pulse ${4 / speed}s ease-in-out infinite;
        }
        @keyframes scan-y { 0% { top: 0; } 100% { top: 100%; } }
        @keyframes node-pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.4); }
        }
      `), /*#__PURE__*/React.createElement("svg", {
    className: "grid-svg",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "bg-grid-p",
    width: "50",
    height: "50",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50 0 L 0 0 0 50",
    fill: "none",
    stroke: color,
    strokeWidth: "0.5",
    opacity: "0.5"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "bg-grid-mask",
    cx: "50%",
    cy: "50%",
    r: "65%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#000",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#000",
    stopOpacity: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#bg-grid-p)"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#bg-grid-mask)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "scan"
  }), [{
    top: '20%',
    left: '15%',
    delay: 0
  }, {
    top: '35%',
    left: '78%',
    delay: 0.6
  }, {
    top: '62%',
    left: '22%',
    delay: 1.2
  }, {
    top: '48%',
    left: '55%',
    delay: 1.8
  }, {
    top: '78%',
    left: '70%',
    delay: 2.4
  }, {
    top: '12%',
    left: '60%',
    delay: 0.3
  }].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "node",
    style: {
      top: n.top,
      left: n.left,
      animationDelay: `${n.delay}s`
    }
  })));
}

// ====== 2. CIRCUIT — Flujos de datos entre nodos ======
function BGCircuit({
  speed = 1,
  color = '#c9a961'
}) {
  const ref = useRef2(null);
  useEffect2(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf,
      w,
      h,
      nodes = [],
      pulses = [];
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // grid de nodos
      nodes = [];
      const cols = Math.ceil(w / 140);
      const rows = Math.ceil(h / 140);
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          if (Math.random() < 0.55) {
            nodes.push({
              x: i * w / cols + (Math.random() - 0.5) * 40,
              y: j * h / rows + (Math.random() - 0.5) * 40,
              size: Math.random() < 0.15 ? 3 : 1.4
            });
          }
        }
      }
      // conexiones precomputadas (Manhattan-style)
      pulses = [];
    };
    resize();
    window.addEventListener('resize', resize);
    const emitPulse = () => {
      if (nodes.length < 2) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      // buscar nodo cercano (no diagonal demasiado)
      const candidates = nodes.filter(n => n !== a).map(n => ({
        n,
        d: Math.hypot(n.x - a.x, n.y - a.y)
      })).filter(c => c.d < 260 && c.d > 60).sort((p, q) => p.d - q.d).slice(0, 5);
      if (!candidates.length) return;
      const b = candidates[Math.floor(Math.random() * candidates.length)].n;
      pulses.push({
        a,
        b,
        t: 0,
        life: 90 / speed
      });
    };
    let lastEmit = 0;
    const tick = ts => {
      ctx.clearRect(0, 0, w, h);
      // líneas estructurales (estáticas, opacidad baja)
      ctx.strokeStyle = `rgba(${r},${g},${b},0.08)`;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b2 = nodes[j];
          const d = Math.hypot(a.x - b2.x, a.y - b2.y);
          if (d < 160) {
            ctx.beginPath();
            // Manhattan: vertical primero, después horizontal (look de circuito)
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(a.x, b2.y);
            ctx.lineTo(b2.x, b2.y);
            ctx.stroke();
          }
        }
      }
      // nodos
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${r},${g},${b},${n.size > 2 ? 0.85 : 0.4})`;
        ctx.fillRect(n.x - n.size / 2, n.y - n.size / 2, n.size, n.size);
      }
      // pulsos
      if (!lastEmit || ts - lastEmit > 350 / speed) {
        emitPulse();
        lastEmit = ts;
      }
      pulses = pulses.filter(p => p.t < p.life);
      for (const p of pulses) {
        p.t += 1;
        const k = p.t / p.life;
        const mx = p.a.x,
          my = p.b.y; // codo manhattan
        let px, py;
        if (k < 0.5) {
          const kk = k * 2;
          px = p.a.x + (mx - p.a.x) * kk;
          py = p.a.y + (my - p.a.y) * kk;
        } else {
          const kk = (k - 0.5) * 2;
          px = mx + (p.b.x - mx) * kk;
          py = my + (p.b.y - my) * kk;
        }
        // trail
        ctx.strokeStyle = `rgba(${r},${g},${b},0.7)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(p.a.x, p.a.y);
        if (k < 0.5) {
          ctx.lineTo(px, py);
        } else {
          ctx.lineTo(mx, my);
          ctx.lineTo(px, py);
        }
        ctx.stroke();
        // head
        ctx.fillStyle = `rgba(${r + 40},${g + 30},${b + 20},1)`;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        // glow
        ctx.fillStyle = `rgba(${r},${g},${b},0.25)`;
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [speed, color]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse at 50% 40%, #0a1838, #050d24 70%)'
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    style: {
      display: 'block'
    }
  }));
}

// ====== 3. STACK — Barras horizontales escalonadas ======
function BGStack({
  speed = 1,
  color = '#c9a961'
}) {
  // 12 barras horizontales con offset, llenándose desde la izquierda en bucle
  const bars = Array.from({
    length: 14
  }, (_, i) => ({
    top: i / 14 * 100,
    delay: i * 0.4 / speed,
    width: 40 + i % 3 * 20,
    opacity: 0.25 + i % 4 * 0.12
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-stack"
  }, /*#__PURE__*/React.createElement("style", null, `
        .bg-stack {
          position: absolute; inset: 0; overflow: hidden;
          background:
            linear-gradient(180deg, #050d24, #0a1838 60%, #050d24),
            #050d24;
        }
        .bg-stack .bar {
          position: absolute; left: 0; height: 14px;
          background: linear-gradient(90deg, transparent, ${color}, transparent);
          transform-origin: left;
          animation: stack-sweep ${8 / speed}s linear infinite;
        }
        .bg-stack .rule {
          position: absolute; left: 0; right: 0; height: 1px;
          background: ${color};
          opacity: 0.06;
        }
        .bg-stack .tick {
          position: absolute; width: 1px; height: 100%;
          background: ${color};
          opacity: 0.05;
        }
        @keyframes stack-sweep {
          0%   { transform: translateX(-100%) scaleX(1); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(120%) scaleX(1); opacity: 0; }
        }
      `), Array.from({
    length: 8
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: `r${i}`,
    className: "rule",
    style: {
      top: `${(i + 1) * 11}%`
    }
  })), Array.from({
    length: 10
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: `t${i}`,
    className: "tick",
    style: {
      left: `${(i + 1) * 9}%`
    }
  })), bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bar",
    style: {
      top: `${b.top}%`,
      width: `${b.width}%`,
      opacity: b.opacity,
      animationDelay: `${b.delay}s`
    }
  })));
}

// ====== 4. BEAM — Rayos verticales finos ======
function BGBeam({
  speed = 1,
  color = '#c9a961'
}) {
  const beams = Array.from({
    length: 14
  }, (_, i) => ({
    left: i / 14 * 100 + (Math.random() * 4 - 2),
    delay: i * 0.3 / speed,
    duration: (6 + i % 5) / speed,
    height: 30 + i % 4 * 15
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-beam"
  }, /*#__PURE__*/React.createElement("style", null, `
        .bg-beam {
          position: absolute; inset: 0; overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 50%, rgba(28, 47, 96, 0.5), transparent 70%),
            #050d24;
        }
        .bg-beam .col {
          position: absolute; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(201,169,97,0.08), transparent);
        }
        .bg-beam .beam {
          position: absolute;
          width: 1px;
          background: linear-gradient(180deg, transparent, ${color}, transparent);
          animation: beam-fall linear infinite;
        }
        .bg-beam .hline {
          position: absolute; left: 0; right: 0; height: 1px;
          background: ${color};
          opacity: 0.04;
        }
        @keyframes beam-fall {
          0%   { top: -30%; opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `), Array.from({
    length: 18
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: `c${i}`,
    className: "col",
    style: {
      left: `${i / 18 * 100}%`
    }
  })), Array.from({
    length: 6
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: `h${i}`,
    className: "hline",
    style: {
      top: `${(i + 1) * 14}%`
    }
  })), beams.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "beam",
    style: {
      left: `${b.left}%`,
      height: `${b.height}%`,
      animationDelay: `${b.delay}s`,
      animationDuration: `${b.duration}s`
    }
  })));
}

// ====== Selector ======
function Background({
  variant,
  speed,
  color
}) {
  const map = {
    grid: BGGrid,
    circuit: BGCircuit,
    stack: BGStack,
    beam: BGBeam
  };
  const Comp = map[variant] || BGCircuit;
  return /*#__PURE__*/React.createElement(Comp, {
    speed: speed,
    color: color
  });
}
window.Background = Background;
