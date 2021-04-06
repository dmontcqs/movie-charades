const insertId = () => {
    
    const randomId = Math.floor(Math.random() * 500);
    const webUrl = `https://api.themoviedb.org/3/movie/${randomId}?api_key=4e370cf87047d952e72f249f236f6e94&language=es`;
    console.log(webUrl);
    const imageUrl = `https://api.themoviedb.org/3/movie/${randomId}/images?api_key=4e370cf87047d952e72f249f236f6e94&language=en-US`
    console.log(imageUrl);


    fetch(webUrl)
    .then((response) => response.json())
    .then(movie => { 
        poster = movie.poster_path;
        title = movie.title;
        document.getElementById('output').innerHTML = `<p>${title}</p>` + `<img src="${`https://image.tmdb.org/t/p/w185/${poster}`}" alt="movie-poster"></img>`
        })
        
    fetch(imageUrl)
    .then((response) => response.json())
    .then(movieImage => {

    })
} 







 