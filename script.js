
    fetch('https://imdb-api.com/en/API/Top250Movies/k_pavc1gaw')
        .then(res => res.json())
        .then(posts => { 
            console.log(posts)
           
            
        })