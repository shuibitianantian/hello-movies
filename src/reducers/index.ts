import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { homePageReducer } from "./homePageReducer";

export default combineReducers({
  titleReducer,
  homePageReducer,
});
