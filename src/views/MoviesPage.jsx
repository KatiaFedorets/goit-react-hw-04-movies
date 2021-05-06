import { Component } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesApi from '../services/service_api';
import MoviesViewItems from '../components/MoviesViewItems/MoviesViewItems';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
    error: null,
  };

  onSubmitForm = query => {
    this.setState({
      searchQuery: query,
      movies: [],
      error: null,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.searchQuery);
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const { searchQuery } = this.state;
    MoviesApi.fetchMoviesByQuery(searchQuery)
      .then(response => {
        this.setState({ movies: response.data.results });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmitForm} />
        {movies.length > 0 && <MoviesViewItems movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;
