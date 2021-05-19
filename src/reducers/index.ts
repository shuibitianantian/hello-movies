import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { homePageReducer } from "./homePageReducer";
import { movieListReducer } from "./movieListReducer";
import { likedListReducer } from "./likedListReducer";
import { blockedListReducer } from "./blockedListReducer";

export default combineReducers({
  titleReducer,
  homePageReducer,
  movieListReducer,
  likedListReducer,
  blockedListReducer,
});
