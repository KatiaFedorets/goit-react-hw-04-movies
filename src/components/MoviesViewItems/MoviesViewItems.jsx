import { Link, withRouter } from 'react-router-dom';
import React from 'react';

const MoviesViewItems = ({ movies, location }) => {
  console.log(location);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
//  не передается location?
export default withRouter(MoviesViewItems);
