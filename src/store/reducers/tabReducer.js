import { setTab } from "../actions/types";
import { handleActions } from "redux-actions";

const initialState = 0;

const tabReducer = handleActions(
  {
    [setTab]: (state, action) => action.payload.tab
  },
  initialState
);

export default tabReducer;
