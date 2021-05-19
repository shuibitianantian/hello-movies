import SearchIcon from "@material-ui/icons/Search";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHomePageCounter, queryOnPage, setSearchKey } from "../actions";

interface HomePageBackGroundProps {
  backdropImgs: string[];
  posterImgs: string[];
}

function HomePageBackGround({
  backdropImgs,
  posterImgs,
}: HomePageBackGroundProps) {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const counter = useSelector((state: any) => state.homePageReducer.counter);

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch(setHomePageCounter((counter + 1) % 20));
    }, 3000);

    return () => clearInterval(timer);
  }, [dispatch, counter]);

  const handleClickCheckit = () => {
    if (inputRef.current !== null && inputRef.current.value !== "") {
      let keyword = inputRef.current.value;
      dispatch(queryOnPage(keyword, 1));
      dispatch(setSearchKey(keyword));
    }
  };

  const handleClickSearchIcon = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      {(document.documentElement.clientWidth > 700
        ? backdropImgs
        : posterImgs
      ).map((item: string, idx: number) => {
        return (
          <img
            className={
              idx === counter
                ? "home-background-img-show"
                : "home-background-img-hide"
            }
            src={item}
            alt={item}
            key={idx}
          />
        );
      })}
      <div id="blur-div"></div>
      <div id="search-panel-container">
        <div id="search-panel">
          <SearchIcon
            style={{ color: "lightblue", paddingLeft: "10px" }}
            onClick={handleClickSearchIcon}
          />
          <input ref={inputRef} type="text" id="search-input" />
        </div>
        <div id="buttons">
          <button onClick={handleClickCheckit}>Check it ~</button>
          {/* <button>Go random</button> */}
        </div>
      </div>
    </>
  );
}

export default HomePageBackGround;
