

  //firebase starts here//
var firebaseConfig = {
  apiKey: "AIzaSyCj20bQaHGBV-u_tOPHCzt2ECdj3mWnnT4",
  authDomain: "rebalancing-991cf.firebaseapp.com",
  databaseURL: "https://rebalancing-991cf.firebaseio.com",
  projectId: "rebalancing-991cf",
  storageBucket: "",
  messagingSenderId: "367645001491",
  appId: "1:367645001491:web:4fcd1e18a62a8dc0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var newDB = firebase.database();

$('.moodButtons').on('click', function () {
  var selectedMood = $(this).attr("id");
  console.log(selectedMood);

  newDB.ref().push({
    finishedMood: selectedMood
  });
});

