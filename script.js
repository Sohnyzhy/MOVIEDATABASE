const API_KEY = "api_key=e60aacac2f0b476eb27fedb56a2dca48";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const imageUrl = "https://image.tmdb.org/t/p/w500/";
const main = document.getElementById("main");

getMovies(API_URL);


// hämtar filmerna
function getMovies(url) {
  fetch(url).then(response => response.json()).then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

//visar filmerna
function showMovies(data) {
 

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? imageUrl+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know-more" id="${id}">Know More</button
            </div>
        
        `

        main.appendChild(movieEl);
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
