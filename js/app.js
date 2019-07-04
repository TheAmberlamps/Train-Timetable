// Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyDiExqaUmMa0mDauu7XFZ-Z92ivt80zwNk",
    authDomain: "timetable-project-14470.firebaseapp.com",
    databaseURL: "https://timetable-project-14470.firebaseio.com",
    projectId: "timetable-project-14470",
    storageBucket: "timetable-project-14470.appspot.com",
    messagingSenderId: "888829465365",
    appId: "1:888829465365:web:5fd065922103743e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Make sure to match the configuration to the script version number in the HTML
  // (Ex. 3.0 != 3.7.0)
  
  
  // Assign the reference to the database to a variable named 'database'
  // var database = ...
  
  database = firebase.database();