/* ==========================================================================
   RolePath — dashboard.js
   V2: Mission Control Dashboard
   Powers all sections of the V2 dashboard UI using RP.api
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  if(!RP.api.isLoggedIn()){
    document.getElementById("guestNotice").style.display = "block";
    const content = document.getElementById("dashContent");
    if(content) content.style.display = "none";
    return;
  }

  // Show dashboard content
  const content = document.getElementById("dashContent");
  if(content) content.style.display = "block";

  const user = RP.api.currentUser();
  const dashSubtitle = document.getElementById("dashSubtitle");
  if(dashSubtitle && user) {
    dashSubtitle.textContent = `Welcome back, ${user.name || 'Student'}. Continue your learning journey.`;
  }

  // Get references
  const gridContainer = document.getElementById("myRoadmapsGrid");
  const emptyState = document.getElementById("emptyGridState");
  const searchInput = document.getElementById("roadmapSearch");
  const filterBtns = document.querySelectorAll(".minimal-pill");

  if (!gridContainer) return; // not on dashboard page

  let currentFilter = "all";
  let searchQuery = "";

  function renderGrid() {
    let enrolled = RP.api.getEnrolled();

    // 1. Search Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      enrolled = enrolled.filter(r => (r.name || '').toLowerCase().includes(q) || (r.desc || '').toLowerCase().includes(q));
    }

    // 2. Status Filter
    if (currentFilter !== "all") {
      enrolled = enrolled.filter(r => {
        const p = RP.api.getProgress(r.id);
        if (currentFilter === "completed") return p.pct === 100;
        if (currentFilter === "in-progress") return p.pct > 0 && p.pct < 100;
        if (currentFilter === "not-started") return p.pct === 0;
        return true;
      });
    }

    if (enrolled.length === 0) {
      gridContainer.innerHTML = "";
      gridContainer.style.display = "none";
      emptyState.style.display = "block";
      // Update empty state text based on context
      if (searchQuery || currentFilter !== "all") {
        emptyState.querySelector("h3").textContent = "No roadmaps found";
        emptyState.querySelector("p").textContent = "Try adjusting your filters or search query.";
      } else {
        emptyState.querySelector("h3").textContent = "No roadmaps yet";
        emptyState.querySelector("p").textContent = "Start your first roadmap and begin learning.";
      }
      return;
    }

    emptyState.style.display = "none";
    gridContainer.style.display = "grid";

    gridContainer.innerHTML = enrolled.map(r => {
      const progress = RP.api.getProgress(r.id);
      const topicsList = RP.api.getTopics(r.id) || [];
      const nextTopic = topicsList.length ? (topicsList.find((_, i) => !progress.done[i]) || "Course Completed") : "Pending Content";
      
      // Calculate fake hours left based on uncompleted topics (e.g., 2 hours per topic)
      const topicsLeft = progress.total - progress.doneCount;
      const hoursLeft = topicsLeft > 0 ? topicsLeft * 2 : 0;
      const hoursText = hoursLeft > 0 ? `${hoursLeft} hours left` : "Completed";

      return `
        <div class="rm-card-minimal" onclick="window.location.href='roadmap-details.html?id=${r.id}'">
          <div class="rm-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px; height:24px;">
              <path d="${RP.iconPath(r.icon)}"/>
            </svg>
          </div>
          <h3 class="rm-card-title">${r.name}</h3>
          <p class="rm-card-desc">${r.desc}</p>
          
          <div class="rm-card-progress-bar">
            <div class="rm-card-progress-fill" style="width:${progress.pct}%"></div>
          </div>
          <div class="rm-card-meta">
            <span>${progress.pct}% Complete</span>
            <span>${hoursText}</span>
          </div>
          
          <div class="rm-card-current">
            Current: <strong>${nextTopic}</strong>
          </div>
          
          <div style="margin-top:auto;">
            <button class="rm-btn-outline w-full">${progress.pct === 100 ? 'Review →' : 'Continue →'}</button>
          </div>
        </div>
      `;
    }).join("");
  }

  // Bind Events
  if(searchInput){
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderGrid();
    });
  }

  if(filterBtns){
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        renderGrid();
      });
    });
  }

  // Initial render
  renderGrid();

});
