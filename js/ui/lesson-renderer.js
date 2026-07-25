export const LessonRenderer = {
    getStatusIcon(lessonId, status) {
        if (status === 'locked') {
            return `<span class="icon-locked" style="font-size: 14px;">🔒</span>`;
        }
        
        const isChecked = status === 'done' ? 'checked' : '';
        const accent = status === 'current' ? '#2563EB' : '#22C55E';
        // Use an inline style to simulate the requested colors for the native checkbox
        return `<input type="checkbox" class="mark-complete-checkbox" data-lesson="${lessonId}" ${isChecked} title="Mark as Complete" onclick="event.stopPropagation()" style="width: 16px; height: 16px; cursor: pointer; accent-color: ${accent}; margin: 0;">`;
    },

    render(lesson, status) {
        const icon = this.getStatusIcon(lesson.id, status);
        const isLocked = status === 'locked';
        const isExpanded = status === 'current' ? 'expanded' : '';
        
        let html = `
            <div class="timeline-node ${status} ${isExpanded}" data-id="${lesson.id}">
                <div class="timeline-header" onclick="if(!${isLocked}) { document.querySelectorAll('.timeline-node.expanded').forEach(n => { if(n !== this.parentElement) n.classList.remove('expanded'); }); this.parentElement.classList.toggle('expanded'); if(window.RPSound) window.RPSound.play('click'); }">
                    <div class="timeline-icon-wrap">${icon}</div>
                    <div style="flex:1;">
                        <div class="timeline-title">${lesson.title}</div>
                        <div class="timeline-meta-inline mt-4">
                            <span class="muted">${lesson.duration || '30 min'}</span>
                            <span class="muted">•</span>
                            <span class="muted">${lesson.difficulty || 'Normal'}</span>
                        </div>
                    </div>
                    <div class="collapse-icon" style="color: #94A3B8; margin-left: auto;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                </div>
                <div class="timeline-details">
                    <div class="timeline-details-inner">
                    <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 0 0 16px 0;">
                    ${lesson.description ? `
                        <div class="linear-section-title">Description</div>
                        <p class="lesson-desc muted mt-8 mb-16">${lesson.description}</p>
                        <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 16px 0;">
                    ` : ''}
        `;

        if (lesson.resources && lesson.resources.length > 0) {
            html += `<div class="linear-section-title">Resources</div><div class="linear-resource-buttons">`;
            lesson.resources.forEach(r => {
                let rIcon = '📄';
                const rType = r.type ? r.type.toLowerCase() : '';
                if(rType.includes('video')) rIcon = '🎥';
                else if(rType.includes('practice') || rType.includes('exercise')) rIcon = '💻';
                else if(rType.includes('note')) rIcon = '📚';
                
                html += `<a href="${r.url}" target="_blank" class="linear-btn-icon">${rIcon} ${r.title || r.type || 'Link'}</a>`;
            });
            html += `</div><hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 16px 0;">`;
        }

        if (lesson.exercise) {
            html += `
                <div class="linear-section-title">Exercise</div>
                <div class="linear-card-compact" style="border: none; padding: 0; box-shadow: none; background: transparent;">
                    <p class="mb-8">${lesson.exercise.description}</p>
                    ${lesson.exercise.challenge ? `
                        <div class="linear-section-title mt-16">Challenge</div>
                        <p class="mb-8">${lesson.exercise.challenge}</p>
                    ` : ''}
                    ${lesson.exercise.expectedOutcome ? `
                        <div class="linear-section-title mt-16">Expected Outcome</div>
                        <p class="mb-8">${lesson.exercise.expectedOutcome}</p>
                    ` : ''}
                </div>
                <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 16px 0;">
            `;
        }

        if (lesson.project) {
            html += `
                <div class="linear-section-title">Mini Project</div>
                <div class="linear-card-compact">
                    <div style="margin-bottom: 12px;">
                        <strong>${lesson.project.title}</strong>
                    </div>
                    <div style="font-size: 13px;">
                        <div class="muted mt-4"><strong>Estimated Time:</strong> ${lesson.project.estimatedTime || '45 min'}</div>
                        <div class="muted mt-4"><strong>Difficulty:</strong> ${lesson.project.difficulty || lesson.difficulty || 'Easy'}</div>
                    </div>
                </div>
                <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 16px 0;">
            `;
        }

        html += `
                        <div style="text-align: center; margin-top: 16px; cursor: pointer; color: #64748B; font-size: 13px;" onclick="if(!${isLocked}) { this.parentElement.parentElement.parentElement.classList.remove('expanded'); if(window.RPSound) window.RPSound.play('click'); }">
                            Hide Details ▲
                        </div>
                    </div>
                </div>
            </div>
        `;
        return html;
    }
};
