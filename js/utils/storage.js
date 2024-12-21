// Local Storage Utilities
const StorageUtil = {
    saveFormState(formId, data) {
        localStorage.setItem(formId, JSON.stringify(data));
    },

    getFormState(formId) {
        const data = localStorage.getItem(formId);
        return data ? JSON.parse(data) : null;
    },

    clearFormState(formId) {
        localStorage.removeItem(formId);
    }
};