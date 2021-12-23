
import store from "../Store";

const State = {
  filter: [],

};
const FilterReducer = (state = State, action) => {
  const desc = action.data;
  const idd = action.val;
  const done = action.payload;
  const id = action.id;
  const id1 = action.val1;
  const desc1 = action.val3;
  const id2 = action.val2;
  const tasks=action.tasks;
  switch (action.type) {
    case "filtertasks":
      return {
        ...state,
        filter: tasks.filter((element) => element.isDone === done),
      };
    default:
      return state;
    }
};
export default FilterReducer;
