import { combineReducers } from "redux";
import messagesReducer from "../containers/MessagesContainer/reducer";

export default combineReducers({
  messagesState: messagesReducer,
});
