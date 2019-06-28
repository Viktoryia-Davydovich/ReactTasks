import { SET_TAB } from "./types";

export const changeTab = index => {
  return { type: SET_TAB, index };
};
