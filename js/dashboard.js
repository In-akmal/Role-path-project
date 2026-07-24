/* ==========================================================================
   RolePath — dashboard.js
   V2: Premium Dashboard Transformation
   Powers all 12 sections of the new dashboard UI using RP.api
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
  const xpInfo = RP.api.getXP();
  const levelInfo = RP.api.getLevelProgress();
  const streak = RP.api.getStreak();
  const enrolled = RP.api.getEnrolled();
  
  // Update streak if needed (just checking dashboard counts as activity if today is not logged)
  RP.api.updateStreak();

  // ---------------------------------------------------------
  // 1. Hero Banner
  // ---------------------------------------------------------
  document.getElementById("dashGreeting").textContent = `${RP.api.getGreeting()}, ${user.name}!`;
  
  const heroStats = document.getElementById("heroStats");
  heroStats.innerHTML = `
    <div class="hero-stat-pill">
      <span class="pill-icon">🌟</span>
      <span>Level <span class="pill-value">${levelInfo.level}</span> ${levelInfo.title}</span>
    </div>
    <div class="hero-stat-pill">
      <span class="pill-icon">✨</span>
      <span><span class="pill-value">${xpInfo.total}</span> Total XP</span>
    </div>
    <div class="hero-stat-pill">
      <span class="pill-icon">🎯</span>
      <span><span class="pill-value">${levelInfo.xpForNext - levelInfo.currentXP}</span> XP to next level</span>
    </div>
  `;

  // ---------------------------------------------------------
  // 2. Statistics Grid
  // ---------------------------------------------------------
  const statsGrid = document.getElementById("dashStatsGrid");
  const overallProgress = RP.api.getOverallProgress();
  const studyHours = RP.api.getStudyHours();
  const completedTopics = RP.api.getTotalTopicsDone();
  const badgesEarned = RP.api.getBadges().length;
  
  const statsData = [
    { label: "Overall Progress", value: overallProgress, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>`, trend: overallProgress > 0 ? '+'+overallProgress+'%' : '0%', up: true, suffix: '%' },
    { label: "Learning Streak", value: streak.current, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19c-1.5 2-4 2-5.5 0-1.5-2-.5-5.5.5-6.5.5-1 3-3 4-1 1 2 2 5.5 1 7.5z"/></svg>`, trend: streak.current >= streak.longest ? 'Best!' : streak.longest+' Max', up: streak.current >= streak.longest, suffix: ' Days' },
    { label: "XP Earned", value: xpInfo.total, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`, trend: `+${xpInfo.today} Today`, up: xpInfo.today > 0, suffix: '' },
    { label: "Hours Studied", value: studyHours, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, trend: 'Keep it up', up: true, suffix: 'h' },
    { label: "Roadmaps Enrolled", value: enrolled.length, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`, trend: RP.api.getPurchased().length + ' Premium', up: true, suffix: '' },
    { label: "Topics Completed", value: completedTopics, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`, trend: 'Active learner', up: true, suffix: '' },
    { label: "Current Level", value: levelInfo.level, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`, trend: levelInfo.pct + '% to next', up: true, suffix: '' },
    { label: "Badges Earned", value: badgesEarned, icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`, trend: RP.api.getBadgeDefs().length - badgesEarned + ' left', up: badgesEarned > 0, suffix: '' }
  ];

  statsGrid.innerHTML = statsData.map((s, i) => `
    <div class="stat-card-v2" style="animation-delay: ${i * 0.05}s">
      <div class="flex justify-between items-start">
        <div class="stat-icon" style="background: var(--primary-50); color: var(--primary)">${s.icon}</div>
        <span class="stat-trend ${s.up ? 'up' : 'down'}">${s.trend}</span>
      </div>
      <div style="margin-top:auto;">
        <div class="stat-value"><span data-counter="${s.value}">0</span>${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    </div>
  `).join("");

  // Trigger counters
  document.querySelectorAll("[data-counter]").forEach(el => {
    RP.animateCounter(el, parseFloat(el.getAttribute("data-counter")));
  });

  // ---------------------------------------------------------
  // 3. Progress Charts (Chart.js)
  // ---------------------------------------------------------
  setTimeout(() => {
    if(typeof Chart !== 'undefined'){
      const weeklyCtx = document.getElementById('weeklyChart')?.getContext('2d');
      const monthlyCtx = document.getElementById('monthlyChart')?.getContext('2d');
      
      const isDark = RP.api.getTheme() === 'dark';
      const textColor = isDark ? '#9CA3AF' : '#6B7280';
      const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
      const primaryColor = '#2563EB';

      if(weeklyCtx){
        const weeklyData = RP.api.getWeeklyData();
        new Chart(weeklyCtx, {
          type: 'bar',
          data: {
            labels: weeklyData.map(d => d.label),
            datasets: [{
              label: 'Hours Studied',
              data: weeklyData.map(d => d.value),
              backgroundColor: primaryColor,
              borderRadius: 4,
              barThickness: 'flex',
              maxBarThickness: 24
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor } },
              x: { grid: { display: false }, ticks: { color: textColor } }
            }
          }
        });
      }

      if(monthlyCtx){
        const monthlyData = RP.api.getMonthlyData();
        const gradient = monthlyCtx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.4)');
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0.0)');

        new Chart(monthlyCtx, {
          type: 'line',
          data: {
            labels: monthlyData.map(d => d.label),
            datasets: [{
              label: 'Hours Studied',
              data: monthlyData.map(d => d.value),
              borderColor: primaryColor,
              backgroundColor: gradient,
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHitRadius: 10
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor } },
              x: { grid: { display: false }, ticks: { maxTicksLimit: 6, color: textColor } }
            }
          }
        });
      }
    }
  }, 100);

  // ---------------------------------------------------------
  // 4. Continue Learning
  // ---------------------------------------------------------
  const continueList = document.getElementById("continueList");
  const noEnrolled = document.getElementById("noEnrolled");
  
  if(enrolled.length === 0){
    noEnrolled.style.display = "block";
  } else {
    // Show up to 3 most recently active roadmaps
    continueList.innerHTML = enrolled.slice(0,3).map((r, i) => {
      const prog = RP.api.getProgress(r.id);
      return `
        <a href="roadmap-details.html?id=${r.id}" class="learn-card" style="animation-delay: ${i*0.05}s">
          <div class="learn-thumb">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${RP.iconPath(r.icon)}"/></svg>
          </div>
          <div class="learn-info">
            <div class="learn-title">${r.name}</div>
            <div class="learn-meta">
              <span>${prog.doneCount}/${prog.total} Topics</span>
              <span class="dot"></span>
              <span>${r.category}</span>
            </div>
          </div>
          <div class="learn-actions">
            ${RP.progressRingSVG(prog.pct, 40, 3)}
          </div>
        </a>
      `;
    }).join("");
  }

  // ---------------------------------------------------------
  // 5. Heatmap
  // ---------------------------------------------------------
  document.getElementById("streakLabel").textContent = `${streak.current} Day Streak 🔥`;
  
  const heatmapGrid = document.getElementById("heatmapGrid");
  const heatmapMonths = document.getElementById("heatmapMonths");
  const heatmapData = RP.api.getHeatmapData();
  
  // Render months labels (approximate based on 52 columns)
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const currentMonth = new Date().getMonth();
  let monthsHtml = "";
  for(let i=0; i<12; i++){
    monthsHtml += `<span>${monthNames[(currentMonth - 11 + i + 12) % 12]}</span>`;
  }
  if(heatmapMonths) heatmapMonths.innerHTML = monthsHtml;

  // Render 365 days (52 weeks x 7 days)
  if(heatmapGrid){
    const today = new Date();
    let gridHtml = "";
    for(let i=364; i>=0; i--){
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      const data = heatmapData[key] || { level: 0, minutes: 0 };
      
      const tooltip = `${data.minutes} mins on ${d.toLocaleDateString()}`;
      gridHtml += `<div class="heatmap-cell" data-level="${data.level}" title="${tooltip}"></div>`;
    }
    heatmapGrid.innerHTML = gridHtml;
    // Scroll to end
    const container = document.querySelector(".heatmap-container");
    if(container) container.scrollLeft = container.scrollWidth;
  }

  // ---------------------------------------------------------
  // 6. Achievements
  // ---------------------------------------------------------
  const badgeGrid = document.getElementById("badgeGrid");
  const earnedBadges = RP.api.getBadges();
  const allBadges = RP.api.getBadgeDefs();
  
  if(badgeGrid){
    // Show first 6 badges (earned first, then locked)
    const displayBadges = [...allBadges].sort((a,b) => {
      const aEarned = earnedBadges.includes(a.id);
      const bEarned = earnedBadges.includes(b.id);
      return (aEarned === bEarned) ? 0 : aEarned ? -1 : 1;
    }).slice(0, 6);
    
    badgeGrid.innerHTML = displayBadges.map((b, i) => {
      const earned = earnedBadges.includes(b.id);
      return `
        <div class="badge-achievement ${!earned ? 'locked' : ''}" style="animation-delay:${i*0.05}s">
          <div class="badge-emoji">${b.emoji}</div>
          <div class="badge-title">${b.title}</div>
          <div class="badge-desc">${b.desc}</div>
        </div>
      `;
    }).join("");
  }

  // ---------------------------------------------------------
  // 7. Daily Challenge
  // ---------------------------------------------------------
  const dc = RP.api.getDailyChallenge();
  document.getElementById("dcTarget").textContent = dc.target;
  document.getElementById("dcStatus").textContent = `${dc.completed} / ${dc.target} completed`;
  
  const dcProgress = document.getElementById("dcProgress");
  if(dcProgress){
    const pct = Math.min(100, (dc.completed / dc.target) * 100);
    setTimeout(() => {
      dcProgress.style.width = pct + "%";
      dcProgress.style.transition = "width 1s cubic-bezier(0.4, 0, 0.2, 1)";
      if(pct === 100) dcProgress.classList.add("success");
    }, 100);
  }

  // ---------------------------------------------------------
  // 8. Notifications
  // ---------------------------------------------------------
  const notifList = document.getElementById("notifList");
  const notifs = RP.api.getNotifications();
  if(notifList){
    if(notifs.length === 0){
      notifList.innerHTML = `<div class="muted" style="padding:12px; font-size:13px;">You're all caught up!</div>`;
    } else {
      notifList.innerHTML = notifs.map(n => `
        <div class="notif-item">
          <div class="notif-icon" style="background:var(--bg)">${n.icon}</div>
          <div class="notif-text">${n.text}</div>
          <div class="notif-dot"></div>
        </div>
      `).join("");
    }
  }

  // ---------------------------------------------------------
  // 9. Analytics Mini
  // ---------------------------------------------------------
  const analyticsGrid = document.getElementById("analyticsGrid");
  const analytics = RP.api.getAnalytics();
  if(analyticsGrid){
    analyticsGrid.innerHTML = `
      <div class="analytics-item">
        <div class="analytics-label">Focus Score</div>
        <div class="analytics-value">${analytics.focusScore}%</div>
        <div class="analytics-bar"><div class="analytics-bar-fill" style="width:${analytics.focusScore}%"></div></div>
      </div>
      <div class="analytics-item">
        <div class="analytics-label">Completion</div>
        <div class="analytics-value">${analytics.completionRate}%</div>
        <div class="analytics-bar"><div class="analytics-bar-fill" style="width:${analytics.completionRate}%"></div></div>
      </div>
      <div class="analytics-item">
        <div class="analytics-label">Active Day</div>
        <div class="analytics-value" style="font-size:15px; margin-top:5px;">${analytics.mostActiveDay}</div>
      </div>
    `;
  }

  // ---------------------------------------------------------
  // 10. Activity Timeline
  // ---------------------------------------------------------
  const activityList = document.getElementById("activityList");
  const activities = RP.api.getActivityLog().slice(0, 5); // top 5
  if(activityList){
    if(activities.length === 0){
      activityList.innerHTML = `<div class="muted" style="font-size:13px;">No recent activity</div>`;
    } else {
      activityList.innerHTML = activities.map(a => {
        let cls = "";
        if(a.icon === "check" || a.icon === "trophy") cls = "completed";
        if(a.icon === "play" || a.icon === "badge") cls = "xp";
        if(a.icon === "unlock") cls = "purchase";
        
        return `
          <div class="timeline-item ${cls}">
            <div class="timeline-content">
              <div class="timeline-text">${a.text}</div>
              <div class="timeline-meta">
                <span>${RP.api.relativeTime(a.date)}</span>
                ${a.xp > 0 ? `<span class="xp-badge">+${a.xp} XP</span>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // ---------------------------------------------------------
  // 11. Recommendations
  // ---------------------------------------------------------
  const recList = document.getElementById("recList");
  const recs = RP.api.getRecommendations();
  if(recList){
    if(recs.length === 0){
      recList.innerHTML = `<div class="muted" style="font-size:13px;">No recommendations at this time.</div>`;
    } else {
      recList.innerHTML = recs.map(r => `
        <a href="roadmap-details.html?id=${r.id}" class="rec-card">
          <div class="rec-thumb" style="background: ${r.price === 0 ? 'linear-gradient(135deg,#22C55E,#16A34A)' : 'linear-gradient(135deg,#2563EB,#7C3AED)'}">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${RP.iconPath(r.icon)}"/></svg>
          </div>
          <div class="rec-info">
            <div class="rec-name">${r.name}</div>
            <div class="rec-reason">${r.reason}</div>
          </div>
          <div class="rec-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </a>
      `).join("");
    }
  }

});
