import store from "../Store";
export const addTask = (description) => {
  return {
    type: "addtask",
    data: description,
  };
};
export const done = (id) => {
  return {
    type: "done",
    val: id,
  };
};
export const filterTasks = (isDone) => {
  return {
    type: "filtertasks",
    payload: isDone,
    tasks:store.getState().reducer.tasks
  };
};
export const deletetask = (id) => {
  return {
    type: "deletetask",
    id: id,
  };
};
export const showtask = (id) => {
  return {
    type: "show",
    val1: id,
  };
};
export const EditTask = (id, desc) => {
  return {
    type: "edit",
    val2: id,
    val3: desc,
  };
};
