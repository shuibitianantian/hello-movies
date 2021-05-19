import { MovieCard } from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "../css/movieCard.css";
import { setMode, queryOnPage } from "../actions";
import { MovieDetail } from "../types";

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
            return (
              <MovieCard
                {...movies.get(parseInt(item.id.toString()))}
                key={idx}
              />
            );
          })}
        </div>

        <div className="pagination">
          <ChevronLeftIcon
            className="pagination-button"
            onClick={handleClickPrev}
          />
          {searchResult.curPage} / {searchResult.totalPage}
          <ChevronRightIcon
            className="pagination-button"
            onClick={handleClickNext}
          />
          <CloseIcon
            className="pagination-button"
            onClick={() => dispatch(setMode(0))}
          />
        </div>
      </>
    );
  }
};

export default HomePageSearchDetails;
