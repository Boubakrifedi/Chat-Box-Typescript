import { createSelector } from "reselect";
import { Message, GlobalState, User } from "../../utils/types";
import { AppState } from "./types";

const selectFromAppDomain = (globalState: GlobalState): AppState =>
  globalState.appState;

const makeSelectUser = () =>
  createSelector(
    selectFromAppDomain,
    (appState: AppState): User | null => appState.user
  );

export { makeSelectUser };
