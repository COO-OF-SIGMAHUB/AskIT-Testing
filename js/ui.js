// UI Components and Handlers
const UI = {
    // Load dashboard content
    async loadDashboard() {
        document.getElementById('main-content').innerHTML = DashboardComponent.render();
    },

    // Load add marks form
    async loadAddMarksForm() {
        document.getElementById('main-content').innerHTML = await MarksFormComponent.render();
        await MarksFormComponent.setupHandlers();
    },

    // Load view marks page
    async loadViewMarks() {
        document.getElementById('main-content').innerHTML = await MarksViewComponent.render();
        MarksViewComponent.setupHandlers();
    },

    // Load settings page
    loadSettings() {
        const content = `
            <div class="container py-4">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card shadow-sm">
                            <div class="card-header bg-white py-3">
                                <h4 class="card-title mb-0">
                                    <i class="bi bi-gear-fill text-primary me-2"></i>
                                    Manage Subjects
                                </h4>
                            </div>
                            <div class="card-body p-4">
                                <form id="subjectForm">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label class="form-label">
                                                <i class="bi bi-building me-2"></i>
                                                Department
                                            </label>
                                            <select class="form-select" name="department" required>
                                                <option value="">Select Department</option>
                                                <option value="IT">Information Technology</option>
                                                <option value="CSE">Computer Science Engineering</option>
                                                <option value="EEE">EEE</option>
                                                <option value="ECE">ECE</option>
                                                <option value="MECH">Mechanical Engineering</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label">
                                                <i class="bi bi-123 me-2"></i>
                                                Year
                                            </label>
                                            <select class="form-select" name="year" required>
                                                <option value="">Select Year</option>
                                                <option value="1">1st Year</option>
                                                <option value="2">2nd Year</option>
                                                <option value="3">3rd Year</option>
                                                <option value="4">4th Year</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label">
                                                <i class="bi bi-calendar3 me-2"></i>
                                                Semester
                                            </label>
                                            <select class="form-select" name="semester" required>
                                                <option value="">Select Semester</option>
                                                <option value="odd">Odd Semester</option>
                                                <option value="even">Even Semester</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-3 mt-3">
                                        <label class="form-label">
                                            <i class="bi bi-book me-2"></i>
                                            Subjects (One per line)
                                        </label>
                                        <textarea class="form-control" name="subjects" rows="5" placeholder="Enter subject names, one per line" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">
                                        <i class="bi bi-save me-2"></i>
                                        Save Subjects
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('main-content').innerHTML = content;
        this.setupSettingsHandlers();
    },

    // Setup settings handlers
    setupSettingsHandlers() {
        const form = document.getElementById('subjectForm');
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const key = `${formData.get('department')}_${formData.get('year')}_${formData.get('semester')}`;
            
            const subjectData = {
                department: formData.get('department'),
                year: formData.get('year'),
                semester: formData.get('semester'),
                subjects: formData.get('subjects').split('\n').filter(subject => subject.trim())
            };
            
            const result = await DatabaseService.updateSubject(key, subjectData);
            if (result.success) {
                alert('Subjects updated successfully!');
                form.reset();
            } else {
                alert('Error updating subjects. Please try again.');
            }
        });
    }
};