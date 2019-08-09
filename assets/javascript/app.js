//NYTimes API//

console.log("loaded")
var currentMood = ""
$(".moodButton").on("click", function (){
    console.log("Mood Changed")
var newMood =  $(this).val()
currentMood = newMood
getArticles(newMood)

})
var nytAPIkey = "2GYuC8miX6UGJhKCRRCA5GG1y4ct5DMi"

function getArticles (mood){
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ mood +"&api-key=" + nytAPIkey   
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response){
    console.log(response)
var articles = response.response.docs
for (var i=0; i<articles.length; i++){
    $("#articles").append(
        "<p>"+ articles[i].lead_paragraph+ "</p>"
    )
}


})

}





