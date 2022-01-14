import { createSelector } from "reselect";
import { Message, GlobalState } from "../../utils/types";
import { MessagesState } from "./types";

const selectFromMessagesStateDomain = (
  globalState: GlobalState
): MessagesState => globalState.messagesState;

const makeSelectMessagesData = () =>
  createSelector(
    selectFromMessagesStateDomain,
    (messagesState: MessagesState):Message[] => messagesState.messages
  );

const makeSelectLastIndex = () =>
  createSelector(
    selectFromMessagesStateDomain,
    (messagesState: MessagesState): number => messagesState.lastIndex
  );

export { makeSelectMessagesData, makeSelectLastIndex };
