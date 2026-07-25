/* ==========================================================================
   RolePath — roadmap.js (V4 - Ultra Deep LMS)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "frontend-dev";
  
  const roadmapData = await RP.api.getRoadmapData(id);

  if(!roadmapData){
    document.getElementById("rdName").textContent = "Roadmap not found";
    document.getElementById("rdDesc").textContent = "This roadmap doesn't exist.";
    document.getElementById("topicList").innerHTML = "";
    return;
  }

  const meta = roadmapData.metadata;
  const isFree = meta.price === 0;

  // Build a flat list of all lessons for sequential tracking
  const allLessons = [];
  roadmapData.modules.forEach(m => {
    if (m.lessons) {
        m.lessons.forEach(l => {
        allLessons.push(l.id);
        });
    }
  });

  // Header & Meta
  document.title = meta.title + " — RolePath";
  document.getElementById("badgeRow").innerHTML = `
    <span class="badge ${isFree ? 'badge-free' : 'badge-premium'}">${isFree ? 'Free' : 'Premium'}</span>
    <span class="difficulty-tag difficulty-${meta.difficulty.toLowerCase()}">${meta.difficulty}</span>`;
  document.getElementById("rdName").textContent = meta.title;
  document.getElementById("rdDesc").textContent = meta.description;
  
  // Tabs
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

  // Locking Logic
  const unlocked = isFree || RP.api.isUnlocked(id);
  if(isFree) RP.api.startFree(id);

  if(!unlocked){
    document.getElementById("topicList").style.display = "none";
    document.querySelector(".syllabus-toolbar").style.display = "none";
    document.getElementById("lockedOverlay").style.display = "flex";
    document.getElementById("unlockLink").href = "payment.html?id=" + id;
    document.getElementById("continueBtn").textContent = "Unlock for ₹" + meta.price;
    document.getElementById("continueBtn").href = "payment.html?id=" + id;
    return;
  }

  renderTopics();
  renderSidebar();

  // Search & Filter Events
  document.getElementById("topicSearch").addEventListener("input", filterLessons);
  document.getElementById("topicFilter").addEventListener("change", filterLessons);
  
  let allExpanded = true;
  document.getElementById("toggleModulesBtn").addEventListener("click", (e) => {
      allExpanded = !allExpanded;
      e.target.textContent = allExpanded ? "Collapse All" : "Expand All";
      document.querySelectorAll(".roadmap-module").forEach(mod => {
          const body = mod.querySelector(".module-content");
          body.style.display = allExpanded ? "block" : "none";
      });
  });

  function filterLessons() {
      const q = document.getElementById("topicSearch").value.toLowerCase();
      const filter = document.getElementById("topicFilter").value;
      
      document.querySelectorAll(".topic-row-premium").forEach(row => {
          const text = row.querySelector(".lesson-title").textContent.toLowerCase();
          const isDone = row.classList.contains("done");
          
          let matchesSearch = text.includes(q);
          let matchesFilter = true;
          if (filter === "completed" && !isDone) matchesFilter = false;
          if (filter === "remaining" && isDone) matchesFilter = false;
          
          row.style.display = (matchesSearch && matchesFilter) ? "flex" : "none";
      });
  }

  function renderTopics(){
    const progress = RP.api.getProgress(id);
    const doneObj = progress.done;

    let html = "";
    roadmapData.modules.forEach((mod, mIdx) => {
      let moduleLessonsDone = 0;
      let moduleTotalLessons = mod.lessons ? mod.lessons.length : 0;
      if (mod.lessons) {
          moduleLessonsDone = mod.lessons.filter(l => doneObj[l.id]).length;
      }
      const modPct = moduleTotalLessons ? Math.round((moduleLessonsDone / moduleTotalLessons)*100) : 0;

      html += `<div class="roadmap-module" id="mod-${mod.id}">`;
      html += `
        <div class="module-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
            <h3>Module ${mIdx+1}: ${mod.title}</h3>
            <div class="module-meta">
                <span>Progress: ${modPct}%</span>
                <span>Topics: ${moduleLessonsDone}/${moduleTotalLessons}</span>
                <span>${mod.estimatedTime || ''}</span>
            </div>
        </div>
        <div class="module-content">
      `;
      
      if (mod.lessons) {
          mod.lessons.forEach(l => {
            const i = allLessons.indexOf(l.id);
            const isDone = doneObj[l.id];
            
            let isCurrent = false;
            if (!isDone) {
              if (i === 0) isCurrent = true;
              else {
                const prevId = allLessons[i-1];
                isCurrent = !!doneObj[prevId];
              }
            }
            
            let statusClass = isDone ? 'done' : (isCurrent ? 'current' : 'locked');

            html += `
              <div class="topic-row-premium ${statusClass}" data-id="${l.id}" data-index="${i}">
                <div class="lesson-header">
                    <div class="topic-checkbox-wrap" onclick="event.stopPropagation();">
                        <input type="checkbox" class="topic-checkbox" ${isDone ? 'checked' : ''} data-topic-id="${l.id}" data-topic-idx="${i}">
                        <div class="checkbox-custom">
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                    </div>
                    <span class="idx">${String(i+1).padStart(2,'0')}</span>
                    <span class="lesson-title">${l.title}</span>
                    <div class="lesson-meta">
                        ${l.difficulty ? `<span>${l.difficulty}</span>` : ''}
                        ${l.estimatedTime ? `<span>${l.estimatedTime}</span>` : ''}
                    </div>
                    ${!isDone && l.xpReward ? `<span class="xp-badge-inline">+${l.xpReward} XP</span>` : ''}
                </div>
                
                <div class="lesson-body">
            `;
            
            if (l.resources && l.resources.length > 0) {
                html += `<div style="margin-bottom:12px;"><strong>Resources</strong></div>`;
                l.resources.forEach(r => {
                    html += `<div class="lesson-resource">📄 <a href="${r.url}" target="_blank">${r.title} (${r.type})</a></div>`;
                });
            }
            
            if (l.exercise) {
                html += `<div class="lesson-exercise">
                    <strong style="display:block; margin-bottom:4px;">Exercise</strong>
                    ${l.exercise.instruction}
                    ${l.exercise.challenge ? `<div style="margin-top:8px; color:var(--text-muted)"><em>Challenge: ${l.exercise.challenge}</em></div>` : ''}
                </div>`;
            }
            
            if (l.miniProject) {
                html += `<div style="margin-top:12px; font-size:13px; color:var(--primary);"><strong>Mini Project:</strong> ${l.miniProject}</div>`;
            }

            html += `</div></div>`; // Close lesson-body and topic-row
          });
      }

      if (mod.project) {
          html += `<div style="margin-top:16px; padding:16px; border: 1px dashed var(--primary); border-radius: 8px; background: rgba(59, 130, 246, 0.05);">
            <strong style="color:var(--primary)">Module Project: ${mod.project.title}</strong>
            <span style="float:right; font-size:12px; color:var(--text-muted)">Difficulty: ${mod.project.difficulty}</span>
          </div>`;
      }
      
      html += `</div></div>`; // Close module-content and roadmap-module
    });

    if (roadmapData.checkpoints && roadmapData.checkpoints.length > 0) {
      html += `<div class="roadmap-checkpoints" style="margin-top: 32px; padding-top: 24px; border-top: 1px dashed var(--border-color);">
        <h3 style="font-size: 16px; margin-bottom: 16px;">Milestone Checkpoints</h3>
        <div style="display:grid; gap: 16px;">`;
      roadmapData.checkpoints.forEach((cp, idx) => {
        const cpUnlocked = cp.requiredLessons.every(lid => doneObj[lid]);
        html += `
          <div class="card glass-card checkpoint-card ${cpUnlocked ? '' : 'locked'}" data-cp-idx="${idx}" style="padding: 20px; border: 1px solid ${cpUnlocked ? 'var(--primary)' : 'var(--border-color)'}">
            <div style="display:flex; justify-content: space-between; align-items: center;">
              <div>
                <strong style="font-size: 15px; display:block; margin-bottom: 4px;">${cp.title}</strong>
                <span style="font-size:13px; color:var(--text-muted)">Reward: ${cp.reward}</span>
              </div>
              <div style="font-size:24px;">${cpUnlocked ? '🏆' : '🔒'}</div>
            </div>
          </div>
        `;
      });
      html += `</div></div>`;
    }

    document.getElementById("topicList").innerHTML = html;

    // Expand/Collapse Lesson Cards
    document.querySelectorAll('.topic-row-premium').forEach(row => {
        row.addEventListener('click', () => {
            row.classList.toggle('expanded');
        });
    });

    // Checkbox Events
    document.querySelectorAll('[data-topic-id]').forEach(cb => {
      cb.addEventListener("change", (e) => {
        const lessonId = e.target.dataset.topicId;
        const idx = parseInt(e.target.dataset.topicIdx);
        const isChecked = e.target.checked;
        const progressBefore = RP.api.getProgress(id);
        
        if(isChecked && idx > 0){
          const prevId = allLessons[idx-1];
          if (!progressBefore.done[prevId]) {
            e.target.checked = false;
            RP.showToast("Please complete previous lessons first", "error");
            return;
          }
        }
        
        RP.api.setTopicDone(id, lessonId, isChecked);
        const progressAfter = RP.api.getProgress(id);
        
        if (isChecked) {
          if (!progressBefore.done[lessonId]) {
            RP.showXPToast(40);
          }
          RP.showConfetti();
        }
        
        if (progressAfter.pct === 100 && progressBefore.pct < 100) {
          showCompletionPopup();
        }
        
        // Selective DOM Updates
        const allRows = document.getElementById("topicList").querySelectorAll(".topic-row-premium");
        allRows.forEach((row) => {
          const lId = row.dataset.id;
          const i = parseInt(row.dataset.index);
          const isDone = progressAfter.done[lId];
          
          let isCurrent = false;
          if (!isDone) {
            if (i === 0) isCurrent = true;
            else {
              const prevId = allLessons[i-1];
              isCurrent = !!progressAfter.done[prevId];
            }
          }
          
          row.classList.remove("done", "current", "locked");
          if (isDone) {
            row.classList.add("done");
            const xpBadge = row.querySelector(".xp-badge-inline");
            if (xpBadge) xpBadge.remove();
          } else if (isCurrent) {
            row.classList.add("current");
          } else {
            row.classList.add("locked");
          }
        });

        // Update Module Header Percentages dynamically
        roadmapData.modules.forEach((mod, mIdx) => {
            let moduleLessonsDone = 0;
            let moduleTotalLessons = mod.lessons ? mod.lessons.length : 0;
            if (mod.lessons) {
                moduleLessonsDone = mod.lessons.filter(l => progressAfter.done[l.id]).length;
            }
            const modPct = moduleTotalLessons ? Math.round((moduleLessonsDone / moduleTotalLessons)*100) : 0;
            const headerSpans = document.querySelector(`#mod-${mod.id} .module-meta`).querySelectorAll("span");
            if (headerSpans.length >= 2) {
                headerSpans[0].textContent = `Progress: ${modPct}%`;
                headerSpans[1].textContent = `Topics: ${moduleLessonsDone}/${moduleTotalLessons}`;
            }
        });

        // Update checkpoints selectively
        if (roadmapData.checkpoints) {
            document.querySelectorAll(".checkpoint-card").forEach((card) => {
                const cpIdx = parseInt(card.dataset.cpIdx);
                const cp = roadmapData.checkpoints[cpIdx];
                const cpUnlocked = cp.requiredLessons.every(lid => progressAfter.done[lid]);
                if (cpUnlocked) {
                    card.classList.remove("locked");
                    card.style.borderColor = "var(--primary)";
                    card.querySelector("div[style*='font-size:24px']").textContent = "🏆";
                } else {
                    card.classList.add("locked");
                    card.style.borderColor = "var(--border-color)";
                    card.querySelector("div[style*='font-size:24px']").textContent = "🔒";
                }
            });
        }
        
        renderSidebar();
      });
    });
  }

  function renderSidebar(){
    const progress = RP.api.getProgress(id);
    const doneObj = progress.done;
    
    document.getElementById("pctLabel").textContent = progress.pct + "%";
    document.getElementById("progressFill").style.width = progress.pct + "%";
    
    document.getElementById("doneCount").textContent = `${progress.doneCount} / ${allLessons.length}`;
    
    // Modules Completed
    let modulesCompleted = 0;
    let projectsCompleted = 0;
    let totalProjects = 0;
    
    let currentModule = null;
    let currentLesson = null;
    let nextLesson = null;
    
    roadmapData.modules.forEach(mod => {
        if (mod.project) totalProjects++;
        if (mod.lessons) {
            let allDone = true;
            mod.lessons.forEach(l => {
                if (!doneObj[l.id]) {
                    allDone = false;
                    if (!currentLesson) {
                        currentModule = mod;
                        currentLesson = l;
                    } else if (!nextLesson) {
                        nextLesson = l;
                    }
                }
            });
            if (allDone) {
                modulesCompleted++;
                if (mod.project) projectsCompleted++;
            }
        }
    });
    
    document.getElementById("modulesCount").textContent = `${modulesCompleted} / ${roadmapData.modules.length}`;
    document.getElementById("projectsCount").textContent = `${projectsCompleted} / ${totalProjects}`;
    
    document.getElementById("currentModuleLabel").textContent = currentModule ? currentModule.title : "Completed";
    document.getElementById("currentLessonLabel").textContent = currentLesson ? currentLesson.title : "Completed";
    document.getElementById("nextLessonLabel").textContent = nextLesson ? nextLesson.title : "Completed";
    
    // Recently Completed Timeline
    const recentlyCompletedHtml = allLessons
        .filter(lId => doneObj[lId])
        .slice(-5) // Get last 5 completed
        .reverse()
        .map(lId => {
            // Find lesson title
            let title = lId;
            roadmapData.modules.forEach(m => {
                if(m.lessons) {
                    const l = m.lessons.find(x => x.id === lId);
                    if (l) title = l.title;
                }
            });
            return `<div class="path-node done"><strong style="font-size:13px;">${title}</strong></div>`;
        }).join("");
        
    document.getElementById("pathStepper").innerHTML = recentlyCompletedHtml || "<span class='muted'>No lessons completed yet</span>";
  }

  function showCompletionPopup() {
    const popup = document.createElement("div");
    popup.className = "completion-popup";
    popup.innerHTML = `
      <div class="completion-popup-overlay"></div>
      <div class="completion-popup-content glass-card">
        <div class="completion-icon">🏆</div>
        <h2>Congratulations!</h2>
        <p>You have successfully completed the <strong>${meta.title}</strong> roadmap. Incredible work!</p>
        <button class="btn btn-primary btn-block" id="closeCompletionBtn">Continue Learning</button>
      </div>
    `;
    document.body.appendChild(popup);
    
    for(let j=0; j<4; j++){
      setTimeout(RP.showConfetti, j * 300);
    }
    
    document.getElementById("closeCompletionBtn").addEventListener("click", () => {
      popup.classList.add("closing");
      setTimeout(() => popup.remove(), 400);
    });
  }
});
