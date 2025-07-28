import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }

    if (rating >= 6 && rating < 8) {
      return "rating-ok";
    }

    if (rating < 6) {
      return "rating-bad";
    }
  };

  const getGenreClass = (genre) => {
    if (genre === "horror") {
      return "genre-middle";
    }

    if (genre === "fantasy") {
      return "genre-blunt";
    }

    if (genre === "drama") {
      return "genre-purple";
    }
  };

  const makeGenreUpperCase = (genre) => {
    return genre.charAt(0).toUpperCase() + genre.slice(1);
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className={`movie-card-genre ${getGenreClass(movie.genre)}`}>
            {makeGenreUpperCase(movie.genre)}
          </span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => {
              console.log("checkbox tıklandı", movie.id);
              toggleWatchlist(movie.id);
            }}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "Watchlisted" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
