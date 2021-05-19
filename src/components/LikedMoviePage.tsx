import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import "../css/movieCard.css";

export const LikedMoviePage = () => {
  const likedMovieIds = useSelector((state: any) => {
    return state.likedListReducer;
  });

  const existingMovies = useSelector((state: any) => {
    return state.homePageReducer.movies;
  });

  const renderMovieCards = () => {
    if (Array.from(likedMovieIds).length === 0) {
      return <div className="c-pages">Ooooops, try to like something!</div>;
    }

    return Array.from(likedMovieIds).map((id: any) => {
      return <MovieCard key={id} {...existingMovies.get(parseInt(id))} />;
    });
  };

  return <div className="movie-cards-container">{renderMovieCards()}</div>;
};
