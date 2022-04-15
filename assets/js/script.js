var movieSearchBtn = document.getElementById("moviebtn")
var movieSaveBtn = document.getElementById('movie-savebtn');
var movieArray = JSON.parse(localStorage.getItem("movies")) || [];

var getMovie = (movie) => {
    fetch('https://imdb-api.com/en/API/Top250Movies/k_pavc1gaw')
        .then(res => res.json())
        .then(posts => {
            console.log(posts)
            if (posts.errorMessage) {
             alert("sorry all out of requests this is a demo please try again tomorrow")
             return
            }
            
            var i = Math.floor(Math.random() * posts.items.length)
            var movieTitle = document.getElementById('movie-title')
            movieTitle.textContent = posts.items[i].fullTitle
            var movieCrew = document.getElementById('movie-crew')
            movieCrew.textContent = posts.items[i].crew
            var movieRating = document.getElementById('movie-rating')
            movieRating.textContent = posts.items[i].imDbRating
            var movieImg = document.querySelector('#movie-img')
            movieImg.setAttribute("src", posts.items[i].image)
            movieSaveBtn.addEventListener('click', function(){
                movieArray.push(posts.items[i])
                localStorage.setItem("movies", JSON.stringify(movieArray))
            })
        })
}
 
function displayFav (){
    var favMoviesContainer = document.getElementById('favorite-movies')
    for (let i = 0; i < movieArray.length; i++) {
        var movie = movieArray[i];
        var div = document.createElement("div")
        div.setAttribute("class","column mx-3 is-full box has-text-centered")
        div.textContent = movie.title;
        favMoviesContainer.append(div)   
    }
}
displayFav()

movieSearchBtn.addEventListener('click', function () {
    var movieBtnEl = document.getElementById('movie-placeholder')
    getMovie(movieBtnEl)
    console.log(movieBtnEl)
});

var randomRecipeBtn = document.getElementById("randomRecipe");
var saveRecipeBtn = document.getElementById('saveRecipe');
var Favorites = document.getElementById('favoritesList')
var recipeArray = JSON.parse(localStorage.getItem('recipes')) || [];

var getRecipe = (recipe) =>{
    fetch("https://api.spoonacular.com/recipes/random?apiKey=d9b79695fd2743d2a6de54efb96ffd14")
    .then(res => res.json())
    .then(posts => {
        console.log(posts)
        var recipeTitle = document.getElementById('recipeResult')
        recipeTitle.textContent = posts.recipes[0].title
        var ingredients = posts.recipes[0].extendedIngredients
        for (var i = 0; i < ingredients.length; i++) {
            var element = ingredients[i];
            console.log(element);
            var foodName = document.createElement()
            foodName.textContent = element.original
        }
        var directions = document.getElementById('instruction')
        directions.innerHTML = posts.recipes[0].instructions
        saveRecipeBtn.addEventListener('click', function() {
            recipeArray.push(posts.recipes[0].title + ' ' + posts.recipes[0].sourceUrl + ' ')
            localStorage.setItem('recipes', JSON.stringify(recipeArray))
            for (var i = 0; i < recipeArray.length; i++) {
                var element = recipeArray[i];
                var savedRecipe = document.createElement('div')
                savedRecipe.setAttribute('class', 'column mx-3 is-full box has-text-centered')
                savedRecipe.append(recipeArray)
                Favorites.append(savedRecipe)
            }
        })

    })
}

randomRecipeBtn.addEventListener('click', function() {
    var recipeBtnEl = document.getElementById('recipeResult')
    getRecipe(recipeBtnEl)
    console.log(recipeBtnEl)
})
