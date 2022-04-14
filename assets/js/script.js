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
