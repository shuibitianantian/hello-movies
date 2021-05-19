import { ReduxAction } from "../types";

const initialState = new Set();

export const blockedListReducer = (
  state = initialState,
  action: ReduxAction
) => {
  switch (action.type) {
    case "ADD_TO_BLOCK":
      state.add(action.payload);
      return new Set(state);
    case "REMOVE_FROM_BLOCK":
      state.delete(action.payload);
      return new Set(state);
    default:
      return new Set(state);
  }
};
