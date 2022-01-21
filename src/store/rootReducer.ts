import { combineReducers } from "redux";
import appReducer from "../containers/App/reducer";
import messagesReducer from "../containers/MessagesContainer/reducer";

export default combineReducers({
  messagesState: messagesReducer,
  appState: appReducer,
});
