import { MovieDetail } from "../types";
import { movieDBImageSourceUrl } from "../constants";

const MovieCard = ({
  original_title,
  overview,
  popularity,
  vote_average,
  vote_count,
  release_date,
  poster_path,
  backdrop_path,
}: MovieDetail) => {
  const style = {
    backgroundImage: `url(${
      poster_path !== ""
        ? movieDBImageSourceUrl + poster_path
        : "../assets/no-image.png"
    })`,
  };
  return <div className="movie-card" style={style}></div>;
};

export { MovieCard };
