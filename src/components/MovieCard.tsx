import { MovieDetail } from "../types";
import { movieDBImageSourceUrl } from "../constants";
import { MovieCardHeader } from "./MovieCardHeader";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
// import StarIcon from "@material-ui/icons/Star";
import Rating from "@material-ui/lab/Rating";
import React from "react";

const MovieCard = ({
  original_title,
  overview,
  popularity,
  vote_average,
  vote_count,
  release_date,
  poster_path,
  backdrop_path,
  genres,
  id,
}: MovieDetail) => {
  const posterStyle = {
    backgroundImage: `url(${
      poster_path !== undefined && poster_path !== null
        ? movieDBImageSourceUrl + poster_path
        : ""
    })`,
  };

  const backdropStyle = {
    backgroundImage: `url(${
      backdrop_path !== undefined && backdrop_path !== null
        ? movieDBImageSourceUrl + backdrop_path
        : ""
    })`,
  };

  const handleClickRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="movie-card" style={posterStyle}>
      {poster_path !== null ? null : "No poster available"}

      <div className="movie-card-detail">
        <div className="movie-card-detail-backdrop" style={backdropStyle}>
          {backdrop_path !== null ? null : "No backdrop available"}
        </div>
        <MovieCardHeader
          popularity={popularity}
          title={original_title}
          subtitle={release_date}
          genres={genres}
          action={() => console.log("dasda")}
        />
        <div className="movie-card-detail-overview">{overview}</div>
        <div className="movie-card-detail-footer">
          <div className="movie-card-detail-rating">
            <span>{vote_average.toPrecision(2)}</span>
            <Rating value={vote_average / 2} precision={0.1} readOnly />
          </div>
          <div className="movie-card-detail-link">
            <FavoriteIcon />
            <ShareIcon
              onClick={() =>
                handleClickRedirect(
                  "https://www.themoviedb.org/movie/" + id.toString()
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieCard };
