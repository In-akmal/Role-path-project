import { ModuleRenderer } from './module-renderer.js';

export const RoadmapRenderer = {
    render(containerId, roadmapData, progressState) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = "";
        roadmapData.modules.forEach(mod => {
            html += ModuleRenderer.render(mod, progressState);
        });

        container.innerHTML = html;
    }
};
