import { StorageService } from './storage-service.js';

export const ProgressService = {
    getAllLessons(roadmapData) {
        const lessons = [];
        roadmapData.modules.forEach(m => {
            if (m.lessons) {
                m.lessons.forEach(l => lessons.push(l.id));
            }
        });
        return lessons;
    },

    getState(roadmapId, roadmapData) {
        const state = StorageService.load(roadmapId);
        const allLessons = this.getAllLessons(roadmapData);
        
        let doneCount = 0;
        allLessons.forEach(id => {
            if (state.done[id]) doneCount++;
        });

        const pct = allLessons.length > 0 ? Math.round((doneCount / allLessons.length) * 100) : 0;

        return {
            done: state.done,
            doneCount,
            total: allLessons.length,
            pct,
            allLessons
        };
    },

    markComplete(roadmapId, lessonId) {
        const state = StorageService.load(roadmapId);
        state.done[lessonId] = true;
        StorageService.save(roadmapId, state);
    },

    toggleComplete(roadmapId, lessonId) {
        const state = StorageService.load(roadmapId);
        state.done[lessonId] = !state.done[lessonId];
        StorageService.save(roadmapId, state);
        return state.done[lessonId];
    },

    getLessonStatus(lessonId, progressState) {
        if (progressState.done[lessonId]) return 'done';
        
        const idx = progressState.allLessons.indexOf(lessonId);
        if (idx === 0) return 'current';
        
        const prevId = progressState.allLessons[idx - 1];
        if (progressState.done[prevId]) return 'current';
        
        return 'locked';
    },

    isModuleComplete(module, progressState) {
        if (!module.lessons || module.lessons.length === 0) return true;
        return module.lessons.every(l => progressState.done[l.id]);
    },
    
    getModuleProgress(module, progressState) {
        if (!module.lessons || module.lessons.length === 0) return { done: 0, total: 0, pct: 0 };
        const done = module.lessons.filter(l => progressState.done[l.id]).length;
        const total = module.lessons.length;
        const pct = Math.round((done / total) * 100);
        return { done, total, pct };
    }
};
