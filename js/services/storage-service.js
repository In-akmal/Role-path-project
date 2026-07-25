export const StorageService = {
    getKey(roadmapId) {
        return `rp_progress_${roadmapId}`;
    },

    load(roadmapId) {
        const data = localStorage.getItem(this.getKey(roadmapId));
        return data ? JSON.parse(data) : { done: {} };
    },

    save(roadmapId, state) {
        localStorage.setItem(this.getKey(roadmapId), JSON.stringify(state));
    },

    clear(roadmapId) {
        localStorage.removeItem(this.getKey(roadmapId));
    }
};
