import { ActionTypes } from "./constants";
import { Message } from "../../utils/types"

const setMessages = (payload:Message[]) => {
  return {
    type: ActionTypes.SET_MESSAGES,
    payload,
  };
};

export { setMessages };
