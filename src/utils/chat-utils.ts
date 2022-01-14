import { currentUser } from "../variables";

const boolColor = (from: string): string => {
  switch (from) {
    case "me":
      return "blue";

    case "you":
      return "green";

    default:
      return "";
  }
};

const isCUrrentUser = (id: string | undefined) =>
  id === currentUser.userID ? "me" : "you";
export { boolColor, isCUrrentUser };
