import axios from 'axios';

const API_KEY = 'eade4640657bb63c2c171ffa3ce711eb';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: `en- US`,
};

const fetchGetTrending = () => {
  return axios.get(`trending/all/day`);
};

const fetchMoviesByQuery = searchQuery => {
  return axios.get(
    `search/movie?language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  );
};

const fetchMoviesDetails = movieId => {
  return axios.get(`movie/${movieId}`);
};

const fetchMoviesCast = movieId => {
  return axios.get(`movie/${movieId}/credits`);
};

const fetchMoviesReviews = movieId => {
  return axios.get(`movie/${movieId}/reviews`);
};

export default {
  fetchGetTrending,
  fetchMoviesByQuery,
  fetchMoviesDetails,
  fetchMoviesCast,
  fetchMoviesReviews,
};
