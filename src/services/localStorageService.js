export const LocalStorageService = {
    
    save: function(key, payload) {
        localStorage.setItem(key, JSON.stringify(payload));
    },

    get: function(key) {
        var resp = localStorage.getItem(key);
        return JSON.parse(resp);
    },

    remove: function(key) {
        localStorage.removeItem(key);
    }

};