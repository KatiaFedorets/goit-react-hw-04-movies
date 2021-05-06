import { Component } from 'react';
import MoviesApi from '../../services/service_api';

class Reviews extends Component {
  state = {
    reviews: [],
    error: '',
  };

  componentDidMount() {
    this.fetchMoviesReviews();
  }

  fetchMoviesReviews = () => {
    const { movieId } = this.props.match.params;
    MoviesApi.fetchMoviesReviews(movieId)
      .then(data => {
        this.setState({ reviews: data.data.results });
        console.log(this.state);
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length ? (
          <ul>
            {reviews.map(({ id, author, content, url }) => (
              <li key={id}>
                <h5>Author: {author}</h5>
                <p>{content}</p>
                <a href={url}>Link for review</a>
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

export default Reviews;
