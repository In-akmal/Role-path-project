export const Helper = {
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    },
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    querySelector(selector, parent = document) {
        return parent.querySelector(selector);
    },
    
    querySelectorAll(selector, parent = document) {
        return Array.from(parent.querySelectorAll(selector));
    }
};
