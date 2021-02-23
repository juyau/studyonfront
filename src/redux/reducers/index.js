import { combineReducers } from "redux";

import category from "./categoryReduser.js";

const rootReducer = combineReducers({
  category,
});

export default rootReducer;
