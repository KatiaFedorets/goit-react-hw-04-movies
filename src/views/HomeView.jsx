import { Component } from 'react';
import MoviesApi from '../services/service_api';

import MoviesViewItems from '../components/MoviesViewItems/MoviesViewItems';

class HomeView extends Component {
  state = {
    error: null,
    movies: [],
  };

  componentDidMount() {
    this.fetchGetTrending();
  }

  fetchGetTrending = () => {
    MoviesApi.fetchGetTrending()
      .then(response => {
        this.setState({ movies: response.data.results });
        console.log(response.data.results);
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return null;

    return <MoviesViewItems movies={movies} />;
  }
}

export default HomeView;
