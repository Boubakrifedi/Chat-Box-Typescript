import { User } from "../../utils/types";
import { ActionTypes } from "./constants";

const setUserData = (payload: User) => {
  return {
    type: ActionTypes.CREATE_USER_DATA,
    payload,
  };
};
const clearUserData = () => {
  return { type: ActionTypes.CLEAR_USER_DATA };
};

export { setUserData, clearUserData };
