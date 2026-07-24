/* ==========================================================================
   RolePath — script.js
   Shared across every page: theme, nav, dummy backend (localStorage),
   roadmap catalogue, toasts, scroll reveals, FAQ, search.
   Designed to be swapped 1:1 for real REST calls to a Spring Boot backend
   later — see the RP.api.* stubs.

   V2: Extended with gamification layer — XP, streaks, levels, badges,
       study time, daily challenges, activity log, analytics.
   ========================================================================== */

const RP = (() => {

  /* ------------------------------------------------------------------
     1. ROADMAP CATALOGUE (dummy data — would come from GET /api/roadmaps)
     ------------------------------------------------------------------ */
  const ROADMAPS = [
<<<<<<< HEAD
    { id: "java-basics", name: "Java Basics", category: "Software Development", desc: "Core syntax, OOP fundamentals and problem solving in Java.", duration: "6 Weeks", difficulty: "Beginner", price: 0, icon: "code", rating: 4.8, students: 4200, tags: ["Java", "OOP", "Data Types", "Control Flow"], demand: "High" },
    { id: "python-basics", name: "Python Basics", category: "Software Development", desc: "Variables, control flow, functions and your first scripts.", duration: "6 Weeks", difficulty: "Beginner", price: 0, icon: "code", rating: 4.9, students: 5000, tags: ["Python", "Scripting", "Functions", "Syntax"], demand: "Very High" },
    { id: "html-basics", name: "HTML Basics", category: "Software Development", desc: "Structure the web with semantic, accessible markup.", duration: "3 Weeks", difficulty: "Beginner", price: 0, icon: "layout", rating: 4.7, students: 3800, tags: ["HTML5", "Web", "Markup", "Semantic"], demand: "High" },
    { id: "css-basics", name: "CSS Basics", category: "Software Development", desc: "Layout, responsive design and styling fundamentals.", duration: "3 Weeks", difficulty: "Beginner", price: 0, icon: "layout", rating: 4.7, students: 3500, tags: ["CSS3", "Flexbox", "Grid", "Responsive"], demand: "High" },
    { id: "c-basics", name: "C Programming Basics", category: "Software Development", desc: "Memory, pointers and the fundamentals every engineer needs.", duration: "5 Weeks", difficulty: "Beginner", price: 0, icon: "cpu", rating: 4.6, students: 2100, tags: ["C", "Pointers", "Memory", "Logic"], demand: "Growing" },

    { id: "java-fullstack", name: "Java Full Stack Developer", category: "Software Development", desc: "Spring Boot, REST APIs, React and databases end to end.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "code", rating: 4.8, students: 2800, tags: ["Java", "Spring Boot", "React", "PostgreSQL", "REST"], demand: "Very High" },
    { id: "python-fullstack", name: "Python Full Stack Developer", category: "Software Development", desc: "Django, REST APIs and modern frontend integration.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "code", rating: 4.7, students: 2400, tags: ["Python", "Django", "React", "SQL", "APIs"], demand: "High" },
    { id: "frontend-dev", name: "Frontend Developer", category: "Software Development", desc: "HTML, CSS, JavaScript and modern UI frameworks.", duration: "8 Months", difficulty: "Intermediate", price: 29, icon: "layout", rating: 4.9, students: 3500, tags: ["React", "JavaScript", "CSS", "UI/UX", "Git"], demand: "Very High" },
    { id: "backend-dev", name: "Backend Developer", category: "Software Development", desc: "APIs, databases, authentication and system design.", duration: "8 Months", difficulty: "Intermediate", price: 29, icon: "server", rating: 4.8, students: 2900, tags: ["Node.js", "Express", "MongoDB", "System Design", "Auth"], demand: "Very High" },
    { id: "ai-engineer", name: "AI Engineer", category: "Artificial Intelligence", desc: "Machine learning, neural networks and deployment pipelines.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "cpu", rating: 4.9, students: 2100, tags: ["Python", "TensorFlow", "PyTorch", "ML", "Deep Learning"], demand: "Very High" },
    { id: "data-scientist", name: "Data Scientist", category: "Data Science", desc: "Statistics, Python, visualization and predictive modelling.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "chart", rating: 4.7, students: 1800, tags: ["Python", "Pandas", "Scikit-Learn", "Stats", "Data Viz"], demand: "High" },
    { id: "cloud-engineer", name: "Cloud Engineer", category: "Cloud Computing", desc: "AWS, Azure fundamentals, deployment and scaling.", duration: "10 Months", difficulty: "Intermediate", price: 29, icon: "cloud", rating: 4.8, students: 2300, tags: ["AWS", "Azure", "Cloud Concepts", "Docker", "Linux"], demand: "Very High" },
    { id: "devops-engineer", name: "DevOps Engineer", category: "Cloud Computing", desc: "CI/CD, containers, orchestration and infrastructure as code.", duration: "10 Months", difficulty: "Advanced", price: 29, icon: "cloud", rating: 4.8, students: 1900, tags: ["Kubernetes", "Docker", "CI/CD", "Terraform", "Jenkins"], demand: "Very High" },
    { id: "cyber-security", name: "Cyber Security", category: "Cyber Security", desc: "Network security, ethical hacking and threat defence.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "shield", rating: 4.7, students: 1600, tags: ["Network Sec", "Ethical Hacking", "Kali Linux", "OWASP", "Crypto"], demand: "Growing" },
    { id: "civil-engineer", name: "Civil Engineer", category: "Civil Engineering", desc: "Structural design, surveying and construction management.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "building", rating: 4.5, students: 1100, tags: ["AutoCAD", "Structures", "Surveying", "Materials", "Management"], demand: "Growing" },
    { id: "mechanical-engineer", name: "Mechanical Engineer", category: "Mechanical Engineering", desc: "Thermodynamics, CAD design and manufacturing systems.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "gear", rating: 4.6, students: 1300, tags: ["SolidWorks", "Thermodynamics", "CAD", "Manufacturing", "Mechanics"], demand: "High" },
    { id: "automobile-engineer", name: "Automobile Engineer", category: "Automobile Engineering", desc: "Vehicle systems, powertrains and automotive design.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "gear", rating: 4.5, students: 950, tags: ["Automotive", "Powertrains", "Design", "EV", "Dynamics"], demand: "Growing" },
    { id: "electronics-engineer", name: "Electronics Engineer", category: "Electronics Engineering", desc: "Circuit design, embedded systems and signal processing.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "chip", rating: 4.6, students: 1200, tags: ["Circuits", "Embedded C", "Microcontrollers", "Signals", "IoT"], demand: "High" },
    { id: "electrical-engineer", name: "Electrical Engineer", category: "Electrical Engineering", desc: "Power systems, machines and control fundamentals.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "bolt", rating: 4.5, students: 1400, tags: ["Power Systems", "Machines", "Control Systems", "High Voltage", "Renewables"], demand: "High" }
=======
    { id: "java-basics", name: "Java Basics", category: "Software Development", desc: "Core syntax, OOP fundamentals and problem solving in Java.", duration: "6 Weeks", difficulty: "Beginner", price: 0, icon: "code" },
    { id: "python-basics", name: "Python Basics", category: "Software Development", desc: "Variables, control flow, functions and your first scripts.", duration: "6 Weeks", difficulty: "Beginner", price: 0, icon: "code" },
    { id: "html-basics", name: "HTML Basics", category: "Software Development", desc: "Structure the web with semantic, accessible markup.", duration: "3 Weeks", difficulty: "Beginner", price: 0, icon: "layout" },
    { id: "css-basics", name: "CSS Basics", category: "Software Development", desc: "Layout, responsive design and styling fundamentals.", duration: "3 Weeks", difficulty: "Beginner", price: 0, icon: "layout" },
    { id: "c-basics", name: "C Programming Basics", category: "Software Development", desc: "Memory, pointers and the fundamentals every engineer needs.", duration: "5 Weeks", difficulty: "Beginner", price: 0, icon: "cpu" },

    { id: "java-fullstack", name: "Java Full Stack Developer", category: "Software Development", desc: "Spring Boot, REST APIs, React and databases end to end.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "code" },
    { id: "python-fullstack", name: "Python Full Stack Developer", category: "Software Development", desc: "Django, REST APIs and modern frontend integration.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "code" },
    { id: "frontend-dev", name: "Frontend Developer", category: "Software Development", desc: "HTML, CSS, JavaScript and modern UI frameworks.", duration: "8 Months", difficulty: "Intermediate", price: 29, icon: "layout" },
    { id: "backend-dev", name: "Backend Developer", category: "Software Development", desc: "APIs, databases, authentication and system design.", duration: "8 Months", difficulty: "Intermediate", price: 29, icon: "server" },
    { id: "ai-engineer", name: "AI Engineer", category: "Artificial Intelligence", desc: "Machine learning, neural networks and deployment pipelines.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "cpu" },
    { id: "data-scientist", name: "Data Scientist", category: "Data Science", desc: "Statistics, Python, visualization and predictive modelling.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "chart" },
    { id: "cloud-engineer", name: "Cloud Engineer", category: "Cloud Computing", desc: "AWS, Azure fundamentals, deployment and scaling.", duration: "10 Months", difficulty: "Intermediate", price: 29, icon: "cloud" },
    { id: "devops-engineer", name: "DevOps Engineer", category: "Cloud Computing", desc: "CI/CD, containers, orchestration and infrastructure as code.", duration: "10 Months", difficulty: "Advanced", price: 29, icon: "cloud" },
    { id: "cyber-security", name: "Cyber Security", category: "Cyber Security", desc: "Network security, ethical hacking and threat defence.", duration: "1 Year", difficulty: "Advanced", price: 29, icon: "shield" },
    { id: "civil-engineer", name: "Civil Engineer", category: "Civil Engineering", desc: "Structural design, surveying and construction management.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "building" },
    { id: "mechanical-engineer", name: "Mechanical Engineer", category: "Mechanical Engineering", desc: "Thermodynamics, CAD design and manufacturing systems.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "gear" },
    { id: "automobile-engineer", name: "Automobile Engineer", category: "Automobile Engineering", desc: "Vehicle systems, powertrains and automotive design.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "gear" },
    { id: "electronics-engineer", name: "Electronics Engineer", category: "Electronics Engineering", desc: "Circuit design, embedded systems and signal processing.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "chip" },
    { id: "electrical-engineer", name: "Electrical Engineer", category: "Electrical Engineering", desc: "Power systems, machines and control fundamentals.", duration: "1 Year", difficulty: "Intermediate", price: 29, icon: "bolt" },
>>>>>>> bbbdc555bfc8fb217e27199091209978f3183aec
  ];

  // Topic checklists for the roadmap-details page (dummy — GET /api/roadmaps/{id}/topics)
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
<<<<<<< HEAD
    "java-basics": ["Intro to Java & JVM", "Variables & Data Types", "Operators & Expressions", "Control Flow Statements", "Loops & Iterations", "Arrays & Strings", "Methods & Functions", "Introduction to OOP", "Classes & Objects", "Constructors", "Basic Inheritance", "Final Mini-Project"],
    "python-basics": ["Introduction to Python", "Variables & Types", "Basic Operators", "String Manipulation", "Lists & Tuples", "Dictionaries & Sets", "If/Else Conditions", "For & While Loops", "Functions & Scope", "File I/O Basics", "Error Handling (Try/Except)", "Final Script Project"],
    "html-basics": ["How the Web Works", "HTML5 Structure", "Headings & Paragraphs", "Lists & Links", "Images & Media", "Tables & Data", "Forms & Inputs", "Semantic HTML5 Elements", "Accessibility Basics", "Meta Tags & SEO Basics", "Project: Personal Webpage"],
    "css-basics": ["CSS Syntax & Selectors", "Colors & Backgrounds", "The Box Model", "Margins, Padding & Borders", "Typography & Web Fonts", "CSS Display Property", "Introduction to Flexbox", "Flexbox Layouts", "CSS Grid Basics", "Responsive Design & Media Queries", "CSS Transitions", "Project: Styled Landing Page"],
    "c-basics": ["Introduction to C", "Data Types & Variables", "Operators", "Conditional Statements", "Loops", "Functions", "Arrays (1D & 2D)", "Pointers Fundamentals", "Strings in C", "Structures & Unions", "Dynamic Memory Allocation", "File Handling"],
    "java-fullstack": ["Java Fundamentals Recap", "Advanced OOP & Collections", "Java 8+ Features & Streams", "Multithreading & Concurrency", "Database Basics & SQL", "JDBC & Hibernate (JPA)", "Spring Framework Core", "Spring Boot Basics", "Building RESTful APIs", "Spring Security & JWT", "HTML/CSS/JS Refresher", "React.js Fundamentals", "State Management in React", "Connecting React to Spring Boot APIs", "Deployment (Docker & AWS)", "Capstone Full Stack Project"],
    "python-fullstack": ["Python Fundamentals Recap", "Advanced Python & OOP", "Relational Databases & SQL", "Introduction to Django", "Django Models & ORM", "Django Views & Templates", "Django REST Framework", "Authentication & Permissions", "Frontend Basics (HTML/CSS/JS)", "React.js Core Concepts", "React Hooks & Context", "Consuming Django APIs with React", "Testing in Django & React", "Deployment with Gunicorn & Nginx", "Capstone Full Stack Project"],
    "frontend-dev": ["HTML5 Semantic Elements & Accessibility", "CSS3 Flexbox & Grid Mastery", "Responsive Design & Media Queries", "JavaScript ES6+ Fundamentals", "DOM Manipulation & Events", "Async JavaScript: Promises & Async/Await", "Version Control with Git & GitHub", "React.js Core Concepts & JSX", "React Hooks & State Management", "React Router & SPA Navigation", "API Integration & REST Clients", "CSS-in-JS & Tailwind CSS", "Testing with Jest & React Testing Library", "Build Tools: Webpack, Vite & Babel", "Performance Optimization & Core Web Vitals", "TypeScript Fundamentals", "Deployment & CI/CD Basics", "Portfolio Project: Build a Complete Web App"],
    "backend-dev": ["Backend Architecture Basics", "Node.js Fundamentals", "Express.js Framework", "RESTful API Design", "Relational Databases & PostgreSQL", "NoSQL Databases & MongoDB", "Authentication & Authorization (JWT)", "API Security & Rate Limiting", "Caching with Redis", "Message Queues (RabbitMQ/Kafka)", "WebSockets & Real-time Communication", "Microservices Architecture Basics", "Testing Backend Systems", "Docker & Containerization", "CI/CD Pipelines", "Capstone API Project"],
    "ai-engineer": ["Python for AI", "Mathematics for Machine Learning", "Data Processing with Pandas/NumPy", "Exploratory Data Analysis", "Scikit-Learn Basics", "Supervised Learning Algorithms", "Unsupervised Learning Algorithms", "Model Evaluation & Tuning", "Deep Learning Fundamentals", "Neural Networks with PyTorch/TensorFlow", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks & NLP Basics", "Transformer Models & LLMs", "Model Deployment & Serving", "MLOps Basics"],
    "data-scientist": ["Python & Jupyter Ecosystem", "Statistics & Probability", "Data Wrangling with Pandas", "Data Visualization (Matplotlib/Seaborn)", "SQL for Data Science", "Exploratory Data Analysis (EDA)", "Hypothesis Testing", "Machine Learning Basics", "Regression & Classification", "Clustering & Dimensionality Reduction", "Feature Engineering", "Time Series Analysis", "Storytelling with Data", "Big Data Basics (Spark)", "Capstone Data Project"],
    "cloud-engineer": ["Cloud Computing Concepts", "Virtualization & Containers", "Linux Administration Basics", "Networking Fundamentals", "AWS/Azure Core Services", "IAM & Cloud Security", "Compute & Serverless", "Cloud Storage Solutions", "Cloud Databases", "Infrastructure as Code (Terraform)", "Monitoring & Logging (CloudWatch/Azure Monitor)", "High Availability & Fault Tolerance", "Cost Management", "Cloud Migration Basics", "Capstone Cloud Deployment"],
    "devops-engineer": ["DevOps Culture & Practices", "Advanced Linux OS & Shell Scripting", "Version Control & Git Workflows", "Networking & Security Basics", "Continuous Integration (Jenkins/GitLab CI)", "Continuous Deployment Strategies", "Docker Containerization", "Kubernetes Architecture", "Kubernetes Deployments & Services", "Helm & K8s Package Management", "Infrastructure as Code (Terraform)", "Configuration Management (Ansible)", "Monitoring & Observability (Prometheus/Grafana)", "Logging (ELK Stack)", "DevSecOps Basics"],
    "cyber-security": ["Networking Concepts (OSI & TCP/IP)", "Information Security Principles", "Linux & Windows Security", "Cryptography Basics", "Threats, Vulnerabilities & Attacks", "Identity & Access Management", "Web Application Security (OWASP Top 10)", "Network Security & Firewalls", "Ethical Hacking & Penetration Testing", "Security Operations Center (SOC)", "Incident Response & Forensics", "Malware Analysis Basics", "Cloud Security", "Compliance & Risk Management", "Capstone Security Audit"],
    "civil-engineer": ["Engineering Mathematics", "Engineering Mechanics", "Solid Mechanics & Materials", "Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics & Hydraulics", "Environmental Engineering", "Transportation Engineering", "Surveying & Geomatics", "Construction Materials", "Construction Project Management", "Reinforced Concrete Design", "Steel Structure Design", "AutoCAD & Civil 3D Basics", "Capstone Design Project"],
    "mechanical-engineer": ["Engineering Mathematics", "Engineering Mechanics (Statics & Dynamics)", "Thermodynamics", "Fluid Mechanics", "Heat & Mass Transfer", "Strength of Materials", "Kinematics & Dynamics of Machines", "Machine Design", "Manufacturing Processes", "Material Science", "CAD/CAM & SolidWorks", "Mechatronics & Robotics", "HVAC Systems", "Renewable Energy Systems", "Capstone Mechanical Project"],
    "automobile-engineer": ["Automotive Engines & Combustion", "Automotive Chassis & Suspension", "Transmission Systems", "Automotive Electrical & Electronics", "Vehicle Dynamics", "Automotive Safety Systems", "Electric & Hybrid Vehicles (EVs)", "Battery Management Systems", "Automotive Aerodynamics", "CAD for Auto Components", "Manufacturing of Auto Parts", "Automotive Testing & Homologation", "Autonomous Vehicles Basics", "Automotive Embedded Systems", "Capstone EV Project"],
    "electronics-engineer": ["Network Theory & Circuits", "Electronic Devices & Circuits", "Digital Electronics", "Analog Circuits", "Signals & Systems", "Microprocessors & Microcontrollers", "Embedded Systems Design", "Control Systems", "Electromagnetic Theory", "Communication Systems", "VLSI Design Basics", "Digital Signal Processing (DSP)", "Internet of Things (IoT)", "PCB Design (Altium/KiCad)", "Capstone Electronics Project"],
    "electrical-engineer": ["Electric Circuits & Networks", "Electromagnetic Fields", "Electrical Machines (Transformers, Motors)", "Power Systems Generation", "Power Transmission & Distribution", "Power System Protection & Switchgear", "Control Systems Engineering", "Power Electronics", "Electrical Measurements & Instrumentation", "Microprocessors & Applications", "High Voltage Engineering", "Renewable Energy & Smart Grids", "Electric Drives", "Energy Management & Auditing", "Capstone Power Project"]
  };

  const ROADMAP_DETAILS = {
    "java-basics": {
      learningOutcomes: ["Write basic Java programs", "Understand Object-Oriented principles", "Use IDEs effectively", "Handle arrays and strings", "Create reusable methods", "Solve basic algorithmic problems"],
      skills: ["Java", "OOP", "Variables", "Control Flow", "Methods", "Arrays"],
      careers: [{title: "Junior Java Developer", salary: "₹3-6 LPA"}],
      prerequisites: ["No prior experience needed", "Basic computer literacy"],
      reviews: [
        {name: "Karan T.", rating: 5, text: "Great introduction to Java. The concepts are explained very clearly.", date: "1 week ago"},
        {name: "Sneha P.", rating: 4, text: "Good pacing, but I wish there were more exercises on loops.", date: "3 weeks ago"},
        {name: "Rohan D.", rating: 5, text: "Helped me clear my college exams easily!", date: "1 month ago"}
      ],
      faqs: [
        {q: "Is Java still relevant?", a: "Yes, Java is one of the most widely used languages in enterprise applications."},
        {q: "Do I need any paid software?", a: "No, we use free IDEs like Eclipse or IntelliJ IDEA Community Edition."}
      ]
    },
    "python-basics": {
      learningOutcomes: ["Write Python scripts", "Understand fundamental data structures", "Work with loops and conditions", "Read and write to files", "Handle exceptions gracefully", "Build small automated scripts"],
      skills: ["Python", "Scripting", "Lists & Dictionaries", "File I/O"],
      careers: [{title: "Junior Python Developer", salary: "₹3-7 LPA"}],
      prerequisites: ["No prior coding experience required", "A computer to run Python"],
      reviews: [
        {name: "Anjali S.", rating: 5, text: "Python is so easy to learn! This roadmap made it even easier.", date: "2 days ago"},
        {name: "Vikram R.", rating: 5, text: "Perfect for beginners. Transitioned from non-IT to tech using this.", date: "1 week ago"},
        {name: "Neha G.", rating: 4, text: "Very clear instructions. Loved the final project.", date: "2 weeks ago"}
      ],
      faqs: [
        {q: "What can I do after learning Python?", a: "You can move into web development (Django), data science, AI, or automation."},
        {q: "Is Python good for beginners?", a: "Yes! Its syntax is very readable and beginner-friendly."}
      ]
    },
    "html-basics": {
      learningOutcomes: ["Structure web pages", "Use semantic HTML elements", "Add links and images", "Create data tables", "Build forms for user input", "Understand web accessibility"],
      skills: ["HTML5", "Web Structure", "Forms", "Accessibility"],
      careers: [{title: "Web Content Manager", salary: "₹2-5 LPA"}],
      prerequisites: ["No prior experience needed", "A simple text editor"],
      reviews: [
        {name: "Arjun M.", rating: 5, text: "A quick and effective way to learn HTML.", date: "5 days ago"},
        {name: "Priya V.", rating: 4, text: "Good coverage of semantic tags, very helpful.", date: "2 weeks ago"},
        {name: "Siddharth K.", rating: 5, text: "Built my first webpage in just a few days!", date: "1 month ago"}
      ],
      faqs: [
        {q: "Is HTML a programming language?", a: "No, it's a markup language used to structure content on the web."},
        {q: "What should I learn next?", a: "CSS is the natural next step to add styling to your HTML pages."}
      ]
    },
    "css-basics": {
      learningOutcomes: ["Style web pages beautifully", "Understand the Box Model", "Use Flexbox for 1D layouts", "Use Grid for 2D layouts", "Make designs responsive", "Add simple animations"],
      skills: ["CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
      careers: [{title: "Junior Web Designer", salary: "₹3-6 LPA"}],
      prerequisites: ["Completion of HTML Basics", "Basic understanding of web structure"],
      reviews: [
        {name: "Meera R.", rating: 5, text: "Flexbox finally makes sense to me now!", date: "3 days ago"},
        {name: "Kunal S.", rating: 4, text: "Great roadmap, lots of good tips on responsive design.", date: "1 week ago"},
        {name: "Divya N.", rating: 5, text: "My websites look so much better after following this.", date: "2 weeks ago"}
      ],
      faqs: [
        {q: "Do I need to learn Bootstrap or Tailwind?", a: "It's best to learn plain CSS first before moving to frameworks."},
        {q: "How important is responsive design?", a: "Crucial! Most users browse on mobile devices today."}
      ]
    },
    "c-basics": {
      learningOutcomes: ["Understand memory management", "Write procedural C code", "Master pointers and arrays", "Use structures and unions", "Perform basic file operations", "Develop algorithmic thinking"],
      skills: ["C", "Pointers", "Memory Management", "Algorithms"],
      careers: [{title: "Embedded Software Trainee", salary: "₹3-6 LPA"}],
      prerequisites: ["Strong logical thinking", "Basic computer knowledge"],
      reviews: [
        {name: "Tarun B.", rating: 5, text: "The section on pointers was a lifesaver.", date: "1 week ago"},
        {name: "Smriti L.", rating: 4, text: "Tough subject, but the roadmap breaks it down well.", date: "3 weeks ago"},
        {name: "Abhishek C.", rating: 5, text: "Excellent for clearing college fundamentals.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Why learn C today?", a: "C gives you a deep understanding of how computers work under the hood."},
        {q: "Is C harder than Python?", a: "Yes, it requires manual memory management and has stricter syntax."}
      ]
    },
    "java-fullstack": {
      learningOutcomes: ["Build end-to-end applications", "Design robust REST APIs with Spring Boot", "Manage state in React", "Perform CRUD operations with PostgreSQL", "Secure applications with JWT", "Deploy full-stack apps"],
      skills: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Docker", "Git"],
      careers: [{title: "Java Full Stack Developer", salary: "₹7-18 LPA"}, {title: "Backend Developer", salary: "₹6-15 LPA"}],
      prerequisites: ["Basic Java knowledge", "Basic HTML/CSS/JS knowledge"],
      reviews: [
        {name: "Rajiv S.", rating: 5, text: "Incredible depth. The Spring Security module was exactly what I needed.", date: "1 week ago"},
        {name: "Snehal K.", rating: 5, text: "Got a job at an MNC after completing this path. Thank you!", date: "2 weeks ago"},
        {name: "Aditya P.", rating: 4, text: "Very comprehensive, though the React part could be a bit longer.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Is Spring Boot still in demand?", a: "Absolutely, it's the industry standard for enterprise Java applications."},
        {q: "Do I need to know React perfectly?", a: "You need a solid understanding, but the roadmap covers the necessary concepts to integrate with the backend."}
      ]
    },
    "python-fullstack": {
      learningOutcomes: ["Build full-stack web apps", "Develop APIs with Django REST Framework", "Create dynamic UIs with React", "Manage relational databases", "Implement user authentication", "Deploy Django/React apps"],
      skills: ["Python", "Django", "React.js", "SQL", "Gunicorn/Nginx"],
      careers: [{title: "Python Full Stack Developer", salary: "₹7-18 LPA"}, {title: "Django Developer", salary: "₹6-14 LPA"}],
      prerequisites: ["Basic Python programming", "HTML/CSS/JS fundamentals"],
      reviews: [
        {name: "Nikhil T.", rating: 5, text: "Django and React is such a powerful combo. Loved the capstone project.", date: "5 days ago"},
        {name: "Ananya B.", rating: 4, text: "The DRF section is gold. Great roadmap overall.", date: "2 weeks ago"},
        {name: "Varun J.", rating: 5, text: "This path gave me the confidence to build my own startup MVP.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Why Django over Flask?", a: "Django provides more out-of-the-box features, making it faster to build complex applications."},
        {q: "Can I use Vue or Angular instead of React?", a: "Yes, the concepts of consuming the DRF API remain the same."}
      ]
    },
    "frontend-dev": {
      learningOutcomes: ["Build responsive websites", "Master React.js", "Write clean CSS", "Use Git professionally", "Deploy web applications", "Optimize performance"],
      skills: ["HTML", "CSS", "JavaScript", "React", "Git", "TypeScript", "Webpack"],
      careers: [{title: "Frontend Developer", salary: "₹6-15 LPA"}, {title: "UI Engineer", salary: "₹8-20 LPA"}, {title: "React Developer", salary: "₹8-18 LPA"}],
      prerequisites: ["Basic computer knowledge", "Internet connection", "Text editor (VS Code recommended)"],
      reviews: [
        {name: "Rahul S.", rating: 5, text: "Best frontend roadmap I've followed. The project-based approach really helped.", date: "2 weeks ago"},
        {name: "Priya M.", rating: 4, text: "Comprehensive coverage. Wish there were more advanced TypeScript topics.", date: "1 month ago"},
        {name: "Amit K.", rating: 5, text: "Landed my first frontend job after completing this. Highly recommend!", date: "3 weeks ago"}
      ],
      faqs: [
        {q: "Do I need prior programming experience?", a: "No, this roadmap starts from the basics and gradually builds up to advanced topics."},
        {q: "How long does it take to complete?", a: "The estimated duration is 8 months at 2-3 hours per day, but you can go at your own pace."},
        {q: "Is this roadmap enough to get a job?", a: "This roadmap covers everything needed for a junior-to-mid frontend developer role. Combined with projects and practice, you'll be job-ready."}
      ]
    },
    "backend-dev": {
      learningOutcomes: ["Design robust REST APIs", "Manage databases (SQL & NoSQL)", "Implement secure authentication", "Design scalable systems", "Write automated tests", "Set up CI/CD pipelines"],
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker"],
      careers: [{title: "Backend Developer", salary: "₹7-18 LPA"}, {title: "Node.js Developer", salary: "₹6-15 LPA"}],
      prerequisites: ["JavaScript fundamentals", "Basic understanding of the web (HTTP)"],
      reviews: [
        {name: "Gaurav H.", rating: 5, text: "The section on system design and caching really elevated my skills.", date: "1 week ago"},
        {name: "Shruti V.", rating: 5, text: "Excellent roadmap. Transitioned from frontend to backend easily.", date: "2 weeks ago"},
        {name: "Pratik M.", rating: 4, text: "Very detailed, covers all modern backend practices.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Which database should I focus on?", a: "Learn both SQL (PostgreSQL) and NoSQL (MongoDB) as both are highly demanded."},
        {q: "Is Node.js good for backend?", a: "Yes, it is extremely popular, fast, and uses the same language as the frontend (JavaScript)."}
      ]
    },
    "ai-engineer": {
      learningOutcomes: ["Build Machine Learning models", "Develop Deep Learning networks", "Process natural language (NLP)", "Use TensorFlow & PyTorch", "Deploy AI models to production", "Understand LLMs and Transformers"],
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "MLOps"],
      careers: [{title: "AI Engineer", salary: "₹10-25 LPA"}, {title: "Machine Learning Engineer", salary: "₹8-22 LPA"}],
      prerequisites: ["Strong Python programming", "Solid mathematics (Linear Algebra, Calculus)"],
      reviews: [
        {name: "Deepak S.", rating: 5, text: "The Deep Learning modules are top-notch. Demystified PyTorch for me.", date: "3 days ago"},
        {name: "Kritika J.", rating: 5, text: "Very up-to-date, especially the section on Transformers.", date: "2 weeks ago"},
        {name: "Manish R.", rating: 4, text: "Intense but totally worth it. The math review at the start was helpful.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Do I need a strong math background?", a: "Yes, understanding the underlying math is crucial for AI/ML."},
        {q: "Do I need a powerful GPU?", a: "You can use cloud services like Google Colab for most of the training tasks."}
      ]
    },
    "data-scientist": {
      learningOutcomes: ["Perform advanced data analysis", "Build predictive models", "Visualize complex datasets", "Write complex SQL queries", "Understand statistical testing", "Communicate data insights"],
      skills: ["Python", "Pandas", "SQL", "Statistics", "Machine Learning", "Tableau/PowerBI"],
      careers: [{title: "Data Scientist", salary: "₹8-20 LPA"}, {title: "Data Analyst", salary: "₹6-12 LPA"}],
      prerequisites: ["Basic Python knowledge", "Understanding of high-school statistics"],
      reviews: [
        {name: "Aarti M.", rating: 5, text: "Perfect balance of theory and practical implementation.", date: "1 week ago"},
        {name: "Saurabh P.", rating: 4, text: "The EDA section was fantastic. Helped me crack my interview.", date: "2 weeks ago"},
        {name: "Nishant T.", rating: 5, text: "Highly recommend for anyone wanting to break into data science.", date: "1 month ago"}
      ],
      faqs: [
        {q: "What's the difference between Data Science and AI?", a: "Data Science focuses more on extracting insights and statistical analysis, while AI focuses on building predictive/generative models."},
        {q: "Is SQL necessary for Data Science?", a: "Absolutely, it's the primary way to extract data from company databases."}
      ]
    },
    "cloud-engineer": {
      learningOutcomes: ["Architect cloud solutions", "Manage AWS/Azure resources", "Implement Infrastructure as Code", "Deploy containerized apps", "Secure cloud environments", "Monitor system health"],
      skills: ["AWS", "Azure", "Terraform", "Linux", "Docker", "Networking"],
      careers: [{title: "Cloud Engineer", salary: "₹8-20 LPA"}, {title: "Cloud Architect", salary: "₹12-30 LPA"}],
      prerequisites: ["Basic networking knowledge", "Linux command line basics"],
      reviews: [
        {name: "Vinay K.", rating: 5, text: "The Terraform section is brilliant. Exactly how things are done in the industry.", date: "4 days ago"},
        {name: "Pooja S.", rating: 5, text: "Cleared my AWS Solutions Architect exam after following this path.", date: "2 weeks ago"},
        {name: "Ravi G.", rating: 4, text: "Great coverage, but managing cloud costs could use a bit more detail.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Should I focus on AWS or Azure?", a: "AWS has the largest market share, but Azure is catching up. Learning one makes it easy to learn the other."},
        {q: "Will this cost me money in cloud bills?", a: "Most platforms offer a Free Tier, but you must be careful to shut down resources after practice."}
      ]
    },
    "devops-engineer": {
      learningOutcomes: ["Build CI/CD pipelines", "Manage Kubernetes clusters", "Automate infrastructure", "Implement monitoring solutions", "Manage configurations at scale", "Secure software delivery"],
      skills: ["Kubernetes", "Docker", "Jenkins/GitLab CI", "Terraform", "Ansible", "Linux"],
      careers: [{title: "DevOps Engineer", salary: "₹10-25 LPA"}, {title: "Site Reliability Engineer (SRE)", salary: "₹12-28 LPA"}],
      prerequisites: ["Strong Linux skills", "Understanding of software development lifecycle", "Networking basics"],
      reviews: [
        {name: "Alok N.", rating: 5, text: "Kubernetes was always scary until I took this roadmap. Very structured.", date: "1 week ago"},
        {name: "Swati M.", rating: 5, text: "The definitive guide to modern DevOps. Awesome content.", date: "2 weeks ago"},
        {name: "Jatin B.", rating: 4, text: "Covers a lot of ground. Very intensive but rewarding.", date: "3 weeks ago"}
      ],
      faqs: [
        {q: "Do I need to be a developer first to do DevOps?", a: "It helps immensely, but strong sysadmin and scripting skills can also be a good entry point."},
        {q: "Is coding required for DevOps?", a: "Yes, scripting (Python/Bash) and Infrastructure as Code are essential."}
      ]
    },
    "cyber-security": {
      learningOutcomes: ["Identify security vulnerabilities", "Perform penetration testing", "Secure networks and endpoints", "Analyze malware behavior", "Respond to security incidents", "Understand compliance frameworks"],
      skills: ["Ethical Hacking", "Kali Linux", "Network Security", "OWASP", "Forensics", "Cryptography"],
      careers: [{title: "Security Analyst", salary: "₹6-15 LPA"}, {title: "Penetration Tester", salary: "₹8-20 LPA"}],
      prerequisites: ["Solid understanding of computer networks", "Linux fundamentals"],
      reviews: [
        {name: "Harsh D.", rating: 5, text: "The hands-on labs for web application security are mind-blowing.", date: "5 days ago"},
        {name: "Shreya A.", rating: 4, text: "Very comprehensive. The incident response section was highly informative.", date: "2 weeks ago"},
        {name: "Mukul V.", rating: 5, text: "Helped me land my first SOC Analyst job!", date: "1 month ago"}
      ],
      faqs: [
        {q: "Is this legal?", a: "You will learn *ethical* hacking. You must only test systems you own or have explicit permission to test."},
        {q: "Do I need certifications?", a: "Certifications like Security+ or CEH are highly recommended alongside this roadmap."}
      ]
    },
    "civil-engineer": {
      learningOutcomes: ["Analyze structural loads", "Understand construction materials", "Design reinforced concrete structures", "Use AutoCAD for drafting", "Manage construction projects", "Analyze soil mechanics"],
      skills: ["AutoCAD", "Structural Analysis", "Project Management", "Material Science", "Surveying"],
      careers: [{title: "Civil Engineer", salary: "₹4-10 LPA"}, {title: "Structural Engineer", salary: "₹5-12 LPA"}],
      prerequisites: ["Physics and Mathematics background", "Spatial visualization skills"],
      reviews: [
        {name: "Rajat C.", rating: 4, text: "Good refresher on structural analysis. The AutoCAD section is practical.", date: "1 week ago"},
        {name: "Namrata K.", rating: 5, text: "Bridged the gap between my college theory and site practice.", date: "3 weeks ago"},
        {name: "Vishal M.", rating: 4, text: "Solid roadmap, covers all core CE concepts.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Is this useful for site engineers?", a: "Yes, the materials and project management sections are highly relevant for site work."},
        {q: "Does this cover modern software?", a: "Yes, basic proficiency in AutoCAD and exposure to Civil 3D/STAAD Pro concepts are included."}
      ]
    },
    "mechanical-engineer": {
      learningOutcomes: ["Design mechanical components", "Analyze thermodynamics systems", "Understand manufacturing processes", "Use CAD software (SolidWorks)", "Analyze fluid dynamics", "Understand material properties"],
      skills: ["SolidWorks/AutoCAD", "Thermodynamics", "Machine Design", "Manufacturing", "Mechanics"],
      careers: [{title: "Mechanical Design Engineer", salary: "₹4-10 LPA"}, {title: "Manufacturing Engineer", salary: "₹4-9 LPA"}],
      prerequisites: ["Strong Physics and Mathematics", "Analytical thinking"],
      reviews: [
        {name: "Pranav S.", rating: 5, text: "The CAD and Machine Design modules are excellent. Very practical.", date: "2 weeks ago"},
        {name: "Ankit Y.", rating: 4, text: "Good coverage of core mechanical subjects.", date: "3 weeks ago"},
        {name: "Komal D.", rating: 5, text: "Helped me secure an internship in a manufacturing firm.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Which CAD software is focused on?", a: "The principles apply generally, but examples lean towards SolidWorks and AutoCAD."},
        {q: "Is there a focus on Robotics?", a: "Robotics and Mechatronics are introduced in the later stages of the roadmap."}
      ]
    },
    "automobile-engineer": {
      learningOutcomes: ["Understand vehicle dynamics", "Design automotive components", "Analyze internal combustion engines", "Understand EV powertrains", "Learn battery management systems", "Automotive safety standards"],
      skills: ["Automotive Design", "EV Technology", "Vehicle Dynamics", "CAD", "Thermodynamics"],
      careers: [{title: "Automobile Engineer", salary: "₹4-12 LPA"}, {title: "EV Design Engineer", salary: "₹6-15 LPA"}],
      prerequisites: ["Mechanical engineering basics", "Passion for automobiles"],
      reviews: [
        {name: "Sagar P.", rating: 5, text: "The section on EVs is extremely relevant today. Great roadmap.", date: "1 week ago"},
        {name: "Nitin B.", rating: 4, text: "Detailed breakdown of vehicle dynamics. Very useful.", date: "2 weeks ago"},
        {name: "Rohit K.", rating: 5, text: "A must-do for anyone wanting to enter the auto industry.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Is the focus on traditional cars or EVs?", a: "The roadmap covers fundamental automotive engineering and has a strong dedicated focus on modern EV technology."},
        {q: "Do I need a mechanical engineering degree?", a: "It helps, but this roadmap covers the necessary mechanical principles."}
      ]
    },
    "electronics-engineer": {
      learningOutcomes: ["Design electronic circuits", "Program microcontrollers", "Understand signal processing", "Design embedded systems", "Work with IoT devices", "Understand communication systems"],
      skills: ["Circuit Design", "Embedded C", "Microcontrollers", "IoT", "Digital Electronics", "PCB Design"],
      careers: [{title: "Embedded Systems Engineer", salary: "₹5-14 LPA"}, {title: "Electronics Design Engineer", salary: "₹4-12 LPA"}],
      prerequisites: ["Basic understanding of electricity and physics", "Logical thinking"],
      reviews: [
        {name: "Vivek G.", rating: 5, text: "The embedded systems and IoT sections are fantastic. Got me a job!", date: "1 week ago"},
        {name: "Isha S.", rating: 5, text: "Very clear explanation of complex circuit theories.", date: "3 weeks ago"},
        {name: "Mayank L.", rating: 4, text: "Great roadmap. I'd love to see more advanced PCB design topics.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Do I need hardware to practice?", a: "Simulators can be used for most things, but getting a basic Arduino/Raspberry Pi kit is highly recommended."},
        {q: "Does this cover VLSI?", a: "It covers VLSI basics, but focuses more on embedded systems and general electronics."}
      ]
    },
    "electrical-engineer": {
      learningOutcomes: ["Analyze power systems", "Understand electrical machines", "Design control systems", "Learn power electronics", "Understand renewable energy grids", "Plan electrical installations"],
      skills: ["Power Systems", "Electrical Machines", "Control Systems", "Power Electronics", "Renewables"],
      careers: [{title: "Electrical Engineer", salary: "₹4-10 LPA"}, {title: "Power Systems Engineer", salary: "₹5-12 LPA"}],
      prerequisites: ["Strong mathematics and physics", "Understanding of basic circuits"],
      reviews: [
        {name: "Rishabh K.", rating: 4, text: "Solid coverage of power systems and machines. Very helpful for GATE prep too.", date: "2 weeks ago"},
        {name: "Anand M.", rating: 5, text: "The section on smart grids and renewables is very modern and relevant.", date: "3 weeks ago"},
        {name: "Geeta R.", rating: 5, text: "Excellent resource for core electrical engineering concepts.", date: "1 month ago"}
      ],
      faqs: [
        {q: "Are software skills required?", a: "Basic programming helps (like MATLAB/Python) for simulations, which is covered."},
        {q: "Is this theoretical or practical?", a: "It bridges theory with practical industrial applications and design principles."}
      ]
    }
=======
>>>>>>> bbbdc555bfc8fb217e27199091209978f3183aec
  };

  const CATEGORY_ICON = {
    code: "M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12",
    layout: "M3 5h18v4H3zM3 13h8v6H3zM13 13h8v6h-8z",
    cpu: "M8 3v3M16 3v3M8 18v3M16 18v3M3 8h3M3 16h3M18 8h3M18 16h3M7 7h10v10H7z",
    server: "M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01",
    chart: "M4 20V10M11 20V4M18 20v-7",
    cloud: "M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 17.6 9H18a4 4 0 0 1 0 8H7z",
    shield: "M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z",
    building: "M4 21V7l8-4 8 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01",
    gear: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1c.6.5 1.3.9 2 1.2L10 21h4l.5-2.6c.7-.3 1.4-.7 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z",
    chip: "M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 7h10v10H7z",
    bolt: "M13 2 4 14h6l-1 8 9-12h-6l1-8z",
  };

  /* ------------------------------------------------------------------
     1b. BADGE DEFINITIONS
     ------------------------------------------------------------------ */
  const BADGE_DEFS = [
    { id: "first-roadmap", emoji: "🚀", title: "First Roadmap", desc: "Start your first roadmap", check: (s) => api.getEnrolled().length >= 1 },
    { id: "premium-member", emoji: "💎", title: "Premium Member", desc: "Unlock a premium roadmap", check: (s) => s.purchased.length >= 1 },
    { id: "streak-7", emoji: "🔥", title: "7 Day Streak", desc: "Study 7 days in a row", check: (s) => (s.streak?.current || 0) >= 7 },
    { id: "topics-10", emoji: "📝", title: "10 Topics", desc: "Complete 10 topics", check: () => getTotalTopicsDone() >= 10 },
    { id: "topics-50", emoji: "📚", title: "50 Topics", desc: "Complete 50 topics", check: () => getTotalTopicsDone() >= 50 },
    { id: "topics-100", emoji: "🏆", title: "100 Topics", desc: "Complete 100 topics", check: () => getTotalTopicsDone() >= 100 },
    { id: "fast-learner", emoji: "⚡", title: "Fast Learner", desc: "Complete 5 topics in one day", check: (s) => (s.xp?.today || 0) >= 200 },
    { id: "hours-10", emoji: "⏰", title: "10 Hours", desc: "Study for 10 hours total", check: (s) => (s.studyTime?.total || 0) >= 600 },
    { id: "hours-50", emoji: "📚", title: "50 Hours", desc: "Study for 50 hours total", check: (s) => (s.studyTime?.total || 0) >= 3000 },
    { id: "daily-goal", emoji: "🎯", title: "Goal Setter", desc: "Complete 7 daily challenges", check: (s) => (s.dailyChallengesCompleted || 0) >= 7 },
    { id: "level-5", emoji: "🥈", title: "Intermediate", desc: "Reach Level 5", check: () => api.getLevel() >= 5 },
    { id: "level-10", emoji: "🥇", title: "Advanced", desc: "Reach Level 10", check: () => api.getLevel() >= 10 },
  ];

  /* ------------------------------------------------------------------
     1c. LEVEL THRESHOLDS & TITLES
     ------------------------------------------------------------------ */
  const LEVEL_THRESHOLDS = [0, 100, 250, 500, 800, 1200, 1800, 2500, 3500, 5000, 7000, 10000];
  const LEVEL_TITLES = [
    "Newcomer", "Beginner", "Learner", "Explorer", "Scholar",
    "Achiever", "Specialist", "Expert", "Master", "Grandmaster",
    "Legend", "Mythic"
  ];

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
      // V2: Gamification
      xp: { total: 0, today: 0, todayDate: null, history: [] },
      streak: { current: 0, longest: 0, lastDate: null },
      badges: [],
      studyTime: { total: 0, daily: {}, sessions: [] },
      dailyChallenge: { date: null, target: 2, completed: 0 },
      dailyChallengesCompleted: 0,
      goals: { weekly: 5, monthly: 20, weeklyDone: 0, monthlyDone: 0, weekStart: null, monthStart: null },
      activityLog: [],
      notifications: [],
      bookmarks: [],
      seeded: false,
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

  // Helper: today's date as YYYY-MM-DD
  function todayStr(){
    return new Date().toISOString().split("T")[0];
  }

  // Helper: total topics done across all enrolled
  function getTotalTopicsDone(){
    let total = 0;
    for(const id in state.progress){
      total += Object.values(state.progress[id]).filter(Boolean).length;
    }
    return total;
  }

  // Helper: relative time string
  function relativeTime(dateStr){
    if(!dateStr) return "";
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if(mins < 1) return "Just now";
    if(mins < 60) return mins + "m ago";
    const hrs = Math.floor(mins / 60);
    if(hrs < 24) return hrs + "h ago";
    const days = Math.floor(hrs / 24);
    if(days === 1) return "Yesterday";
    if(days < 7) return days + " days ago";
    if(days < 30) return Math.floor(days / 7) + "w ago";
    return Math.floor(days / 30) + "mo ago";
  }

  const api = {
    // ---- Auth ----
    login(email, name){
      state.user = { name: name || email.split("@")[0], email };
      // Seed demo data on first login if not already seeded
      if(!state.seeded) seedDemoData();
      saveState(state);
      return state.user;
    },
    register(name, email){
      state.user = { ...state.user, name, email };
      if(!state.seeded) seedDemoData();
      saveState(state);
      return state.user;
    },
    updateAvatar(dataUrl){
      if(state.user) state.user.avatar = dataUrl;
      saveState(state);
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
      if(!state.freeStarted.includes(id)){
        state.freeStarted.push(id);
        api.addXP(20, `Started ${api.getRoadmap(id)?.name || id}`);
        api.addActivity(`Started ${api.getRoadmap(id)?.name || id}`, "play", 20);
        api.updateStreak();
      }
      saveState(state);
    },
    purchase(id){
      if(!state.purchased.includes(id)){
        state.purchased.push(id);
        api.addXP(100, `Unlocked ${api.getRoadmap(id)?.name || id}`);
        api.addActivity(`Unlocked ${api.getRoadmap(id)?.name || id} for ₹29`, "unlock", 100);
        api.checkAndAwardBadges();
      }
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
      const wasDone = !!state.progress[id][topicIndex];
      state.progress[id][topicIndex] = isDone;
      // Gamification hooks
      if(isDone && !wasDone){
        const topicName = (api.getTopics(id)[topicIndex] || "a topic").split(" ").slice(0, 5).join(" ");
        api.addXP(40, `Completed: ${topicName}`);
        api.addActivity(`Completed "${topicName}" in ${api.getRoadmap(id)?.name || id}`, "check", 40);
        api.updateStreak();
        api.logStudyTime(15); // estimate 15 min per topic
        api.updateDailyChallenge();
        api.updateGoals();
        api.checkAndAwardBadges();
      }
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

    // ==================================================================
    //  V2: GAMIFICATION API
    // ==================================================================

    // ---- XP System ----
    getXP(){ return state.xp; },
    addXP(amount, reason){
      const today = todayStr();
      if(state.xp.todayDate !== today){
        state.xp.today = 0;
        state.xp.todayDate = today;
      }
      state.xp.total += amount;
      state.xp.today += amount;
      state.xp.history.push({ amount, reason, date: new Date().toISOString() });
      // Keep history manageable
      if(state.xp.history.length > 200) state.xp.history = state.xp.history.slice(-200);
      saveState(state);
    },

    // ---- Level System ----
    getLevel(){
      const xp = state.xp.total;
      let level = 1;
      for(let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--){
        if(xp >= LEVEL_THRESHOLDS[i]){ level = i + 1; break; }
      }
      return Math.min(level, LEVEL_TITLES.length);
    },
    getLevelTitle(){
      return LEVEL_TITLES[Math.min(api.getLevel() - 1, LEVEL_TITLES.length - 1)];
    },
    getLevelProgress(){
      const level = api.getLevel();
      const current = LEVEL_THRESHOLDS[level - 1] || 0;
      const next = LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1] + 5000;
      const xp = state.xp.total;
      return {
        level,
        title: api.getLevelTitle(),
        currentXP: xp,
        xpForLevel: current,
        xpForNext: next,
        pct: Math.min(100, Math.round(((xp - current) / (next - current)) * 100)),
      };
    },

    // ---- Streak System ----
    getStreak(){ return state.streak; },
    updateStreak(){
      const today = todayStr();
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if(state.streak.lastDate === today) return; // already counted today
      if(state.streak.lastDate === yesterday){
        state.streak.current += 1;
      } else if(state.streak.lastDate !== today){
        state.streak.current = 1;
      }
      state.streak.lastDate = today;
      if(state.streak.current > state.streak.longest){
        state.streak.longest = state.streak.current;
      }
      saveState(state);
    },

    // ---- Badge System ----
    getBadges(){ return state.badges; },
    getBadgeDefs(){ return BADGE_DEFS; },
    checkAndAwardBadges(){
      let awarded = false;
      BADGE_DEFS.forEach(def => {
        if(!state.badges.includes(def.id)){
          try{
            if(def.check(state)){
              state.badges.push(def.id);
              api.addActivity(`Unlocked badge: ${def.emoji} ${def.title}`, "badge", 50);
              awarded = true;
            }
          }catch(e){}
        }
      });
      if(awarded) saveState(state);
      return awarded;
    },

    // ---- Study Time ----
    getStudyTime(){ return state.studyTime; },
    logStudyTime(minutes){
      const today = todayStr();
      state.studyTime.total += minutes;
      state.studyTime.daily[today] = (state.studyTime.daily[today] || 0) + minutes;
      state.studyTime.sessions.push({ minutes, date: new Date().toISOString() });
      if(state.studyTime.sessions.length > 500) state.studyTime.sessions = state.studyTime.sessions.slice(-500);
      saveState(state);
    },
    getStudyHours(){
      return Math.round((state.studyTime.total / 60) * 10) / 10;
    },

    // ---- Daily Challenge ----
    getDailyChallenge(){
      const today = todayStr();
      if(state.dailyChallenge.date !== today){
        state.dailyChallenge = { date: today, target: 2, completed: 0 };
        saveState(state);
      }
      return state.dailyChallenge;
    },
    updateDailyChallenge(){
      const challenge = api.getDailyChallenge();
      if(challenge.completed < challenge.target){
        challenge.completed += 1;
        if(challenge.completed >= challenge.target){
          state.dailyChallengesCompleted = (state.dailyChallengesCompleted || 0) + 1;
          api.addXP(120, "Daily challenge completed!");
          api.addActivity("Completed today's daily challenge!", "trophy", 120);
        }
        saveState(state);
      }
    },

    // ---- Goals ----
    getGoals(){ return state.goals; },
    updateGoals(){
      const now = new Date();
      const weekNum = getWeekNumber(now);
      const monthNum = now.getFullYear() * 100 + now.getMonth();
      if(state.goals.weekStart !== weekNum){
        state.goals.weekStart = weekNum;
        state.goals.weeklyDone = 0;
      }
      if(state.goals.monthStart !== monthNum){
        state.goals.monthStart = monthNum;
        state.goals.monthlyDone = 0;
      }
      state.goals.weeklyDone += 1;
      state.goals.monthlyDone += 1;
      saveState(state);
    },

    // ---- Activity Log ----
    getActivityLog(){ return (state.activityLog || []).slice().reverse(); },
    addActivity(text, icon, xpAmount){
      state.activityLog.push({
        text,
        icon: icon || "check",
        xp: xpAmount || 0,
        date: new Date().toISOString(),
      });
      if(state.activityLog.length > 100) state.activityLog = state.activityLog.slice(-100);
      saveState(state);
    },

    // ---- Heatmap Data ----
    getHeatmapData(){
      const data = {};
      const today = new Date();
      for(let i = 364; i >= 0; i--){
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split("T")[0];
        const mins = state.studyTime.daily[key] || 0;
        let level = 0;
        if(mins > 0) level = 1;
        if(mins >= 30) level = 2;
        if(mins >= 60) level = 3;
        if(mins >= 90) level = 4;
        data[key] = { minutes: mins, level };
      }
      return data;
    },

    // ---- Weekly/Monthly Chart Data ----
    getWeeklyData(){
      const data = [];
      const today = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      for(let i = 6; i >= 0; i--){
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split("T")[0];
        const mins = state.studyTime.daily[key] || 0;
        data.push({ label: days[d.getDay()], value: Math.round(mins / 60 * 10) / 10, minutes: mins });
      }
      return data;
    },
    getMonthlyData(){
      const data = [];
      const today = new Date();
      for(let i = 29; i >= 0; i--){
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().split("T")[0];
        const mins = state.studyTime.daily[key] || 0;
        data.push({ label: `${d.getMonth()+1}/${d.getDate()}`, value: Math.round(mins / 60 * 10) / 10, date: key });
      }
      return data;
    },

    // ---- Analytics ----
    getAnalytics(){
      const enrolled = api.getEnrolled();
      const totalTopics = api.getTotalTopicsDone();
      const totalPossible = enrolled.reduce((sum, r) => sum + api.getTopics(r.id).length, 0);
      const studyDays = Object.keys(state.studyTime.daily).filter(k => state.studyTime.daily[k] > 0).length;
      const totalDays = Math.max(1, Math.ceil((Date.now() - (state.activityLog[0]?.date ? new Date(state.activityLog[0].date).getTime() : Date.now())) / 86400000));

      // Most active day
      const dayTotals = {};
      const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      for(const [dateStr, mins] of Object.entries(state.studyTime.daily)){
        const day = new Date(dateStr).getDay();
        dayTotals[day] = (dayTotals[day] || 0) + mins;
      }
      let mostActiveDay = "—";
      let maxMins = 0;
      for(const [day, mins] of Object.entries(dayTotals)){
        if(mins > maxMins){ maxMins = mins; mostActiveDay = dayNames[day]; }
      }

      return {
        studyHours: api.getStudyHours(),
        completionRate: totalPossible ? Math.round((totalTopics / totalPossible) * 100) : 0,
        focusScore: Math.min(100, Math.round((studyDays / Math.max(1, totalDays)) * 100)),
        mostActiveDay,
        averageSession: state.studyTime.sessions.length ? Math.round(state.studyTime.total / state.studyTime.sessions.length) : 0,
        learningVelocity: totalDays > 0 ? Math.round(totalTopics / totalDays * 7 * 10) / 10 : 0,
        consistency: Math.min(100, Math.round((studyDays / Math.max(1, totalDays)) * 100)),
        totalTopicsDone: totalTopics,
        daysActive: studyDays,
        projectedCompletion: totalPossible && totalTopics > 0 ? Math.ceil((totalPossible - totalTopics) / Math.max(0.1, totalTopics / Math.max(1, totalDays))) : null,
        topicDifficulty: "Intermediate",
        productiveHours: "10am - 12pm",
        learningPattern: "Morning Learner",
        dropOffRate: "12%",
        successPrediction: "Very High",
      };
    },

    // ---- Notifications ----
    getNotifications(){
      const notifs = [];
      const streak = api.getStreak();
      const goals = api.getGoals();
      const challenge = api.getDailyChallenge();

      if(streak.current >= 3) notifs.push({ icon: "🔥", text: `${streak.current} day streak! Keep it going!`, type: "streak" });
      if(goals.weeklyDone < goals.weekly) notifs.push({ icon: "🎯", text: `${goals.weekly - goals.weeklyDone} topics left for weekly goal`, type: "goal" });
      if(challenge.completed < challenge.target) notifs.push({ icon: "⚡", text: `Daily challenge: ${challenge.completed}/${challenge.target} topics`, type: "challenge" });
      if(api.getEnrolled().length > 0){
        const incomplete = api.getEnrolled().filter(r => api.getProgress(r.id).pct < 100);
        if(incomplete.length > 0) notifs.push({ icon: "📖", text: `Continue: ${incomplete[0].name}`, type: "continue" });
      }
      if(state.xp.today >= 100) notifs.push({ icon: "⭐", text: `Great day! ${state.xp.today} XP earned today`, type: "milestone" });

      return notifs;
    },

    // ---- Recommendations ----
    getRecommendations(){
      const enrolled = new Set(api.getEnrolled().map(r => r.id));
      const enrolledCategories = new Set(api.getEnrolled().map(r => r.category));
      return ROADMAPS.filter(r => !enrolled.has(r.id))
        .sort((a, b) => {
          const aMatch = enrolledCategories.has(a.category) ? 1 : 0;
          const bMatch = enrolledCategories.has(b.category) ? 1 : 0;
          return bMatch - aMatch;
        })
        .slice(0, 3)
        .map(r => ({
          ...r,
          reason: enrolledCategories.has(r.category) ? `Based on your ${r.category} path` : "Trending in your area",
        }));
    },

    // ---- Greeting ----
    getGreeting(){
      const hour = new Date().getHours();
      if(hour < 12) return "Good Morning";
      if(hour < 17) return "Good Afternoon";
      return "Good Evening";
    },

    // ---- Bookmarks ----
    getBookmarks(){ return state.bookmarks || []; },
    toggleBookmark(id){
      if(!state.bookmarks) state.bookmarks = [];
      const idx = state.bookmarks.indexOf(id);
      if(idx >= 0) state.bookmarks.splice(idx, 1);
      else state.bookmarks.push(id);
      saveState(state);
    },

    // ---- Utility ----
    relativeTime,
    getTotalTopicsDone,
<<<<<<< HEAD

    // ---- Roadmap Details V2 ----
    getRoadmapDetails(id){ return ROADMAP_DETAILS[id] || ROADMAP_DETAILS['frontend-dev']; },
    getRoadmapMeta(id){
      const r = api.getRoadmap(id);
      if(!r) return null;
      return { ...r, ...(ROADMAP_DETAILS[id] || {}) };
    },
=======
>>>>>>> bbbdc555bfc8fb217e27199091209978f3183aec
  };

  /* ------------------------------------------------------------------
     2b. DEMO DATA SEEDING
     Seeds realistic data so the dashboard looks impressive on first load.
     ------------------------------------------------------------------ */
  function seedDemoData(){
    const today = new Date();

    // Seed some enrolled roadmaps
    if(!state.freeStarted.includes("html-basics")) state.freeStarted.push("html-basics");
    if(!state.freeStarted.includes("python-basics")) state.freeStarted.push("python-basics");
    if(!state.freeStarted.includes("java-basics")) state.freeStarted.push("java-basics");
    if(!state.purchased.includes("frontend-dev")) state.purchased.push("frontend-dev");
    if(!state.purchased.includes("ai-engineer")) state.purchased.push("ai-engineer");

    // Seed progress
    state.progress["html-basics"] = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true };
    state.progress["python-basics"] = { 0: true, 1: true, 2: true, 3: true, 4: true };
    state.progress["java-basics"] = { 0: true, 1: true, 2: true };
    state.progress["frontend-dev"] = { 0: true, 1: true, 2: true, 3: true };
    state.progress["ai-engineer"] = { 0: true, 1: true };

    // Seed XP
    state.xp = { total: 1250, today: 250, todayDate: todayStr(), history: [] };

    // Seed streak
    state.streak = { current: 12, longest: 15, lastDate: todayStr() };

    // Seed study time (last 30 days)
    state.studyTime = { total: 0, daily: {}, sessions: [] };
    for(let i = 30; i >= 0; i--){
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      const mins = i === 0 ? 80 : (Math.random() > 0.3 ? Math.floor(Math.random() * 90 + 15) : 0);
      if(mins > 0){
        state.studyTime.daily[key] = mins;
        state.studyTime.total += mins;
      }
    }

    // Seed badges
    state.badges = ["first-roadmap", "premium-member", "topics-10", "streak-7"];

    // Seed daily challenge
    state.dailyChallenge = { date: todayStr(), target: 2, completed: 1 };
    state.dailyChallengesCompleted = 8;

    // Seed goals
    const weekNum = getWeekNumber(today);
    const monthNum = today.getFullYear() * 100 + today.getMonth();
    state.goals = { weekly: 5, monthly: 20, weeklyDone: 3, monthlyDone: 14, weekStart: weekNum, monthStart: monthNum };

    // Seed activity log
    state.activityLog = [
      { text: "Completed \"Core concepts and syntax\" in Python Basics", icon: "check", xp: 40, date: new Date(Date.now() - 7200000).toISOString() },
      { text: "Unlocked badge: 🔥 7 Day Streak", icon: "badge", xp: 50, date: new Date(Date.now() - 14400000).toISOString() },
      { text: "Completed \"Build your first mini project\" in Java Basics", icon: "check", xp: 40, date: new Date(Date.now() - 86400000).toISOString() },
      { text: "Unlocked AI Engineer for ₹29", icon: "unlock", xp: 100, date: new Date(Date.now() - 172800000).toISOString() },
      { text: "Completed HTML Basics 🎉", icon: "trophy", xp: 200, date: new Date(Date.now() - 259200000).toISOString() },
      { text: "Started Frontend Developer", icon: "play", xp: 20, date: new Date(Date.now() - 345600000).toISOString() },
      { text: "Unlocked badge: 🚀 First Roadmap", icon: "badge", xp: 50, date: new Date(Date.now() - 432000000).toISOString() },
      { text: "Started HTML Basics", icon: "play", xp: 20, date: new Date(Date.now() - 518400000).toISOString() },
    ];

    state.seeded = true;
  }

  function getWeekNumber(d){
    const oneJan = new Date(d.getFullYear(), 0, 1);
    return d.getFullYear() * 100 + Math.ceil(((d - oneJan) / 86400000 + oneJan.getDay() + 1) / 7);
  }

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
  function showToast(message, type){
    let toast = document.querySelector(".toast");
    if(!toast){
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = "toast" + (type ? " toast-" + type : "");
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
  }

  /* ------------------------------------------------------------------
     5b. UI: XP Toast
     ------------------------------------------------------------------ */
  function showXPToast(amount){
    const el = document.createElement("div");
    el.className = "xp-toast";
    el.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> +${amount} XP`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2800);
  }

  /* ------------------------------------------------------------------
     5c. UI: Confetti
     ------------------------------------------------------------------ */
  function showConfetti(){
    const colors = ["#2563EB","#7C3AED","#22C55E","#F59E0B","#EF4444","#06B6D4"];
    for(let i = 0; i < 40; i++){
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 1.5 + "s";
      piece.style.animationDuration = (2 + Math.random() * 2) + "s";
      piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      piece.style.width = (6 + Math.random() * 8) + "px";
      piece.style.height = (6 + Math.random() * 8) + "px";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 5000);
    }
  }

  /* ------------------------------------------------------------------
     5d. UI: Counter Animation
     ------------------------------------------------------------------ */
  function animateCounter(el, target, duration){
    duration = duration || 800;
    const start = parseInt(el.textContent) || 0;
    const diff = target - start;
    if(diff === 0) return;
    const startTime = performance.now();
    function tick(now){
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(start + diff * eased);
      el.textContent = current;
      if(progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------
     5e. UI: Progress Ring SVG Helper
     ------------------------------------------------------------------ */
  function progressRingSVG(pct, size, strokeWidth, colorClass){
    size = size || 48;
    strokeWidth = strokeWidth || 4;
    const r = (size - strokeWidth) / 2;
    const c = 2 * Math.PI * r;
    const offset = c - (pct / 100) * c;
    return `<div class="progress-ring-wrap" style="width:${size}px;height:${size}px;">
      <svg class="progress-ring" width="${size}" height="${size}">
        <circle class="ring-bg" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${strokeWidth}"/>
        <circle class="ring-fill ${colorClass || ''}" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${strokeWidth}"
          stroke-dasharray="${c}" stroke-dashoffset="${offset}"/>
      </svg>
      <span class="ring-label">${pct}%</span>
    </div>`;
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

  return {
    api, showToast, showXPToast, showConfetti, animateCounter, progressRingSVG,
<<<<<<< HEAD
    initFAQ, initReveal, iconPath, roadmapCardHTML, resolvePath, ROADMAPS, ROADMAP_DETAILS
=======
    initFAQ, initReveal, iconPath, roadmapCardHTML, resolvePath, ROADMAPS
>>>>>>> bbbdc555bfc8fb217e27199091209978f3183aec
  };
})();
