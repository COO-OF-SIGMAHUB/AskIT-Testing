// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPs_ETDj1ja8yVEOIPDzsQfqkfOFh9sKA",
    authDomain: "mamcet-ai.firebaseapp.com",
    databaseURL: "https://mamcet-ai-default-rtdb.firebaseio.com",
    projectId: "mamcet-ai",
    storageBucket: "mamcet-ai.firebasestorage.app",
    messagingSenderId: "651882308996",
    appId: "1:651882308996:web:c19d4b0eb0591392cfe9d1",
    measurementId: "G-VQ12MPKH77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();