import { ReduxAction, HomePageState } from "../types";

const initialState = {
  movies: [],
  searchKey: null,
  results: [],
};

const homePageReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
  }
};
