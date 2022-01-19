import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { firebaseService } from "../../services/firebaseService";
import { currentUser } from "../../variables";
import { collections } from "../../utils/constants";
import { createStructuredSelector } from "reselect";
import { makeSelectLastIndex } from "../MessagesContainer/selectors";
import { useSelector } from "react-redux";

import { Message } from "../../utils/types";
import { SendContainerWrapper } from "./SendContainerWrapper";

const messagesState = createStructuredSelector({
  lastIndex: makeSelectLastIndex(),
});
const SendContainer = () => {
  const { create } = firebaseService(collections.chat);
  const { lastIndex } = useSelector(messagesState);
  const [message, setMessage] = useState<string>("");
  const handleClick = (e: any) => {
    if (
      !message ||
      !currentUser.name ||
      !currentUser.userID ||
      (e.charCode !== 13 && e.type === "keypress")
    )
      return;

    const data: Message = {
      user: { ...currentUser },
      date: new Date().toUTCString(),
      order: lastIndex + 1,
      message,
    };
    create(data).then((res) => {
      setMessage("");
    });
  };
  const handleChange = (value: string) => {
    setMessage(value);
  };
  return (
    <SendContainerWrapper>
      <CustomInput
        value={message}
        placeholder="Type your message"
        onChange={(e) => handleChange(e.target.value)}
        onKeyPress={handleClick}
      />
      <CustomButton text="Send" onClick={handleClick} />
    </SendContainerWrapper>
  );
};

export default SendContainer;
