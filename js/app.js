$(document).ready(function () {

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
  
  var database = firebase.database();

    $("#add-train-btn").click(function(event){

      event.preventDefault();

      console.log("pressed");

      var traNam = $("#train-name-input").val().trim();
      var traDest = $("#destination-input").val().trim();
      var traTime = $("#train-time-input").val().trim();
      var traNext = $("#minutes-until-input").val().trim();

      var newTra = {

        name: traNam,
        destination: traDest,
        time: traTime,
        next: traNext

      };

      database.ref().push(newTra);
      console.log(newTra.name);
      console.log(newTra.destination);
      console.log(newTra.time);
      console.log(newTra.next);

      var newRow = $("<tr>").append(
        $("<td>").text(traNam),
        $("<td>").text(traDest),
        $("<td>").text(traTime),
        $("<td>").text(traNext)
      );

      $("#train-table > tbody").append(newRow);

      alert("It's a new train!");

    });
});