import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import "../css/movieCard.css";

export const BlockedMoviePage = () => {
  const blockedMovieIds = useSelector((state: any) => {
    return state.blockedListReducer;
  });

  const existingMovies = useSelector((state: any) => {
    return state.homePageReducer.movies;
  });

  const renderMovieCards = () => {
    if (Array.from(blockedMovieIds).length === 0) {
      return <div className="c-pages">Well, no movie has been blocked!</div>;
    }

    return Array.from(blockedMovieIds).map((id: any) => {
      return <MovieCard key={id} {...existingMovies.get(parseInt(id))} />;
    });
  };

  return <div className="movie-cards-container">{renderMovieCards()}</div>;
};
