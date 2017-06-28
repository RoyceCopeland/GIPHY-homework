"use strict"
$(document).ready(function() {
   
// GIPHY API KEY 6f29dc744fc84e34a79cd0500c842093


    //var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    //xhr.done(function(data) { console.log("success got data", data); });

    //1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. 
    //   * We chose animals for our theme, but you can make a list to your own liking.

    var topics = ["football", "soccer", "baseball", "volleyball", "basketball", "lacrosse"];


    //console.log("hello")

    //On refresh:
    // Your app should take the topics in this array and create buttons in your HTML.
    //   * Try using a loop that appends a button for each string in the array.
    //

    sportButton();

    function sportButton() {
        $("#buttonPanel").empty();
        for (var i = 0; i < topics.length; i++) {
            topics[i];
            //  console.log(topics[i]);
            $("<button>")
                .attr("id", topics[i])
                .text(topics[i])
                .appendTo("#buttonPanel");
        };
    };

    // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 
    // and dynamically add a new button to the button panel (by placing the searched term into the original array)
    $("#submitButton").on("click", function(e) {
        e.preventDefault();
        //   console.log("searching");
        var searchTerm = $("#sportInputName").val();
        //   console.log(searchTerm);

        topics.push(searchTerm);
        sportButton();
    });


})












//4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
//
//5. Under every gif, display its rating (PG, G, so on). 
//   * This data is provided by the GIPHY API.
//   * Only once you get images displaying with button presses should you move on to the next step.
//
//6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the topics on the page.
//
//7. **Rejoice**! You just made something really cool.
