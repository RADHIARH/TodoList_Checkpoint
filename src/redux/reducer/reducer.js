const initialState={
    tasks: [],
}
const reducer = ( state =initialState,action
) => {
  const desc = action.data;
  const idd = action.val;
  const done = action.payload;
  const id = action.id;
  const id1 = action.val1;
  const desc1 = action.val3;
  const id2 = action.val2;

  switch (action.type) {
    case "addtask":
      const maxid = state.tasks.reduce(
        (acc, current) => (current.id > acc ? current.id : acc),
        0
      );
        
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: maxid + 1,
            description: desc,
            isDone: false,
          },
        ],
        
      };
    case "done":
      const index = state.tasks.findIndex((element) => element.id === idd);
      const newTasks = [...state.tasks];
      newTasks[index].isDone = true;
      return {
        ...state,
        tasks: newTasks,
      };
    case "edit":
      const elementsIndex = state.tasks.findIndex(
        (element) => element.id === id2
      );
      const newArray = [...state.tasks];
      newArray[elementsIndex].description = desc1;
      return {
        ...state,
        tasks: newArray,
        
      };
    case "deletetask":
      return {
        ...state,
        tasks: state.tasks.filter((element) => element.id !== id),
      };
    
      case "show":
      return {
        ...state,
        tasktoedit: state.tasks.filter((element) => element.id === id1),
      };
    default:
      return state;
  }
};
export default reducer;
