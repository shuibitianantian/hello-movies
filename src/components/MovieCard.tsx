import { MovieDetail } from "../types";
import { movieDBImageSourceUrl } from "../constants";
import { MovieCardHeader } from "./MovieCardHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBlock,
  addToLike,
  removeFromBlock,
  removeFromLike,
  setShowTrailer,
} from "../actions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import BlockIcon from "@material-ui/icons/Block";
import Rating from "@material-ui/lab/Rating";
import "../css/movieCard.css";

const MovieCard = ({
  original_title,
  overview,
  popularity,
  vote_average,
  release_date,
  poster_path,
  backdrop_path,
  genres,
  id,
}: MovieDetail) => {
  const dispatch = useDispatch();

  const likedMovieIds = useSelector((state: any) => {
    return state.likedListReducer;
  });

  const blockedMovieIds = useSelector((state: any) => {
    return state.blockedListReducer;
  });

  const handleClickLike = () => {
    if (likedMovieIds.has(id.toString())) {
      dispatch(removeFromLike(id.toString()));
    } else {
      dispatch(addToLike(id.toString()));
      if (blockedMovieIds.has(id.toString())) {
        dispatch(removeFromBlock(id.toString()));
      }
    }
  };

  const handleClickBlock = () => {
    if (blockedMovieIds.has(id.toString())) {
      dispatch(removeFromBlock(id.toString()));
    } else {
      dispatch(addToBlock(id.toString()));

      if (likedMovieIds.has(id.toString())) {
        dispatch(removeFromLike(id.toString()));
      }
    }
  };

  const handleClickRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  const handleClickMoreIcon = () => {
    dispatch(setShowTrailer(id.toString()));
  };

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

  return (
    <div className="movie-card" style={posterStyle}>
      {poster_path !== null ? null : `${original_title}: no poster`}
      <div className="movie-card-detail">
        <div className="movie-card-detail-backdrop" style={backdropStyle}>
          {backdrop_path !== null ? null : "No backdrop available"}
        </div>
        <MovieCardHeader
          popularity={popularity}
          title={original_title}
          subtitle={release_date}
          genres={genres}
          action={handleClickMoreIcon}
        />
        <div className="movie-card-detail-overview">{overview}</div>
        <div className="movie-card-detail-footer">
          <div className="movie-card-detail-rating">
            <span>
              {vote_average === undefined ? 0 : vote_average.toPrecision(2)}
            </span>
            <Rating value={vote_average / 2} precision={0.1} readOnly />
          </div>
          <div className="movie-card-detail-link">
            <FavoriteIcon
              onClick={handleClickLike}
              style={
                likedMovieIds.has(id?.toString()) ? { color: "red" } : undefined
              }
            />
            <ShareIcon
              onClick={() =>
                handleClickRedirect(
                  "https://www.themoviedb.org/movie/" + id.toString()
                )
              }
            />
            <BlockIcon
              onClick={handleClickBlock}
              style={
                blockedMovieIds.has(id?.toString())
                  ? { color: "red" }
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieCard };
