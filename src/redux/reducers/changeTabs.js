import types from "./../actionTypes";
function changeTabs(state = "All", action) {
  switch (action.type) {
    case types.ACTIVE:
      return "Active";
    case types.COMPLETED:
      return "Completed";
    case types.ALL:
      return "All";
    default:
      return state;
  }
}
export default changeTabs;
