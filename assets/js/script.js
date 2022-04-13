var movieSearchBtn = document.getElementById("moviebtn")

var getMovie = (movie) =>{
fetch('https://imdb-api.com/en/API/Top250Movies/k_pavc1gaw')
.then(res => res.json())
.then(posts => { 
console.log(posts)
    var movieTitle = document.getElementById('movie-title')
    movieTitle.textContent = posts.items[0].fullTitle
    var movieCrew = document.getElementById('movie-crew')
    movieCrew.textContent = posts.items[0].crew
    var movieRating = document.getElementById('movie-rating')
    movieRating.textContent = posts.items[0].imDbRating
    console.log(movieTitle,movieTitle)
    var movieImg = document.querySelector('#movie-img')
    movieImg.setAttribute ("src",posts.items[0].image) 

})
}

movieSearchBtn.addEventListener('click', function(){
    var movieBtnEl = document.getElementById('movie-placeholder')
    getMovie(movieBtnEl)
    console.log(movieBtnEl)
});