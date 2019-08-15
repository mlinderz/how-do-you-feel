$('#smile').on('click', function(){
    var mood = $("#smile").attr("data-type");
    console.log(mood);
    var effectURL = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/effect/" + mood;
    $.ajax({
        url: effectURL,
        method: "GET"
      }).then(function(resultMood) {
        var ranIndex = Math.floor(Math.random()*resultMood.length);
        var ranStrain = resultMood[ranIndex].name;
        console.log(ranStrain);

        var strainInfo = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/name/" + ranStrain;
        console.log(strainInfo);

        $.ajax({
            url: strainInfo,
            method: "GET"
        }).then(function(getInfo){
            console.log(getInfo[0].name)
            console.log(getInfo[0].desc)
            $("#displayPic").html("<img src=\'assets/images/weed1.jpg\'/>");
            $("#displayName").text(getInfo[0].name);
            $("#displayInfo").text(getInfo[0].desc);
        });

      });
    });

$('#meh').on('click', function(){
    var mood = $("#meh").attr("data-type");
    console.log(mood);
    var effectURL = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/effect/" + mood;
    $.ajax({
        url: effectURL,
        method: "GET"
    }).then(function(resultMood) {
        var ranIndex = Math.floor(Math.random()*resultMood.length);
        var ranStrain = resultMood[ranIndex].name;
        console.log(ranStrain);

        var strainInfo = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/name/" + ranStrain;
        console.log(strainInfo);

        $.ajax({
            url: strainInfo,
            method: "GET"
        }).then(function(getInfo){
            console.log(getInfo[0].name)
            console.log(getInfo[0].desc)
            $("#displayPic").html("<img src=\'assets/images/weed2.jpg\'/>");
            $("#displayName").text(getInfo[0].name);
            $("#displayInfo").text(getInfo[0].desc);
        });

      });
    });

$('#angry').on('click', function(){
    var mood = $("#angry").attr("data-type");
    console.log(mood);
    var effectURL = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/effect/" + mood;
    $.ajax({
        url: effectURL,
        method: "GET"
    }).then(function(resultMood) {
        var ranIndex = Math.floor(Math.random()*resultMood.length);
        var ranStrain = resultMood[ranIndex].name;
        console.log(ranStrain);

        var strainInfo = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/name/" + ranStrain;
        console.log(strainInfo);

        $.ajax({
            url: strainInfo,
            method: "GET"
        }).then(function(getInfo){
            console.log(getInfo[0].name)
            console.log(getInfo[0].desc)
            $("#displayPic").html("<img src=\'assets/images/weed3.jpg\'/>");
            $("#displayName").text(getInfo[0].name);
            $("#displayInfo").text(getInfo[0].desc);
        });

      });
    });

$('#frown').on('click', function(){
    var mood = $("#frown").attr("data-type");
    console.log(mood);
    var effectURL = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/effect/" + mood;
    $.ajax({
        url: effectURL,
        method: "GET"
    }).then(function(resultMood) {
        var ranIndex = Math.floor(Math.random()*resultMood.length);
        var ranStrain = resultMood[ranIndex].name;
        console.log(ranStrain);

        var strainInfo = "http://strainapi.evanbusse.com/xIA0Sq8/strains/search/name/" + ranStrain;
        console.log(strainInfo);

        $.ajax({
            url: strainInfo,
            method: "GET"
        }).then(function(getInfo){
            console.log(getInfo[0].name)
            console.log(getInfo[0].desc)
            $("#displayPic").html("<img src=\'assets/images/weed4.jpg\'/>");
            $("#displayName").text(getInfo[0].name);
            $("#displayInfo").text(getInfo[0].desc);
        });

      });
    });

    $(".moodButtons").on("click", function(){
        var eazeBtn = "<button onclick= \"window.open(\'http://www.eaze.com\',\'_blank\')\">Get It Delivered?</button>";
        $("#eaze").html(eazeBtn);
    });