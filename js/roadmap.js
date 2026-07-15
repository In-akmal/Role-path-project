/* ==========================================================================
   RolePath — roadmap.js (V2)
   Powers roadmap-details.html: topics, tabs, progress, and metadata rendering.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "frontend-dev";
  const roadmapMeta = RP.api.getRoadmapMeta(id);

  if(!roadmapMeta){
    document.getElementById("rdName").textContent = "Roadmap not found";
    document.getElementById("rdDesc").textContent = "This roadmap doesn't exist. Browse all roadmaps instead.";
    document.getElementById("topicList").innerHTML = "";
    return;
  }

  const isFree = roadmapMeta.price === 0;
  const topics = RP.api.getTopics(id);

  // ---- Tabs Logic ----
  const tabs = document.querySelectorAll(".details-tab");
  const panes = document.querySelectorAll(".tab-pane");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("tab-" + tab.dataset.tab).classList.add("active");
    });
  });

  // ---- Header & Meta ----
  document.title = roadmapMeta.name + " — RolePath";
  document.getElementById("badgeRow").innerHTML = `
    <span class="badge ${isFree ? 'badge-free' : 'badge-premium'}">${isFree ? 'Free' : 'Premium'}</span>
    <span class="demand-badge ${roadmapMeta.demand.toLowerCase().replace(' ', '-')}">${roadmapMeta.demand} Demand</span>
    <span class="difficulty-tag difficulty-${roadmapMeta.difficulty.toLowerCase()}">${roadmapMeta.difficulty}</span>`;
  document.getElementById("rdName").textContent = roadmapMeta.name;
  document.getElementById("rdDesc").textContent = roadmapMeta.desc;
  
  document.getElementById("rdMeta").innerHTML = `
    <span class="stat-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chip-icon"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg> <span class="stat-num">${roadmapMeta.duration}</span></span>
    <span class="stat-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chip-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg> <span class="stat-num">${roadmapMeta.students.toLocaleString()}</span></span>
    <span class="stat-chip"><span class="rating-stars"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg><span class="rating-num">${roadmapMeta.rating}</span></span></span>
    <span class="stat-chip" style="margin-left:auto; background:var(--primary); color:#fff; border:none; padding:8px 18px; font-size:15px;"><span class="stat-num" style="color:#fff;">${isFree ? 'FREE' : '₹' + roadmapMeta.price}</span></span>`;

  // ---- Populate Overview Tab ----
  document.getElementById("learningOutcomes").innerHTML = roadmapMeta.learningOutcomes.map(o => `
    <div class="outcome-item">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      <span>${o}</span>
    </div>`).join("");
    
  document.getElementById("skillsCloud").innerHTML = roadmapMeta.skills.map(s => `<span class="skill-tag">${s}</span>`).join("");
  
  document.getElementById("careerList").innerHTML = roadmapMeta.careers.map(c => `
    <div class="career-card">
      <span class="career-title">${c.title}</span>
      <span class="career-salary">${c.salary}</span>
    </div>`).join("");

  // ---- Populate Reviews & FAQs Tab ----
  document.getElementById("reviewSummary").innerHTML = `
    <div class="review-big-rating">
      <div class="big-num">${roadmapMeta.rating}</div>
      <div class="rating-stars" style="margin-top:4px;">
        ${'<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'.repeat(5)}
      </div>
      <div class="big-label">Course Rating</div>
    </div>
    <div class="review-bars">
      <div class="review-bar-row"><span>5 stars</span><div class="bar-track"><div class="bar-fill" style="width:75%"></div></div><span>75%</span></div>
      <div class="review-bar-row"><span>4 stars</span><div class="bar-track"><div class="bar-fill" style="width:20%"></div></div><span>20%</span></div>
      <div class="review-bar-row"><span>3 stars</span><div class="bar-track"><div class="bar-fill" style="width:5%"></div></div><span>5%</span></div>
    </div>`;
    
  document.getElementById("reviewList").innerHTML = roadmapMeta.reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">${r.name.charAt(0)}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="rating-stars" style="gap:1px; margin-top:2px;">${'<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'.repeat(r.rating)}</div>
        </div>
        <div class="review-date">${r.date}</div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>`).join("");

  document.getElementById("faqList").innerHTML = roadmapMeta.faqs.map(f => `
    <div class="faq-item">
      <div class="faq-q">${f.q} <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></div>
      <div class="faq-a">${f.a}</div>
    </div>`).join("");

  // FAQ Accordion Logic
  document.querySelectorAll(".faq-q").forEach(q => {
    q.addEventListener("click", () => {
      q.parentElement.classList.toggle("open");
    });
  });

  // ---- Progress & Locking Logic ----
  const unlocked = isFree || RP.api.isUnlocked(id);
  if(isFree) RP.api.startFree(id);

  if(!unlocked){
    document.getElementById("topicList").style.display = "none";
    document.getElementById("lockedOverlay").style.display = "flex";
    document.getElementById("unlockLink").href = "payment.html?id=" + id;
    document.getElementById("continueBtn").textContent = "Unlock for ₹" + roadmapMeta.price;
    document.getElementById("continueBtn").href = "payment.html?id=" + id;
    document.getElementById("stepperCard").style.display = "none";
    renderStepper([]); // no progress yet
    return;
  }

  renderTopics();
  renderProgress();

  function renderTopics(){
    const progress = RP.api.getProgress(id);
    document.getElementById("topicList").innerHTML = topics.map((t, i) => `
      <label class="topic-row-premium ${progress.done[i] ? 'done' : (!progress.done[i] && (i === 0 || progress.done[i-1]) ? 'current' : 'locked')}" data-index="${i}" style="animation-delay: ${i * 0.04}s">
        <div class="topic-checkbox-wrap">
          <input type="checkbox" class="topic-checkbox" ${progress.done[i] ? 'checked' : ''} data-topic="${i}">
          <div class="checkbox-custom">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <span class="idx">${String(i+1).padStart(2,'0')}</span>
        <span class="name">${t}</span>
        ${!progress.done[i] ? '<span class="xp-badge-inline">+40 XP</span>' : ''}
      </label>
    `).join("");

    document.querySelectorAll('[data-topic]').forEach(cb => {
      cb.addEventListener("change", (e) => {
        const idx = parseInt(e.target.dataset.topic);
        const isChecked = e.target.checked;
        const progressBefore = RP.api.getProgress(id);
        
        // Prevent skipping ahead
        if(isChecked && idx > 0 && !progressBefore.done[idx-1]){
          e.target.checked = false;
          RP.showToast("Please complete previous topics first", "error");
          return;
        }
        
        RP.api.setTopicDone(id, idx, isChecked);
        
        const progressAfter = RP.api.getProgress(id);
        
        if (isChecked) {
          if (!progressBefore.done[idx]) {
            RP.showXPToast(40);
          }
          RP.showConfetti();
        }
        
        if (progressAfter.pct === 100 && progressBefore.pct < 100) {
          showCompletionPopup();
        }
        
        // Update DOM directly instead of full re-render to prevent animation refresh
        const allLabels = document.getElementById("topicList").querySelectorAll(".topic-row-premium");
        allLabels.forEach((lbl, i) => {
          const isDone = progressAfter.done[i];
          const isCurrent = !isDone && (i === 0 || progressAfter.done[i-1]);
          lbl.classList.remove("done", "current", "locked");
          if (isDone) {
            lbl.classList.add("done");
            const xpBadge = lbl.querySelector(".xp-badge-inline");
            if (xpBadge) xpBadge.remove();
          } else if (isCurrent) {
            lbl.classList.add("current");
          } else {
            lbl.classList.add("locked");
          }
        });
        
        renderProgress();
      });
    });
  }

  function renderProgress(){
    const progress = RP.api.getProgress(id);
    document.getElementById("pctLabel").textContent = progress.pct + "%";
    document.getElementById("progressFill").style.width = progress.pct + "%";
    document.getElementById("doneCount").textContent = progress.doneCount;
    document.getElementById("remainingCount").textContent = progress.total - progress.doneCount;
    renderStepper(topics.map((_, i) => !!progress.done[i]));
  }

  function renderStepper(doneFlags){
    const currentIndex = doneFlags.findIndex(d => !d);
    document.getElementById("pathStepper").innerHTML = topics.slice(0, 6).map((t, i) => {
      const cls = doneFlags[i] ? "done" : (i === currentIndex ? "current" : "");
      return `<div class="path-node ${cls}"><strong style="font-size:13px;">${t.split(" ").slice(0,4).join(" ")}${t.split(" ").length > 4 ? "…" : ""}</strong></div>`;
    }).join("");
  }

  function showCompletionPopup() {
    const popup = document.createElement("div");
    popup.className = "completion-popup";
    popup.innerHTML = `
      <div class="completion-popup-overlay"></div>
      <div class="completion-popup-content glass-card">
        <div class="completion-icon">🏆</div>
        <h2>Congratulations!</h2>
        <p>You have successfully completed the <strong>${roadmapMeta.name}</strong> roadmap. Incredible work!</p>
        <button class="btn btn-primary btn-block" id="closeCompletionBtn">Continue Learning</button>
      </div>
    `;
    document.body.appendChild(popup);
    
    // Huge confetti blast
    for(let j=0; j<4; j++){
      setTimeout(RP.showConfetti, j * 300);
    }
    
    document.getElementById("closeCompletionBtn").addEventListener("click", () => {
      popup.classList.add("closing");
      setTimeout(() => popup.remove(), 400);
    });
  }
});
