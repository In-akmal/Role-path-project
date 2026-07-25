class ProgressSidebar {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(progressData, allLessons, roadmapData) {
        const pct = progressData.pct;
        const doneCount = progressData.doneCount;
        const total = allLessons.length;
        
        let currentModule = null;
        let currentLesson = null;
        
        roadmapData.modules.forEach(mod => {
            if (mod.lessons) {
                mod.lessons.forEach(l => {
                    if (!progressData.done[l.id] && !currentLesson) {
                        currentModule = mod;
                        currentLesson = l;
                    }
                });
            }
        });

        // Calculate time left (mock logic based on remaining lessons * average time)
        const remaining = total - doneCount;
        const hoursLeft = Math.floor(remaining * 45 / 60);
        const minsLeft = (remaining * 45) % 60;
        const timeString = remaining === 0 ? 'Completed' : `${hoursLeft}h ${minsLeft}m`;

        const html = `
            <div class="sidebar-minimal">
                <div class="sidebar-meta">
                    <strong>Overall Progress</strong>
                    <span class="pct-val">${pct}%</span>
                </div>
                <div class="progress-track-minimal mt-8">
                    <div class="progress-fill-minimal" style="width: ${pct}%"></div>
                </div>
                
                <div class="sidebar-stat mt-16">
                    <span class="muted">Lessons Completed</span>
                    <strong>${doneCount} / ${total}</strong>
                </div>

                <div class="sidebar-stat-block mt-24">
                    <span class="muted">Current Module</span>
                    <strong>${currentModule ? currentModule.title : 'Finished'}</strong>
                </div>

                <div class="sidebar-stat-block mt-16">
                    <span class="muted">Current Lesson</span>
                    <strong>${currentLesson ? currentLesson.title : 'Finished'}</strong>
                </div>

                <div class="sidebar-stat-block mt-16">
                    <span class="muted">Estimated Time Left</span>
                    <strong>${timeString}</strong>
                </div>

                <a href="dashboard.html" class="btn btn-primary btn-block mt-24" onclick="window.RPSound.play('click')">Continue Learning</a>
            </div>
        `;
        
        this.container.innerHTML = html;
    }
}

window.ProgressSidebar = ProgressSidebar;
