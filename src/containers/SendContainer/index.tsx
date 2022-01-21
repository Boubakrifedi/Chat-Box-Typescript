import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { firebaseService } from "../../services/firebaseService";
import { collections } from "../../utils/constants";
import { createStructuredSelector } from "reselect";
import { makeSelectLastIndex } from "../MessagesContainer/selectors";
import { useSelector } from "react-redux";

import { Message } from "../../utils/types";
import { SendContainerWrapper } from "./SendContainerWrapper";
import { makeSelectUser } from "../App/selectors";

const messagesState = createStructuredSelector({
  lastIndex: makeSelectLastIndex(),
  user: makeSelectUser(),
});
const SendContainer = () => {
  const { create } = firebaseService(collections.chat);
  const { lastIndex, user } = useSelector(messagesState);
  const [message, setMessage] = useState<string>("");
  const handleClick = (e: any) => {
    if (!message || !user || (e.charCode !== 13 && e.type === "keypress"))
      return;

    const data: Message = {
      user: { ...user },
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
