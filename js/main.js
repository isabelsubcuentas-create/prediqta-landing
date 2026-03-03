(() => {
  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-in");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));

  // Language toggle (ES/EN)
  const dict = {
    es: {
      tagline: "Strategic Anticipation para PyMEs",
      nav_how: "Cómo funciona",
      nav_benefits: "Beneficios",
      nav_diff: "Diferenciación",
      nav_faq: "FAQ",
      cta_top: "Evaluar mi empresa",

      chip: "MVP • Validación de leads",
      chip2: "B2B SaaS para Dueños de PyMEs",
      h1: "Una mala decisión puede costarte años.<br />Una simulación puede evitarlo.",
      lead: "Evalúa el impacto financiero y estratégico antes de ejecutar decisiones críticas que afectan la liquidez y continuidad de tu empresa.",
      cta_primary: "Evaluar mi empresa",
      cta_secondary: "Ver cómo funciona",
      trustline: "Enfoque preventivo y metodológico. IA explicable. Sin promesas mágicas.",

      kpi1: "Escenarios comparables",
      kpi2: "Continuity Score",
      kpi3n: "Segundos",
      kpi3: "Simulaciones generadas",

      mock_badge: "Vista demo",
      mc1k: "Continuidad",
      mc1s: "Estable",
      mc2k: "Liquidez",
      mc2s: "Base",
      mc3k: "Riesgos",
      mc3s: "Prioritarios",
      chart_t: "Impacto proyectado por escenario",
      seg1: "Optimista",
      seg2: "Base",
      seg3: "Crítico",
      chart_f: "Ajusta variables y compara antes de decidir.",
      insight: "“El principal riesgo está en el flujo de efectivo si creces sin ajustar capital de trabajo.”",
      visual_note: "Mockup ilustrativo (no claims). Diseñado para transmitir control, claridad y anticipación.",

      prob_h: "El problema real del dueño",
      prob_p: "En una PyME, una sola decisión puede afectar años de trabajo. El problema no es decidir: es decidir sin ver consecuencias antes.",
      prob_c1t: "Lo típico",
      prob_c1a: "Intuición + presión del día a día",
      prob_c1b: "Excel aislado y supuestos invisibles",
      prob_c1c: "Opiniones parciales, cero trazabilidad",
      prob_c1d: "Consultoría lenta o costosa",
      prob_c2t: "Lo que cambia con PREDIQTA",
      prob_c2a: "Escenarios comparables (optimista/base/crítico)",
      prob_c2b: "Riesgos priorizados con explicación clara",
      prob_c2c: "Impacto financiero y estratégico antes de actuar",
      prob_c2d: "Decisión estructurada, no improvisada",

      how_h: "Cómo funciona",
      how_p: "Tres pasos simples para convertir decisiones críticas en escenarios evaluables.",
      how_s1t: "Cargas datos",
      how_s1p: "Información financiera y operativa básica. Plantillas si no está completa.",
      how_s2t: "Simulas",
      how_s2p: "Ajustas variables y comparas escenarios antes de ejecutar.",
      how_s3t: "Decides con método",
      how_s3p: "Drivers, riesgos y soporte explicable. Tú tienes el control.",

      ben_h: "Beneficios estratégicos",
      ben_p: "Hecho para dueños que necesitan claridad sin perder tiempo.",
      ben1t: "Menos decisiones impulsivas",
      ben1p: "Estructura antes de ejecutar, con escenarios comparables.",
      ben2t: "Control de liquidez y continuidad",
      ben2p: "Anticipa impactos que afectan estabilidad del negocio.",
      ben3t: "Prevención, no reacción",
      ben3p: "Alertas y riesgos priorizados para actuar a tiempo.",
      ben4t: "Menos dependencia de consultoría",
      ben4p: "Análisis base más rápido para decisiones frecuentes.",
      ben5t: "IA explicable",
      ben5p: "No caja negra: drivers claros, supuestos trazables.",
      ben6t: "Claridad para alinear al equipo",
      ben6p: "Una narrativa común para decisiones de alto impacto.",

      diff_h: "Diferenciación",
      diff_p: "PREDIQTA compite contra Excel, consultores, BI tradicional y la intuición. Hace algo distinto: simular decisiones estratégicas antes de ejecutarlas.",
      diff_left: "Lo común",
      diff_l1: "Excel: supuestos dispersos y poca trazabilidad",
      diff_l2: "Consultoría: costosa, lenta, depende de terceros",
      diff_l3: "BI: describe el pasado, no prueba decisiones",
      diff_right: "PREDIQTA",
      diff_r1: "Escenarios comparables para decisiones críticas",
      diff_r2: "Riesgos priorizados con explicación ejecutiva",
      diff_r3: "Anticipación estratégica en minutos",

      noc_h: "Qué NO es PREDIQTA",
      noc1: "No garantiza resultados",
      noc2: "No elimina riesgos",
      noc3: "No reemplaza ERP, contabilidad ni BI operativo",
      noc4: "No sustituye tu criterio directivo",
      noc5: "No es “predicción mágica”",

      cta_h: "Evalúa tu empresa antes de tomar la siguiente decisión",
      cta_p: "Déjanos tu información y te contactaremos en 24–48 horas con un diagnóstico preliminar de madurez estratégica.",
      cta_b1: "Enfoque preventivo y metodológico",
      cta_b2: "Hecho para PyMEs (15–120 empleados)",
      cta_b3: "Sin promesas exageradas",

      f_email_l: "Correo",
      f_role_l: "Rol",
      f_role_ph: "Selecciona una opción",
      f_role_1: "Dueño / CEO",
      f_role_2: "Director / Gerente",
      f_role_3: "Finanzas",
      f_size_l: "Tamaño de empresa",
      f_size_ph: "Selecciona una opción",
      f_size_1: "15–30 empleados",
      f_size_2: "31–60 empleados",
      f_size_3: "61–120 empleados",
      f_btn: "Evaluar mi empresa",
      f_micro: "Al enviar aceptas ser contactado para recibir información sobre PREDIQTA. No compartimos tus datos con terceros.",

      faq_h: "Preguntas frecuentes",
      faq1q: "¿Esto reemplaza a un consultor?",
      faq1a: "No. Reduce dependencia en análisis inicial y acelera evaluación, pero no reemplaza criterio humano ni asesoría especializada.",
      faq2q: "¿Necesito datos perfectos?",
      faq2a: "No. Puedes empezar con información parcial y supuestos estructurados para obtener valor desde el inicio.",
      faq3q: "¿La IA toma decisiones por mí?",
      faq3a: "No. La IA explica escenarios y riesgos. La decisión siempre es tuya.",

      footer_note: "Herramienta de anticipación estratégica basada en escenarios. MVP en validación.",
      footer_contact: "Contacto",
      footer_faq: "FAQ",
    },

    en: {
      tagline: "Strategic Anticipation for SMEs",
      nav_how: "How it works",
      nav_benefits: "Benefits",
      nav_diff: "Differentiation",
      nav_faq: "FAQ",
      cta_top: "Evaluate my company",

      chip: "MVP • Lead Validation",
      chip2: "B2B SaaS for SME Owners",
      h1: "One wrong decision can cost years.<br />A simulation can prevent it.",
      lead: "Evaluate financial and strategic impact before executing critical decisions that affect your company’s liquidity and continuity.",
      cta_primary: "Evaluate my company",
      cta_secondary: "See how it works",
      trustline: "Preventive and structured approach. Explainable AI. No magic promises.",

      kpi1: "Comparable scenarios",
      kpi2: "Continuity Score",
      kpi3n: "Seconds",
      kpi3: "Simulations generated",

      mock_badge: "Demo view",
      mc1k: "Continuity",
      mc1s: "Stable",
      mc2k: "Liquidity",
      mc2s: "Base",
      mc3k: "Risks",
      mc3s: "Priority",
      chart_t: "Projected impact by scenario",
      seg1: "Optimistic",
      seg2: "Base",
      seg3: "Critical",
      chart_f: "Adjust variables and compare before deciding.",
      insight: "“Main risk: cash flow pressure if you scale without adjusting working capital.”",
      visual_note: "Illustrative mockup (no claims). Designed to convey control, clarity, and anticipation.",

      prob_h: "The real owner problem",
      prob_p: "In SMEs, one decision can impact years of work. The problem isn’t deciding—it's deciding without seeing consequences first.",
      prob_c1t: "Typical approach",
      prob_c1a: "Intuition + daily pressure",
      prob_c1b: "Isolated spreadsheets and hidden assumptions",
      prob_c1c: "Partial opinions, no traceability",
      prob_c1d: "Slow or expensive consulting",
      prob_c2t: "What changes with PREDIQTA",
      prob_c2a: "Comparable scenarios (optimistic/base/critical)",
      prob_c2b: "Prioritized risks with clear explanation",
      prob_c2c: "Financial and strategic impact before acting",
      prob_c2d: "Structured decisions, not improvisation",

      how_h: "How it works",
      how_p: "Three steps to turn critical decisions into testable scenarios.",
      how_s1t: "Load your data",
      how_s1p: "Basic financial and operational info. Templates if incomplete.",
      how_s2t: "Simulate",
      how_s2p: "Adjust variables and compare scenarios before executing.",
      how_s3t: "Decide with structure",
      how_s3p: "Drivers, risks, and explainable support. You stay in control.",

      ben_h: "Strategic benefits",
      ben_p: "Built for owners who need clarity without wasting time.",
      ben1t: "Fewer impulsive decisions",
      ben1p: "Structure before execution, with comparable scenarios.",
      ben2t: "Liquidity and continuity control",
      ben2p: "Anticipate impacts that threaten stability.",
      ben3t: "Prevention, not reaction",
      ben3p: "Prioritized risks to act early.",
      ben4t: "Less dependency on consulting",
      ben4p: "Faster baseline analysis for frequent decisions.",
      ben5t: "Explainable AI",
      ben5p: "Not a black box: clear drivers, traceable assumptions.",
      ben6t: "Clarity to align the team",
      ben6p: "A shared narrative for high-impact decisions.",

      diff_h: "Differentiation",
      diff_p: "PREDIQTA competes against Excel, consultants, traditional BI, and intuition. It does something different: simulate strategic decisions before executing them.",
      diff_left: "Common tools",
      diff_l1: "Excel: scattered assumptions, low traceability",
      diff_l2: "Consulting: expensive, slow, depends on others",
      diff_l3: "BI: describes the past, doesn’t test decisions",
      diff_right: "PREDIQTA",
      diff_r1: "Comparable scenarios for critical decisions",
      diff_r2: "Prioritized risks with executive explanation",
      diff_r3: "Strategic anticipation in minutes",

      noc_h: "What PREDIQTA is NOT",
      noc1: "No guaranteed outcomes",
      noc2: "Does not eliminate risk",
      noc3: "Does not replace ERP, accounting, or operational BI",
      noc4: "Does not substitute executive judgment",
      noc5: "Not “magic prediction”",

      cta_h: "Evaluate your company before the next decision",
      cta_p: "Leave your info and we’ll contact you within 24–48 hours with a preliminary strategic maturity assessment.",
      cta_b1: "Preventive, structured approach",
      cta_b2: "Built for SMEs (15–120 employees)",
      cta_b3: "No exaggerated claims",

      f_email_l: "Email",
      f_role_l: "Role",
      f_role_ph: "Select an option",
      f_role_1: "Owner / CEO",
      f_role_2: "Director / Manager",
      f_role_3: "Finance",
      f_size_l: "Company size",
      f_size_ph: "Select an option",
      f_size_1: "15–30 employees",
      f_size_2: "31–60 employees",
      f_size_3: "61–120 employees",
      f_btn: "Evaluate my company",
      f_micro: "By submitting, you agree to be contacted about PREDIQTA. We do not share your data with third parties.",

      faq_h: "FAQ",
      faq1q: "Does this replace a consultant?",
      faq1a: "No. It reduces dependency for initial analysis and speeds up evaluation, but it does not replace human judgment or specialized advisory.",
      faq2q: "Do I need perfect data?",
      faq2a: "No. You can start with partial info and structured assumptions to get value early.",
      faq3q: "Does AI decide for me?",
      faq3a: "No. AI explains scenarios and risks. The decision is always yours.",

      footer_note: "Scenario-based strategic anticipation tool. MVP validation phase.",
      footer_contact: "Contact",
      footer_faq: "FAQ",
    }
  };

  let lang = "es";
  const pill = document.getElementById("langPill");
  const toggle = document.getElementById("langToggle");

  function applyLang(next) {
    lang = next;
    pill.textContent = next.toUpperCase();
    document.documentElement.lang = next;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = dict[next][key];
      if (!val) return;
      el.innerHTML = val;
    });
  }

  toggle?.addEventListener("click", () => {
    applyLang(lang === "es" ? "en" : "es");
  });

  applyLang("es");

  // Mock segmented buttons (purely visual)
  document.querySelectorAll(".segmented .seg").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".segmented .seg").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
})();