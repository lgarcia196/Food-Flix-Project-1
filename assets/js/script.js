var movieSearchBtn = document.getElementById("moviebtn")

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

        })
}


movieSearchBtn.addEventListener('click', function () {
    var movieBtnEl = document.getElementById('movie-placeholder')
    getMovie(movieBtnEl)
    console.log(movieBtnEl)
});
//=====
var randomRecipeBtn = document.getElementById("randomRecipe");

var getRecipe = (recipe) =>{
    fetch("https://api.spoonacular.com/recipes/random?apiKey=d9b79695fd2743d2a6de54efb96ffd14")
    .then(res => res.json())
    .then(posts => {
        console.log(posts)
        var foodImage = document.getElementById('food-image')
        foodImage.setAttribute('src', posts.recipes[0].image)
        var recipeTitle = document.getElementById('recipeResult')
        recipeTitle.textContent = posts.recipes[0].title
        var ingredients = posts.recipes[0].extendedIngredients
        for (var i = 0; i < ingredients.length; i++) {
            var element = ingredients[i];
            console.log(element);
            var foodName = document.createElement('ol')
            recipeTitle.append(foodName)
            foodName.textContent = element.original
        }
        var directions = document.getElementById('instruction')
        directions.innerHTML = posts.recipes[0].instructions
    })
}

randomRecipeBtn.addEventListener('click', function(){
    var recipeBtnEl = document.getElementById('recipeResult')
    getRecipe(recipeBtnEl)
    console.log(recipeBtnEl)
})

