export const Formatter = {
    formatTime(minutes) {
        if (!minutes) return '0 min';
        
        // If it's already a string like "30 min" or "2 Hours", return as is
        if (typeof minutes === 'string') return minutes;

        if (minutes < 60) return `${minutes} min`;
        
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        
        if (mins === 0) return `${hours} Hour${hours > 1 ? 's' : ''}`;
        return `${hours}h ${mins}m`;
    },

    formatProgress(done, total) {
        if (total === 0) return 0;
        return Math.round((done / total) * 100);
    }
};
