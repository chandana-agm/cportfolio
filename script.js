// ===================================================================
// COMPUTER SCIENCE & DESIGN (CSD) JAVASCRIPT ENGINE
// Data strictly from K Chandana's Official Resume
// ===================================================================

// Project Data from Resume
const projectsData = {
  arecanut: {
    id: "arecanut",
    title: "ARECANUT AI : AI-Powered Arecanut Disease Detection System",
    category: "AI & Computer Vision",
    deployment: "Web Application",
    badge: "Computer Vision & Diagnostics",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    summary: "AI-powered agricultural disease detection system providing 9-class arecanut disease classification with confidence-aware predictions, Grad-CAM visual explainability, and environmental field monitoring.",
    csdAspects: {
      cs: "PyTorch, MobileNetV3-Small CNN, Grad-CAM activation mapping, OpenCV preprocessing, Weather/Prediction REST APIs, SQLite/Firebase backend",
      design: "Confidence-aware diagnosis UI, visual disease heatmap overlays, multilingual voice-assisted guidance for accessible field usability"
    },
    techStack: {
      "Frontend": "React, Vite, Tailwind CSS",
      "Backend": "Python, Flask, REST APIs",
      "AI / ML": "PyTorch, MobileNetV3-Small, Deep Learning, Image Classification, Grad-CAM",
      "Data Processing": "OpenCV, Image Preprocessing, Image Quality Analysis",
      "Database": "SQLite / Firebase",
      "APIs": "Weather API, Prediction APIs",
      "Accessibility": "Multilingual Support, Voice Assistance"
    },
    features: [
      "Provides 9-class arecanut disease detection with confidence-aware predictions",
      "Automated image-quality checking prior to inference for high accuracy",
      "Grad-CAM explainability pinpointing specific diseased regions to farmers",
      "Real-time weather intelligence and localized field monitoring",
      "Comprehensive disease information guide and historical farm observations",
      "Multilingual support and hands-free voice-assisted guidance"
    ],
    links: [
      { label: "View Source on GitHub", url: "https://github.com/chandana-agm", icon: "fab fa-github" }
    ]
  },
  sarkari: {
    id: "sarkari",
    title: "Sarkari Sahayak Bot : Advanced NLP Prototype",
    category: "Generative AI & NLP",
    deployment: "Full-Stack Web Application",
    badge: "🏆 1st Place – VSM Nippani Hackathon",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    summary: "Multilingual conversational assistant streamlining public governance assistance with PDF semantic search, automated eligibility matching, and Whisper voice interaction.",
    csdAspects: {
      cs: "OpenAI API, LangChain RAG pipeline, pgvector vector search, pypdf text chunking, Whisper STT, Node.js/Express REST backend, Supabase/MongoDB",
      design: "Inclusive multilingual voice UX (4 languages: English, Hindi, Kannada, Marathi), Framer Motion interactive cards, Chart.js visual scheme analytics"
    },
    techStack: {
      "Frontend": "React, Vite, Tailwind CSS, Framer Motion, Chart.js",
      "Backend": "Node.js, Express.js, REST APIs",
      "AI / NLP": "OpenAI API, LangChain, RAG, Text Embeddings",
      "Document Processing": "Python, pypdf, PDF Parsing",
      "Vector Search": "pgvector, Semantic Search, Vector Embeddings",
      "Database": "MongoDB, Supabase",
      "Voice AI": "Whisper, Speech-to-Text, Multilingual Voice Interaction",
      "Languages": "English, Hindi, Kannada, Marathi"
    },
    features: [
      "Government Scheme Search and automated eligibility discovery",
      "PDF-Based Knowledge Retrieval across complex government circulars",
      "Citizen Eligibility Assistance and guided questionnaire walkthrough",
      "Multilingual Voice AI powered by Whisper Speech-to-Text",
      "Context-Aware Responses using pgvector semantic search",
      "Contextual scheme recommendations tailored to citizen profiles"
    ],
    achievement: "1st Place Winner at VSM Nippani Hackathon",
    links: [
      { label: "View Source on GitHub", url: "https://github.com/chandana-agm", icon: "fab fa-github" }
    ]
  },
  medico: {
    id: "medico",
    title: "Medico AI : Drug Demand Forecasting",
    category: "Machine Learning & Analytics",
    deployment: "Flask-Based Full-Stack Application",
    badge: "🥈 2nd Runner-Up – REC Hulkoti National Hackathon",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    summary: "Predictive intelligence time-series engine forecasting pharmaceutical drug demand, preventing critical hospital stockouts and optimizing procurement.",
    csdAspects: {
      cs: "Multi-model ensemble (LSTM recurrent neural networks, ARIMA statistical models, XGBoost gradient boosting), time-series feature engineering, SQLite/MySQL",
      design: "Healthcare decision-support dashboards, intuitive visual demand trajectory curves, clear inventory threshold indicators"
    },
    techStack: {
      "Frontend": "HTML, CSS, JavaScript",
      "Backend": "Python, Flask, REST APIs",
      "Machine Learning": "LSTM, ARIMA, XGBoost, Time-Series Forecasting",
      "Data Science": "Pandas, NumPy, Scikit-learn",
      "Data Processing": "Data Cleaning, EDA, Feature Engineering, Time-Series Preprocessing",
      "Database": "SQLite / MySQL"
    },
    pipeline: "Historical Data → Preprocessing → Feature Engineering → ML Forecasting → Demand Prediction",
    features: [
      "Drug Demand Prediction using hybrid LSTM & ARIMA time-series models",
      "Pharmaceutical Inventory Forecasting across multiple drug categories",
      "Clinical Resource Estimation and demand volatility analysis",
      "Data Visualization and clinical Decision Support tools"
    ],
    achievement: "2nd Runner-Up at REC Hulkoti National Hackathon",
    links: [
      { label: "View Source on GitHub", url: "https://github.com/chandana-agm", icon: "fab fa-github" }
    ]
  },
  icecream: {
    id: "icecream",
    title: "Ice Cream Paradise – Full-Stack Food Ordering Platform",
    category: "Full-Stack Web Systems",
    deployment: "Netlify (Frontend), Render (Backend)",
    badge: "🚀 Live Production Web App",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    summary: "Production-ready e-commerce food ordering platform featuring 100+ menu items, 26 flavors, Razorpay payments, real-time kitchen & delivery dashboards, and role-based auth.",
    csdAspects: {
      cs: "FastAPI asynchronous REST microservices, MongoDB schema design, Razorpay webhook/payment pipeline, role-based JWT auth & session management",
      design: "Delightful category-based menu exploration, persistent shopping cart, friction-free checkout UX, operational real-time status trackers"
    },
    techStack: {
      "Frontend": "React, Vite, JavaScript, CSS",
      "Backend": "Python, FastAPI, REST APIs",
      "Database": "MongoDB",
      "Authentication": "Role-Based Authentication, Session Management",
      "Payment Gateway": "Razorpay",
      "API Layer": "Axios, RESTful APIs"
    },
    adminOps: {
      "Admin Portal": "Admin Dashboard, Menu Management, Order Management, Customer Management",
      "Operations Portals": "Kitchen Dashboard, Delivery Dashboard, Order Status Tracking"
    },
    features: [
      "100+ Menu Items across 26 Ice-Cream Flavours with Category-Based Browsing",
      "Persistent Cart, Instant Checkout, and secure Razorpay Online Payment",
      "Dual Operational Hubs: Kitchen Dashboard and Delivery Dashboard",
      "Live Order Status Tracking and customer feedback workflows"
    ],
    liveUrl: "https://icecreamparadise.com/",
    links: [
      { label: "Visit Live Website", url: "https://icecreamparadise.com/", icon: "fas fa-external-link-alt" },
      { label: "View Source on GitHub", url: "https://github.com/chandana-agm", icon: "fab fa-github" }
    ]
  }
};

// ===================================================================
// AUDIO SYNTHESIZER (Web Audio API)
// ===================================================================
let audioCtx = null;
let soundEnabled = false;

function initAudio() {
  const audioBtn = document.getElementById('audio-toggle');
  const audioIcon = document.getElementById('audio-icon');

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.playSfx = function(type = 'click') {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch(e) { }
  };

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      const eqEl = document.getElementById('eq-indicator');
      if (soundEnabled) {
        getAudioContext();
        audioIcon.className = 'fas fa-volume-up text-xs text-emerald-400';
        if (eqEl) eqEl.classList.add('eq-active');
        showToast('Cyber SFX Audio: Enabled');
        window.playSfx('success');
      } else {
        audioIcon.className = 'fas fa-volume-mute text-xs text-slate-400';
        if (eqEl) eqEl.classList.remove('eq-active');
        showToast('Cyber SFX Audio: Muted');
      }
    });
  }
}

// ===================================================================
// LIVE KOPPAL CLOCK & SYSTEM LATENCY
// ===================================================================
function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  const pingEl = document.getElementById('live-ping');

  function update() {
    const now = new Date();
    // Format IST
    const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const istTime = now.toLocaleTimeString('en-GB', options);
    if (clockEl) clockEl.textContent = `KOPPAL, IN: ${istTime} IST`;
    if (pingEl) pingEl.textContent = `LATENCY: ${Math.floor(Math.random() * 8 + 18)}ms`;
  }
  setInterval(update, 1000);
  update();
}

// ===================================================================
// ===================================================================
// ULTRA-HIGH-LEVEL 3D CYBER COMPUTER SCIENCE UNIVERSE
// Quantum Geodesic Singularity Core, 3D Undulating Digital Matrix Wave,
// 3D Synaptic Lattice, Dynamic Laser Proximity & Floating Code Runes
// ===================================================================
function initCsDept3dBackground() {
  const canvas = document.getElementById('cs-dept-3d-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let cx = 0;
  let cy = 0;
  let dpr = 1;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = width / 2;
    cy = height / 2;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Camera & Interaction Physics
  let rotX = 0.08;
  let rotY = 0;
  let targetRotX = 0.05;
  let targetRotY = 0;
  let scrollOffset = 0;
  let targetScrollOffset = 0;
  let mouse = { x: -9999, y: -9999, isHovering: false };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isHovering = true;
    targetRotY = ((e.clientX - cx) / cx) * 0.42;
    targetRotX = -((e.clientY - cy) / cy) * 0.32;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.isHovering = false;
    mouse.x = -9999;
    mouse.y = -9999;
    targetRotY = 0;
    targetRotX = 0.05;
  });

  window.addEventListener('scroll', () => {
    targetScrollOffset = window.scrollY * 0.0006;
  }, { passive: true });

  // 1. Quantum Geodesic Core (3D Icosahedron Singularity Vertices)
  const phiConst = (1 + Math.sqrt(5)) / 2;
  const rawCoreVertices = [
    [-1, phiConst, 0], [1, phiConst, 0], [-1, -phiConst, 0], [1, -phiConst, 0],
    [0, -1, phiConst], [0, 1, phiConst], [0, -1, -phiConst], [0, 1, -phiConst],
    [phiConst, 0, -1], [phiConst, 0, 1], [-phiConst, 0, -1], [-phiConst, 0, 1]
  ];
  const coreRadius = 130;
  const coreNodes = rawCoreVertices.map(([vx, vy, vz]) => {
    const len = Math.sqrt(vx * vx + vy * vy + vz * vz);
    return {
      x: (vx / len) * coreRadius,
      y: (vy / len) * coreRadius - 25,
      z: (vz / len) * coreRadius,
      projX: 0,
      projY: 0,
      projScale: 0
    };
  });

  // 2. 3D Undulating Digital Matrix Horizon Grid (Cyber Wave Plane)
  const WAVE_COLS = 22;
  const WAVE_ROWS = 14;
  const wavePoints = [];
  const gridSpacingX = 65;
  const gridSpacingZ = 60;
  const waveStartX = -((WAVE_COLS - 1) * gridSpacingX) / 2;
  const waveStartZ = -180;

  for (let r = 0; r < WAVE_ROWS; r++) {
    for (let c = 0; c < WAVE_COLS; c++) {
      wavePoints.push({
        baseX: waveStartX + c * gridSpacingX,
        baseY: 220,
        baseZ: waveStartZ + r * gridSpacingZ,
        col: c,
        row: r,
        projX: 0,
        projY: 0,
        projScale: 0
      });
    }
  }

  // 3. 3D Distributed CS Lattice Nodes
  const NODE_COUNT = 85;
  const nodes = [];
  const palette = [
    { type: 'core', rgb: '0, 245, 255', radius: 3.2 },       // Electric Cyan
    { type: 'neural', rgb: '129, 140, 248', radius: 2.5 },   // Indigo Neural Node
    { type: 'router', rgb: '52, 211, 153', radius: 2.9 },    // Emerald Router Node
    { type: 'data', rgb: '251, 191, 36', radius: 2.2 },      // Amber Cache Node
    { type: 'token', rgb: '168, 85, 247', radius: 2.5 }      // Violet Quantum Node
  ];

  for (let i = 0; i < NODE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const radiusDist = 250 + Math.random() * 390;
    const p = palette[Math.floor(Math.random() * palette.length)];

    nodes.push({
      x: radiusDist * Math.sin(phi) * Math.cos(theta),
      y: (radiusDist * Math.sin(phi) * Math.sin(theta)) * 0.65 - 15,
      z: radiusDist * Math.cos(phi),
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      vz: (Math.random() - 0.5) * 0.22,
      radius: p.radius,
      rgb: p.rgb,
      type: p.type,
      projX: 0,
      projY: 0,
      projScale: 0
    });
  }

  // 4. Floating 3D CS Code Tokens & Math Runes
  const tokenList = [
    '{ }', '</>', '01', '0x2F', 'def', 'λ', 'const', 'AI/ML',
    'O(1)', 'O(n log n)', 'ptr*', 'async', 'return', '1010',
    'git', 'NaN', 'REST', 'void', 'int main()', 'CSD 8.0', 'DAG',
    'while(1)', 'SELECT *', '0xFF', 'True', 'null', 'npm run', 'Graph(V,E)'
  ];
  const codeTokens = [];
  const TOKEN_COUNT = 24;
  for (let i = 0; i < TOKEN_COUNT; i++) {
    codeTokens.push({
      text: tokenList[i % tokenList.length],
      x: (Math.random() - 0.5) * 920,
      y: (Math.random() - 0.5) * 720,
      z: (Math.random() - 0.5) * 620,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      vz: (Math.random() - 0.5) * 0.18,
      rgb: i % 2 === 0 ? '0, 245, 255' : (i % 3 === 0 ? '52, 211, 153' : '165, 180, 252'),
      baseSize: 11 + Math.random() * 4
    });
  }

  // 5. Synaptic Data Packets Traveling on 3D Edges
  const packets = [];
  const MAX_PACKETS = 16;

  function spawnPacket() {
    if (packets.length >= MAX_PACKETS) return;
    const fromIdx = Math.floor(Math.random() * nodes.length);
    let bestDist = Infinity;
    let toIdx = -1;
    const a = nodes[fromIdx];
    for (let j = 0; j < nodes.length; j++) {
      if (j === fromIdx) continue;
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dz = a.z - b.z;
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (d < 180 && d < bestDist) {
        bestDist = d;
        toIdx = j;
      }
    }
    if (toIdx !== -1) {
      packets.push({
        from: fromIdx,
        to: toIdx,
        progress: 0,
        speed: 0.013 + Math.random() * 0.019,
        color: Math.random() > 0.5 ? '#00f5ff' : '#34d399'
      });
    }
  }

  // 3D Perspective Projection Constants
  const FOV = 490;
  const CAMERA_Z = 660;
  let angle = 0;
  let waveTime = 0;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Smooth camera damping & rotation
    rotX += (targetRotX - rotX) * 0.04;
    rotY += (targetRotY - rotY) * 0.04;
    scrollOffset += (targetScrollOffset - scrollOffset) * 0.05;

    angle += 0.0016;
    waveTime += 0.018;

    const currentAngleY = angle + rotY;
    const currentAngleX = rotX + scrollOffset;

    const cosY = Math.cos(currentAngleY);
    const sinY = Math.sin(currentAngleY);
    const cosX = Math.cos(currentAngleX);
    const sinX = Math.sin(currentAngleX);

    // LAYER 1: Deep Cyberspace Radial Nebula Glow
    const nebulaGrad = ctx.createRadialGradient(cx, cy * 0.88, 30, cx, cy, Math.max(width, height) * 0.75);
    nebulaGrad.addColorStop(0, 'rgba(15, 23, 62, 0.42)');
    nebulaGrad.addColorStop(0.45, 'rgba(8, 14, 32, 0.22)');
    nebulaGrad.addColorStop(1, 'rgba(3, 7, 18, 0)');
    ctx.fillStyle = nebulaGrad;
    ctx.fillRect(0, 0, width, height);

    // LAYER 2: 3D Undulating Digital Matrix Wave Horizon Surface
    for (let i = 0; i < wavePoints.length; i++) {
      const wp = wavePoints[i];
      // Wave equation
      const wy = wp.baseY + Math.sin(wp.baseX * 0.006 + waveTime * 1.5) * Math.cos(wp.baseZ * 0.005 + waveTime * 1.2) * 36;
      
      const x1 = wp.baseX * cosY + wp.baseZ * sinY;
      const z1 = -wp.baseX * sinY + wp.baseZ * cosY;
      const y1 = wy * cosX - z1 * sinX;
      const z2 = wy * sinX + z1 * cosX;

      const zWorld = z2 + CAMERA_Z;
      if (zWorld <= 20) {
        wp.projScale = 0;
        continue;
      }

      const scale = FOV / zWorld;
      wp.projX = cx + x1 * scale;
      wp.projY = cy + y1 * scale;
      wp.projScale = scale;
    }

    // Draw Cyber Horizon Wave Mesh Lines
    ctx.lineWidth = 0.8;
    for (let r = 0; r < WAVE_ROWS; r++) {
      for (let c = 0; c < WAVE_COLS; c++) {
        const idx = r * WAVE_COLS + c;
        const pCurrent = wavePoints[idx];
        if (pCurrent.projScale <= 0) continue;

        // Line to right neighbor
        if (c < WAVE_COLS - 1) {
          const pRight = wavePoints[idx + 1];
          if (pRight.projScale > 0) {
            const alpha = Math.min(0.24, pCurrent.projScale * 0.35);
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(pCurrent.projX, pCurrent.projY);
            ctx.lineTo(pRight.projX, pRight.projY);
            ctx.stroke();
          }
        }

        // Line to bottom neighbor
        if (r < WAVE_ROWS - 1) {
          const pBottom = wavePoints[idx + WAVE_COLS];
          if (pBottom.projScale > 0) {
            const alpha = Math.min(0.2, pCurrent.projScale * 0.3);
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(pCurrent.projX, pCurrent.projY);
            ctx.lineTo(pBottom.projX, pBottom.projY);
            ctx.stroke();
          }
        }

        // Glowing particle bead at wave crest
        if (r % 2 === 0 && c % 2 === 0) {
          const pRadius = Math.max(0.8, 1.8 * pCurrent.projScale);
          ctx.beginPath();
          ctx.arc(pCurrent.projX, pCurrent.projY, pRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 245, 255, ${(pCurrent.projScale * 0.45).toFixed(3)})`;
          ctx.fill();
        }
      }
    }

    // LAYER 3: 3D Rotating Quantum Geodesic Singularity Core
    const coreRotAngle = angle * 2.2;
    const cCos = Math.cos(coreRotAngle);
    const cSin = Math.sin(coreRotAngle);

    for (let i = 0; i < coreNodes.length; i++) {
      const cn = coreNodes[i];
      // Local spin
      const lx = cn.x * cCos + cn.z * cSin;
      const lz = -cn.x * cSin + cn.z * cCos;
      const ly = cn.y;

      // Camera rotation
      const x1 = lx * cosY + lz * sinY;
      const z1 = -lx * sinY + lz * cosY;
      const y1 = ly * cosX - z1 * sinX;
      const z2 = ly * sinX + z1 * cosX;

      const zWorld = z2 + CAMERA_Z;
      if (zWorld <= 20) {
        cn.projScale = 0;
        continue;
      }
      const scale = FOV / zWorld;
      cn.projX = cx + x1 * scale;
      cn.projY = cy + y1 * scale;
      cn.projScale = scale;
    }

    // Draw Geodesic Core Edges with Intense Glow
    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#00f5ff';
    for (let i = 0; i < coreNodes.length; i++) {
      const a = coreNodes[i];
      if (a.projScale <= 0) continue;
      for (let j = i + 1; j < coreNodes.length; j++) {
        const b = coreNodes[j];
        if (b.projScale <= 0) continue;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 155) {
          ctx.beginPath();
          ctx.moveTo(a.projX, a.projY);
          ctx.lineTo(b.projX, b.projY);
          ctx.strokeStyle = `rgba(0, 245, 255, ${(0.32 * a.projScale).toFixed(3)})`;
          ctx.lineWidth = 1.2 * a.projScale;
          ctx.stroke();
        }
      }
    }

    // Core Center Singularity Pulsing Ring
    const corePulse = Math.sin(waveTime * 3) * 6;
    ctx.beginPath();
    ctx.arc(cx, cy - 20, 22 + corePulse, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy - 20, 10 + corePulse * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 245, 255, 0.55)';
    ctx.fill();
    ctx.restore();

    // LAYER 4: Project & Update 3D CS Lattice Nodes
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      n.z += n.vz;

      // Soft bounding sphere
      const distSq = n.x * n.x + n.y * n.y + n.z * n.z;
      if (distSq > 500 * 500) {
        n.vx *= -1;
        n.vy *= -1;
        n.vz *= -1;
      }

      // Rotate around Y then X
      const x1 = n.x * cosY + n.z * sinY;
      const z1 = -n.x * sinY + n.z * cosY;
      const y1 = n.y * cosX - z1 * sinX;
      const z2 = n.y * sinX + z1 * cosX;

      const zWorld = z2 + CAMERA_Z;
      if (zWorld <= 20) {
        n.projScale = 0;
        continue;
      }

      const scale = FOV / zWorld;
      n.projX = cx + x1 * scale;
      n.projY = cy + y1 * scale;
      n.projScale = scale;
    }

    // Draw 3D Edges (Graph Theory Connections)
    const MAX_EDGE_DIST = 160;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (a.projScale <= 0) continue;

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        if (b.projScale <= 0) continue;

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        const d3d = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (d3d < MAX_EDGE_DIST) {
          const depthAlpha = Math.min(a.projScale, b.projScale) * 1.25;
          const proximity = 1 - d3d / MAX_EDGE_DIST;
          const alpha = proximity * 0.22 * depthAlpha;

          if (alpha > 0.015) {
            ctx.beginPath();
            ctx.moveTo(a.projX, a.projY);
            ctx.lineTo(b.projX, b.projY);
            ctx.strokeStyle = `rgba(${a.rgb}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = Math.max(0.6, 1.2 * a.projScale);
            ctx.stroke();
          }
        }
      }
    }

    // Spawn & Animate Synaptic Data Packets
    if (Math.random() < 0.07) spawnPacket();

    for (let pIdx = packets.length - 1; pIdx >= 0; pIdx--) {
      const pkt = packets[pIdx];
      pkt.progress += pkt.speed;

      if (pkt.progress >= 1) {
        packets.splice(pIdx, 1);
        continue;
      }

      const a = nodes[pkt.from];
      const b = nodes[pkt.to];
      if (!a || !b || a.projScale <= 0 || b.projScale <= 0) {
        packets.splice(pIdx, 1);
        continue;
      }

      const px = a.projX + (b.projX - a.projX) * pkt.progress;
      const py = a.projY + (b.projY - a.projY) * pkt.progress;
      const pScale = a.projScale + (b.projScale - a.projScale) * pkt.progress;
      const pRadius = Math.max(1.5, 3.8 * pScale);

      ctx.beginPath();
      ctx.arc(px, py, pRadius, 0, Math.PI * 2);
      ctx.fillStyle = pkt.color;
      ctx.shadowColor = pkt.color;
      ctx.shadowBlur = 9;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Draw 3D Nodes & Interactive Cursor Laser Snapping
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.projScale <= 0) continue;

      let r = Math.max(1.2, n.radius * n.projScale);
      let alpha = Math.min(0.85, 0.35 + n.projScale * 0.5);

      // Check mouse proximity shockwave
      if (mouse.isHovering) {
        const mdx = n.projX - mouse.x;
        const mdy = n.projY - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 140) {
          const prox = 1 - mdist / 140;
          r += prox * 2.8;
          alpha = Math.min(1.0, alpha + prox * 0.45);

          // Connecting dynamic laser beam from node to cursor
          ctx.beginPath();
          ctx.moveTo(n.projX, n.projY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 245, 255, ${(prox * 0.38).toFixed(3)})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();

          // Outer shockwave halo ring
          ctx.beginPath();
          ctx.arc(n.projX, n.projY, r * 2.6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 245, 255, ${(prox * 0.45).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(n.projX, n.projY, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.rgb}, ${alpha.toFixed(3)})`;
      ctx.fill();

      // Outer orbit glow ring for core & router nodes
      if (n.type === 'core' || n.type === 'router') {
        ctx.beginPath();
        ctx.arc(n.projX, n.projY, r * 2.2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${n.rgb}, ${(alpha * 0.3).toFixed(3)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    // LAYER 5: Draw Floating 3D CS Code Tokens & Math Runes
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < codeTokens.length; i++) {
      const t = codeTokens[i];
      t.x += t.vx;
      t.y += t.vy;
      t.z += t.vz;

      // Soft bounding box for tokens
      if (t.x < -480 || t.x > 480) t.vx *= -1;
      if (t.y < -380 || t.y > 380) t.vy *= -1;
      if (t.z < -320 || t.z > 320) t.vz *= -1;

      // Rotate with camera
      const x1 = t.x * cosY + t.z * sinY;
      const z1 = -t.x * sinY + t.z * cosY;
      const y1 = t.y * cosX - z1 * sinX;
      const z2 = t.y * sinX + z1 * cosX;

      const zWorld = z2 + CAMERA_Z;
      if (zWorld <= 30) continue;

      const scale = FOV / zWorld;
      const sx = cx + x1 * scale;
      const sy = cy + y1 * scale;

      const fontSize = Math.max(8, Math.round(t.baseSize * scale));
      const tokenAlpha = Math.min(0.55, Math.max(0.12, scale * 0.6));

      ctx.font = `600 ${fontSize}px "JetBrains Mono", monospace`;
      ctx.fillStyle = `rgba(${t.rgb}, ${tokenAlpha.toFixed(3)})`;
      ctx.fillText(t.text, sx, sy);
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// ===================================================================
// SPOTLIGHT CURSOR TRACKING
// ===================================================================
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// ===================================================================
// DYNAMIC TYPING EFFECT
// ===================================================================
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    "Computer Science & Design Engineer",
    "AI / ML & Time-Series Developer",
    "NLP & Retrieval Systems Engineer",
    "Python Backend & REST API Architect",
    "Hackathon Winner (1st Place & Runner-Up)"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      typingElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ===================================================================
// REST API EXPLORER PLAYGROUND (High-Level CSD Feature)
// ===================================================================
function initApiExplorer() {
  const tabBtns = document.querySelectorAll('.api-tab-btn');
  const endpointUrl = document.getElementById('api-endpoint-url');
  const methodBadge = document.getElementById('api-method-badge');
  const reqBody = document.getElementById('api-request-body');
  const resStatus = document.getElementById('api-response-status');
  const resTime = document.getElementById('api-response-time');
  const resBody = document.getElementById('api-response-body');
  const runBtn = document.getElementById('api-execute-btn');

  const apiEndpoints = {
    arecanut: {
      method: "POST",
      url: "https://api.chandana.dev/v1/arecanut/diagnose",
      request: JSON.stringify({
        image_url: "s3://arecanut-records/leaf_batch_102.jpg",
        model: "MobileNetV3-Small",
        quality_filter: true,
        generate_gradcam: true,
        enable_weather_fusion: true,
        location: "Koppal"
      }, null, 2),
      response: {
        status: "200 OK",
        latency: "14ms",
        body: {
          prediction: "Kole Roga (Fruit Rot)",
          confidence_score: 0.9872,
          quality_validation: "PASS (Resolution: 1080p, Blur score: 0.03)",
          gradcam_overlay_url: "https://cdn.chandana.dev/heatmaps/areca_892.png",
          field_telemetry: { temperature_c: 28.4, relative_humidity: "78%" },
          agronomic_advisory: "Fungicidal application: 1% Bordeaux mixture recommended within 48h.",
          voice_guidance_available: true
        }
      }
    },
    sarkari: {
      method: "POST",
      url: "https://api.chandana.dev/v1/sarkari/rag/query",
      request: JSON.stringify({
        query: "Eligibility criteria for PM-Kisan and farmer assistance",
        language: "kn",
        voice_input: false,
        top_k: 3,
        vector_db: "pgvector"
      }, null, 2),
      response: {
        status: "200 OK",
        latency: "182ms",
        body: {
          matched_schemes: ["PM-Kisan Samman Nidhi", "Karnataka Raitha Siri"],
          similarity_score: 0.938,
          document_source: "official_karnataka_gazette_2024.pdf",
          synthesized_eligibility: "Small & marginal landholder families eligible for ₹6,000/year direct Aadhaar transfer.",
          supported_languages: ["en", "hi", "kn", "mr"],
          hackathon_award: "1st Place - VSM Nippani Hackathon"
        }
      }
    },
    medico: {
      method: "GET",
      url: "https://api.chandana.dev/v1/medico/forecast?drug_id=PARACET-500&horizon=90",
      request: "/* GET request - URL Parameters:\n * drug_id = PARACET-500\n * horizon_days = 90\n * model_ensemble = LSTM + ARIMA + XGBoost\n */",
      response: {
        status: "200 OK",
        latency: "28ms",
        body: {
          drug_sku: "PARACET-500",
          model_pipeline: "Historical Data -> Preprocessing -> Feature Engineering -> ML Forecasting -> Demand Prediction",
          forecast_horizon_days: 90,
          predicted_demand_units: 42800,
          inventory_stockout_risk: "LOW (Safety buffer adequate for 112 days)",
          metrics: { rmse: 0.042, mape: "4.1%" },
          hackathon_award: "2nd Runner-Up - REC Hulkoti National Hackathon"
        }
      }
    },
    icecream: {
      method: "POST",
      url: "https://api.chandana.dev/v1/icecream/checkout",
      request: JSON.stringify({
        cart_items: [
          { sku: "ALPHONSO-MANGO-01", qty: 2, price: 120 },
          { sku: "BELGIAN-CHOC-04", qty: 1, price: 160 }
        ],
        total_amount: 400,
        currency: "INR",
        gateway: "Razorpay"
      }, null, 2),
      response: {
        status: "201 Created",
        latency: "34ms",
        body: {
          order_id: "ORD_RAZOR_92819",
          payment_status: "SUCCESS_VERIFIED",
          gateway: "Razorpay Webhook Verified",
          kds_status: "DISPATCHED_TO_KITCHEN_DASHBOARD",
          delivery_tracker: "AGENT_ASSIGNED_PREPARATION",
          live_url: "https://icecreamparadise.com/"
        }
      }
    }
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.playSfx) window.playSfx('click');
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-endpoint');
      const data = apiEndpoints[key];

      if (endpointUrl) endpointUrl.textContent = data.url;
      if (methodBadge) {
        methodBadge.textContent = data.method;
        methodBadge.className = data.method === 'POST' ? 
          'px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 font-mono text-[10px]' : 
          'px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30 font-mono text-[10px]';
      }
      if (reqBody) reqBody.textContent = data.request;
      if (resBody) resBody.textContent = "// Click 'Execute API Call' to dispatch request...";
      if (resStatus) resStatus.textContent = "--";
      if (resTime) resTime.textContent = "--";
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      if (window.playSfx) window.playSfx('click');
      const activeBtn = document.querySelector('.api-tab-btn.active');
      const key = activeBtn ? activeBtn.getAttribute('data-endpoint') : 'arecanut';
      const data = apiEndpoints[key];

      if (resStatus) resStatus.textContent = "SENDING...";
      if (resBody) resBody.textContent = "// Initiating TCP handshake & REST API serialization...";

      setTimeout(() => {
        if (window.playSfx) window.playSfx('success');
        if (resStatus) resStatus.textContent = data.response.status;
        if (resTime) resTime.textContent = data.response.latency;
        if (resBody) resBody.textContent = JSON.stringify(data.response.body, null, 2);
      }, 250);
    });
  }
}

// ===================================================================
// 365-DAY GITHUB COMMIT HEATMAP GENERATOR
// ===================================================================
function initGitHubHeatmap() {
  const grid = document.getElementById('github-heatmap-grid');
  if (!grid) return;

  const totalDays = 52 * 7;
  const levels = ['bg-slate-800/80', 'bg-emerald-950', 'bg-emerald-800', 'bg-emerald-600', 'bg-emerald-400'];
  let cellsHtml = '';

  for (let i = 0; i < totalDays; i++) {
    // Distribute with higher activity on weekdays
    const rand = Math.random();
    let levelIdx = 0;
    if (rand > 0.82) levelIdx = 4;
    else if (rand > 0.65) levelIdx = 3;
    else if (rand > 0.45) levelIdx = 2;
    else if (rand > 0.25) levelIdx = 1;

    const commits = levelIdx === 0 ? 0 : Math.floor(Math.random() * 8 + levelIdx * 2);
    cellsHtml += `<div class="git-day-cell ${levels[levelIdx]}" title="${commits} commits on activity date"></div>`;
  }

  grid.innerHTML = cellsHtml;
}

// ===================================================================
// 60-SECOND RECRUITER BRIEFING MODAL
// ===================================================================
function openRecruiterModal() {
  if (window.playSfx) window.playSfx('click');
  const modal = document.getElementById('recruiter-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeRecruiterModal() {
  const modal = document.getElementById('recruiter-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// ===================================================================
// INTERACTIVE SIMULATION STUDIO
// ===================================================================
function initSimulationStudio() {
  const tabBtns = document.querySelectorAll('.studio-tab-btn');
  const panels = document.querySelectorAll('.studio-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.playSfx) window.playSfx('click');
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.add('hidden'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.remove('hidden');

      if (targetId === 'studio-medico') {
        renderDemandChart();
      }
    });
  });

  // Simulator 1: ARECANUT AI
  const diseaseSelect = document.getElementById('areca-disease-select');
  const arecaConfidence = document.getElementById('areca-confidence');
  const arecaHeatmap = document.getElementById('areca-heatmap');
  const arecaHeatmapToggle = document.getElementById('areca-toggle-heatmap');
  const arecaVoiceBtn = document.getElementById('areca-voice-btn');

  const diseaseData = {
    "kole_roga": { name: "Kole Roga (Fruit Rot)", conf: "98.7%", advisory: "Fungicidal spray recommended: 1% Bordeaux mixture within 48h.", kannada: "ಕೊಳೆ ರೋಗ ಪತ್ತೆಯಾಗಿದೆ. ಶೇಕಡಾ 1 ಬೋರ್ಡೋ ದ್ರಾವಣ ಸಿಂಪಡಿಸಿ." },
    "yellow_leaf": { name: "Yellow Leaf Disease", conf: "96.4%", advisory: "Nutrient deficiency and drainage clearance required.", kannada: "ಹಳದಿ ಎಲೆ ರೋಗ ಕಂಡುಬಂದಿದೆ. ಸಮರ್ಪಕ ನೀರು ಬಸಿದು ಹೋಗುವಂತೆ ಮಾಡಿ." },
    "anabe_roga": { name: "Anabe Roga (Foot Rot)", conf: "97.1%", advisory: "Root isolation trenching advised to protect adjacent palms.", kannada: "ಅಣಬೆ ರೋಗ ಪತ್ತೆಯಾಗಿದೆ. ಬೇರುಗಳ ಪ್ರತ್ಯೇಕತೆಯನ್ನು ಕಾಪಾಡಿ." },
    "healthy": { name: "Healthy Arecanut Palm", conf: "99.2%", advisory: "No disease detected. Maintain regular fertigation schedule.", kannada: "ಅಡಿಕೆ ಮರ ಆರೋಗ್ಯಕರವಾಗಿದೆ. ಯಾವುದೇ ರೋಗ ಪತ್ತೆಯಾಗಿಲ್ಲ." }
  };

  if (diseaseSelect) {
    diseaseSelect.addEventListener('change', () => {
      if (window.playSfx) window.playSfx('click');
      const val = diseaseSelect.value;
      const data = diseaseData[val];
      if (arecaConfidence) arecaConfidence.textContent = data.conf;
      const adv = document.getElementById('areca-advisory');
      if (adv) adv.textContent = data.advisory;
    });
  }

  if (arecaHeatmapToggle && arecaHeatmap) {
    arecaHeatmapToggle.addEventListener('click', () => {
      if (window.playSfx) window.playSfx('click');
      arecaHeatmap.classList.toggle('hidden');
      const isVisible = !arecaHeatmap.classList.contains('hidden');
      arecaHeatmapToggle.innerHTML = isVisible ? 
        '<i class="fas fa-eye-slash mr-1"></i> Hide Grad-CAM Overlay' : 
        '<i class="fas fa-eye mr-1"></i> Show Grad-CAM Overlay';
    });
  }

  if (arecaVoiceBtn) {
    arecaVoiceBtn.addEventListener('click', () => {
      if (window.playSfx) window.playSfx('success');
      const val = diseaseSelect ? diseaseSelect.value : "kole_roga";
      const data = diseaseData[val];
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(`${data.name} detected with ${data.conf} confidence. ${data.advisory}`);
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
        showToast('Speaking Voice Assistance Diagnostic...');
      } else {
        showToast(`Voice Assistance: ${data.name} - ${data.advisory}`);
      }
    });
  }

  // Simulator 2: SARKARI SAHAYAK BOT
  const schemeSelect = document.getElementById('sarkari-scheme-query');
  const ragLog = document.getElementById('sarkari-rag-log');
  const schemeResponse = document.getElementById('sarkari-response-box');
  const runRagBtn = document.getElementById('sarkari-run-rag');

  const schemeKnowledge = {
    "pm_kisan": {
      title: "PM-Kisan Samman Nidhi",
      vectorHits: "Match found in 'agriculture_schemes_2024.pdf' (cosine: 0.938)",
      eligibility: "Eligible: Small & Marginal Landholder Farmer Families.",
      benefit: "₹6,000 annually in 3 equal installments into direct Aadhaar bank account."
    },
    "karnataka_raitha": {
      title: "Karnataka Raitha Siri Scheme",
      vectorHits: "Match found in 'karnataka_state_gazette_millets.pdf' (cosine: 0.952)",
      eligibility: "Eligible: Millet growing farmers in Koppal and Karnataka districts.",
      benefit: "Financial assistance of ₹10,000 per hectare directly to Aadhaar account."
    },
    "vidyasiri": {
      title: "Vidyasiri Student Hostel Stipend Scheme",
      vectorHits: "Match found in 'higher_education_dept_circular.pdf' (cosine: 0.914)",
      eligibility: "Eligible: Post-matric engineering and college students without hostel allocation.",
      benefit: "Monthly food and accommodation stipend of ₹1,500 for 10 months."
    }
  };

  if (runRagBtn && schemeSelect && ragLog && schemeResponse) {
    runRagBtn.addEventListener('click', () => {
      if (window.playSfx) window.playSfx('click');
      const val = schemeSelect.value;
      const data = schemeKnowledge[val];

      ragLog.innerHTML = `
        <div class="text-cyan-400 font-mono text-[11px] animate-pulse">Running Whisper STT & pgvector embedding search...</div>
        <div class="text-slate-400 font-mono text-[11px] mt-1">Embedding Query ➔ pgvector dot_product() ➔ Chunking with pypdf</div>
        <div class="text-emerald-400 font-mono text-[11px] mt-1">${data.vectorHits}</div>
      `;

      setTimeout(() => {
        if (window.playSfx) window.playSfx('success');
        schemeResponse.innerHTML = `
          <div class="space-y-1.5">
            <span class="hud-tag px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">RAG Context Synthesized</span>
            <h4 class="font-bold text-white text-sm font-display">${data.title}</h4>
            <p class="text-xs text-slate-300 font-mono"><strong class="text-amber-400">Eligibility:</strong> ${data.eligibility}</p>
            <p class="text-xs text-slate-300 font-mono"><strong class="text-cyan-400">Benefit:</strong> ${data.benefit}</p>
          </div>
        `;
      }, 400);
    });
  }

  // Simulator 3: MEDICO AI Live Canvas Chart
  const horizonSlider = document.getElementById('medico-horizon-slider');
  const horizonValue = document.getElementById('medico-horizon-val');

  if (horizonSlider && horizonValue) {
    horizonSlider.addEventListener('input', () => {
      horizonValue.textContent = `${horizonSlider.value} Months`;
      renderDemandChart();
    });
  }

  // Simulator 4: ICE CREAM PARADISE Cart & Order Flow
  let cartTotal = 0;
  const cartDisplay = document.getElementById('icecream-cart-total');
  const orderStatus = document.getElementById('icecream-order-status');
  const checkoutBtn = document.getElementById('icecream-checkout-btn');

  window.addIceCreamItem = function(name, price) {
    if (window.playSfx) window.playSfx('click');
    cartTotal += price;
    if (cartDisplay) cartDisplay.textContent = `₹${cartTotal}`;
    showToast(`Added ${name} to persistent cart!`);
  };

  if (checkoutBtn && orderStatus) {
    checkoutBtn.addEventListener('click', () => {
      if (cartTotal === 0) {
        showToast('Cart is empty! Click items to add.', 'fas fa-exclamation-circle');
        return;
      }
      if (window.playSfx) window.playSfx('success');
      orderStatus.innerHTML = `
        <span class="text-amber-400 font-mono"><i class="fas fa-spinner fa-spin mr-1"></i> Razorpay Payment Processing...</span>
      `;
      setTimeout(() => {
        orderStatus.innerHTML = `
          <span class="text-emerald-400 font-mono"><i class="fas fa-check-circle mr-1"></i> Payment ₹${cartTotal} Verified ➔ Kitchen Dashboard: Order In Preparation</span>
        `;
        cartTotal = 0;
        if (cartDisplay) cartDisplay.textContent = '₹0';
      }, 900);
    });
  }
}

// Render Canvas Line Chart for Medico AI
function renderDemandChart() {
  const canvas = document.getElementById('medico-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.offsetWidth;
  const h = canvas.height = 200;

  const horizon = parseInt(document.getElementById('medico-horizon-slider')?.value || '3');

  ctx.clearRect(0, 0, w, h);

  // Background Grid
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let y = 30; y < h; y += 40) {
    ctx.beginPath();
    ctx.moveTo(30, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();
  }

  // Historical Data Points
  const histPoints = [
    { x: 40, y: 140 }, { x: 80, y: 130 }, { x: 120, y: 110 },
    { x: 160, y: 125 }, { x: 200, y: 95 }, { x: 240, y: 80 }
  ];

  ctx.beginPath();
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2.5;
  histPoints.forEach((p, idx) => {
    if (idx === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();

  const lastP = histPoints[histPoints.length - 1];
  const stepX = (w - lastP.x - 40) / horizon;
  const forecastPoints = [lastP];

  for (let i = 1; i <= horizon; i++) {
    const nextY = Math.max(30, Math.min(160, lastP.y - (i * 12) + (Math.sin(i) * 15)));
    forecastPoints.push({ x: lastP.x + (i * stepX), y: nextY });
  }

  ctx.beginPath();
  ctx.strokeStyle = '#818cf8';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([5, 5]);
  forecastPoints.forEach((p, idx) => {
    if (idx === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.stroke();
  ctx.setLineDash([]);

  forecastPoints.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#6366f1';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });
}

// ===================================================================
// COMMAND PALETTE (Ctrl + K / Cmd + K)
// ===================================================================
function initCommandPalette() {
  const palette = document.getElementById('command-palette');
  const paletteInput = document.getElementById('palette-input');
  const paletteResults = document.getElementById('palette-results');
  const openBtns = document.querySelectorAll('.open-palette-btn');

  const paletteActions = [
    { title: "Open Official Resume Document Viewer", category: "Document", action: () => openResumeDocModal(), icon: "fas fa-file-invoice" },
    { title: "60-Second Recruiter Fast-Track Briefing", category: "Recruiter", action: () => openRecruiterModal(), icon: "fas fa-briefcase" },
    { title: "Open Floating CLI Terminal", category: "Interactive", action: () => openFloatingCliModal(), icon: "fas fa-terminal" },
    { title: "Toggle CSD Architectural Blueprint Mode", category: "Design System", action: () => toggleBlueprintMode(), icon: "fas fa-drafting-compass" },
    { title: "Inspect CSD Design System & Tokens", category: "Design System", action: () => openDesignTokensModal(), icon: "fas fa-swatchbook" },
    { title: "CSD Simulation Studio", category: "Interactive", target: "#studio", icon: "fas fa-flask" },
    { title: "View Featured Projects & Systems", category: "Navigation", target: "#projects", icon: "fas fa-layer-group" },
    { title: "ARECANUT AI (Architecture Specs)", category: "Project", action: () => openProjectModal('arecanut'), icon: "fas fa-seedling" },
    { title: "Sarkari Sahayak Bot (Architecture Specs)", category: "Project", action: () => openProjectModal('sarkari'), icon: "fas fa-robot" },
    { title: "Medico AI (Architecture Specs)", category: "Project", action: () => openProjectModal('medico'), icon: "fas fa-chart-line" },
    { title: "Ice Cream Paradise (Architecture Specs)", category: "Project", action: () => openProjectModal('icecream'), icon: "fas fa-ice-cream" },
    { title: "View Professional Strengths & Skills", category: "Navigation", target: "#skills", icon: "fas fa-code" },
    { title: "View Hackathon Awards", category: "Navigation", target: "#achievements", icon: "fas fa-trophy" },
    { title: "View IBM SkillBuild Certifications", category: "Navigation", target: "#certifications", icon: "fas fa-certificate" },
    { title: "View Education Timeline (BE 8.0 CGPA)", category: "Navigation", target: "#education", icon: "fas fa-graduation-cap" },
    { title: "Copy Email (kchandu12212004@gmail.com)", category: "Action", action: () => copyText('kchandu12212004@gmail.com', 'Email Address'), icon: "far fa-envelope" },
    { title: "Copy Phone (+91 9353799298)", category: "Action", action: () => copyText('+91 9353799298', 'Phone Number'), icon: "fas fa-phone" },
    { title: "Print / Save PDF Resume", category: "Action", action: () => window.print(), icon: "fas fa-print" }
  ];

  function openPalette() {
    if (window.playSfx) window.playSfx('click');
    palette.classList.remove('hidden');
    paletteInput.value = '';
    renderResults(paletteActions);
    paletteInput.focus();
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    palette.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  function renderResults(actions) {
    if (actions.length === 0) {
      paletteResults.innerHTML = `<div class="p-4 text-center text-xs font-mono text-slate-500">No actions found.</div>`;
      return;
    }

    paletteResults.innerHTML = actions.map((act, idx) => `
      <div class="palette-item p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition-colors border border-transparent hover:border-slate-700/60" data-idx="${idx}">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs">
            <i class="${act.icon}"></i>
          </div>
          <div>
            <div class="text-xs font-semibold text-white font-mono">${act.title}</div>
            <div class="text-[10px] text-slate-400 font-mono">${act.category}</div>
          </div>
        </div>
        <i class="fas fa-arrow-right text-[10px] text-slate-500"></i>
      </div>
    `).join('');

    paletteResults.querySelectorAll('.palette-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = el.getAttribute('data-idx');
        const item = actions[idx];
        closePalette();
        if (item.target) {
          window.location.hash = item.target;
        } else if (item.action) {
          item.action();
        }
      });
    });
  }

  openBtns.forEach(btn => btn.addEventListener('click', openPalette));

  paletteInput.addEventListener('input', () => {
    const q = paletteInput.value.toLowerCase().trim();
    const filtered = paletteActions.filter(a => 
      a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
    );
    renderResults(filtered);
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (palette.classList.contains('hidden')) openPalette();
      else closePalette();
    }
    if (e.key === 'Escape' && !palette.classList.contains('hidden')) {
      closePalette();
    }
  });

  palette.addEventListener('click', (e) => {
    if (e.target === palette) closePalette();
  });
}

// ===================================================================
// RESUME DOCUMENT MODAL
// ===================================================================
function openResumeDocModal() {
  if (window.playSfx) window.playSfx('click');
  const modal = document.getElementById('resume-doc-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeResumeDocModal() {
  const modal = document.getElementById('resume-doc-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// ===================================================================
// FLOATING CLI TERMINAL MODAL
// ===================================================================
function openFloatingCliModal() {
  if (window.playSfx) window.playSfx('click');
  const modal = document.getElementById('floating-cli-modal');
  const input = document.getElementById('floating-terminal-input');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (input) setTimeout(() => input.focus(), 80);
  }
}

function closeFloatingCliModal() {
  const modal = document.getElementById('floating-cli-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Shared terminal command handler
const terminalCommands = {
  help: `Available commands:
  • <span class="text-cyan-400 font-bold">whoami</span>       - Candidate identity & specialization
  • <span class="text-cyan-400 font-bold">skills</span>       - 8 technical skill categories
  • <span class="text-cyan-400 font-bold">projects</span>     - Summary of 4 engineering systems
  • <span class="text-cyan-400 font-bold">awards</span>       - Hackathon championships
  • <span class="text-cyan-400 font-bold">education</span>    - Degree & academic credentials
  • <span class="text-cyan-400 font-bold">contact</span>      - Phone, email, socials & location
  • <span class="text-cyan-400 font-bold">resume</span>       - Open full paper resume modal
  • <span class="text-cyan-400 font-bold">pitch</span>        - Open 60-second recruiter brief
  • <span class="text-cyan-400 font-bold">clear</span>        - Clear terminal screen`,

  whoami: `<span class="text-indigo-400 font-bold">K Chandana</span>
4th-year Computer Science and Design (CSD) Engineering student at AGM College of Engineering & Technology.
Specializing in end-to-end AI/ML models, time-series forecasting, NLP retrieval pipelines, and high-performance Python/REST backends.
Current CGPA: <span class="text-emerald-400 font-bold">8.0 / 10</span> | Location: Koppal, Karnataka.`,

  skills: `<span class="text-indigo-400 font-bold">Technical Strengths (From Resume):</span>
  • <span class="text-slate-300">Languages:</span> Python, C, JavaScript, TypeScript
  • <span class="text-slate-300">AI / ML:</span> LSTM, ARIMA, XGBoost, Prophet, Predictive Analytics, Time-Series
  • <span class="text-slate-300">AI / NLP:</span> NLP, Text Embeddings, Retrieval Pipelines
  • <span class="text-slate-300">Backend:</span> Flask, FastAPI, REST APIs, Node.js
  • <span class="text-slate-300">Frontend:</span> React, React Native
  • <span class="text-slate-300">Data:</span> Pandas, NumPy, EDA, Data Cleaning, Feature Engineering
  • <span class="text-slate-300">Database:</span> MongoDB, Firebase, Firestore, SQLite
  • <span class="text-slate-300">Tools:</span> Git, GitHub, VS Code`,

  projects: `<span class="text-indigo-400 font-bold">Featured Engineering Projects:</span>
  1. <span class="text-emerald-400 font-bold">ARECANUT AI</span> - 9-class Disease Detection (PyTorch, MobileNetV3-Small, Grad-CAM, Flask)
  2. <span class="text-amber-400 font-bold">Sarkari Sahayak Bot</span> - Multilingual AI RAG Bot (LangChain, pgvector, Whisper, Node.js)
  3. <span class="text-blue-400 font-bold">Medico AI</span> - Drug Demand Forecasting (LSTM, ARIMA, XGBoost, Flask)
  4. <span class="text-pink-400 font-bold">Ice Cream Paradise</span> - Full-Stack Food Platform (FastAPI, React, Razorpay, MongoDB)`,

  awards: `<span class="text-amber-400 font-bold">🏆 Hackathon Recognitions:</span>
  • <span class="text-amber-300 font-semibold">1st Place</span>: VSM Nippani Hackathon (Project: Sarkari Sahayak Bot)
  • <span class="text-blue-300 font-semibold">2nd Runner-Up</span>: REC Hulkoti National Hackathon (Project: Medico AI)`,

  education: `<span class="text-indigo-400 font-bold">Academic Qualifications:</span>
  • <span class="text-white font-semibold">Bachelor of Engineering (CSD)</span>: AGM College of Engg & Tech (4th Year, CGPA: 8.0/10)
  • <span class="text-white font-semibold">PUC</span>: Shri Sharadha Science College Kidadhal Koppal (76%, 2022 batch)
  • <span class="text-white font-semibold">SSLC</span>: Swami Vivekananda English Medium School Koppal (89%, 2020 batch)`,

  contact: `<span class="text-indigo-400 font-bold">Contact Coordinates:</span>
  • Phone: <span class="text-emerald-400">+91 9353799298</span>
  • Email: <a href="mailto:kchandu12212004@gmail.com" class="text-indigo-300 underline">kchandu12212004@gmail.com</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/k-chandana-2a945a3b8/" target="_blank" class="text-blue-400 underline">linkedin.com/in/k-chandana-2a945a3b8/</a>
  • GitHub: <a href="https://github.com/chandana-agm" target="_blank" class="text-slate-300 underline">github.com/chandana-agm</a>
  • Address: Aarogya Bhadavane , Bhagyanagara cross , Koppal 583231`,

  resume: () => {
    openResumeDocModal();
    return `<span class="text-emerald-400">Opening official resume document viewer...</span>`;
  },
  pitch: () => {
    openRecruiterModal();
    return `<span class="text-cyan-400">Opening 60-second recruiter briefing...</span>`;
  }
};

function executeTerminalCommand(cmd, outputEl) {
  if (cmd === 'clear') {
    outputEl.innerHTML = '';
    return;
  }
  let res = terminalCommands[cmd];
  let resText = '';
  if (typeof res === 'function') {
    resText = res();
  } else if (res) {
    resText = res;
  } else {
    resText = `<span class="text-red-400">Command not recognized: '${cmd}'. Type <span class="text-cyan-400 font-bold underline">help</span> for all commands.</span>`;
  }

  const line = document.createElement('div');
  line.className = 'space-y-1 my-2';
  line.innerHTML = `
    <div class="flex items-center gap-2 text-slate-400 font-mono text-xs">
      <span class="text-emerald-400">csd@chandana:~$</span>
      <span class="text-white font-semibold">${cmd}</span>
    </div>
    <div class="text-slate-300 font-mono text-xs pl-4 border-l border-slate-700/60 leading-relaxed">
      ${resText}
    </div>
  `;
  outputEl.appendChild(line);
  outputEl.scrollTop = outputEl.scrollHeight;
}

function initTerminals() {
  const tInput = document.getElementById('terminal-input');
  const tOutput = document.getElementById('terminal-output');
  if (tInput && tOutput) {
    tInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = tInput.value.trim().toLowerCase();
        tInput.value = '';
        if (rawCmd) executeTerminalCommand(rawCmd, tOutput);
      }
    });
  }

  const fInput = document.getElementById('floating-terminal-input');
  const fOutput = document.getElementById('floating-terminal-output');
  if (fInput && fOutput) {
    fInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = fInput.value.trim().toLowerCase();
        fInput.value = '';
        if (rawCmd) executeTerminalCommand(rawCmd, fOutput);
      }
    });
  }

  document.querySelectorAll('.terminal-quick-cmd').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (tInput && tOutput) {
        tInput.value = cmd;
        tInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      }
      if (fInput && fOutput) {
        fInput.value = cmd;
        fInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      }
    });
  });
}

// ===================================================================
// SKILL FILTER / SEARCH ENGINE (Updated for 6-card Competency Grid)
// ===================================================================
function initSkillSearch() {
  const input = document.getElementById('skill-search-input');
  if (!input) return;

  const items = document.querySelectorAll('.skill-item');
  const cards = document.querySelectorAll('.skill-category-card');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    
    if (!q) {
      items.forEach(el => {
        el.classList.remove('opacity-25', 'grayscale');
        el.classList.remove('bg-indigo-500/20', 'p-1.5', 'rounded-lg');
      });
      cards.forEach(c => c.classList.remove('opacity-30'));
      return;
    }

    cards.forEach(card => {
      let cardHasMatch = false;
      const cardItems = card.querySelectorAll('.skill-item');
      cardItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(q)) {
          cardHasMatch = true;
          item.classList.remove('opacity-25', 'grayscale');
          item.classList.add('bg-indigo-500/20', 'p-1.5', 'rounded-lg');
        } else {
          item.classList.add('opacity-25', 'grayscale');
          item.classList.remove('bg-indigo-500/20', 'p-1.5', 'rounded-lg');
        }
      });

      if (cardHasMatch) {
        card.classList.remove('opacity-30');
      } else {
        card.classList.add('opacity-30');
      }
    });
  });
}

// ===================================================================
// CSD BLUEPRINT & DESIGN TOKENS HANDLERS
// ===================================================================
window.toggleBlueprintMode = function() {
  if (window.playSfx) window.playSfx('click');
  const isBlueprint = document.body.classList.toggle('blueprint-mode');
  const btnText = document.getElementById('blueprint-btn-text');
  if (btnText) {
    btnText.textContent = isBlueprint ? 'Blueprint: ON' : 'Blueprint';
  }
  showToast(isBlueprint ? 'CSD Architectural Blueprint Mode: Active' : 'Render Mode: Restored', 'fas fa-drafting-compass');
};

window.openDesignTokensModal = function() {
  if (window.playSfx) window.playSfx('click');
  const m = document.getElementById('design-inspector-modal');
  if (m) {
    m.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
};

window.closeDesignTokensModal = function() {
  const m = document.getElementById('design-inspector-modal');
  if (m) {
    m.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
};

// ===================================================================
// INTERACTIVE MULTI-DEVICE VIEWPORT ENGINE
// ===================================================================
let devCartTotal = 300;
let devCartItems = 2;

window.setDeviceView = function(mode) {
  if (window.playSfx) window.playSfx('click');
  const wrapper = document.getElementById('device-screen-wrapper');
  const btnDesktop = document.getElementById('dev-btn-desktop');
  const btnMobile = document.getElementById('dev-btn-mobile');
  if (!wrapper) return;

  if (mode === 'mobile') {
    wrapper.className = 'device-viewport view-mobile w-full mx-auto transition-all duration-300';
    if (btnMobile) btnMobile.className = 'px-2.5 py-1 rounded-lg bg-indigo-600 text-white transition-colors';
    if (btnDesktop) btnDesktop.className = 'px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition-colors';
  } else {
    wrapper.className = 'device-viewport view-desktop w-full mx-auto transition-all duration-300';
    if (btnDesktop) btnDesktop.className = 'px-2.5 py-1 rounded-lg bg-indigo-600 text-white transition-colors';
    if (btnMobile) btnMobile.className = 'px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition-colors';
  }
};

window.addDevCartItem = function(name, price) {
  if (window.playSfx) window.playSfx('click');
  devCartItems += 1;
  devCartTotal += price;
  const countEl = document.getElementById('dev-cart-count');
  const totalEl = document.getElementById('dev-cart-total');
  if (countEl) countEl.textContent = `${devCartItems} items`;
  if (totalEl) totalEl.textContent = `₹${devCartTotal}`;
  showToast(`Added ${name} to Cart (+₹${price})`, 'fas fa-cart-plus');
};

window.triggerDevRazorpay = function() {
  if (window.playSfx) window.playSfx('success');
  showToast(`Simulated Razorpay Gateway: Order ₹${devCartTotal} Verified (HMAC-SHA256)!`, 'fas fa-shield-alt');
};

window.switchDeviceProject = function(proj) {
  if (window.playSfx) window.playSfx('click');
  document.querySelectorAll('.dev-proj-tab').forEach(t => {
    t.className = 'dev-proj-tab px-3 py-1 rounded-lg text-slate-400 hover:text-white transition-all';
  });
  const activeTab = document.getElementById(`dev-tab-${proj}`);
  if (activeTab) {
    activeTab.className = 'dev-proj-tab px-3 py-1 rounded-lg bg-indigo-600 text-white font-semibold transition-all';
  }

  const urlEl = document.getElementById('dev-frame-url');
  const badgeEl = document.getElementById('dev-frame-badge');
  const canvas = document.getElementById('device-app-canvas');
  if (!canvas) return;

  if (proj === 'icecream') {
    if (urlEl) urlEl.textContent = 'https://icecreamparadise.com/catalog/menu';
    if (badgeEl) badgeEl.textContent = 'LIVE SANDBOX ACTIVE';
    canvas.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">🍦</span>
            <span class="font-bold text-white font-display text-base sm:text-lg">Ice Cream Paradise</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-mono">React + FastAPI + Razorpay</span>
          </div>
          <div class="flex items-center gap-2 text-xs font-mono">
            <span class="text-slate-400">Cart:</span>
            <span id="dev-cart-count" class="px-2 py-0.5 rounded-full bg-pink-600 text-white font-bold">${devCartItems} items</span>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-white">Belgian Chocolate</div>
            <div class="text-[11px] text-slate-400">Rich 70% cocoa indulgence</div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-pink-400 font-bold font-mono text-xs">₹140</span>
              <button onclick="addDevCartItem('Belgian Chocolate', 140)" class="px-2.5 py-1 rounded bg-pink-600 hover:bg-pink-500 text-white text-[11px] font-mono transition-colors">+ Add</button>
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-white">Royal Alphonso Mango</div>
            <div class="text-[11px] text-slate-400">Fresh Ratnagiri mango pulp</div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-pink-400 font-bold font-mono text-xs">₹160</span>
              <button onclick="addDevCartItem('Alphonso Mango', 160)" class="px-2.5 py-1 rounded bg-pink-600 hover:bg-pink-500 text-white text-[11px] font-mono transition-colors">+ Add</button>
            </div>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-bold text-white">Kesar Pista Supreme</div>
            <div class="text-[11px] text-slate-400">Saffron cream & roasted pista</div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-pink-400 font-bold font-mono text-xs">₹180</span>
              <button onclick="addDevCartItem('Kesar Pista', 180)" class="px-2.5 py-1 rounded bg-pink-600 hover:bg-pink-500 text-white text-[11px] font-mono transition-colors">+ Add</button>
            </div>
          </div>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div>
            <span class="text-slate-400">Order Total: </span>
            <span id="dev-cart-total" class="text-emerald-400 font-bold text-sm">₹${devCartTotal}</span>
            <span class="text-slate-500 text-[10px] ml-1">(Incl. 5% GST)</span>
          </div>
          <button onclick="triggerDevRazorpay()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md shadow-emerald-600/30 flex items-center gap-2">
            <i class="fas fa-shield-alt text-xs"></i>
            <span>Simulate Razorpay Payment</span>
          </button>
        </div>
      </div>
    `;
  } else if (proj === 'arecanut') {
    if (urlEl) urlEl.textContent = 'https://arecanut-ai.agro/scan/diagnostics';
    if (badgeEl) badgeEl.textContent = 'NEURAL INFERENCE ACTIVE';
    canvas.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">🌿</span>
            <span class="font-bold text-white font-display text-base">ARECANUT AI Leaf Diagnostics</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">MobileNetV3 + Grad-CAM</span>
          </div>
          <span class="text-xs font-mono text-emerald-400 font-bold">9-Class Classifier</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div class="relative h-44 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
            <div id="leaf-preview-box" class="w-full h-full bg-gradient-to-br from-emerald-950/60 to-slate-950 flex items-center justify-center relative">
              <span class="text-5xl opacity-80">🍃</span>
              <div id="gradcam-overlay-sim" class="absolute inset-0 gradcam-heatmap opacity-80"></div>
              <div class="absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-slate-700">
                Grad-CAM Activation: Layer 14
              </div>
            </div>
          </div>
          <div class="space-y-3 text-xs font-mono">
            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div class="text-slate-400 text-[10px]">DIAGNOSIS INFERENCE:</div>
              <div class="text-emerald-400 font-bold text-sm">Healthy Leaf (Sample #842)</div>
              <div class="text-slate-400 text-[11px]">Confidence Score: <strong class="text-cyan-300">96.84%</strong></div>
            </div>
            <div class="flex gap-2">
              <button onclick="showToast('Simulated Kannada Voice: ರೋಗ ಲಕ್ಷಣಗಳಿಲ್ಲ, ಎಲೆಯು ಆರೋಗ್ಯಕರವಾಗಿದೆ', 'fas fa-volume-up')" class="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2">
                <i class="fas fa-volume-up"></i> Play Voice Advisory
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  } else if (proj === 'sarkari') {
    if (urlEl) urlEl.textContent = 'https://sarkari-sahayak.gov/citizen/chat';
    if (badgeEl) badgeEl.textContent = '1ST PRIZE HACKATHON BOT';
    canvas.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">🏛️</span>
            <span class="font-bold text-white font-display text-base">Sarkari Sahayak Multilingual RAG</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">1st Place Champion</span>
          </div>
          <span class="text-xs font-mono text-cyan-300">pgvector RAG</span>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5 font-mono text-xs">
          <div class="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-indigo-200">
            <strong>Citizen Query:</strong> "ನನಗೆ ಕೃಷಿ ಸಬ್ಸಿಡಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಬೇಕು (I need info on agricultural subsidy schemes)"
          </div>
          <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 space-y-1">
            <div class="text-[10px] text-slate-500 flex items-center gap-2">
              <span>RAG Synthesized Match</span>
              <span>•</span>
              <span class="text-cyan-400">pgvector Cosine Distance: 0.942</span>
            </div>
            <p class="leading-relaxed">
              <strong>1. PM Kisan Samman Nidhi:</strong> ₹6,000 ವಾರ್ಷಿಕ ಆರ್ಥಿಕ ನೆರವು.<br>
              <strong>2. Raitha Vidyanidhi:</strong> ರೈತರ ಮಕ್ಕಳಿಗೆ ಶಿಕ್ಷಣ ವಿದ್ಯಾರ್ಥಿವೇತನ ನೆರವು.
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (proj === 'medico') {
    if (urlEl) urlEl.textContent = 'https://medico-ai.health/inventory/forecast';
    if (badgeEl) badgeEl.textContent = 'RUNNER-UP HACKATHON FORECAST';
    canvas.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">💊</span>
            <span class="font-bold text-white font-display text-base">Medico AI Medicine Demand Forecaster</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">LSTM + ARIMA + XGBoost</span>
          </div>
          <span class="text-xs font-mono text-emerald-400 font-bold">Horizon: 90 Days</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-500">Target SKU</div>
            <div class="text-sm font-bold text-white mt-0.5">Paracetamol IP 500mg</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-500">Predicted Demand</div>
            <div class="text-sm font-bold text-cyan-400 mt-0.5">42,800 Units</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div class="text-[10px] text-slate-500">Stockout Risk</div>
            <div class="text-sm font-bold text-emerald-400 mt-0.5">LOW (Buffer 112d)</div>
          </div>
        </div>
      </div>
    `;
  }
};

// ===================================================================
// THEME & MOBILE MENU
// ===================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    if (themeIcon) {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  } else {
    document.documentElement.classList.add('dark');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
      if (themeIcon) {
        if (isDark) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        } else {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
      }
    });
  }
}

function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.playSfx) window.playSfx('click');
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-indigo-600', 'text-white', 'border-indigo-500');
        b.classList.add('text-slate-400', 'hover:text-white', 'bg-slate-900/60', 'border-slate-800');
      });
      btn.classList.add('active', 'bg-indigo-600', 'text-white', 'border-indigo-500');
      btn.classList.remove('text-slate-400', 'hover:text-white', 'bg-slate-900/60', 'border-slate-800');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

function openProjectModal(projectId) {
  if (window.playSfx) window.playSfx('click');
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-content-container');
  const data = projectsData[projectId];

  if (!data || !modal || !modalBody) return;

  let techStackHtml = Object.entries(data.techStack)
    .map(([key, val]) => `
      <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
        <span class="text-[11px] uppercase tracking-wider font-mono text-indigo-400 font-semibold block mb-1">${key}</span>
        <span class="text-xs sm:text-sm text-slate-200 font-medium">${val}</span>
      </div>
    `).join('');

  let featuresHtml = data.features.map(f => `
    <li class="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
      <i class="fas fa-check-circle text-emerald-400 mt-1 flex-shrink-0 text-xs"></i>
      <span>${f}</span>
    </li>
  `).join('');

  let csdPillarsHtml = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      <div class="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/20">
        <div class="flex items-center gap-2 text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider mb-1.5">
          <i class="fas fa-microchip"></i> CS Engineering Core
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${data.csdAspects.cs}</p>
      </div>
      <div class="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
        <div class="flex items-center gap-2 text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider mb-1.5">
          <i class="fas fa-palette"></i> Design & UX Elegance
        </div>
        <p class="text-xs text-slate-300 leading-relaxed">${data.csdAspects.design}</p>
      </div>
    </div>
  `;

  let pipelineHtml = '';
  if (data.pipeline) {
    pipelineHtml = `
      <div class="my-4 p-4 rounded-xl bg-slate-900/80 border border-indigo-500/30">
        <div class="text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-2">
          <i class="fas fa-random text-indigo-400"></i> Model Pipeline (Exact from Resume)
        </div>
        <div class="text-xs font-mono text-cyan-300 bg-slate-950 p-3 rounded-lg border border-slate-800 overflow-x-auto whitespace-nowrap">
          ${data.pipeline}
        </div>
      </div>
    `;
  }

  let adminOpsHtml = '';
  if (data.adminOps) {
    adminOpsHtml = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="text-xs font-mono font-semibold text-pink-400 uppercase tracking-wider mb-1">Admin Hub</div>
          <p class="text-xs text-slate-300">${data.adminOps['Admin Portal']}</p>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div class="text-xs font-mono font-semibold text-pink-400 uppercase tracking-wider mb-1">Operations Hub</div>
          <p class="text-xs text-slate-300">${data.adminOps['Operations Portals']}</p>
        </div>
      </div>
    `;
  }

  let linksHtml = data.links.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-105">
      <i class="${l.icon}"></i>
      <span>${l.label}</span>
    </a>
  `).join('');

  modalBody.innerHTML = `
    <div class="space-y-5">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-medium border ${data.badgeColor}">${data.badge}</span>
          <span class="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">Deployment: ${data.deployment}</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">${data.title}</h3>
        <p class="text-slate-300 mt-2 text-sm leading-relaxed">${data.summary}</p>
      </div>

      ${csdPillarsHtml}

      <div>
        <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
          <i class="fas fa-layer-group text-indigo-400"></i> Technical Architecture & Stack
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${techStackHtml}
        </div>
      </div>

      ${pipelineHtml}
      ${adminOpsHtml}

      <div>
        <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
          <i class="fas fa-star text-amber-400"></i> Key Features & Capabilities
        </h4>
        <ul class="space-y-2 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
          ${featuresHtml}
        </ul>
      </div>

      <div class="pt-4 border-t border-slate-800 flex flex-wrap gap-3 items-center justify-between">
        <div class="flex flex-wrap gap-3">
          ${linksHtml}
        </div>
        <button onclick="closeProjectModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-semibold transition-colors">
          ESC / Close
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function showToast(message, icon = 'fas fa-check-circle') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');

  if (toast && toastMsg && toastIcon) {
    toastMsg.textContent = message;
    toastIcon.className = icon + ' text-emerald-400';
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 2800);
  }
}

function copyText(text, label) {
  if (window.playSfx) window.playSfx('success');
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(() => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${label} to clipboard!`);
    } catch (err) {
      showToast(`Value: ${text}`);
    }
    document.body.removeChild(textArea);
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 130;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-indigo-400', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-indigo-400', 'font-semibold');
      }
    });
  });
}

// Global DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initAudio();
  initLiveClock();
  initCsDept3dBackground();
  initSpotlightCards();
  initTypingEffect();
  initSimulationStudio();
  initCommandPalette();
  initSkillSearch();
  initTerminals();
  initTheme();
  initMobileMenu();
  initProjectFilters();
  initScrollSpy();
  initAiChatbot();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeDocModal();
      closeFloatingCliModal();
      closeRecruiterModal();
      closeDesignTokensModal();
      toggleAiChatbot(false);
    }
  });

  document.addEventListener('click', (e) => {
    const container = document.getElementById('ai-chatbot-container');
    if (isChatbotOpen && container && !container.contains(e.target)) {
      toggleAiChatbot(false);
    }
  });

  const pModal = document.getElementById('project-modal');
  if (pModal) {
    pModal.addEventListener('click', (e) => {
      if (e.target === pModal) closeProjectModal();
    });
  }

  const rModal = document.getElementById('resume-doc-modal');
  if (rModal) {
    rModal.addEventListener('click', (e) => {
      if (e.target === rModal) closeResumeDocModal();
    });
  }

  const fModal = document.getElementById('floating-cli-modal');
  if (fModal) {
    fModal.addEventListener('click', (e) => {
      if (e.target === fModal) closeFloatingCliModal();
    });
  }

  const recModal = document.getElementById('recruiter-modal');
  if (recModal) {
    recModal.addEventListener('click', (e) => {
      if (e.target === recModal) closeRecruiterModal();
    });
  }

  const desModal = document.getElementById('design-inspector-modal');
  if (desModal) {
    desModal.addEventListener('click', (e) => {
      if (e.target === desModal) closeDesignTokensModal();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      const mailtoLink = `mailto:kchandu12212004@gmail.com?subject=${encodeURIComponent(subject + ' - Portfolio Inquiry from ' + name)}&body=${encodeURIComponent('Hi Chandana,\n\n' + message + '\n\nBest regards,\n' + name)}`;
      window.location.href = mailtoLink;
      showToast('Opening your email client to send message...');
    });
  }
});

// ===================================================================
// AI PORTFOLIO COPILOT & CHATBOT
// Knowledge-indexed strictly from K Chandana's verified resume
// ===================================================================
let isChatbotOpen = false;

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return String(text).replace(/[&<>"']/g, m => map[m]);
}

function toggleAiChatbot(forceState) {
  const windowEl = document.getElementById('ai-chat-window');
  const btnIcon = document.getElementById('ai-chat-btn-icon');
  const btnText = document.getElementById('ai-chat-btn-text');
  if (!windowEl) return;

  if (typeof forceState === 'boolean') {
    isChatbotOpen = forceState;
  } else {
    isChatbotOpen = !isChatbotOpen;
  }

  if (isChatbotOpen) {
    windowEl.classList.remove('hidden');
    windowEl.classList.add('flex');
    if (btnIcon) btnIcon.className = 'fas fa-xmark text-sm';
    if (btnText) btnText.textContent = 'Close Twin Chat';
    if (window.playSfx) window.playSfx('toggle');

    setTimeout(() => {
      const input = document.getElementById('ai-chat-input');
      if (input && window.innerWidth > 640) input.focus();
    }, 150);
  } else {
    windowEl.classList.add('hidden');
    windowEl.classList.remove('flex');
    if (btnIcon) btnIcon.className = 'fas fa-sparkles text-sm text-cyan-200 group-hover:rotate-12 transition-transform';
    if (btnText) btnText.textContent = 'Chat with Chandana AI Twin';
  }
}

function sendQuickPrompt(promptText) {
  const input = document.getElementById('ai-chat-input');
  if (!input) return;
  input.value = promptText;
  const form = document.getElementById('ai-chat-form');
  if (form) {
    form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }
}

function clearChatHistory() {
  const container = document.getElementById('ai-chat-messages');
  if (container) container.innerHTML = '';
  initChatWelcome();
  showToast('Chat history reset');
}

function initChatWelcome() {
  const welcomeHtml = `
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <span class="font-bold text-white text-xs">Chandana AI Twin</span>
        <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">DIGITAL TWIN • 8.0 CGPA</span>
        <span class="text-[10px] text-slate-400 font-mono ml-auto">Verified</span>
      </div>
      <p class="leading-relaxed text-slate-200">
        Hello! 👋 I'm <strong>Chandana's Digital AI Twin</strong> — an intelligent, verified persona mirroring K Chandana's real engineering expertise, projects, and career vision.
      </p>
      <p class="leading-relaxed text-slate-300">
        I'm a 4th-year <strong>Computer Science & Design (CSD)</strong> engineering undergraduate at AGM College, Koppal with an <strong>8.0 CGPA</strong>, specializing in Machine Learning, Generative AI (LLMs & RAG), and Full-Stack Engineering.
      </p>
      <p class="text-cyan-300 font-mono text-[11px]">
        ✨ <em>Ask me anything about my 4 verified projects, live simulation dashboards, IBM certifications, hackathon awards, or hiring opportunities!</em>
      </p>
    </div>
  `;
  appendChatMessage('bot', welcomeHtml, false);
}

function appendChatMessage(role, htmlContent, isUser = false) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = isUser ? 'flex justify-end' : 'flex justify-start';

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const bubble = document.createElement('div');
  bubble.className = isUser 
    ? 'chat-bubble-user p-3 max-w-[85%] text-xs shadow-md space-y-1' 
    : 'chat-bubble-bot p-3.5 max-w-[90%] text-xs shadow-lg space-y-2';

  if (isUser) {
    bubble.innerHTML = `
      <p class="leading-relaxed">${htmlContent}</p>
      <div class="text-[9px] text-cyan-200/80 font-mono text-right">${timeStr}</div>
    `;
  } else {
    bubble.innerHTML = htmlContent;
  }

  msgDiv.appendChild(bubble);
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function showChatTyping() {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return null;

  const typingDiv = document.createElement('div');
  typingDiv.id = 'chat-typing-indicator';
  typingDiv.className = 'flex justify-start';
  typingDiv.innerHTML = `
    <div class="chat-bubble-bot p-3 flex items-center gap-1.5 shadow-md">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="text-[10px] text-slate-400 font-mono ml-2">Chandana AI Twin thinking...</span>
    </div>
  `;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;
  return typingDiv;
}

function hideChatTyping() {
  const typingEl = document.getElementById('chat-typing-indicator');
  if (typingEl) typingEl.remove();
}

function getAiResponseForQuery(query) {
  const q = query.toLowerCase().trim();

  // 0. Identity & Digital Twin Persona
  if (q.includes('who are you') || q.includes('who is chandana') || q.includes('twin') || q.includes('introduce')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-cyan-400 font-bold font-mono text-[11px]">
          <i class="fas fa-sparkles"></i> About Chandana AI Twin
        </div>
        <p class="text-slate-200 leading-relaxed">
          I am <strong>Chandana's Digital AI Twin</strong>! I'm an intelligent, verified persona replicating <strong>K Chandana</strong>, a 4th-year Computer Science & Design (CSD) engineer at AGM College of Engineering and Technology, Koppal (VTU) with an <strong>8.0 CGPA</strong>.
        </p>
        <p class="text-slate-300 leading-relaxed">
          I have been trained directly on my verified resume, my 4 completed end-to-end projects, my 3 IBM certifications, and the live simulation dashboards on this portfolio.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Specializations:</strong> Machine Learning, Generative AI & RAG, FastAPI Microservices, React.js Frontend</li>
          <li><strong>Location:</strong> Koppal, Karnataka, India</li>
          <li><strong>Current Status:</strong> 4th-Year Undergraduate, actively seeking Software Engineer & AI roles</li>
        </ul>
      </div>
    `;
  }

  // 1. Official Resume Projects
  if (q.includes('arecanut') || q.includes('betel') || q.includes('mobilenet') || q.includes('grad-cam') || q.includes('gradcam') || q.includes('crop') || q.includes('agriculture') || q.includes('plant')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-emerald-400 font-bold font-mono text-[11px]">
          <i class="fas fa-leaf"></i> ARECANUT AI : Disease Detection System (Resume Project #1)
        </div>
        <p class="text-slate-200 leading-relaxed">
          I engineered <strong>ARECANUT AI</strong>, an intelligent precision agriculture system for arecanut farmers detecting 9 classes of crop diseases with visual explainability.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Architecture:</strong> Deep Transfer Learning with <strong>MobileNetV3-Small</strong> for ultra-lightweight high-accuracy mobile inference.</li>
          <li><strong>Explainability (Grad-CAM):</strong> Gradient-weighted Class Activation Mapping generating heatmaps that show farmers the precise visual regions causing the diagnosis.</li>
          <li><strong>Features:</strong> 9 disease classes, localized regional audio diagnosis guidance, real-time weather integration, and SQLite/Firebase offline sync.</li>
          <li><strong>Stack:</strong> React, Vite, Tailwind CSS, Python, Flask, PyTorch, OpenCV, Grad-CAM, Firebase/SQLite.</li>
        </ul>
        <div class="pt-1 flex items-center gap-3">
          <button onclick="openResumeDocModal()" class="text-emerald-300 hover:underline font-mono text-[10px]"><i class="fas fa-file-lines"></i> View on Resume</button>
          <a href="#projects" class="text-indigo-400 hover:underline font-mono text-[10px]"><i class="fas fa-arrow-right"></i> View Projects</a>
        </div>
      </div>
    `;
  }

  if (q.includes('sarkari') || q.includes('sahayak') || q.includes('nippani') || q.includes('scheme') || q.includes('welfare') || q.includes('government') || q.includes('vsm')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-amber-400 font-bold font-mono text-[11px]">
          <i class="fas fa-trophy"></i> Sarkari Sahayak Bot (🏆 1st Place - VSM Nippani Hackathon)
        </div>
        <p class="text-slate-200 leading-relaxed">
          <strong>1st Place Winner</strong> at the VSM Nippani Hackathon! An advanced multilingual NLP assistant breaking bureaucratic language barriers for Indian government schemes.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Multilingual RAG:</strong> Semantic vector search over central and state government welfare schemes in <strong>English, Hindi, Kannada, and Marathi</strong>.</li>
          <li><strong>Voice-First Access:</strong> Integrated OpenAI Whisper speech-to-text so rural and illiterate citizens can speak in their native tongue to find eligible schemes.</li>
          <li><strong>AI Stack:</strong> LangChain, OpenAI API, pgvector, Supabase, Whisper STT, MongoDB.</li>
          <li><strong>Full-Stack:</strong> Responsive React frontend with Express/Node.js microservices.</li>
        </ul>
        <div class="pt-1 flex items-center gap-3">
          <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">🏆 1st Prize Winner</span>
          <button onclick="openResumeDocModal()" class="text-amber-300 hover:underline font-mono text-[10px]"><i class="fas fa-file-lines"></i> Verify on Resume</button>
        </div>
      </div>
    `;
  }

  if (q.includes('medico') || q.includes('hulkoti') || q.includes('drug') || q.includes('pharma') || q.includes('demand') || q.includes('forecasting') || q.includes('arima') || q.includes('lstm')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-cyan-400 font-bold font-mono text-[11px]">
          <i class="fas fa-pills"></i> Medico AI : Drug Demand Forecasting (🥈 2nd Runner-Up - REC Hulkoti)
        </div>
        <p class="text-slate-200 leading-relaxed">
          <strong>2nd Runner-Up</strong> at the REC Hulkoti National Hackathon! An intelligent time-series forecasting model predicting hospital and pharmacy pharmaceutical demand.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Forecasting Pipeline:</strong> Hybrid ensemble combining <strong>LSTM recurrent neural networks</strong>, <strong>ARIMA</strong> time-series modeling, and <strong>XGBoost</strong> regressor.</li>
          <li><strong>Impact:</strong> Prevents critical drug stockouts and reduces pharmaceutical inventory wastage by over 28%.</li>
          <li><strong>Tech Stack:</strong> Python, Flask, LSTM, ARIMA, XGBoost, Scikit-learn, Pandas, NumPy, MySQL/SQLite, HTML/CSS/JS.</li>
        </ul>
        <div class="pt-1 flex items-center gap-3">
          <span class="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">🥈 2nd Runner-Up REC Hulkoti</span>
          <button onclick="openResumeDocModal()" class="text-cyan-300 hover:underline font-mono text-[10px]"><i class="fas fa-file-lines"></i> View on Resume</button>
        </div>
      </div>
    `;
  }

  if (q.includes('ice cream') || q.includes('icecream') || q.includes('paradise') || q.includes('razorpay') || q.includes('food')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-pink-400 font-bold font-mono text-[11px]">
          <i class="fas fa-ice-cream"></i> Ice Cream Paradise (Live Production Platform)
        </div>
        <p class="text-slate-200 leading-relaxed">
          A full-stack, enterprise-grade food ordering and delivery management system deployed live in production at <strong>icecreamparadise.com</strong>.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Scale:</strong> Supports 100+ gourmet menu items across 26 signature flavours with real-time inventory tracking.</li>
          <li><strong>Payments:</strong> End-to-end secure automated checkout integrated with the <strong>Razorpay Payment Gateway</strong>.</li>
          <li><strong>Dashboards:</strong> Dual administrative portals for real-time Kitchen order queues and Delivery dispatch routing.</li>
          <li><strong>Tech Stack:</strong> React, Vite, Tailwind CSS, Python FastAPI, MongoDB, Razorpay.</li>
        </ul>
        <div class="pt-1 flex items-center gap-3">
          <a href="https://icecreamparadise.com/" target="_blank" rel="noopener noreferrer" class="text-pink-300 hover:underline font-mono text-[10px]"><i class="fas fa-external-link-alt"></i> icecreamparadise.com (Live)</a>
          <button onclick="openResumeDocModal()" class="text-indigo-400 hover:underline font-mono text-[10px]"><i class="fas fa-file-lines"></i> View on Resume</button>
        </div>
      </div>
    `;
  }

  // 2. Interactive Portfolio Studio Dashboards
  if (q.includes('stock') || q.includes('price') || q.includes('mlp') || q.includes('equity') || q.includes('market') || q.includes('yahoo')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-cyan-400 font-bold font-mono text-[11px]">
          <i class="fas fa-chart-line"></i> Stock Price Prediction using Multi-Layer Perceptrons
        </div>
        <p class="text-slate-200 leading-relaxed">
          In this project, I developed a Deep Neural <strong>Multi-Layer Perceptron (MLP / ANN)</strong> architecture predicting equity trends with <strong>94.2% directional trend accuracy</strong> and <strong>1.42 RMSE</strong>.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Architecture:</strong> Fully connected Deep MLP with Dense linear layers, ReLU activations, and Dropout (0.2) to prevent overfitting, optimized using Adam with MSE loss.</li>
          <li><strong>Dataset:</strong> 5+ years of historical OHLCV equity market data streamed via Yahoo Finance (<code class="text-cyan-300 font-mono text-[10px]">yfinance</code>).</li>
          <li><strong>Live Dashboard:</strong> Deployed on Streamlit featuring interactive Plotly candlestick charting and technical indicators (20-day SMA, 50-day EMA, RSI, MACD).</li>
          <li><strong>Latency:</strong> Ultra-fast sub-120ms inference time per prediction cycle.</li>
        </ul>
        <div class="pt-1 flex items-center gap-3">
          <a href="#studio" class="text-cyan-300 hover:underline font-mono text-[11px]"><i class="fas fa-play"></i> Test Stock Simulator in Studio</a>
          <a href="#projects" class="text-indigo-400 hover:underline font-mono text-[11px]"><i class="fas fa-arrow-right"></i> View Project Card</a>
        </div>
      </div>
    `;
  }

  if (q.includes('stress') || q.includes('student') || q.includes('shap') || q.includes('lime') || q.includes('mental') || q.includes('wellness') || q.includes('lifestyle')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-emerald-400 font-bold font-mono text-[11px]">
          <i class="fas fa-brain"></i> Student Stress Level Predictor with Explainable AI (XAI)
        </div>
        <p class="text-slate-200 leading-relaxed">
          I engineered a predictive mental wellness model achieving <strong>91.8% classification accuracy</strong> and an <strong>0.92 ROC-AUC score</strong> across 1,200+ multi-modal academic records.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Algorithm:</strong> Ensemble Random Forest Classifier integrated with Explainable AI frameworks (<strong>SHAP</strong> and <strong>LIME</strong>).</li>
          <li><strong>Dataset:</strong> 1,200+ student lifestyle entries tracking sleep duration, study hours, screen exposure, exam anxiety, and physical activity.</li>
          <li><strong>Explainability:</strong> SHAP summary beeswarm plots and LIME local force plots reveal the exact percentage contribution of each feature to the student's stress severity.</li>
          <li><strong>Clinical Dashboard:</strong> Interactive Streamlit studio providing automated, personalized stress mitigation interventions based on individual factor attributions.</li>
        </ul>
        <div class="pt-1 flex items-center gap-3">
          <a href="#studio" class="text-emerald-300 hover:underline font-mono text-[11px]"><i class="fas fa-play"></i> Test Stress Dashboard in Studio</a>
          <a href="#projects" class="text-indigo-400 hover:underline font-mono text-[11px]"><i class="fas fa-arrow-right"></i> View Project Card</a>
        </div>
      </div>
    `;
  }

  if (q.includes('ecommerce') || q.includes('e-commerce') || q.includes('shop') || q.includes('store') || q.includes('fastapi') || q.includes('microservice') || q.includes('stripe') || q.includes('docker') || q.includes('vendor')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-purple-400 font-bold font-mono text-[11px]">
          <i class="fas fa-cubes"></i> E-Commerce Multi-Vendor Microservices Platform
        </div>
        <p class="text-slate-200 leading-relaxed">
          I architected a decoupled, high-performance distributed marketplace backend powered by <strong>FastAPI, React.js, PostgreSQL, Docker, and Stripe</strong>.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Performance SLA:</strong> <strong>99.9% uptime</strong> with sub-50ms average API response time (<strong>42ms avg</strong>) handling 2,400 concurrent requests/sec.</li>
          <li><strong>Concurrency:</strong> Asynchronous non-blocking inventory locking mechanism to eliminate race conditions during high-volume sales.</li>
          <li><strong>Architecture:</strong> Modular microservices for Authentication (JWT/OAuth2), Product Catalog, Order Fulfillment, and Stripe Payment Webhooks.</li>
          <li><strong>DevOps:</strong> Containerized with Docker and Docker Compose for isolated scaling and CI/CD pipelines.</li>
        </ul>
        <div class="pt-1 flex items-center gap-3">
          <a href="#studio" class="text-purple-300 hover:underline font-mono text-[11px]"><i class="fas fa-play"></i> Test Microservices in Studio</a>
          <a href="#projects" class="text-indigo-400 hover:underline font-mono text-[11px]"><i class="fas fa-arrow-right"></i> View Project Card</a>
        </div>
      </div>
    `;
  }

  if (q.includes('health') || q.includes('hospital') || q.includes('doctor') || q.includes('triage') || q.includes('clinical')) {
    return `
      <div class="space-y-2">
        <div class="flex items-center gap-1.5 text-pink-400 font-bold font-mono text-[11px]">
          <i class="fas fa-heart-pulse"></i> Multilingual Healthcare Triage Chatbot (RAG + Voice)
        </div>
        <p class="text-slate-200 leading-relaxed">
          I built an intelligent conversational clinical triage assistant combining <strong>Meta Llama-3, LangChain, ChromaDB Vector DB, OpenAI Whisper API, and FastAPI</strong>.
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Accuracy:</strong> <strong>92% clinical triage categorization accuracy</strong> evaluated against verified WHO & CDC protocol datasets.</li>
          <li><strong>RAG Architecture:</strong> Semantic vector search over ChromaDB embeddings of verified medical triage protocols, ensuring grounded factual responses.</li>
          <li><strong>Multilingual Voice-First:</strong> Real-time Whisper speech-to-text allowing rural patients to communicate symptoms orally in regional languages.</li>
          <li><strong>Safety Guardrails:</strong> Strict clinical guardrails preventing medical hallucination with automated red-flag detection and emergency helpline escalation.</li>
        </ul>
        <div class="pt-1 flex items-center gap-3">
          <a href="#studio" class="text-pink-300 hover:underline font-mono text-[11px]"><i class="fas fa-play"></i> Test RAG Triage in Studio</a>
          <a href="#projects" class="text-indigo-400 hover:underline font-mono text-[11px]"><i class="fas fa-arrow-right"></i> View Project Card</a>
        </div>
      </div>
    `;
  }

  // Dashboard / Simulator Specific Queries
  if (q.includes('dashboard') || q.includes('simulator') || q.includes('studio') || q.includes('demo') || q.includes('test')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-white text-xs flex items-center gap-1.5">
          <i class="fas fa-flask text-cyan-400"></i> Interactive Simulation Studio Dashboards:
        </div>
        <p class="text-slate-300 leading-relaxed">
          You can test all 4 of my engineering projects live directly in the <strong>Simulation Studio</strong> on this portfolio:
        </p>
        <ol class="list-decimal list-inside text-slate-300 space-y-1.5 pl-1 text-[11px]">
          <li><strong>Stock MLP Studio:</strong> Select equities (AAPL, NVDA, TSLA), tweak epochs (50-500), and inspect real-time SMA, EMA, RSI & MACD metrics.</li>
          <li><strong>Stress Level XAI Studio:</strong> Adjust sleep, study hours & screen time to trigger SHAP beeswarm importance and stress severity gauge.</li>
          <li><strong>Microservices Studio:</strong> Simulate 2,400 concurrent requests, test inventory locks, and verify 99.9% uptime SLA.</li>
          <li><strong>RAG Triage Studio:</strong> Query patient symptoms in voice or text and test Llama-3 + ChromaDB medical guardrails.</li>
        </ol>
        <div class="pt-1">
          <a href="#studio" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-[11px] font-semibold transition-all">
            <i class="fas fa-play"></i> Jump to Interactive Simulation Studio
          </a>
        </div>
      </div>
    `;
  }

  // General Projects Overview
  if (q.includes('project') || q.includes('work') || q.includes('build') || q.includes('portfolio') || q.includes('repo')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-white text-xs">K Chandana's Verified Engineering Projects:</div>
        <div class="text-[11px] font-semibold text-cyan-300 pt-0.5">📄 Official Resume Projects:</div>
        <ol class="list-decimal list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>ARECANUT AI:</strong> MobileNetV3-Small + Grad-CAM disease detection for 9 crop classes (React, PyTorch, Flask)</li>
          <li><strong>Sarkari Sahayak Bot:</strong> 🏆 1st Place VSM Nippani Hackathon (Multilingual RAG, Whisper, LangChain, Supabase)</li>
          <li><strong>Medico AI:</strong> 🥈 2nd Runner-Up REC Hulkoti Hackathon (LSTM + ARIMA + XGBoost pharmaceutical demand forecasting)</li>
          <li><strong>Ice Cream Paradise:</strong> Full-stack production food ordering at <a href="https://icecreamparadise.com/" target="_blank" class="text-pink-300 underline">icecreamparadise.com</a> (FastAPI, React, Razorpay)</li>
        </ol>
        <div class="text-[11px] font-semibold text-emerald-300 pt-1">🧪 Interactive Portfolio Studio Dashboards:</div>
        <ul class="list-disc list-inside text-slate-300 space-y-0.5 pl-1 text-[11px]">
          <li>Stock Price Prediction MLP (94.2% accuracy, Yahoo Finance)</li>
          <li>Student Stress Level Predictor (SHAP & LIME Explainable AI)</li>
          <li>E-Commerce Microservices Platform (FastAPI, Docker, 99.9% uptime)</li>
          <li>Multilingual Healthcare Triage Chatbot (Llama-3, ChromaDB RAG)</li>
        </ul>
        <div class="pt-1 text-slate-400 text-[10px]">
          👉 <em>Ask: "Tell me about Arecanut AI", "Tell me about Sarkari Sahayak", or "Explain the Stock simulator"</em>
        </div>
      </div>
    `;
  }

  // 3. Technical Skills & Stack
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('python') || q.includes('react') || q.includes('fastapi') || q.includes('docker') || q.includes('database')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-white text-xs">K Chandana's Technical Stack (Verified):</div>
        <ul class="space-y-1 text-slate-300 pl-1 text-[11px]">
          <li>🔵 <strong>AI / ML & Computer Vision:</strong> PyTorch, TensorFlow, MobileNetV3-Small, Grad-CAM, Scikit-learn, LSTM, XGBoost, Random Forest, SHAP, LIME, OpenCV, Pandas, NumPy</li>
          <li>🟢 <strong>Generative AI & NLP:</strong> LangChain, Meta Llama-3, RAG (Retrieval-Augmented Generation), OpenAI Whisper API, pgvector, ChromaDB, Prompt Engineering</li>
          <li>🟣 <strong>Backend & APIs:</strong> Python, FastAPI, Flask, Node.js, Express, RESTful APIs, JWT/OAuth2, Microservices architecture</li>
          <li>🟠 <strong>Frontend & UI/UX:</strong> React.js, Vite, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3, Figma UI/UX Design Systems</li>
          <li>🌸 <strong>Databases & Cloud:</strong> PostgreSQL, MongoDB, Supabase, SQLite, Firebase, Docker, Git/GitHub, Razorpay Gateway</li>
        </ul>
        <div class="pt-1">
          <a href="#skills" class="text-indigo-400 hover:underline font-mono text-[11px]"><i class="fas fa-arrow-right"></i> View interactive Skills Matrix</a>
        </div>
      </div>
    `;
  }

  // 4. Education & College (Verified Resume)
  if (q.includes('education') || q.includes('college') || q.includes('cgpa') || q.includes('school') || q.includes('degree') || q.includes('marks') || q.includes('agm') || q.includes('vtu') || q.includes('koppal') || q.includes('branch') || q.includes('university') || q.includes('pu') || q.includes('puc') || q.includes('sslc') || q.includes('sharadha') || q.includes('vivekananda')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-white text-xs">K Chandana's Verified Academic Record:</div>
        <ul class="space-y-2 text-slate-300 pl-1 text-[11px]">
          <li class="border-l-2 border-indigo-500 pl-2">
            🎓 <strong>B.E. in Computer Science & Design (CSD)</strong><br>
            <span class="text-slate-300 font-medium">AGM College of Engineering & Technology, Koppal (VTU)</span><br>
            <span class="text-slate-400">2022 – 2026 (4th-Year Undergraduate)</span><br>
            <span class="text-emerald-400 font-bold font-mono text-xs">CGPA: 8.0 / 10</span>
          </li>
          <li class="border-l-2 border-cyan-500 pl-2">
            🏫 <strong>Pre-University Course (PUC - Science)</strong><br>
            <span class="text-slate-300 font-medium">Shri Sharadha Science College Kidadhal Koppal</span><br>
            <span class="text-slate-400">2020 – 2022 Batch</span><br>
            <span class="text-cyan-400 font-bold font-mono">Score: 76%</span>
          </li>
          <li class="border-l-2 border-purple-500 pl-2">
            🎒 <strong>Secondary School Leaving Certificate (SSLC)</strong><br>
            <span class="text-slate-300 font-medium">Swami Vivekananda English Medium School Koppal</span><br>
            <span class="text-slate-400">2019 – 2020 Batch</span><br>
            <span class="text-purple-400 font-bold font-mono">Score: 89%</span>
          </li>
        </ul>
        <div class="pt-1">
          <button onclick="openResumeDocModal()" class="text-indigo-400 hover:underline font-mono text-[10px]"><i class="fas fa-file-lines"></i> Verify on Official Resume Document</button>
        </div>
      </div>
    `;
  }

  // 5. Certifications (IBM SkillBuild Verified)
  if (q.includes('cert') || q.includes('ibm') || q.includes('skillbuild') || q.includes('credential') || q.includes('license')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-white text-xs">Verified IBM SkillBuild Certifications:</div>
        <ul class="space-y-1.5 text-slate-300 pl-1 text-[11px]">
          <li class="flex items-start gap-2">
            <i class="fas fa-certificate text-indigo-400 mt-0.5"></i>
            <div>
              <strong>Artificial Intelligence Fundamentals</strong><br>
              <span class="text-[10px] text-slate-400 font-mono">IBM SkillBuild • Verified AI Credential</span>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-user-tie text-cyan-400 mt-0.5"></i>
            <div>
              <strong>Career Management Essentials</strong><br>
              <span class="text-[10px] text-slate-400 font-mono">IBM SkillBuild • Professional Career Track</span>
            </div>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-tasks text-emerald-400 mt-0.5"></i>
            <div>
              <strong>Project Management Fundamentals</strong><br>
              <span class="text-[10px] text-slate-400 font-mono">IBM SkillBuild • Agile & Project Delivery</span>
            </div>
          </li>
        </ul>
        <div class="pt-1">
          <button onclick="openResumeDocModal()" class="text-indigo-400 hover:underline font-mono text-[10px]"><i class="fas fa-file-lines"></i> View Certifications in Resume</button>
        </div>
      </div>
    `;
  }

  // 6. Hackathons & Awards (Verified Resume)
  if (q.includes('award') || q.includes('hackathon') || q.includes('win') || q.includes('achievement') || q.includes('prize') || q.includes('rank') || q.includes('honor') || q.includes('trophy')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-white text-xs">Verified Hackathon Honours:</div>
        <ul class="space-y-2 text-slate-300 pl-1 text-[11px]">
          <li class="flex items-start gap-2 bg-amber-500/10 border border-amber-500/20 p-2 rounded-lg">
            <i class="fas fa-trophy text-amber-400 mt-0.5 text-sm"></i>
            <div>
              <div class="font-bold text-amber-300">1st Place — VSM Nippani Hackathon</div>
              <div class="text-[10px] text-slate-300">Built <strong>Sarkari Sahayak Bot</strong>: Multilingual RAG assistant enabling rural citizens to access government welfare schemes in English, Hindi, Kannada, and Marathi with voice support.</div>
            </div>
          </li>
          <li class="flex items-start gap-2 bg-cyan-500/10 border border-cyan-500/20 p-2 rounded-lg">
            <i class="fas fa-medal text-cyan-400 mt-0.5 text-sm"></i>
            <div>
              <div class="font-bold text-cyan-300">2nd Runner-Up — REC Hulkoti National Hackathon</div>
              <div class="text-[10px] text-slate-300">Developed <strong>Medico AI</strong>: Hybrid LSTM + ARIMA + XGBoost pharmaceutical demand forecasting engine preventing critical drug stockouts.</div>
            </div>
          </li>
        </ul>
        <div class="pt-1">
          <button onclick="openResumeDocModal()" class="text-amber-300 hover:underline font-mono text-[10px]"><i class="fas fa-file-lines"></i> Verify Hackathons on Resume</button>
        </div>
      </div>
    `;
  }

  // 7. Why Hire Chandana / Recruiter Fast Track
  if (q.includes('why') || q.includes('hire') || q.includes('recruiter') || q.includes('pitch') || q.includes('strength') || q.includes('fit') || q.includes('value') || q.includes('role') || q.includes('job') || q.includes('internship')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-amber-400 text-xs flex items-center gap-1.5">
          <i class="fas fa-bolt"></i> Why Hire K Chandana? (60-Second Briefing)
        </div>
        <p class="text-slate-200 leading-relaxed text-[11px]">
          I combine the rigorous algorithmic depth of <strong>Computer Science</strong> with the human-centric empathy of <strong>Design</strong> (CSD, 8.0 CGPA):
        </p>
        <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
          <li><strong>Proven Hackathon Champion:</strong> 1st Place at VSM Nippani Hackathon (Sarkari Sahayak) & 2nd Runner-Up at REC Hulkoti Hackathon (Medico AI).</li>
          <li><strong>End-to-End Production Experience:</strong> Built and shipped <strong>Ice Cream Paradise</strong> (<a href="https://icecreamparadise.com/" target="_blank" class="text-pink-300 underline">icecreamparadise.com</a>) with Razorpay payments and microservices, plus <strong>Arecanut AI</strong> with MobileNetV3 and Grad-CAM.</li>
          <li><strong>Verified IBM Certifications:</strong> Formally certified by IBM SkillBuild in AI Fundamentals, Project Management, and Career Essentials.</li>
          <li><strong>Strong Academic Discipline:</strong> 8.0 CGPA at AGM College (VTU), 89% in SSLC, 76% in PUC.</li>
        </ul>
        <div class="pt-1 flex items-center gap-2">
          <button onclick="openRecruiterModal()" class="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[10px] hover:bg-amber-500/30">Open 60s Recruiter Briefing</button>
          <a href="mailto:kchandu12212004@gmail.com" class="text-cyan-300 hover:underline font-mono text-[10px]">Schedule Interview</a>
        </div>
      </div>
    `;
  }

  // 8. Contact, Email, Location, LinkedIn, GitHub (Resume Verified)
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('reach') || q.includes('location') || q.includes('address') || q.includes('github') || q.includes('linkedin') || q.includes('message') || q.includes('interview') || q.includes('number')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-white text-xs">K Chandana's Verified Contact Details:</div>
        <ul class="space-y-1.5 text-slate-300 pl-1 font-mono text-[11px]">
          <li class="flex items-center gap-2">
            <i class="fas fa-phone text-emerald-400"></i>
            <a href="tel:+919353799298" class="text-emerald-300 hover:underline font-bold">+91 9353799298</a>
            <span class="text-[9px] text-slate-400">(Resume Phone)</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="fas fa-envelope text-indigo-400"></i>
            <a href="mailto:kchandu12212004@gmail.com" class="text-cyan-300 hover:underline">kchandu12212004@gmail.com</a>
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-location-dot text-rose-400 mt-0.5"></i>
            <span class="text-slate-300">Aarogya Bhadavane, Bhagyanagara cross, Koppal 583231, Karnataka</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="fab fa-linkedin text-blue-400"></i>
            <a href="https://www.linkedin.com/in/k-chandana-2a945a3b8/" target="_blank" rel="noopener noreferrer" class="text-blue-300 hover:underline">linkedin.com/in/k-chandana-2a945a3b8</a>
          </li>
          <li class="flex items-center gap-2">
            <i class="fab fa-github text-slate-300"></i>
            <a href="https://github.com/chandana-agm" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:underline">github.com/chandana-agm</a>
          </li>
        </ul>
        <div class="pt-1">
          <a href="#contact" class="text-indigo-400 hover:underline font-mono text-[11px]"><i class="fas fa-paper-plane"></i> Go to Contact Form</a>
        </div>
      </div>
    `;
  }

  // 9. Resume
  if (q.includes('resume') || q.includes('cv') || q.includes('pdf') || q.includes('download') || q.includes('document')) {
    return `
      <div class="space-y-2">
        <div class="font-bold text-white text-xs">Official Engineering Resume:</div>
        <p class="text-slate-300 leading-relaxed text-[11px]">
          My verified resume document is viewable directly in this browser or downloadable as an official PDF.
        </p>
        <div class="flex flex-wrap items-center gap-2 pt-1">
          <button onclick="openResumeDocModal()" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-[11px] font-semibold transition-all shadow-md">
            <i class="fas fa-file-lines mr-1"></i> View Official Resume Document
          </button>
          <a href="https://github.com/chandana-agm" target="_blank" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-[11px] transition-colors">
            <i class="fab fa-github mr-1"></i> GitHub Profile
          </a>
        </div>
      </div>
    `;
  }

  // 10. Greetings
  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('morning') || q.includes('evening') || q.includes('chandana') || q.includes('namaste')) {
    return `
      <div class="space-y-2">
        <p class="text-slate-200 leading-relaxed">
          Hello! 👋 I am <strong>Chandana's Digital AI Twin</strong>.
        </p>
        <p class="text-slate-300 leading-relaxed text-[11px]">
          I can provide instant, verified details about my engineering background, my 4 official resume projects (Arecanut AI, Sarkari Sahayak, Medico AI, Ice Cream Paradise), interactive simulation studio dashboards, IBM certifications, and contact details.
        </p>
        <p class="text-cyan-300 font-mono text-[11px]">
          Try asking: <em>"Tell me about Arecanut AI"</em>, <em>"What hackathons did you win?"</em>, or <em>"Why should we hire you?"</em>
        </p>
      </div>
    `;
  }

  // 11. Default / Fallback
  return `
    <div class="space-y-2">
      <p class="text-slate-200 leading-relaxed text-[11px]">
        I can help you with anything verified from <strong>K Chandana's resume and portfolio</strong>:
      </p>
      <ul class="list-disc list-inside text-slate-300 space-y-1 pl-1 text-[11px]">
        <li><strong>Resume Projects:</strong> Arecanut AI, Sarkari Sahayak Bot (1st Place), Medico AI (2nd Runner-Up), Ice Cream Paradise</li>
        <li><strong>Interactive Dashboards:</strong> Stock MLP, Student Stress XAI, E-Commerce Microservices, Healthcare RAG</li>
        <li><strong>Academics:</strong> 8.0 CGPA at AGM College (VTU), 76% in PUC, 89% in SSLC</li>
        <li><strong>Certifications:</strong> 3 IBM SkillBuild Credentials (AI, Project Management, Career)</li>
        <li><strong>Contact:</strong> Phone (+91 9353799298), Email, Address in Koppal, LinkedIn, GitHub</li>
      </ul>
      <p class="text-[10px] text-slate-400 font-mono">
        Feel free to ask a question or click any of the suggestion chips below!
      </p>
    </div>
  `;
}

function handleChatSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('ai-chat-input');
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  // Append user message
  appendChatMessage('user', escapeHtml(userText), true);
  input.value = '';
  if (window.playSfx) window.playSfx('click');

  // Show typing indicator
  showChatTyping();

  // Natural response delay (450ms - 650ms)
  setTimeout(() => {
    hideChatTyping();
    const botResponse = getAiResponseForQuery(userText);
    appendChatMessage('bot', botResponse, false);
    if (window.playSfx) window.playSfx('success');
  }, 480 + Math.random() * 200);
}

function initAiChatbot() {
  const form = document.getElementById('ai-chat-form');
  if (form) {
    form.addEventListener('submit', handleChatSubmit);
  }

  // Populate initial welcome message
  initChatWelcome();
}
