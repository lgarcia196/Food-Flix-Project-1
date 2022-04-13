var movieSearchBtn = document.getElementById("moviebtn")

var getMovie = (movie) =>{
fetch('https://imdb-api.com/en/API/Top250Movies/k_pavc1gaw')
.then(res => res.json())
.then(posts => { 
console.log(posts)
})
}

movieSearchBtn.addEventListener('click', function(){
    var movieBtnEl = document.getElementById('movie-placeholder').event
    getMovie(movieBtnEl)
    console.log(movieBtnEl)
});