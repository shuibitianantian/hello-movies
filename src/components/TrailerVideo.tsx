import React from "react";
import { Pagination } from "./Pagination";
import { trailer, movieDBImageSourceUrl } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setShowTrailer } from "../actions";

import "../css/trailerVideo.css";

type TrailerDetail = {
  id: string;
  key: string;
};

export const TrailerVideo = ({ id }: any) => {
  const [trailerUrls, setTrailerUrls] = React.useState<TrailerDetail[]>([]);
  const [count, setCount] = React.useState(-1);
  const dispatch = useDispatch();
  const homePageState = useSelector((state: any) => state.homePageReducer);

  React.useEffect(() => {
    fetch(trailer.replace("$$", id))
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTrailerUrls(res.results);
        setCount(res.results.length ? 0 : -1);
      });
  }, [id]);

  const handleClickPrev = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handleClickNext = () => {
    if (count === trailerUrls.length - 1) return;
    setCount(count + 1);
  };

  const renderTrailer = () => {
    if (count === -1) {
      return <p>No Trailer Found</p>;
    } else {
      return (
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${trailerUrls[count].key}?autoplay=1&mute=1`}
          allow="autoplay"
          title={id}
          allowFullScreen
        ></iframe>
      );
    }
  };

  const embedStyle = {
    backgroundImage: `url(${
      movieDBImageSourceUrl +
      homePageState.movies.get(parseInt(id)).backdrop_path
    })`,
  };

  return (
    <div className="trailer-container" style={embedStyle}>
      <div className="blur-background"></div>
      {renderTrailer()}
      <Pagination
        curPage={count + 1}
        totalPage={trailerUrls.length}
        clickPreAction={handleClickPrev}
        clickNextAction={handleClickNext}
        closeActions={() => dispatch(setShowTrailer(null))}
      />
    </div>
  );
};
