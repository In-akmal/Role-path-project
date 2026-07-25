import { LessonRenderer } from './lesson-renderer.js';
import { ProgressService } from '../services/progress-service.js';

export const ModuleRenderer = {
    render(module, progressState) {
        const modProgress = ProgressService.getModuleProgress(module, progressState);
        const isModComplete = ProgressService.isModuleComplete(module, progressState);

        let html = `
            <div class="linear-module" id="mod-${module.id}">
                <div class="linear-module-header" onclick="this.nextElementSibling.classList.toggle('collapsed'); if(window.RPSound) window.RPSound.play('click');">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="collapse-icon" style="width:16px; height:16px;"><polyline points="6 9 12 15 18 9"/></svg>
                        <h3 style="font-size: 22px; font-weight:600; margin:0;">Module ${module.order} — ${module.title}</h3>
                    </div>
                    <div class="linear-module-progress">
                        <div class="progress-track-minimal"><div class="progress-fill-minimal" style="width: ${modProgress.pct}%"></div></div>
                        <span class="muted">${modProgress.done} / ${modProgress.total} Lessons</span>
                        <span class="muted font-bold">${module.estimatedTime}</span>
                    </div>
                </div>
                
                <div class="linear-module-content">
                    <div class="timeline-container">
        `;

        if (module.lessons) {
            module.lessons.forEach((l) => {
                const status = ProgressService.getLessonStatus(l.id, progressState);
                html += LessonRenderer.render(l, status);
            });
        }

        html += `</div>`; // Close timeline-container

        // Module Footer
        const footerLocked = !isModComplete;
        html += `
            <div class="module-footer ${footerLocked ? 'locked' : ''}">
                <div style="margin-bottom: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
                    <strong style="font-size: 14px; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">Module Completion Tasks</strong>
                </div>
                <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                    ${module.quiz ? `
                    <div class="footer-task">
                        <span class="footer-icon">📝</span>
                        <div>
                            <strong>Module Quiz</strong>
                            <span class="muted" style="display:block; font-size: 12px;">${module.quiz.questions} Questions • ${module.quiz.passingScore}% to pass</span>
                        </div>
                    </div>` : ''}
                    
                    ${module.project ? `
                    <div class="footer-task">
                        <span class="footer-icon">💻</span>
                        <div>
                            <strong>${module.project.title}</strong>
                            <span class="muted" style="display:block; font-size: 12px;">${module.project.estimatedTime || 'Project'}</span>
                        </div>
                    </div>` : ''}
                </div>
                ${footerLocked ? `<div class="footer-locked-msg"><span class="icon-locked">🔒</span> Complete all lessons to unlock</div>` : ''}
            </div>
        `;

        html += `</div></div>`; // Close linear-module-content and linear-module
        return html;
    }
};
