"use strict"
$(document).ready(function() {

        // GIPHY API KEY 6f29dc744fc84e34a79cd0500c842093


        //var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
        //xhr.done(function(data) { console.log("success got data", data); });

        //1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. 
        //   * We chose animals for our theme, but you can make a list to your own liking.

        var topics = ["football", "soccer", "baseball", "volleyball", "basketball", "lacrosse"];
        var userInput;
        var searchTerm;

        //console.log("hello")

        //On refresh:
        // Your app should take the topics in this array and create buttons in your HTML.
        //   * Try using a loop that appends a button for each string in the array.
        //

        //         createSportButton();

        function createSportButton() {
            $("#buttonPanel").empty();
            for (var i = 0; i < topics.length; i++) {
                topics[i];
                //   console.log(topics[i]);
                $("<button>")
                    .addClass("sportButton")
                    .text(topics[i])
                    .appendTo(".sportButtons");
            };
        };
        createSportButton();

        //    function sportButtonClicked() {
        //        var userInput = $("button").text();
        //        searchGif(userInput);
        //        displayGif(userInput);
        //
        //    }


        // $("button").on('click', sportButtonClicked());


        // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 
        // and dynamically add a new button to the button panel (by placing the searched term into the original array)
        $("#submitButton").on("click", function(e) {
            e.preventDefault();
            //   console.log("searching");
            var searchTerm = $("#sportInputName").val();
            //   console.log(searchTerm);

            topics.push(searchTerm);
            createSportButton();
        });


        //  function sportButtonClicked() {
        //
        //  };
        $("#buttonPanel").on("click", ".sportButton", function(sportButtonClicked) {


            var userInput = $(this).text();
            console.log(userInput);
            searchGif(userInput);
            //        displayGif(userInput);
        });


        function searchGif(gifName) {
            $.ajax({
                    url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=dc6zaTOxFJmzC&limit=12',
                    type: 'GET',
                })
                .done(function(response) {
                    displayGif(response);
                    console.log(response);
                })
        }


        function displayGif(response) {
            $("#gifDisplay").empty();
            for (var i = 0; i < response.data.length; i++) {
                var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
                var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
                    ' " data-still=" ' + response.data[i].images.fixed_height_still.url +
                    ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';
        image = '<div class="col-md-4">' + image + "</div>";

                $("#gifDisplay").append(image);
            }

            $('.movImage').on('click', function() {
                var state = $(this).attr('data-state');
                if (state == 'still') {
                    $(this).attr('src', $(this).attr("data-animate"));
                    $(this).attr('data-state', 'animate');
                } else {
                    $(this).attr('src', $(this).attr("data-still"));
                    $(this).attr('data-state', 'still');
                }

            });
        }




    }) //document.ready closer




//GIPHY api key: 6f29dc744fc84e34a79cd0500c842093








//4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
//
//5. Under every gif, display its rating (PG, G, so on). 
//   * This data is provided by the GIPHY API.
//   * Only once you get images displaying with button presses should you move on to the next step.
//
//6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the topics on the page.
//
//7. **Rejoice**! You just made something really cool.
