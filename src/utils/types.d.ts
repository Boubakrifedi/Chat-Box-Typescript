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

export { Action, GlobalState, Message, User };
