import { Component,lazy, Suspense } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MoviesApi from '../services/service_api';
import MovieDetails from '../components/MovieDetails/MovieDetails';
// import Cast from '../components/Cast/Cast';
// import Reviews from '../components/Reviews/Reviews';

const Cast = lazy(() => import('../components/Cast/Cast'));
const  Reviews = lazy(() => import('../components/Reviews/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    movieDetails: [],
    error: '',
  };

  componentDidMount() {
    this.fetchMoviesDetails();
  }

  handleClick = () => {
    this.fetchMoviesCast();
  };

  fetchMoviesDetails = () => {
    const { movieId } = this.props.match.params;

    MoviesApi.fetchMoviesDetails(movieId)
      .then(response => {
        this.setState({ movieDetails: response.data });
      })
      .catch(error => this.setState({ error }));
  };

  handleClick = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from?.pathname || '/');
  };

  render() {
    const {
      original_title,
      poster_path,
      popularity,
      overview,
      genres,
      id,
    } = this.state.movieDetails;

    const { movieDetails } = this.state;

    if (movieDetails.length === 0) return null;
    return (
      <>
        <button type="button" onClick={this.handleClick}>
          Go back
        </button>
        <MovieDetails
          original_title={original_title}
          poster_path={poster_path}
          popularity={popularity}
          overview={overview}
          genres={genres}
        />
        <div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink to={`${this.props.match.url}/${id}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${this.props.match.url}/${id}/reviews`}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Route
          path={`${this.props.match.path}/${id}/cast`}
          render={props => <Cast {...props} extraPropName="value" />}
        />
        <Route
          path={`${this.props.match.path}/${id}/reviews`}
          render={props => <Reviews {...props} extraPropName="value" />}
          />
          </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
