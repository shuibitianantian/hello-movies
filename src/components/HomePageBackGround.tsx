import SearchIcon from "@material-ui/icons/Search";
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHomePageCounter, queryOnPage, setSearchKey, setTmpSearchKey, setDropdown , setPastSearchKeys} from "../actions";

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
  const searchedValues = useSelector((state: any) => state.homePageReducer.searchedValues);
  const tmpSearchKey = useSelector((state: any) => state.homePageReducer.tmpSearchKey);
  const showDropdown = useSelector((state: any) => state.homePageReducer.showDropdown);
  const pastSearchKeys = useSelector((state: any) => state.homePageReducer.pastSearchKeys);

  const adjustBorder = () => tmpSearchKey === "" ? {borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem"} : 
  isPastSearchKeysExist() && showDropdown ? {} : {borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem"}

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch(setHomePageCounter((counter + 1) % 20));
    }, 3000);

    return () => clearInterval(timer);
  }, [dispatch, counter]);

  useEffect(() => {
    dispatch(setPastSearchKeys(searchedValues.filter((item : string) => item.includes(tmpSearchKey))))
  }, [tmpSearchKey, searchedValues])

  const handleClickCheckit = () => {
    if (inputRef.current !== null && inputRef.current.value !== "") {
      let keyword = inputRef.current.value;
      dispatch(queryOnPage(keyword, 1));
      dispatch(setSearchKey(keyword));
      dispatch(setDropdown(true));
    }
  };

  const handleClickSearchIcon = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const renderBackground = () => {
    const imgSources = (
      document.documentElement.clientWidth > 700 ? backdropImgs : posterImgs
    )[counter];

    return (
      <img
        className={"home-background-img"}
        src={imgSources}
        alt={imgSources}
      />
    );
  };
  const handleSubmitAutoComplete = (e : any) => {
    let keyword = e.target.lastChild.innerHTML;
    if (inputRef.current !== null) inputRef.current.value = keyword ;
    dispatch(queryOnPage(keyword));
    dispatch(setDropdown(false));
  }

  const handleOnSearchInputChange = (e : any) => {
    let keyword = e.target.value;
    dispatch(setTmpSearchKey(keyword));
    dispatch(setDropdown(true));
  }

  const isPastSearchKeysExist = () => {
    return pastSearchKeys.length > 0
  }

  const DisplayPastSearchKeys = () => {
    let res = pastSearchKeys.map((item : string) => <span onClick = {handleSubmitAutoComplete}><SearchIcon/><li>{item}</li></span>)
    return <>{res}</>
  }

  return (
    <>
      {renderBackground()}
      <div id="blur-div"></div>
      <div id="search-panel-container">
        <div id="search-panel"
          style = {adjustBorder()}
        >
          <SearchIcon
            style={{ color: "lightblue", paddingLeft: "10px" }}
            onClick={handleClickSearchIcon}
          />
          <div>
            <input 
            style = {adjustBorder()}
            ref={inputRef} type="text" id="search-input" onKeyUp = {handleOnSearchInputChange}/>
          </div>
        </div>
        {tmpSearchKey === "" ? <></>: isPastSearchKeysExist() && showDropdown ? <ul id = "search-autocomplete-dropdown">{DisplayPastSearchKeys()}</ul> : <></>}
        <div id="buttons">
          <button onClick={handleClickCheckit}>Check it ~</button>
          {/* <button>Go random</button> */}
        </div>
      </div>
    </>
  );
}

export default HomePageBackGround;
