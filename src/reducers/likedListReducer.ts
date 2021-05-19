import { ReduxAction } from "../types";

const initialState = new Set();

export const likedListReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case "ADD_TO_LIKE":
      state.add(action.payload);
      return new Set(state);
    case "REMOVE_FROM_LIKE":
      state.delete(action.payload);
      return new Set(state);
    default:
      return new Set(state);
  }
};
