/* ==========================================================================
   RolePath — dashboard.js
   Powers dashboard.html. Would map to GET /api/dashboard in production.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  if(!RP.api.isLoggedIn()){
    document.getElementById("guestNotice").style.display = "block";
    document.getElementById("dashContent").style.display = "none";
    return;
  }

  const user = RP.api.currentUser();
  document.getElementById("welcomeHeading").textContent = `Welcome back, ${user.name}!`;

  const enrolled = RP.api.getEnrolled();
  const purchased = RP.api.getPurchased();
  const freeStarted = RP.api.getFreeStarted();

  document.getElementById("overallPct").textContent = RP.api.getOverallProgress() + "%";
  document.getElementById("enrolledCount").textContent = enrolled.length;
  document.getElementById("purchasedCount").textContent = purchased.length;
  document.getElementById("freeCount").textContent = freeStarted.length;

  const continueList = document.getElementById("continueList");
  if(!enrolled.length){
    document.getElementById("noEnrolled").style.display = "block";
  } else {
    continueList.innerHTML = enrolled.map(r => {
      const progress = RP.api.getProgress(r.id);
      return `
      <a href="roadmap-details.html?id=${r.id}" class="mini-roadmap" style="text-decoration:none; color:inherit;">
        <div class="thumb"></div>
        <div class="info">
          <strong style="font-size:14.5px;">${r.name}</strong>
          <div class="flex justify-between muted" style="font-size:12px; margin-top:2px;">
            <span>${progress.doneCount}/${progress.total} topics</span><span>${progress.pct}%</span>
          </div>
          <div class="progress-track"><div class="progress-fill ${progress.pct === 100 ? 'success' : ''}" style="width:${progress.pct}%"></div></div>
        </div>
      </a>`;
    }).join("");
  }

  // Recent activity — derived from enrolled roadmaps' progress (dummy)
  const activityList = document.getElementById("activityList");
  const activities = [];
  enrolled.forEach(r => {
    const progress = RP.api.getProgress(r.id);
    if(progress.doneCount > 0){
      activities.push({ text: `Completed ${progress.doneCount} topic${progress.doneCount>1?'s':''} in ${r.name}`, icon: "check" });
    } else {
      activities.push({ text: `Started ${r.name}`, icon: "play" });
    }
  });
  if(purchased.length) activities.unshift({ text: `Unlocked ${purchased[purchased.length-1].name} for ₹29`, icon: "unlock" });

  activityList.innerHTML = activities.length ? activities.slice(0,6).map(a => `
    <div class="activity-item">
      <div class="activity-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg></div>
      <span style="font-size:13.5px;">${a.text}</span>
    </div>`).join("") : `<p class="muted" style="font-size:13.5px;">No activity yet — start a roadmap to see it here.</p>`;
});
