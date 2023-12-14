import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, rating }) {
  return (
    <div className="Movie">
      <div className="movie_container">
        <img src={poster} alt={title} title={title} />
        <div className="movie_info">
          <h7>id : {id}</h7>
          <h3>영화 제목: {title}</h3>
          <h5>개봉년도: {year} | 평점: {rating}</h5>
          {summary ? (
            <p>{summary}</p>
          ) : (
            <p>설명 없음</p>
          )}
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  poster: PropTypes.string.isRequired,
};

export default Movie;
