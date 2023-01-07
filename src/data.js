const state = {
  movies: [],
};

function getMovies() {
  return state.movies;
}

function setMovies(movies) {
  state.movies = movies;
}

export default {
  getMovies,
  setMovies,
};
