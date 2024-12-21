// Database Operations
const DatabaseService = {
    // Add marks to the database
    async addMarks(marksData) {
        try {
            marksData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
            await db.collection('marks').add(marksData);
            return { success: true };
        } catch (error) {
            console.error('Error adding marks:', error);
            return { success: false, error };
        }
    },

    // Get all marks
    async getMarks() {
        try {
            const snapshot = await db.collection('marks')
                .orderBy('createdAt', 'desc')
                .limit(100) // Limit to last 100 entries for better performance
                .get();
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            console.error('Error getting marks:', error);
            return [];
        }
    },

    // Add or update subjects for specific department, year, and semester
    async updateSubject(key, subjectData) {
        try {
            // Validate subject data
            if (!subjectData.subjects || !Array.isArray(subjectData.subjects) || subjectData.subjects.length === 0) {
                throw new Error('Invalid subject data');
            }

            await db.collection('subjects').doc(key).set({
                ...subjectData,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return { success: true };
        } catch (error) {
            console.error('Error updating subjects:', error);
            return { success: false, error: error.message };
        }
    },

    // Get subjects for specific department, year, and semester
    async getSubjects(key) {
        try {
            const doc = await db.collection('subjects').doc(key).get();
            return doc.exists ? doc.data() : null;
        } catch (error) {
            console.error('Error getting subjects:', error);
            return null;
        }
    }
};