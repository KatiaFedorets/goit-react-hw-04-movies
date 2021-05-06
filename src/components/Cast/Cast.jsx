import { Component } from 'react';
import MoviesApi from '../../services/service_api';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    casts: [],
    error: '',
  };

  componentDidMount() {
    this.fetchMoviesCast();
  }

  fetchMoviesCast = () => {
    const { movieId } = this.props.match.params;
    MoviesApi.fetchMoviesCast(movieId)
      .then(data => {
        this.setState({ casts: data.data.cast });
        console.log(this.state);
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { casts } = this.state;

    return (
      <>
        {casts.length ? (
          <ul className={styles.castList}>
            {casts.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  width="140px"
                  height="210px"
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No information about cast</p>
        )}
      </>
    );
  }
}

export default Cast;
