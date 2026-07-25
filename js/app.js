import { RoadmapAPI } from './api/roadmap-api.js';
import { ProgressService } from './services/progress-service.js';
import { RoadmapRenderer } from './ui/roadmap-renderer.js';
import { SidebarRenderer } from './ui/sidebar-renderer.js';

class App {
    constructor() {
        this.roadmapId = new URLSearchParams(window.location.search).get("id") || "java-fullstack";
        this.roadmapData = null;
    }

    async init() {
        this.roadmapData = await RoadmapAPI.fetchRoadmap(this.roadmapId);

        if (!this.roadmapData) {
            document.getElementById("rdName").textContent = "Roadmap not found";
            return;
        }

        // Setup Header
        const meta = this.roadmapData.metadata;
        document.title = meta.title + " — RolePath";
        document.getElementById("rdName").textContent = meta.title;
        document.getElementById("rdDesc").textContent = meta.description;

        this.render();
        this.bindEvents();
    }

    render() {
        const progressState = ProgressService.getState(this.roadmapId, this.roadmapData);
        RoadmapRenderer.render('topicList', this.roadmapData, progressState);
        SidebarRenderer.render('sidebarContainer', this.roadmapData, progressState);
    }

    bindEvents() {
        // Event delegation for dynamically rendered "Mark as Complete" checkboxes
        document.getElementById('topicList').addEventListener('change', (e) => {
            if (e.target.classList.contains('mark-complete-checkbox')) {
                e.stopPropagation();
                const lessonId = e.target.dataset.lesson;
                
                ProgressService.toggleComplete(this.roadmapId, lessonId);
                
                if (window.RPSound) window.RPSound.play('success');
                
                this.render();
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
    app.init();
});
