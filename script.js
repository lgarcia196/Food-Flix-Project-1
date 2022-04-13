var randomRecipeBtn = document.getElementById("randomRecipe");

var getRecipe = (recipe) =>{
    fetch("https://api.spoonacular.com/recipes/random?apiKey=d9b79695fd2743d2a6de54efb96ffd14")
    .then(res => res.json())
    .then(posts => {
        console.log(posts)
        var recipeTitle = document.getElementById('recipeResult')
        recipeTitle.textContent = posts.recipes[0].title
    })
}

randomRecipeBtn.addEventListener('click', function(){
    var recipeBtnEl = document.getElementById('recipeResult')
    getRecipe(recipeBtnEl)
    console.log(recipeBtnEl)
})