var randomRecipeBtn = document.getElementById("randomRecipe");
var saveRecipeBtn = document.getElementById('saveRecipe');
var recipeArray = JSON.parse(localStorage.getItem('recipes')) || [];

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
        saveRecipeBtn.addEventListener('click', function() {
            recipeArray.push(posts.recipes[0].title)
            recipeArray.push(posts.recipes[0].sourceUrl)
            localStorage.setItem('recipes', JSON.stringify(recipeArray))
           
            
        })
    })
}

randomRecipeBtn.addEventListener('click', function() {
    var recipeBtnEl = document.getElementById('recipeResult')
    getRecipe(recipeBtnEl)
    console.log(recipeBtnEl)
})
