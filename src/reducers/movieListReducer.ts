import { ReduxAction } from "../types";

const initialState = {
  currentPageNumber: null,
  pageCache: new Map<number, object[]>(),
  totalPage: 500,
};

export const movieListReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case "ADD_MOVIE_PAGE":
      state.pageCache.set(action.payload.page, action.payload.results);
      return {
        ...state,
        currentPageNumber: action.payload.page,
        pageCache: new Map(state.pageCache),
      };
    default:
      return {
        ...state,
      };
  }
};
