function clearBtns() {
  $("#video-content").empty();
}

var queryADBLink = "http://theaudiodb.com/api/v1/json/195003/mvid.php?i=";
var artist = [111238, 112696, 132793, 112646];

$('#smile').on('click', function () {
  var queryADB = queryADBLink + artist[0];
  $.ajax({
    url: queryADB,
    method: "GET"
  }).then(function (result) {
    var musicVidlink = result.mvids[17].strMusicVid;
    var youtubeLink = "<button id = 'finished' onclick= \"window.open(\'" + musicVidlink + "\',\'_blank\')\">Let's listen to some Queen?</button>";
    clearBtns();
    $('#video-content').append(youtubeLink);
  });
});

$('#meh').on('click', function () {
  var queryADB = queryADBLink + artist[1];
  $.ajax({
    url: queryADB,
    method: "GET"
  }).then(function (result) {
    var musicVidlink = result.mvids[8].strMusicVid;
    var youtubeLink = "<button id = 'finished' onclick= \"window.open(\'" + musicVidlink + "\',\'_blank\')\">Let's listen to some Whitney Houston?</button>";
    clearBtns();
    $('#video-content').append(youtubeLink);
  });
});

$('#angry').on('click', function () {
  var queryADB = queryADBLink + artist[2];
  $.ajax({
    url: queryADB,
    method: "GET"
  }).then(function (result) {
    var musicVidlink = result.mvids[0].strMusicVid;
    var youtubeLink = "<button id = 'finished' onclick= \"window.open(\'" + musicVidlink + "\',\'_blank\')\">Let's listen to some Yiruma?</button>";
    clearBtns();
    $('#video-content').append(youtubeLink);
  });
});

$('#frown').on('click', function () {
  var queryADB = queryADBLink + artist[3];
  $.ajax({
    url: queryADB,
    method: "GET"
  }).then(function (result) {
    var musicVidlink = result.mvids[7].strMusicVid;
    var youtubeLink = "<button id = 'finished' onclick= \"window.open(\'" + musicVidlink + "\',\'_blank\')\">Let's listen to some Weezer?</button>";
    clearBtns();
    $('#video-content').append(youtubeLink);
  });
});

$(document).on('click', "#finished", function () {
  window.location.href = "finish.html"
})

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

  newDB.ref().push({
    firstMoodMusic: selectedMood
  });
});




