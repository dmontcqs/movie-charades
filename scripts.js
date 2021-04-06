const insertId = () => {
    
    const randomId = Math.floor(Math.random() * 200);
    const webUrl = `https://api.themoviedb.org/3/movie/${randomId}?api_key=4e370cf87047d952e72f249f236f6e94&language=es`;
    console.log(webUrl);

    fetch(webUrl)
    .then((response) => response.json())
    .then(movie => { 
        document.getElementById('output').innerHTML = movie.title;
    })
}






 