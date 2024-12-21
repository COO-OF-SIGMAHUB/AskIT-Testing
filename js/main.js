// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize sidebar toggle
    document.getElementById('sidebarCollapse').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('active');
    });

    // Initialize sidebar logo
    UI.updateSidebar();

    // Load dashboard by default
    UI.loadDashboard();
});

// Page navigation handler
function showPage(page) {
    switch(page) {
        case 'dashboard':
            UI.loadDashboard();
            break;
        case 'add-marks':
            UI.loadAddMarksForm();
            break;
        case 'view-marks':
            UI.loadViewMarks();
            break;
        case 'settings':
            UI.loadSettings();
            break;
    }
}