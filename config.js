import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBiLaIjQAA3Nykw5-UC-6AuHjxzMGrigRo",
    authDomain: "voting-app-a0ff6.firebaseapp.com",
    projectId: "voting-app-a0ff6",
    storageBucket: "voting-app-a0ff6.appspot.com",
    messagingSenderId: "469586526734",
    appId: "1:469586526734:web:1ed35334c89a93fc49f25f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();