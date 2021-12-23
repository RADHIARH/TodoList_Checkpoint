import reducer from "./reducer";
import { combineReducers } from "redux";
import FilterReducer from "./FilterReducer";
const rootreducers = combineReducers({
  reducer,
  FilterReducer,
});
export default rootreducers;
