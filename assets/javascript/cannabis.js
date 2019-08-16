$('#smile').on('click', function () {
    var mood = $("#smile").attr("data-type");
    console.log(mood);
    var effectURL = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/effect/" + mood;
    $.ajax({
        url: effectURL,
        method: "GET"
    }).then(function (resultMood) {
        var ranIndex = Math.floor(Math.random() * resultMood.length);
        var ranStrain = resultMood[ranIndex].name;
        console.log(ranStrain);

        var strainInfo = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/name/" + ranStrain;
        console.log(strainInfo);

        $.ajax({
            url: strainInfo,
            method: "GET"
        }).then(function (getInfo) {
            console.log(getInfo[0].name)
            console.log(getInfo[0].desc)
            $("#displayPic").html("<img src=\'assets/images/weed1.jpg\'/>");
            $("#displayName").text(getInfo[0].name);
            $("#displayInfo").text(getInfo[0].desc);
        });
    });
});

$('#meh').on('click', function () {
    var mood = $("#meh").attr("data-type");
    console.log(mood);
    var effectURL = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/effect/" + mood;
    $.ajax({
        url: effectURL,
        method: "GET"
    }).then(function (resultMood) {
        var ranIndex = Math.floor(Math.random() * resultMood.length);
        var ranStrain = resultMood[ranIndex].name;
        console.log(ranStrain);

        var strainInfo = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/name/" + ranStrain;
        console.log(strainInfo);

        $.ajax({
            url: strainInfo,
            method: "GET"
        }).then(function (getInfo) {
            console.log(getInfo[0].name)
            console.log(getInfo[0].desc)
            $("#displayPic").html("<img src=\'assets/images/weed2.jpg\'/>");
            $("#displayName").text(getInfo[0].name);
            $("#displayInfo").text(getInfo[0].desc);
        });

    });
});

$('#angry').on('click', function () {
    var mood = $("#angry").attr("data-type");
    console.log(mood);
    var effectURL = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/effect/" + mood;
    $.ajax({
        url: effectURL,
        method: "GET"
    }).then(function (resultMood) {
        var ranIndex = Math.floor(Math.random() * resultMood.length);
        var ranStrain = resultMood[ranIndex].name;
        console.log(ranStrain);

        var strainInfo = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/name/" + ranStrain;
        console.log(strainInfo);

        $.ajax({
            url: strainInfo,
            method: "GET"
        }).then(function (getInfo) {
            console.log(getInfo[0].name)
            console.log(getInfo[0].desc)
            $("#displayPic").html("<img src=\'assets/images/weed3.jpg\'/>");
            $("#displayName").text(getInfo[0].name);
            $("#displayInfo").text(getInfo[0].desc);
        });

    });
});

$('#frown').on('click', function () {
    var mood = $("#frown").attr("data-type");
    console.log(mood);
    var effectURL = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/effect/" + mood;
    $.ajax({
        url: effectURL,
        method: "GET"
    }).then(function (resultMood) {
        var ranIndex = Math.floor(Math.random() * resultMood.length);
        var ranStrain = resultMood[ranIndex].name;
        console.log(ranStrain);

        var strainInfo = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/name/" + ranStrain;
        console.log(strainInfo);

        $.ajax({
            url: strainInfo,
            method: "GET"
        }).then(function (getInfo) {
            console.log(getInfo[0].name)
            console.log(getInfo[0].desc)
            $("#displayPic").html("<img src=\'assets/images/weed4.jpg\'/>");
            $("#displayName").text(getInfo[0].name);
            $("#displayInfo").text(getInfo[0].desc);
        });

    });
});

$(".moodButtons").on("click", function () {
    var eazeBtn = "<button id =\"eazeAway\" onclick= \"window.open(\'http://www.eaze.com\',\'_blank\')\">Get It Delivered?</button>";
    $("#eaze").html(eazeBtn);

    $("#eazeAway").on("click", function () {
        window.open(href= "index.html");
    });
});

//firebase data to add to each page , change the name of the object (instead of firstMoodWeed)//
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
        firstMoodWeed: selectedMood
    });
});



