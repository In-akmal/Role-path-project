class ModuleList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(roadmapData, progressData, allLessons) {
        let html = "";
        
        roadmapData.modules.forEach((mod, mIdx) => {
            let moduleLessonsDone = 0;
            let moduleTotalLessons = mod.lessons ? mod.lessons.length : 0;
            
            if (mod.lessons) {
                moduleLessonsDone = mod.lessons.filter(l => progressData.done[l.id]).length;
            }
            const modPct = moduleTotalLessons ? Math.round((moduleLessonsDone / moduleTotalLessons)*100) : 0;

            html += `
                <div class="linear-module" id="mod-${mod.id}">
                    <div class="linear-module-header" onclick="this.nextElementSibling.classList.toggle('collapsed'); window.RPSound.play('click');">
                        <div style="display:flex; align-items:center; gap:8px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="collapse-icon" style="width:16px; height:16px;"><polyline points="6 9 12 15 18 9"/></svg>
                            <h3 style="font-size: 22px; font-weight:600; margin:0;">Module ${mIdx+1} — ${mod.title}</h3>
                        </div>
                        <div class="linear-module-progress">
                            <div class="progress-track-minimal"><div class="progress-fill-minimal" style="width: ${modPct}%"></div></div>
                            <span class="muted">${moduleLessonsDone} / ${moduleTotalLessons} Lessons</span>
                        </div>
                    </div>
                    <div class="linear-module-content">
            `;

            if (mod.lessons) {
                mod.lessons.forEach(l => {
                    const i = allLessons.indexOf(l.id);
                    const isDone = !!progressData.done[l.id];
                    
                    let status = 'upcoming';
                    if (isDone) status = 'done';
                    else {
                        if (i === 0) status = 'current';
                        else {
                            const prevId = allLessons[i-1];
                            status = progressData.done[prevId] ? 'current' : 'locked';
                        }
                    }

                    html += window.LessonItem.render(l, status, i);
                });
            }

            html += `</div></div>`; // close linear-module-content and linear-module
        });

        this.container.innerHTML = html;
        this.bindEvents(roadmapData, allLessons);
    }

    bindEvents(roadmapData, allLessons) {
        // Expand/Collapse behavior is handled by toggle('collapsed') inline
        
        // Mark complete buttons
        this.container.querySelectorAll('.mark-complete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const lessonId = e.target.dataset.lesson;
                
                // Set done in API
                RP.api.setTopicDone(roadmapData.id, lessonId, true);
                window.RPSound.play('success');
                
                // Re-render
                window.RPApp.refresh();
            });
        });
    }
}

window.ModuleList = ModuleList;
