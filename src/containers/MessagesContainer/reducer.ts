import { ActionTypes } from "./constants";
import { MessagesState } from "./types";
import { Action } from "../../utils/types";

// //  initialiser notre state
const initialState : MessagesState = {
  messages: [],
  lastIndex: 0,
};

const messagesReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case ActionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        lastIndex:
          action.payload && action.payload.length > 0
            ? action.payload.length
            : 0,
      };

    default:
      return state;
  }
};

export default messagesReducer;
