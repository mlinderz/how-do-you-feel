//NYTimes API//


//Loading buttons and assigning clicking on a button to change the selection//
console.log("loaded")
var whatToRead = ""
$(".moodButtonstoRead").on("click", function (){
    console.log("You Selected a Button")
var articleTopic =  $(this).val()
whatToRead = articleTopic
getArticles(articleTopic)
})


var nytAPIkey = "2GYuC8miX6UGJhKCRRCA5GG1y4ct5DMi"

function getArticles (whatToRead){
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ whatToRead +"&api-key=" + nytAPIkey   
$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response){
    console.log(response)

var articles = response.response.docs
for (var i=0; i<articles.length; i++){
    $("#articles").append(
        "<p>"+ articles[i].headline.main+articles[i].web_url+articles[i].lead_paragraph+ "</p>"
    )
}

})

}

    




