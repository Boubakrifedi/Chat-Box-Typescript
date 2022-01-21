import { User } from "./types";

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

const isCUrrentUser = (currentId: string, id: string | undefined) =>
  id === currentId ? "me" : "you";
export { boolColor, isCUrrentUser };
