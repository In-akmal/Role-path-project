
const PATH = location.pathname.includes('/pages/') ? '../' : './';
const ROADMAPS = [
{id:'java-basics',name:'Java Basics',icon:'☕',category:'Software Development',free:true,level:'Beginner',desc:'Build a strong Core Java foundation.',topics:['Introduction to Java','JDK, JRE and JVM','Variables','Data Types','Operators','Conditions','Loops','Arrays','Methods']},
{id:'python-basics',name:'Python Basics',icon:'🐍',category:'Software Development',free:true,level:'Beginner',desc:'Learn essential Python concepts in the right order.',topics:['Python Introduction','Variables','Data Types','Operators','Conditions','Loops','Functions','Lists and Tuples','Dictionaries']},
{id:'html-basics',name:'HTML Basics',icon:'🌐',category:'Software Development',free:true,level:'Beginner',desc:'Understand the structure of modern web pages.',topics:['HTML Structure','Headings and Text','Links','Images','Lists','Tables','Forms','Semantic HTML']},
{id:'css-basics',name:'CSS Basics',icon:'🎨',category:'Software Development',free:true,level:'Beginner',desc:'Style responsive and attractive web pages.',topics:['Selectors','Colors','Box Model','Typography','Display','Flexbox','Grid','Responsive Design']},
{id:'c-basics',name:'C Programming Basics',icon:'💻',category:'Software Development',free:true,level:'Beginner',desc:'Start programming with core C concepts.',topics:['C Introduction','Variables','Data Types','Operators','Conditions','Loops','Arrays','Functions','Pointers Basics']},
{id:'java-full-stack',name:'Java Full Stack Developer',icon:'☕',category:'Software Development',free:false,level:'Advanced',desc:'Complete Java frontend, backend and deployment path.',topics:['Core Java','OOP','Exception Handling','Collections','File Handling','Multithreading','JDBC','MySQL','HTML and CSS','JavaScript','Spring','Spring Boot','REST APIs','Git and GitHub','Testing','Deployment','Projects']},
{id:'python-full-stack',name:'Python Full Stack Developer',icon:'🐍',category:'Software Development',free:false,level:'Advanced',desc:'A complete Python full stack learning path.',topics:['Python Basics','Functions','OOP','File Handling','SQL','HTML and CSS','JavaScript','Django','REST APIs','Git and GitHub','Testing','Deployment','Projects']},
{id:'frontend',name:'Frontend Developer',icon:'🖥️',category:'Software Development',free:false,level:'Advanced',desc:'Become job-ready in modern frontend development.',topics:['HTML','CSS','Responsive Design','JavaScript','DOM','ES6+','Git','TypeScript','React Concepts','APIs','Testing','Performance','Deployment','Projects']},
{id:'backend',name:'Backend Developer',icon:'⚙️',category:'Software Development',free:false,level:'Advanced',desc:'Learn APIs, databases, security and deployment.',topics:['Programming Fundamentals','OOP','Data Structures','SQL','Databases','HTTP','REST APIs','Authentication','Security','Testing','Caching','Docker','Deployment','Projects']},
{id:'ai-engineer',name:'AI Engineer',icon:'🤖',category:'Artificial Intelligence',free:false,level:'Advanced',desc:'Build foundations for an AI engineering career.',topics:['Python','Math Foundations','NumPy','Pandas','Statistics','Machine Learning','Deep Learning','NLP Basics','Computer Vision Basics','Model APIs','MLOps Basics','Projects']},
{id:'data-scientist',name:'Data Scientist',icon:'📊',category:'Data Science',free:false,level:'Advanced',desc:'Learn data analysis, statistics and machine learning.',topics:['Python','NumPy','Pandas','SQL','Statistics','Data Cleaning','Visualization','Machine Learning','Model Evaluation','Portfolio Projects']},
{id:'cloud',name:'Cloud Engineer',icon:'☁️',category:'Cloud Computing',free:false,level:'Advanced',desc:'Learn cloud foundations, networking and deployment.',topics:['Linux','Networking','Git','Cloud Fundamentals','Compute','Storage','Databases','IAM','Containers','Monitoring','Infrastructure Basics','Projects']},
{id:'devops',name:'DevOps Engineer',icon:'♾️',category:'Cloud Computing',free:false,level:'Advanced',desc:'Learn automation, CI/CD, containers and cloud.',topics:['Linux','Networking','Git','Shell Basics','CI/CD','Docker','Kubernetes Basics','Cloud','Monitoring','Infrastructure as Code','Projects']},
{id:'cyber',name:'Cyber Security',icon:'🔐',category:'Cyber Security',free:false,level:'Advanced',desc:'Build strong defensive security foundations.',topics:['Computer Fundamentals','Networking','Linux','Security Fundamentals','Web Basics','Cryptography Basics','Threats','Defensive Security','Cloud Security Basics','Labs and Projects']},
{id:'civil',name:'Civil Engineer Career Path',icon:'🏗️',category:'Engineering',free:false,level:'Advanced',desc:'Structured skill path for civil engineering students.',topics:['Engineering Drawing','Surveying','Building Materials','Strength of Materials','Structural Basics','AutoCAD','Estimation','Construction Planning','Site Safety','Project Skills']},
{id:'mechanical',name:'Mechanical Engineer Career Path',icon:'⚙️',category:'Engineering',free:false,level:'Advanced',desc:'Build practical mechanical engineering career skills.',topics:['Engineering Drawing','Mechanics','Thermodynamics','Materials','Manufacturing','CAD','SolidWorks Basics','Quality Basics','Maintenance','Projects']},
{id:'automobile',name:'Automobile Engineer Career Path',icon:'🚗',category:'Engineering',free:false,level:'Advanced',desc:'Learn vehicle systems and practical automobile skills.',topics:['Automobile Fundamentals','IC Engines','Vehicle Dynamics','Transmission','Braking Systems','Electrical Systems','EV Fundamentals','CAD Basics','Diagnostics','Projects']},
{id:'electronics',name:'Electronics Engineer Career Path',icon:'🔌',category:'Engineering',free:false,level:'Advanced',desc:'Structured electronics and embedded systems path.',topics:['Circuit Fundamentals','Analog Electronics','Digital Electronics','Signals','Microcontrollers','Embedded C','Communication Basics','PCB Basics','IoT Basics','Projects']},
{id:'electrical',name:'Electrical Engineer Career Path',icon:'⚡',category:'Engineering',free:false,level:'Advanced',desc:'Build core electrical engineering career skills.',topics:['Circuit Theory','Electrical Machines','Power Systems','Control Systems','Power Electronics','MATLAB Basics','PLC Basics','Safety','Renewable Energy Basics','Projects']}
];
const Store={
 get:(k,d)=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d)),
 set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),
 user(){return this.get('rolepathUser',{name:'Madhu Sudan',email:'madhu@example.com'})},
 enrolled(){return this.get('rolepathEnrolled',[])},
 enroll(id){const a=this.enrolled();if(!a.includes(id)){a.push(id);this.set('rolepathEnrolled',a)}},
 progress(id){return this.get('rolepathProgress_'+id,[])},
 setProgress(id,v){this.set('rolepathProgress_'+id,v)}
};
function nav(){
 const page=location.pathname.split('/').pop()||'index.html';
 document.getElementById('siteNav').innerHTML=`<div class="nav"><div class="container nav-inner">
 <a class="brand" href="${PATH}index.html">Role<span>Path</span></a>
 <div class="nav-links" id="navLinks">
 <a href="${PATH}index.html">Home</a><a href="${PATH}pages/roadmaps.html">Roadmaps</a>
 <a href="${PATH}pages/dashboard.html">Dashboard</a><a href="${PATH}pages/my-roadmaps.html">My Roadmaps</a><a href="${PATH}pages/profile.html">Profile</a></div>
 <div class="nav-actions"><button class="icon-btn" id="themeBtn" aria-label="Toggle dark mode">◐</button>
 <a class="auth-link btn btn-secondary" href="${PATH}pages/login.html">Login</a>
 <button class="icon-btn menu-btn" id="menuBtn">☰</button></div></div></div>`;
 document.getElementById('menuBtn').onclick=()=>document.getElementById('navLinks').classList.toggle('open');
 document.getElementById('themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('rolepathTheme',document.body.classList.contains('dark')?'dark':'light')};
 if(localStorage.getItem('rolepathTheme')==='dark')document.body.classList.add('dark');
}
function footer(){
 const el=document.getElementById('siteFooter'); if(!el)return;
 el.innerHTML=`<footer class="footer"><div class="container"><div class="footer-grid">
 <div><a class="brand" href="${PATH}index.html">Role<span style="color:white">Path</span></a><p>Structured career roadmaps for students who want clarity, direction and visible progress.</p></div>
 <div><h4>Platform</h4><a href="${PATH}pages/roadmaps.html">Roadmaps</a><a href="${PATH}pages/dashboard.html">Dashboard</a><a href="${PATH}pages/my-roadmaps.html">My Roadmaps</a></div>
 <div><h4>Company</h4><a href="#about">About</a><a href="#contact">Contact</a><a href="#faq">FAQ</a></div>
 <div><h4>Legal</h4><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="#">Instagram</a></div></div>
 <div class="footer-bottom">© 2026 RolePath. Built to make career learning clearer.</div></div></footer>`;
}
function card(r){
 return `<article class="card roadmap-card" data-category="${r.category}" data-name="${r.name.toLowerCase()}">
 <div class="roadmap-icon">${r.icon}</div><h3>${r.name}</h3><p>${r.desc}</p>
 <div class="meta"><span class="pill">1 Year</span><span class="pill">${r.level}</span></div>
 <div class="card-footer"><div><span class="badge ${r.free?'badge-free':'badge-premium'}">${r.free?'FREE':'PREMIUM'}</span><div class="price">${r.free?'₹0':'₹29'}</div></div>
 <button class="btn ${r.free?'btn-success':'btn-primary'}" onclick="chooseRoadmap('${r.id}')">${r.free?'Start Learning':'Unlock for ₹29'}</button></div></article>`;
}
function chooseRoadmap(id){
 const r=ROADMAPS.find(x=>x.id===id);
 if(r.free){Store.enroll(id);location.href=`${PATH}pages/roadmap-details.html?id=${id}`}
 else location.href=`${PATH}pages/payment.html?id=${id}`;
}
function percent(r){return Math.round(Store.progress(r.id).length/r.topics.length*100)||0}
function initFaq(){document.querySelectorAll('.faq-q').forEach(q=>q.onclick=()=>q.parentElement.classList.toggle('open'))}
document.addEventListener('DOMContentLoaded',()=>{nav();footer();initFaq()});
