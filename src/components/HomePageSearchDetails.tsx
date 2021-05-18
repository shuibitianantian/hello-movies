import { MovieCard } from "./MovieCard";
import { useSelector } from "react-redux";
import "../css/movieCard.css";

interface HomePageSearchDetailsProps {
  movieDetails: Map<number, any>;
}

const HomePageSearchDetails = ({
  movieDetails,
}: HomePageSearchDetailsProps) => {
  const searchResult = useSelector(
    (state: any) => state.homePageReducer.searchResult
  );

  return (
    <>
      <div className="movie-cards-container">
        {Array.from(movieDetails.keys()).map((item: number, idx: number) => {
          return <MovieCard {...movieDetails.get(item)} key={idx} />;
        })}
      </div>
      <div className="pagination">
        <button>Prev</button>
        <span>
          {searchResult.curPage}/{searchResult.totalPage}
        </span>
        <button>Next</button>
      </div>
    </>
  );
};

export default HomePageSearchDetails;
