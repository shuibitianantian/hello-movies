import { ReduxAction } from "../types";

const initialState = {
  counter: 0,
  searchResult: null,
  mode: 0,
  movies: new Map(),
  searchKey: "",
  showTrailer: null,
};

const homePageReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case "SET_COUNTER":
      return {
        ...state,
        counter: action.payload,
      };
    case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "SET_SEARCH_RESULT":
      return {
        ...state,
        searchResult: action.payload,
      };
    case "ADD_MOVIE_DETAIL":
      state.movies.set(action.payload.id, action.payload);
      return {
        ...state,
        movies: new Map(state.movies),
      };
    case "SET_SEARCH_KEY":
      return {
        ...state,
        searchKey: action.payload,
      };
    case "SET_SHOW_TRAILER":
      return {
        ...state,
        showTrailer: action.payload,
      };
    default:
      return { ...state };
  }
};

export { homePageReducer };
