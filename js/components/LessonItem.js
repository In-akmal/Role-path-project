class LessonItem {
    static getStatusIcon(status) {
        switch (status) {
            case 'done': return `<span style="color: #22C55E; font-size: 16px; font-weight: bold;">✓</span>`;
            case 'current': return `<span style="color: #2563EB; font-size: 16px;">●</span>`;
            case 'locked': return `<span style="color: #94A3B8; font-size: 14px;">🔒</span>`;
            default: return `<span style="color: #94A3B8; font-size: 16px;">○</span>`; // upcoming
        }
    }

    static render(lesson, status, index) {
        const icon = this.getStatusIcon(status);
        const isLocked = status === 'locked';
        
        let html = `
            <div class="linear-lesson-row ${status}" data-id="${lesson.id}" data-idx="${index}">
                <div class="linear-lesson-header" onclick="if(!${isLocked}) this.parentElement.classList.toggle('expanded'); if(!${isLocked}) window.RPSound.play('click');">
                    <div class="linear-status-icon">${icon}</div>
                    <div class="linear-lesson-title">${lesson.title}</div>
                </div>
                <div class="linear-lesson-details">
                    <div class="linear-lesson-meta">
                        <span><strong>Estimated Time</strong> <br>${lesson.estimatedTime || '30 min'}</span>
                        <span><strong>Difficulty</strong> <br>${lesson.difficulty || 'Normal'}</span>
                        ${lesson.prerequisite ? `<span><strong>Prerequisite</strong> <br>${lesson.prerequisite}</span>` : ''}
                    </div>
        `;

        if (lesson.resources && lesson.resources.length > 0) {
            html += `<div class="linear-section-title">Resources</div><div class="linear-resource-buttons">`;
            lesson.resources.forEach(r => {
                let rIcon = '📄';
                if(r.type && r.type.toLowerCase().includes('video')) rIcon = '🎥';
                else if(r.type && r.type.toLowerCase().includes('practice')) rIcon = '💻';
                
                html += `<a href="${r.url}" target="_blank" class="linear-btn-icon">${rIcon} ${r.type || 'Link'}</a>`;
            });
            html += `</div>`;
        }

        if (lesson.exercise) {
            html += `
                <div class="linear-section-title">Exercise</div>
                <div class="linear-card-compact">
                    <p>${lesson.exercise.instruction}</p>
                    ${lesson.exercise.challenge ? `<p class="muted mt-8"><strong>Challenge:</strong> ${lesson.exercise.challenge}</p>` : ''}
                </div>
            `;
        }

        if (lesson.miniProject) {
            html += `
                <div class="linear-section-title">Mini Project</div>
                <div class="linear-card-compact">
                    <div style="display:flex; justify-content:space-between;">
                        <strong>${lesson.miniProject}</strong>
                        <span class="muted">${lesson.difficulty || 'Normal'}</span>
                    </div>
                </div>
            `;
        }

        html += `
                    <div class="mt-24">
                        ${status !== 'done' ? 
                            `<button class="btn btn-primary btn-sm mark-complete-btn" data-lesson="${lesson.id}">Mark Complete</button>` : 
                            `<span style="color:var(--success); font-size:13px; font-weight:600;">✓ Completed</span>`
                        }
                    </div>
                </div>
            </div>
        `;
        return html;
    }
}

window.LessonItem = LessonItem;
