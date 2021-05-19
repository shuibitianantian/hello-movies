import { ReduxAction, TitleState } from "../types";

const initialState: TitleState = {
  pageTitle: "Home",
};

const titleReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        pageTitle: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { titleReducer };
