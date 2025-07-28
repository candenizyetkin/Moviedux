import React from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
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
        <p className={`movie-card-genre ${getGenreClass(movie.genre)}`}>
          {makeGenreUpperCase(movie.genre)}
        </p>
        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
