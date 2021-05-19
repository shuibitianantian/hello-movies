import { MovieCard } from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import "../css/movieCard.css";
import { setMode, queryOnPage } from "../actions";
import { MovieDetail } from "../types";
import { Pagination } from "./Pagination";

const HomePageSearchDetails = () => {
  const dispatch = useDispatch();

  const movies: Map<number, any> = useSelector(
    (state: any) => state.homePageReducer.movies
  );

  const searchResult = useSelector(
    (state: any) => state.homePageReducer.searchResult
  );

  const searchKey = useSelector(
    (state: any) => state.homePageReducer.searchKey
  );

  const blockedMovieIds = useSelector((state: any) => {
    return state.blockedListReducer;
  });

  const handleClickNext = () => {
    if (searchResult.curPage === searchResult.totalPage) return;
    dispatch(queryOnPage(searchKey, searchResult.curPage + 1));
  };

  const handleClickPrev = () => {
    if (searchResult.curPage === 1) return;
    dispatch(queryOnPage(searchKey, searchResult.curPage - 1));
  };

  if (searchResult.movieDetails.length === 0) {
    return (
      <div id="found-nothing">
        <div>Nothing Found</div>
        <div>
          <CloseIcon
            id="found-nothing-close"
            onClick={() => dispatch(setMode(0))}
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="movie-cards-container">
          {searchResult.movieDetails.map((item: MovieDetail, idx: number) => {
            if (blockedMovieIds.has(item.id.toString())) return null;
            return (
              <MovieCard
                {...movies.get(parseInt(item.id.toString()))}
                key={idx}
              />
            );
          })}
        </div>
        <Pagination
          curPage={searchResult.curPage}
          totalPage={searchResult.totalPage}
          clickPreAction={handleClickPrev}
          clickNextAction={handleClickNext}
          closeActions={() => dispatch(setMode(0))}
        />
      </>
    );
  }
};

export default HomePageSearchDetails;
