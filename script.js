"use strict";
// loads on load
$(document).ready(function () {

    function displayRecipes() {

        // let recipes = $(this).attr("data-name");

        let search = {
            name: "comfort food",
            calories: "1000-1200",
            health: "alcohol-free",
        }

        // let search = "comfort food"
        let queryURL = `https://api.edamam.com/search?q=${search.name}&app_id=879f0751&app_key=35a16e4121fe17352894abf6ad14d421&from=0&to=3&calories=${search.calories}&health=${search.health}`

        // plug in URL and modify the search terms like comfort food or calories to validate response in browser
        // https://api.edamam.com/search?q=comfort+foodapp_id=879f0751&app_key=35a16e4121fe17352894abf6ad14d421&from=0&to=3&calories=591-722&health=alcohol-free 

        // calories returned in JSON response is yield, need to divide by yield: to get calories per serving - for future calculation calories / yield of the recipe

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            console.log(response);
            let results = response.data;
            console.log(results);
        });
    };
    displayRecipes();
});

