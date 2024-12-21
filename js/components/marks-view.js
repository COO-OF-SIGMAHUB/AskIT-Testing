// View Marks Component
const MarksViewComponent = {
    async render() {
        const marks = await DatabaseService.getMarks();
        return `
            <div class="container-fluid py-4">
                <div class="card shadow-sm">
                    <div class="card-header bg-white py-3">
                        <h4 class="card-title mb-0">
                            <i class="bi bi-table text-primary me-2"></i>
                            View Student Marks
                        </h4>
                    </div>
                    <div class="card-body p-4">
                        <div class="row g-3 mb-4">
                            <div class="col-md-4">
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="bi bi-search"></i>
                                    </span>
                                    <input type="text" class="form-control" id="searchInput" placeholder="Search by Roll Number">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select" id="filterDepartment">
                                    <option value="">All Departments</option>
                                    <option value="IT">Information Technology</option>
                                    <option value="CSE">Computer Science Engineering</option>
                                    <option value="EEE">EEE</option>
                                    <option value="ECE">ECE</option>
                                    <option value="MECH">Mechanical Engineering</option>
                                </select>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover marks-table">
                                <thead class="table-light">
                                    <tr>
                                        <th>Roll Number</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Academic Year</th>
                                        <th>Year</th>
                                        <th>Semester</th>
                                        <th>Subject</th>
                                        <th>Exam</th>
                                        <th>Marks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${marks.map(mark => `
                                        <tr>
                                            <td>${mark.rollNumber}</td>
                                            <td>${mark.studentName}</td>
                                            <td>${mark.department}</td>
                                            <td>${mark.academicYear}</td>
                                            <td>${mark.year}</td>
                                            <td>${mark.semester}</td>
                                            <td>${mark.subject}</td>
                                            <td>${mark.exam}</td>
                                            <td>${mark.marks}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    setupHandlers() {
        const searchInput = document.getElementById('searchInput');
        const filterDepartment = document.getElementById('filterDepartment');
        
        const filterMarks = () => {
            const searchValue = searchInput.value.toLowerCase();
            const departmentValue = filterDepartment.value;
            const rows = document.querySelectorAll('.marks-table tbody tr');

            rows.forEach(row => {
                const rollNumber = row.cells[0].textContent.toLowerCase();
                const department = row.cells[2].textContent;
                const showRow = (!searchValue || rollNumber.includes(searchValue)) &&
                              (!departmentValue || department === departmentValue);
                row.style.display = showRow ? '' : 'none';
            });
        };

        searchInput.addEventListener('input', filterMarks);
        filterDepartment.addEventListener('change', filterMarks);
    }
};