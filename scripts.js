const createMovieObject = () => {
  getMovies().then((movie) => {
    movieObj = {
      poster: movie.poster_path,
      title: movie.title,
      year: movie.release_date,
      country: movie.production_countries[0].name,
    };
    printMovieObj(movieObj);
  });
};

const printMovieObj = (movieObj) => {
  document.getElementById("output").innerHTML = `
       <p>${movieObj.title}</p>
       <img src="https://image.tmdb.org/t/p/w185/${movieObj.poster}" alt="movie-poster"></img>
       <p class="year">${movieObj.country}. (${movieObj.year})</p>
     `;
};

const getMovies = () => {
  return fetch(createUrl()).then((response) => response.json());
};

const createUrl = () => {
  const randomId = Math.floor(Math.random() * 10000);
  return `https://api.themoviedb.org/3/movie/${randomId}?api_key=4e370cf87047d952e72f249f236f6e94&language=es`;
};
