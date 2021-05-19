import {
  trendings,
  query,
  movieDBImageSourceUrl,
  movieDetail,
} from "../constants";
import { MovieDetail, SearchResult } from "../types";

export const changeTitle = (title: string) => {
  return {
    type: "CHANGE_TITLE",
    payload: title,
  };
};

export const setHomePageCounter = (counter: Number) => {
  return {
    type: "SET_COUNTER",
    payload: counter,
  };
};

export const setSearchResult = (result: SearchResult) => {
  return {
    type: "SET_SEARCH_RESULT",
    payload: result,
  };
};

export const setMode = (mode: 0 | 1) => {
  return {
    type: "SET_MODE",
    payload: mode,
  };
};

export const addMovieDetail = (detail: MovieDetail) => {
  return {
    type: "ADD_MOVIE_DETAIL",
    payload: detail,
  };
};

export const constAddSearchResult = (searchResult: SearchResult) => {
  return {
    type: "ADD_SEARCH_RESULT",
    payload: searchResult,
  };
};

export const setSearchKey = (searchKey: string) => {
  return {
    type: "SET_SEARCH_KEY",
    payload: searchKey,
  };
};

// The async function to fetch trending data
export const fetchTrending = () => {
  return fetch(trendings)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const posters: string[] = [];
      const backdrops: string[] = [];

      res.results.forEach((item: MovieDetail) => {
        posters.push(movieDBImageSourceUrl + item.poster_path);
        backdrops.push(movieDBImageSourceUrl + item.backdrop_path);
      });
      return [posters, backdrops];
    });
};

// The async function to search given title
export const queryMovie = (queryTarget: string, page = 1) => {
  var searchParams = new URLSearchParams("");
  searchParams.set("query", queryTarget);
  searchParams.set("page", page.toString());

  return fetch(query + searchParams.toString()).then((res) => {
    return res.json();
  });
};

// The async function to get movie detail of a movie
export const fetchMovieDetail = (movieID: string) => {
  let des = movieDetail.replace("$$", movieID);
  return fetch(des).then((res) => res.json());
};

export const queryOnPage = (keyword: string, page = 1) => {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    queryMovie(keyword, page).then((res) => {
      dispatch(
        setSearchResult({
          movieDetails: res.results,
          totalPage: res.total_pages,
          curPage: res.page,
        })
      );

      res.results.forEach((item: MovieDetail) => {
        if (state.homePageReducer.movies.has(item.id)) return;
        fetchMovieDetail(item.id.toString()).then((res) => {
          dispatch(addMovieDetail(res));
        });
      });
      dispatch(setMode(1));
    });
  };
};
