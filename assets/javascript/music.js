function clearBtns() {
  $("#video-content").empty();
}

$('#smile').on('click', function () {
  var artist = "111238"
  var queryADB = "http://theaudiodb.com/api/v1/json/195003/mvid.php?i=" + artist;
  $.ajax({
    url: queryADB,
    method: "GET"
  }).then(function (result) {
    console.log(result.mvids[1].strMusicVid);
    var musicVidlink = result.mvids[17].strMusicVid;
    var youtubeLink = "<button onclick= \"window.open(\'" + musicVidlink + "\',\'_blank\')\">Let's listen to some Queen?</button>";
    clearBtns();
    $('#video-content').append(youtubeLink);
  });
});

$('#meh').on('click', function () {
  var artist = "112696"
  var queryADB = "http://theaudiodb.com/api/v1/json/195003/mvid.php?i=" + artist;
  $.ajax({
    url: queryADB,
    method: "GET"
  }).then(function (result) {
    console.log(result.mvids[1].strMusicVid);
    var musicVidlink = result.mvids[8].strMusicVid;
    var youtubeLink = "<button onclick= \"window.open(\'" + musicVidlink + "\',\'_blank\')\">Let's listen to some Whitney Houston?</button>";
    clearBtns();
    $('#video-content').append(youtubeLink);
  });
});

$('#angry').on('click', function () {
  var artist = "132793"
  var queryADB = "http://theaudiodb.com/api/v1/json/195003/mvid.php?i=" + artist;
  $.ajax({
    url: queryADB,
    method: "GET"
  }).then(function (result) {
    console.log(result.mvids[1].strMusicVid);
    var musicVidlink = result.mvids[0].strMusicVid;
    var youtubeLink = "<button onclick= \"window.open(\'" + musicVidlink + "\',\'_blank\')\">Let's listen to some Yiruma?</button>";
    clearBtns();
    $('#video-content').append(youtubeLink);
  });
});

$('#frown').on('click', function () {
  var artist = "112646"
  var queryADB = "http://theaudiodb.com/api/v1/json/195003/mvid.php?i=" + artist;
  $.ajax({
    url: queryADB,
    method: "GET"
  }).then(function (result) {
    console.log(result.mvids[1].strMusicVid);
    var musicVidlink = result.mvids[7].strMusicVid;
    var youtubeLink = "<button onclick= \"window.open(\'" + musicVidlink + "\',\'_blank\')\">Let's listen to some Weezer?</button>";
    clearBtns();
    $('#video-content').append(youtubeLink);
  });
});


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
    firstMoodMusic: selectedMood
  });
});




