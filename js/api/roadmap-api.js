export const RoadmapAPI = {
    async fetchRoadmap(id) {
        try {
            // Using a cache buster parameter to ensure we fetch the latest JSON
            const res = await fetch(`../data/roadmaps/${id}.json?v=${Date.now()}`);
            if (!res.ok) throw new Error(`Roadmap ${id} not found`);
            return await res.json();
        } catch (error) {
            console.error("Failed to load roadmap:", error);
            return null;
        }
    }
};
