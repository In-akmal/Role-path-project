/* ==========================================================================
   RolePath — script.js
   Shared across every page: theme, nav, dummy backend (localStorage),
   roadmap catalogue, toasts, scroll reveals, FAQ, search.
   Designed to be swapped 1:1 for real REST calls to a Spring Boot backend
   later — see the RP.api.* stubs.
   ========================================================================== */

const RP = (() => {

  /* ------------------------------------------------------------------
     1. ROADMAP CATALOGUE (dummy data — would come from GET /api/roadmaps)
     ------------------------------------------------------------------ */
  const ROADMAPS = [
    { id: "java-basics", name: "Java Basics", category: "Software Development", desc: "Core syntax, OOP fundamentals and problem solving in Java.", duration: "6 Weeks", difficulty: "Beginner", price: 0, icon: "coffee" },
    { id: "python-basics", name: "Python Basics", category: "Software Development", desc: "Variables, control flow, functions and your first scripts.", duration: "6 Weeks", difficulty: "Beginner", price: 0, icon: "terminal" },
    { id: "html-basics", name: "HTML Basics", category: "Software Development", desc: "Structure the web with semantic, accessible markup.", duration: "3 Weeks", difficulty: "Beginner", price: 0, icon: "code" },
    { id: "css-basics", name: "CSS Basics", category: "Software Development", desc: "Layout, responsive design and styling fundamentals.", duration: "3 Weeks", difficulty: "Beginner", price: 0, icon: "palette" },
    { id: "c-basics", name: "C Programming Basics", category: "Software Development", desc: "Memory, pointers and the fundamentals every engineer needs.", duration: "5 Weeks", difficulty: "Beginner", price: 0, icon: "cpu" },

    { id: "java-fullstack", name: "Java Full Stack Developer", category: "Software Development", desc: "Spring Boot, REST APIs, React and databases end to end.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "layers" },
    { id: "python-fullstack", name: "Python Full Stack Developer", category: "Software Development", desc: "Django, REST APIs and modern frontend integration.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "stackserver" },
    { id: "frontend-dev", name: "Frontend Developer", category: "Software Development", desc: "HTML, CSS, JavaScript and modern UI frameworks.", duration: "8 Months", difficulty: "Intermediate", price: 29, icon: "monitor" },
    { id: "backend-dev", name: "Backend Developer", category: "Software Development", desc: "APIs, databases, authentication and system design.", duration: "8 Months", difficulty: "Intermediate", price: 29, icon: "database" },
    { id: "ai-engineer", name: "AI Engineer", category: "Artificial Intelligence", desc: "Machine learning, neural networks and deployment pipelines.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "brain" },
    { id: "data-scientist", name: "Data Scientist", category: "Data Science", desc: "Statistics, Python, visualization and predictive modelling.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "chart" },
    { id: "cloud-engineer", name: "Cloud Engineer", category: "Cloud Computing", desc: "AWS, Azure fundamentals, deployment and scaling.", duration: "10 Months", difficulty: "Intermediate", price: 29, icon: "cloud" },
    { id: "devops-engineer", name: "DevOps Engineer", category: "Cloud Computing", desc: "CI/CD, containers, orchestration and infrastructure as code.", duration: "10 Months", difficulty: "Advanced", price: 29, icon: "infinity" },
    { id: "cyber-security", name: "Cyber Security", category: "Cyber Security", desc: "Network security, ethical hacking and threat defence.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "shieldlock" },
    { id: "civil-engineer", name: "Civil Engineer", category: "Civil Engineering", desc: "Structural design, surveying and construction management.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "building" },
    { id: "mechanical-engineer", name: "Mechanical Engineer", category: "Mechanical Engineering", desc: "Thermodynamics, CAD design and manufacturing systems.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "gear" },
    { id: "automobile-engineer", name: "Automobile Engineer", category: "Automobile Engineering", desc: "Vehicle systems, powertrains and automotive design.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "car" },
    { id: "electronics-engineer", name: "Electronics Engineer", category: "Electronics Engineering", desc: "Circuit design, embedded systems and signal processing.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "circuit" },
    { id: "electrical-engineer", name: "Electrical Engineer", category: "Electrical Engineering", desc: "Power systems, machines and control fundamentals.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "bolt" },
  ];

  // Topic checklists for the roadmap-details page (dummy — GET /api/roadmaps/{id}/topics)
  // Each roadmap has its own real, sequenced curriculum. Falls back to `default` if an id is missing.
  const TOPIC_SETS = {
    default: [
      "Understand the fundamentals & set up your environment",
      "Core concepts and syntax",
      "Build your first mini project",
      "Intermediate concepts & best practices",
      "Working with real-world tools",
      "Hands-on project #2",
      "Advanced concepts",
      "Portfolio capstone project",
    ],
    "java-basics": [
      "Install the JDK & set up your IDE",
      "Variables, data types & operators",
      "Control flow: if/else, loops & switch",
      "Methods & parameters",
      "Arrays & basic collections",
      "OOP basics: classes, objects & constructors",
      "Inheritance, interfaces & polymorphism",
      "Exception handling & mini console project",
    ],
    "python-basics": [
      "Install Python & set up your environment",
      "Variables, data types & basic I/O",
      "Control flow: conditionals & loops",
      "Functions & scope",
      "Lists, tuples, dictionaries & sets",
      "String manipulation & file handling",
      "Modules, packages & pip",
      "Mini project: build a CLI tool",
    ],
    "html-basics": [
      "HTML document structure & syntax",
      "Text elements, headings & lists",
      "Links, images & semantic tags",
      "Forms & input elements",
      "Tables & multimedia embedding",
      "Accessibility basics & mini webpage project",
    ],
    "css-basics": [
      "CSS syntax, selectors & specificity",
      "Box model: margin, padding & borders",
      "Colors, typography & backgrounds",
      "Flexbox layout",
      "CSS Grid layout",
      "Responsive design & media queries",
    ],
    "c-basics": [
      "Setting up a C compiler & first program",
      "Variables, data types & operators",
      "Control flow & loops",
      "Functions & recursion",
      "Arrays & strings",
      "Pointers & memory basics",
      "Structures & a mini console project",
    ],
    "java-fullstack": [
      "Java fundamentals & OOP refresher",
      "Advanced Java: collections, streams & generics",
      "Database basics: SQL & JDBC",
      "Spring Core & dependency injection",
      "Spring Boot fundamentals",
      "Building REST APIs with Spring Boot",
      "Spring Data JPA & Hibernate",
      "Authentication & Spring Security",
      "Frontend basics: HTML, CSS & JavaScript",
      "React fundamentals for API integration",
      "Testing with JUnit & Postman",
      "Deploying a full-stack capstone project",
    ],
    "python-fullstack": [
      "Python fundamentals refresher",
      "Object-oriented Python & advanced concepts",
      "SQL & database design",
      "Django fundamentals & project structure",
      "Django models, views & templates",
      "Building REST APIs with Django REST Framework",
      "Authentication & permissions",
      "Frontend basics: HTML, CSS & JavaScript",
      "Connecting a frontend to your Django API",
      "Testing & debugging Django apps",
      "Deployment basics: Docker & cloud hosting",
      "Capstone: full-stack Python project",
    ],
    "frontend-dev": [
      "HTML5 & semantic markup",
      "CSS3, Flexbox & Grid",
      "JavaScript fundamentals",
      "DOM manipulation & events",
      "Asynchronous JS: fetch & promises",
      "Version control with Git & GitHub",
      "Introduction to React",
      "State management & hooks",
      "API integration in React",
      "Responsive & accessible UI design",
      "Deploying a portfolio project",
    ],
    "backend-dev": [
      "Programming fundamentals for backend (Node.js or Java)",
      "Databases: SQL vs NoSQL",
      "Designing REST APIs",
      "Authentication & authorization with JWT",
      "Middleware & error handling",
      "Working with ORMs",
      "Caching & performance basics",
      "API testing with Postman",
      "Logging & monitoring basics",
      "Docker & containerization basics",
      "Deploying a production-ready API",
    ],
    "ai-engineer": [
      "Python for AI & data handling",
      "Mathematics for ML: linear algebra & statistics",
      "Machine learning fundamentals",
      "Supervised & unsupervised learning",
      "Feature engineering & model evaluation",
      "Introduction to neural networks",
      "Deep learning with TensorFlow/PyTorch",
      "Computer vision basics",
      "Natural language processing basics",
      "Model deployment & APIs",
      "MLOps fundamentals",
      "Capstone: end-to-end AI project",
    ],
    "data-scientist": [
      "Python for data analysis: Pandas & NumPy",
      "Statistics & probability fundamentals",
      "Data cleaning & preprocessing",
      "Data visualization with Matplotlib & Seaborn",
      "SQL for data analysis",
      "Exploratory data analysis",
      "Machine learning fundamentals",
      "Regression & classification models",
      "Model evaluation & tuning",
      "Working with big data tools: basics",
      "Building dashboards & reports",
      "Capstone data science project",
    ],
    "cloud-engineer": [
      "Cloud computing fundamentals",
      "Linux & networking basics",
      "AWS core services: EC2, S3 & IAM",
      "Azure fundamentals overview",
      "Cloud storage & databases",
      "Infrastructure as Code with Terraform basics",
      "Load balancing & auto-scaling",
      "Cloud security fundamentals",
      "Monitoring & logging in the cloud",
      "Cost optimization basics",
      "Capstone: deploying a cloud application",
    ],
    "devops-engineer": [
      "Linux administration & shell scripting",
      "Git & version control workflows",
      "CI/CD fundamentals",
      "Docker & containerization",
      "Kubernetes fundamentals",
      "Infrastructure as Code: Terraform & Ansible",
      "Building CI/CD pipelines with Jenkins/GitHub Actions",
      "Monitoring with Prometheus & Grafana",
      "Cloud fundamentals: AWS/Azure",
      "Configuration management",
      "Security in DevOps: DevSecOps basics",
      "Capstone: automating a deployment pipeline",
    ],
    "cyber-security": [
      "Networking fundamentals",
      "Operating systems & Linux basics",
      "Security principles & threat models",
      "Cryptography fundamentals",
      "Web application security: OWASP Top 10",
      "Ethical hacking & penetration testing basics",
      "Network security & firewalls",
      "Malware analysis fundamentals",
      "Security tools: Wireshark, Nmap & Burp Suite",
      "Incident response & digital forensics basics",
      "Security compliance & governance",
      "Capstone: security audit project",
    ],
    "civil-engineer": [
      "Engineering mechanics fundamentals",
      "Building materials & construction basics",
      "Surveying fundamentals",
      "Structural analysis basics",
      "Concrete & steel structure design",
      "Geotechnical engineering basics",
      "AutoCAD & structural drafting",
      "Construction planning & estimation",
      "Building codes & safety standards",
      "Project management for construction",
      "Capstone: structural design project",
    ],
    "mechanical-engineer": [
      "Engineering mechanics & statics",
      "Thermodynamics fundamentals",
      "Materials science basics",
      "Machine design fundamentals",
      "CAD modeling with SolidWorks/AutoCAD",
      "Fluid mechanics basics",
      "Manufacturing processes",
      "Heat transfer fundamentals",
      "Mechanical systems & control basics",
      "Quality control & standards",
      "Capstone: mechanical design project",
    ],
    "automobile-engineer": [
      "Automobile engineering fundamentals",
      "Engine systems & internal combustion basics",
      "Vehicle dynamics & chassis design",
      "Transmission & powertrain systems",
      "Automotive electrical systems",
      "Braking & suspension systems",
      "Fuel systems & emissions basics",
      "Electric & hybrid vehicle fundamentals",
      "Automotive CAD & design tools",
      "Vehicle testing & safety standards",
      "Capstone: automotive design project",
    ],
    "electronics-engineer": [
      "Basic electronics & circuit theory",
      "Analog electronics fundamentals",
      "Digital electronics & logic gates",
      "Microcontrollers & embedded basics (Arduino)",
      "PCB design fundamentals",
      "Signal processing basics",
      "Communication systems fundamentals",
      "Sensors & embedded systems projects",
      "Power electronics basics",
      "IoT fundamentals",
      "Capstone: embedded systems project",
    ],
    "electrical-engineer": [
      "Circuit theory & network analysis",
      "Electrical machines fundamentals",
      "Power systems basics",
      "Control systems fundamentals",
      "Electrical measurements & instrumentation",
      "Power electronics basics",
      "Electrical wiring & safety standards",
      "Renewable energy systems basics",
      "Industrial automation basics",
      "Electrical CAD tools",
      "Capstone: electrical systems project",
    ],
  };

  // Custom outline icon set — one distinct, purpose-drawn icon per roadmap (24x24 viewBox, stroke-based).
  const CATEGORY_ICON = {
    code: "M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12",
    terminal: "M4 4h16v16H4z M8 10l3 2-3 2 M13 14h3",
    palette: "M12 2a9 9 0 1 0 0 18c1.4 0 2-.8 2-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4 8 8 0 0 0-9-8z M7.5 12.2a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8z M11 8.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8z M15.6 9.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8z",
    cpu: "M8 3v3M16 3v3M8 18v3M16 18v3M3 8h3M3 16h3M18 8h3M18 16h3M7 7h10v10H7z",
    coffee: "M6 8h11a3 3 0 0 1 0 6h-1 M6 8v7a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4v-1 M9 3.5c-1 .8-1 1.7 0 2.5 M13 3.5c-1 .8-1 1.7 0 2.5",
    layers: "M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5",
    stackserver: "M4 4h16v6H4z M4 14h16v6H4z M8 7h.01 M8 17h.01 M12 7h4 M12 17h4",
    monitor: "M3 5h18v12H3z M8 21h8 M12 17v4",
    database: "M12 5c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3z M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5 M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
    brain: "M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z",
    chart: "M4 20V10M11 20V4M18 20v-7",
    cloud: "M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 17.6 9H18a4 4 0 0 1 0 8H7z M12 12.5v5 M9.5 15l2.5-2.5 2.5 2.5",
    infinity: "M18.5 8.5a3.5 3.5 0 0 0-5 0L12 10l-1.5-1.5a3.5 3.5 0 1 0 0 5L12 12l1.5 1.5a3.5 3.5 0 1 0 3.5-3.5",
    shieldlock: "M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z M9.5 12.5h5v3.5h-5z M10.5 12.5v-1.5a1.5 1.5 0 0 1 3 0v1.5",
    building: "M4 21V7l8-4 8 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01",
    gear: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1c.6.5 1.3.9 2 1.2L10 21h4l.5-2.6c.7-.3 1.4-.7 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z",
    car: "M5 17h14 M5 17a2 2 0 1 0 4 0 M15 17a2 2 0 1 0 4 0 M5 17l1.5-5.5a2 2 0 0 1 1.9-1.5h7.2a2 2 0 0 1 1.9 1.5L19 17 M6 11h12",
    circuit: "M4 9h4v4H4z M16 9h4v4h-4z M8 11h8 M6 9V5h4 M14 5h4v4",
    bolt: "M13 2 4 14h6l-1 8 9-12h-6l1-8z",
  };

  /* ------------------------------------------------------------------
     2. DUMMY BACKEND — localStorage-backed "API"
     In production, replace each method body with a fetch() call to the
     Spring Boot REST API and keep the same function signatures.
     ------------------------------------------------------------------ */
  const KEY = "rolepath_state_v1";

  function defaultState(){
    return {
      user: null, // { name, email }
      purchased: [],     // roadmap ids bought
      freeStarted: [],   // free roadmap ids started
      progress: {},      // { roadmapId: { topicIndex: true } }
      theme: "light",
    };
  }

  function loadState(){
    try{
      const raw = localStorage.getItem(KEY);
      return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
    }catch(e){ return defaultState(); }
  }

  function saveState(state){
    localStorage.setItem(KEY, JSON.stringify(state));
  }

  let state = loadState();

  const api = {
    // ---- Auth ----
    login(email, name){
      state.user = { name: name || email.split("@")[0], email };
      saveState(state);
      return state.user;
    },
    register(name, email){
      state.user = { name, email };
      saveState(state);
      return state.user;
    },
    logout(){
      state.user = null;
      saveState(state);
    },
    isLoggedIn(){ return !!state.user; },
    currentUser(){ return state.user; },

    // ---- Roadmaps ----
    getRoadmaps(){ return ROADMAPS; },
    getRoadmap(id){ return ROADMAPS.find(r => r.id === id); },
    getTopics(id){ return TOPIC_SETS[id] || TOPIC_SETS.default; },

    // ---- Purchases / enrolment ----
    isUnlocked(id){
      const r = api.getRoadmap(id);
      if(!r) return false;
      if(r.price === 0) return state.freeStarted.includes(id) || true; // free always accessible
      return state.purchased.includes(id);
    },
    startFree(id){
      if(!state.freeStarted.includes(id)) state.freeStarted.push(id);
      saveState(state);
    },
    purchase(id){
      if(!state.purchased.includes(id)) state.purchased.push(id);
      saveState(state);
    },
    getPurchased(){ return state.purchased.map(id => api.getRoadmap(id)).filter(Boolean); },
    getFreeStarted(){ return state.freeStarted.map(id => api.getRoadmap(id)).filter(Boolean); },
    getEnrolled(){
      const ids = new Set([...state.purchased, ...state.freeStarted]);
      return [...ids].map(id => api.getRoadmap(id)).filter(Boolean);
    },

    // ---- Progress ----
    getProgress(id){
      const topics = api.getTopics(id);
      const done = state.progress[id] || {};
      const doneCount = Object.values(done).filter(Boolean).length;
      return {
        done,
        doneCount,
        total: topics.length,
        pct: topics.length ? Math.round((doneCount / topics.length) * 100) : 0,
      };
    },
    setTopicDone(id, topicIndex, isDone){
      if(!state.progress[id]) state.progress[id] = {};
      state.progress[id][topicIndex] = isDone;
      saveState(state);
      return api.getProgress(id);
    },
    getOverallProgress(){
      const enrolled = api.getEnrolled();
      if(!enrolled.length) return 0;
      const total = enrolled.reduce((sum, r) => sum + api.getProgress(r.id).pct, 0);
      return Math.round(total / enrolled.length);
    },

    // ---- Theme ----
    getTheme(){ return state.theme; },
    setTheme(t){ state.theme = t; saveState(state); },
  };

  /* ------------------------------------------------------------------
     3. UI: Theme toggle
     ------------------------------------------------------------------ */
  function initTheme(){
    const saved = api.getTheme();
    document.documentElement.setAttribute("data-theme", saved);
    document.querySelectorAll("[data-theme-toggle]").forEach(btn => {
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        api.setTheme(next);
      });
    });
  }

  /* ------------------------------------------------------------------
     4. UI: Mobile nav toggle
     ------------------------------------------------------------------ */
  function initNav(){
    const toggle = document.querySelector("[data-nav-toggle]");
    const links = document.querySelector("[data-nav-links]");
    if(toggle && links){
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("open");
        links.classList.toggle("open");
      });
      links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        toggle.classList.remove("open");
        links.classList.remove("open");
      }));
    }

    // Reflect auth state in nav
    const authOnly = document.querySelectorAll("[data-auth-only]");
    const guestOnly = document.querySelectorAll("[data-guest-only]");
    const loggedIn = api.isLoggedIn();
    authOnly.forEach(el => el.style.display = loggedIn ? "" : "none");
    guestOnly.forEach(el => el.style.display = loggedIn ? "none" : "");

    const nameSlots = document.querySelectorAll("[data-user-initial]");
    if(loggedIn){
      const initial = api.currentUser().name.charAt(0).toUpperCase();
      nameSlots.forEach(el => el.textContent = initial);
    }

    document.querySelectorAll("[data-logout]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        api.logout();
        showToast("You've been logged out");
        setTimeout(() => window.location.href = resolvePath("index.html"), 700);
      });
    });
  }

  // Resolve a root-relative path whether we're at / or /pages/
  function resolvePath(path){
    const inPages = window.location.pathname.includes("/pages/");
    if(path.startsWith("pages/")) return inPages ? path.replace("pages/", "") : path;
    if(path === "index.html") return inPages ? "../index.html" : "index.html";
    return path;
  }

  /* ------------------------------------------------------------------
     5. UI: Toast
     ------------------------------------------------------------------ */
  let toastTimer;
  function showToast(message){
    let toast = document.querySelector(".toast");
    if(!toast){
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  /* ------------------------------------------------------------------
     6. UI: FAQ accordion
     ------------------------------------------------------------------ */
  function initFAQ(){
    document.querySelectorAll(".faq-item").forEach(item => {
      const q = item.querySelector(".faq-question");
      const a = item.querySelector(".faq-answer");
      if(!q || !a) return;
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        item.closest(".faq-list")?.querySelectorAll(".faq-item.open").forEach(other => {
          if(other !== item){
            other.classList.remove("open");
            other.querySelector(".faq-answer").style.maxHeight = null;
          }
        });
        item.classList.toggle("open", !isOpen);
        a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
      });
    });
  }

  /* ------------------------------------------------------------------
     7. UI: Scroll reveal
     ------------------------------------------------------------------ */
  function initReveal(){
    const els = document.querySelectorAll(".reveal");
    if(!("IntersectionObserver" in window)){
      els.forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  }

  /* ------------------------------------------------------------------
     8. Icon helper
     ------------------------------------------------------------------ */
  function iconPath(name){ return CATEGORY_ICON[name] || CATEGORY_ICON.code; }

  /* ------------------------------------------------------------------
     9. Roadmap card renderer (used on home + roadmaps page)
     ------------------------------------------------------------------ */
  function roadmapCardHTML(r, opts = {}){
    const linkBase = opts.pagesRelative ? "" : "pages/";
    const isFree = r.price === 0;
    const diffClass = "difficulty-" + r.difficulty.toLowerCase();
    return `
    <article class="roadmap-card reveal">
      <div class="roadmap-thumb" style="background: ${isFree ? 'linear-gradient(135deg,#22C55E,#16A34A)' : 'linear-gradient(135deg,#2563EB,#7C3AED)'}">
        <span class="badge ${isFree ? 'badge-free' : 'badge-premium'} badge-position">${isFree ? 'Free' : 'Premium'}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${iconPath(r.icon)}"/></svg>
      </div>
      <div class="roadmap-body">
        <span class="difficulty-tag ${diffClass}">${r.difficulty}</span>
        <h3>${r.name}</h3>
        <p class="desc">${r.desc}</p>
        <div class="roadmap-meta">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>${r.duration}</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19h16M4 15h16M4 11h10M4 7h6"/></svg>${r.category}</span>
        </div>
        <div class="roadmap-footer">
          <span class="price ${isFree ? 'free' : 'premium'}">${isFree ? 'FREE' : '₹29'}</span>
          <a href="${linkBase}roadmap-details.html?id=${r.id}" class="btn ${isFree ? 'btn-success' : 'btn-primary'} btn-sm">${isFree ? 'Start Learning' : 'Unlock for ₹29'}</a>
        </div>
      </div>
    </article>`;
  }

  /* ------------------------------------------------------------------
     10. Boot
     ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    initFAQ();
    initReveal();

    // Highlight active nav link
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a[data-nav]").forEach(a => {
      if(a.getAttribute("data-nav") === path) a.classList.add("active");
    });
  });

  return { api, showToast, initFAQ, initReveal, iconPath, roadmapCardHTML, resolvePath, ROADMAPS };
})();
