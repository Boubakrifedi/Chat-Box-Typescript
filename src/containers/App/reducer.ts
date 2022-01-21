import { Action } from "../../utils/types";
import { ActionTypes } from "./constants";
import { AppState } from "./types";
const initialState: AppState = { user: null };
const appReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CREATE_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.CLEAR_USER_DATA:
      return { ...state, user: null };

    default:
      return state;
  }
};

export default appReducer;
