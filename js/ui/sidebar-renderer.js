import { Formatter } from '../utils/formatter.js';

export const SidebarRenderer = {
    render(containerId, roadmapData, progressState) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let currentModule = null;
        let currentLesson = null;
        
        // Find current
        for (const mod of roadmapData.modules) {
            if (mod.lessons) {
                for (const l of mod.lessons) {
                    if (!progressState.done[l.id]) {
                        currentModule = mod;
                        currentLesson = l;
                        break;
                    }
                }
            }
            if (currentLesson) break;
        }

        // Calculate time left (mock logic based on remaining lessons * average time)
        const remaining = progressState.total - progressState.doneCount;
        const hoursLeft = Math.floor(remaining * 45 / 60);
        const minsLeft = (remaining * 45) % 60;
        const timeString = remaining === 0 ? 'Completed' : `${hoursLeft}h ${minsLeft}m`;

        const html = `
            <div class="sidebar-minimal">
                <div class="sidebar-meta">
                    <strong>Overall Progress</strong>
                    <span class="pct-val">${progressState.pct}%</span>
                </div>
                <div class="progress-track-minimal mt-8">
                    <div class="progress-fill-minimal" style="width: ${progressState.pct}%"></div>
                </div>
                
                <div class="sidebar-stat mt-16">
                    <span class="muted">Lessons Completed</span>
                    <strong>${progressState.doneCount} / ${progressState.total}</strong>
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

                <a href="dashboard.html" class="btn btn-primary btn-block mt-24" id="continueLearningBtn">Continue Learning</a>
            </div>
        `;
        
        container.innerHTML = html;
    }
};
