//NYTimes API//


//Loading buttons and assigning clicking on a button to change the selection//
console.log("loaded")
var currentMood = ""
$(".moodButton").on("click", function (){
    console.log("Mood Changed")
var newMood =  $(this).val()
currentMood = newMood
getArticles(newMood)
getVideo(newMood)
})


// var nytAPIkey = "2GYuC8miX6UGJhKCRRCA5GG1y4ct5DMi"

// function getArticles (mood){
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ mood +"&api-key=" + nytAPIkey   
// $.ajax({
//     url: queryURL,
//     method: 'GET'
// }).then(function(response){
//     console.log(response)
// var articles = response.response.docs
// for (var i=0; i<articles.length; i++){
//     $("#articles").append(
//         "<p>"+ articles[i].headline.main+ "</p>"
//     )
// }


})

}

function getVideo (mood) {
    var queryADB = "theaudiodb.com/api/v1/json/195003/mvid-mb.php?i=" + artistID
    var artistID = "cc197bad-dc9c-440d-a5b5-d52ba2e14234"
    $.ajax({
        url: queryADB,
        method: "GET"
      }).then(function(result) {
        console.log(result);
      });
    });
    




