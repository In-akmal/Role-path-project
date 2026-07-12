/* ==========================================================================
   RolePath — roadmap.js
   Powers roadmap-details.html: topic checklist, progress bar, lock state.
   In production, GET /api/roadmaps/{id} and POST /api/progress/{id}/{topic}
   would replace the RP.api.* calls below.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "frontend-dev";
  const roadmap = RP.api.getRoadmap(id);

  if(!roadmap){
    document.getElementById("rdName").textContent = "Roadmap not found";
    document.getElementById("rdDesc").textContent = "This roadmap doesn't exist. Browse all roadmaps instead.";
    document.getElementById("topicList").innerHTML = "";
    return;
  }

  const isFree = roadmap.price === 0;
  const topics = RP.api.getTopics(id);

  // ---- Header ----
  document.title = roadmap.name + " — RolePath";
  document.getElementById("badgeRow").innerHTML = `
    <span class="badge ${isFree ? 'badge-free' : 'badge-premium'}">${isFree ? 'Free' : 'Premium'}</span>
    <span class="difficulty-tag difficulty-${roadmap.difficulty.toLowerCase()}">${roadmap.difficulty}</span>`;
  document.getElementById("rdName").textContent = roadmap.name;
  document.getElementById("rdDesc").textContent = roadmap.desc;
  document.getElementById("rdMeta").innerHTML = `
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>${roadmap.duration}</span>
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19h16M4 15h16M4 11h10M4 7h6"/></svg>${roadmap.category}</span>
    <span class="price ${isFree ? 'free' : 'premium'}">${isFree ? 'FREE' : '₹29'}</span>`;

  const unlocked = isFree || RP.api.isUnlocked(id);

  if(isFree) RP.api.startFree(id);

  if(!unlocked){
    document.getElementById("topicList").style.display = "none";
    document.getElementById("lockedOverlay").style.display = "block";
    document.getElementById("unlockLink").href = "payment.html?id=" + id;
    document.getElementById("continueBtn").textContent = "Unlock for ₹29";
    document.getElementById("continueBtn").href = "payment.html?id=" + id;
    document.querySelector(".sidebar-sticky .card:first-child").style.display = "none";
    renderStepper([]); // no progress yet
    return;
  }

  renderTopics();
  renderProgress();

  function renderTopics(){
    const progress = RP.api.getProgress(id);
    document.getElementById("topicList").innerHTML = topics.map((t, i) => `
      <label class="topic-row ${progress.done[i] ? 'done' : ''}" data-index="${i}">
        <input type="checkbox" ${progress.done[i] ? 'checked' : ''} data-topic="${i}">
        <span class="idx">${String(i+1).padStart(2,'0')}</span>
        <span class="name">${t}</span>
      </label>
    `).join("");

    document.querySelectorAll('[data-topic]').forEach(cb => {
      cb.addEventListener("change", (e) => {
        const idx = e.target.dataset.topic;
        const isChecked = e.target.checked;
        const progressBefore = RP.api.getProgress(id);
        
        RP.api.setTopicDone(id, idx, isChecked);
        e.target.closest(".topic-row").classList.toggle("done", isChecked);
        
        const progressAfter = RP.api.getProgress(id);
        
        if (isChecked && !progressBefore.done[idx]) {
          RP.showXPToast(40);
        }
        
        if (progressAfter.pct === 100 && progressBefore.pct < 100) {
          RP.showConfetti();
        }
        
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
});
