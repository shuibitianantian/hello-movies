// In this component, I will use react-redux connect
import { useSelector, useDispatch } from "react-redux";
import { MovieCard } from "./MovieCard";
import { useEffect } from "react";
import { fetchPopularMovies } from "../actions";
import { MovieDetail } from "../types";
import { Pagination } from "./Pagination";

export const MovieListPage = () => {
  const movieListPageState = useSelector((state: any) => {
    return state.movieListReducer;
  });

  const movies = useSelector((state: any) => {
    return state.homePageReducer.movies;
  });

  const blockedMovieIds = useSelector((state: any) => {
    return state.blockedListReducer;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const handleClickPre = () => {
    if (movieListPageState.currentPageNumber - 1 === 0) return;
    dispatch(fetchPopularMovies(movieListPageState.currentPageNumber - 1));
  };

  const handleClickNext = () => {
    if (movieListPageState.currentPageNumber === movieListPageState.totalPage)
      return;
    dispatch(fetchPopularMovies(movieListPageState.currentPageNumber + 1));
  };

  const renderMovieCards = () => {
    if (movieListPageState.currentPageNumber === null) return;
    return movieListPageState.pageCache
      .get(movieListPageState.currentPageNumber)
      .map((item: MovieDetail, idx: number) => {
        if (blockedMovieIds.has(item.id.toString())) return null;
        return (
          <MovieCard {...movies.get(parseInt(item.id.toString()))} key={idx} />
        );
      });
  };

  return (
    <>
      <div className="movie-cards-container">{renderMovieCards()}</div>;
      <Pagination
        curPage={movieListPageState.currentPageNumber}
        totalPage={movieListPageState.totalPage}
        clickNextAction={handleClickNext}
        clickPreAction={handleClickPre}
      />
    </>
  );
};
