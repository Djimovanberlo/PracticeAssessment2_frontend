import { combineReducers } from "redux";
import appState from "./appState/reducer";
import homePages from "./homePages/reducer";
import singlePage from "./singlePage/reducer";
import user from "./user/reducer";

export default combineReducers({
  appState,
  homePages,
  singlePage,
  user,
});
