import { MessagesState } from "../containers/MessagesContainer/types";

interface Action {
  type: string;
  payload?: any;
}

interface GlobalState {
  messagesState: MessagesState;
}

interface Message {
  user: User;
  date: string;
  order: number;
  message: string;
  docId?: string;
}

interface User {
  userID: string | undefined;
  name: string | undefined;
}

interface ValuesType {
  username?: string;
  email: string;
  password: string;
}

export { Action, GlobalState, Message, User, ValuesType };
