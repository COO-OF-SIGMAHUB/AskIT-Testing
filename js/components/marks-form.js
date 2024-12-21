// Add Marks Form Component
const MarksFormComponent = {
    async render() {
        const savedState = StorageUtil.getFormState('addMarksForm');
        return `
            <div class="container py-4">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card shadow-sm">
                            <div class="card-header bg-white py-3">
                                <h4 class="card-title mb-0">
                                    <i class="bi bi-plus-circle-fill text-primary me-2"></i>
                                    Add Student Marks
                                </h4>
                            </div>
                            <div class="card-body p-4">
                                <form id="addMarksForm">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label class="form-label">
                                                <i class="bi bi-person-badge me-2"></i>
                                                Roll Number
                                            </label>
                                            <input type="text" class="form-control" name="rollNumber" required>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label">
                                                <i class="bi bi-person me-2"></i>
                                                Student Name
                                            </label>
                                            <input type="text" class="form-control" name="studentName" required>
                                        </div>
                                    </div>
                                    <div class="row g-3 mt-2">
                                        <div class="col-md-6">
                                            <label class="form-label">
                                                <i class="bi bi-building me-2"></i>
                                                Department
                                            </label>
                                            <select class="form-control" name="department" required>
                                                <option value="">Select Department</option>
                                                <option value="IT" ${savedState?.department === 'IT' ? 'selected' : ''}>Information Technology</option>
                                                <option value="CSE" ${savedState?.department === 'CSE' ? 'selected' : ''}>Computer Science Engineering</option>
                                                <option value="EEE" ${savedState?.department === 'EEE' ? 'selected' : ''}>EEE</option>
                                                <option value="ECE" ${savedState?.department === 'ECE' ? 'selected' : ''}>ECE</option>
                                                <option value="MECH" ${savedState?.department === 'MECH' ? 'selected' : ''}>Mechanical Engineering</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label">
                                                <i class="bi bi-calendar me-2"></i>
                                                Academic Year
                                            </label>
                                            <select class="form-control" name="academicYear" required>
                                                <option value="">Select Year</option>
                                                <option value="2024" ${savedState?.academicYear === '2024' ? 'selected' : ''}>2024</option>
                                                <option value="2025" ${savedState?.academicYear === '2025' ? 'selected' : ''}>2025</option>
                                                <option value="2026" ${savedState?.academicYear === '2026' ? 'selected' : ''}>2026</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="dynamicFields"></div>
                                    <div class="mt-4">
                                        <button type="submit" class="btn btn-primary">
                                            <i class="bi bi-save me-2"></i>
                                            Save Marks
                                        </button>
                                        <button type="button" class="btn btn-outline-secondary ms-2" onclick="MarksFormComponent.clearForm()">
                                            <i class="bi bi-x-circle me-2"></i>
                                            Clear Form
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    clearForm() {
        StorageUtil.clearFormState('addMarksForm');
        document.getElementById('addMarksForm').reset();
        document.getElementById('dynamicFields').innerHTML = '';
    },

    async setupHandlers() {
        const form = document.getElementById('addMarksForm');
        const savedState = StorageUtil.getFormState('addMarksForm');
        
        const setupDynamicFields = async () => {
            const dynamicFields = document.getElementById('dynamicFields');
            dynamicFields.innerHTML = `
                <div class="row g-3 mt-2">
                    <div class="col-md-6">
                        <label class="form-label">
                            <i class="bi bi-123 me-2"></i>
                            Year
                        </label>
                        <select class="form-select" name="year" required>
                            <option value="">Select Year</option>
                            <option value="1" ${savedState?.year === '1' ? 'selected' : ''}>1st Year</option>
                            <option value="2" ${savedState?.year === '2' ? 'selected' : ''}>2nd Year</option>
                            <option value="3" ${savedState?.year === '3' ? 'selected' : ''}>3rd Year</option>
                            <option value="4" ${savedState?.year === '4' ? 'selected' : ''}>4th Year</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">
                            <i class="bi bi-calendar3 me-2"></i>
                            Semester
                        </label>
                        <select class="form-select" name="semester" required>
                            <option value="">Select Semester</option>
                            <option value="odd" ${savedState?.semester === 'odd' ? 'selected' : ''}>Odd Sem</option>
                            <option value="even" ${savedState?.semester === 'even' ? 'selected' : ''}>Even Sem</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">
                            <i class="bi bi-book me-2"></i>
                            Subject
                        </label>
                        <select class="form-select" name="subject" required>
                            <option value="">Select Subject</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">
                            <i class="bi bi-pencil-square me-2"></i>
                            Exam
                        </label>
                        <select class="form-select" name="exam" required>
                            <option value="">Select Exam</option>
                            <option value="CIA1" ${savedState?.exam === 'CIA1' ? 'selected' : ''}>CIA 1</option>
                            <option value="CIA2" ${savedState?.exam === 'CIA2' ? 'selected' : ''}>CIA 2</option>
                            <option value="CT1" ${savedState?.exam === 'CT1' ? 'selected' : ''}>Cycle Test 1</option>
                            <option value="CT2" ${savedState?.exam === 'CT2' ? 'selected' : ''}>Cycle Test 2</option>
                            <option value="MODEL" ${savedState?.exam === 'MODEL' ? 'selected' : ''}>Model Test</option>
                            <option value="UNIV" ${savedState?.exam === 'UNIV' ? 'selected' : ''}>University Exam</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">
                            <i class="bi bi-graph-up me-2"></i>
                            Marks
                        </label>
                        <input type="number" class="form-control" name="marks" min="0" max="100" required>
                    </div>
                </div>
            `;

            // Load subjects based on saved state
            if (savedState?.department && savedState?.year && savedState?.semester) {
                await loadSubjects();
            }
        };

        const loadSubjects = async () => {
            const departmentSelect = form.querySelector('[name="department"]');
            const yearSelect = form.querySelector('[name="year"]');
            const semesterSelect = form.querySelector('[name="semester"]');
            const subjectSelect = form.querySelector('[name="subject"]');

            const dept = departmentSelect.value;
            const year = yearSelect.value;
            const sem = semesterSelect.value;

            if (dept && year && sem) {
                const key = `${dept}_${year}_${sem}`;
                const subjectsData = await DatabaseService.getSubjects(key);
                
                if (subjectsData && subjectsData.subjects) {
                    subjectSelect.innerHTML = `
                        <option value="">Select Subject</option>
                        ${subjectsData.subjects.map(subject => 
                            `<option value="${subject}" ${savedState?.subject === subject ? 'selected' : ''}>${subject}</option>`
                        ).join('')}
                    `;
                }
            }
        };

        // Set up event listeners
        form.querySelectorAll('select').forEach(select => {
            select.addEventListener('change', async (e) => {
                const formData = new FormData(form);
                const currentState = Object.fromEntries(formData.entries());
                StorageUtil.saveFormState('addMarksForm', currentState);

                if (['department', 'year', 'semester'].includes(e.target.name)) {
                    await loadSubjects();
                }
            });
        });

        // Initial setup if we have saved state
        if (savedState?.academicYear) {
            await setupDynamicFields();
        }

        // Handle academic year change
        form.querySelector('[name="academicYear"]').addEventListener('change', setupDynamicFields);

        // Handle form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const marksData = Object.fromEntries(formData.entries());
            marksData.marks = parseInt(marksData.marks);
            
            const result = await DatabaseService.addMarks(marksData);
            if (result.success) {
                alert('Marks added successfully!');
                // Clear only student-specific fields
                form.querySelector('[name="rollNumber"]').value = '';
                form.querySelector('[name="studentName"]').value = '';
                form.querySelector('[name="marks"]').value = '';
                // Keep other selections
            } else {
                alert('Error adding marks. Please try again.');
            }
        });
    }
};