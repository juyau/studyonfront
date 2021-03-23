import { combineReducers } from "redux";

import category from "./categoryReducer";
import dictionary from "./dictionaryReducer";
import {
  courseListReducer,
  getTeachplanListReducer,
  courseBasicAddReducer,
} from "./courseReducer";

const rootReducer = combineReducers({
  courseList: courseListReducer,
  courseBasicAdd: courseBasicAddReducer,
  teachplanList: getTeachplanListReducer,
  category,
  dictionary,
});

export default rootReducer;
