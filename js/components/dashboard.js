// Dashboard Component
const DashboardComponent = {
    render() {
        return `
            <div class="dashboard-container p-4">
                <div class="row justify-content-center">
                    <div class="col-md-10 mb-5">
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="card h-100 shadow-sm">
                                    <div class="card-body p-4">
                                        <h3 class="card-title">
                                            <i class="bi bi-mortarboard-fill text-primary me-2"></i>
                                            Welcome to AskIT
                                        </h3>
                                        <p class="card-text text-muted mb-4">
                                            Streamline your academic management with our comprehensive system.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card h-100 shadow-sm">
                                    <div class="card-body p-4">
                                        <h3 class="card-title">
                                            <i class="bi bi-robot text-primary me-2"></i>
                                            AI Assistant
                                        </h3>
                                        <p class="card-text text-muted">Chat with our AI to find student data instantly.</p>
                                        <a href="https://askit.abdulhajees.in" target="_blank" class="btn btn-primary mt-3">
                                            <i class="bi bi-box-arrow-up-right me-2"></i>
                                            Launch AI Assistant
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};