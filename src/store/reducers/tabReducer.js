import { SET_TAB } from "../actions/types";

export default function actTab(state = 0, action = {}) {
  switch (action.type) {
    case SET_TAB:
      return action.index;
    default:
      return state;
  }
}
