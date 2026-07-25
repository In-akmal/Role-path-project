class RoadmapApp {
    constructor() {
        this.roadmapData = null;
        this.allLessons = [];
        this.id = new URLSearchParams(window.location.search).get("id") || "c-basics";
        
        this.sidebar = new window.ProgressSidebar('sidebarContainer');
        this.moduleList = new window.ModuleList('topicList');
    }

    async init() {
        this.roadmapData = await RP.api.getRoadmapData(this.id);

        if(!this.roadmapData){
            document.getElementById("rdName").textContent = "Roadmap not found";
            return;
        }

        // Build flat array
        this.roadmapData.modules.forEach(m => {
            if (m.lessons) {
                m.lessons.forEach(l => {
                    this.allLessons.push(l.id);
                });
            }
        });

        // Setup Header
        const meta = this.roadmapData.metadata;
        document.title = meta.title + " — RolePath";
        document.getElementById("rdName").textContent = meta.title;
        document.getElementById("rdDesc").textContent = meta.description;

        this.refresh();
    }

    refresh() {
        const progress = RP.api.getProgress(this.id);
        
        // Render Components
        this.moduleList.render(this.roadmapData, progress, this.allLessons);
        this.sidebar.render(progress, this.allLessons, this.roadmapData);
    }
}

// Boot up
document.addEventListener("DOMContentLoaded", () => {
    window.RPApp = new RoadmapApp();
    window.RPApp.init();
});
