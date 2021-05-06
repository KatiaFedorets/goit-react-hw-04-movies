const MovieDetails = ({
  original_title,
  poster_path,
  popularity,
  overview,
  genres,
}) => (
  <div>
    <h2>{original_title}</h2>
    <div>
      <img
        width="240px"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
    </div>
    <p>User Score: {Math.round(popularity)}%</p>
    <h3>Overview</h3>
    <p>{overview}</p>
    <h4>Genres</h4>
    <ul>
      {genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  </div>
);

export default MovieDetails;
