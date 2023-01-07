import './styles/styles.css';

const appcontainer = document.getElementById('app');
let maincontainer;

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search');
  searchBar.innerHTML = "<input type = 'search' name ='searchTerm'><button>search</button>";

  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });

  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('hero');
  header.innerHTML = '<h1 class = "title"> The Movie DB Trial<h1>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function createMovie(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `<h2> ${movie.title} </h2> <p>${movie.overview}</p>`;
  const img = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  movieElement.style.backgroundImage = `url(${img})`;
  return movieElement;
}

function renderPage({ onSearch }) {
  appcontainer.innerHTML = '';
  appcontainer.appendChild(createHeader({ onSearch }));
  maincontainer = createMain();
  appcontainer.appendChild(maincontainer);
}

function renderMovies(movies) {
  maincontainer.innerHTML = '';
  movies.forEach((movie) => {
    maincontainer.appendChild(createMovie(movie));
  });
}

export default {
  renderPage,
  renderMovies,
};
