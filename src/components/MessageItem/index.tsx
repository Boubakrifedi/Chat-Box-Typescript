import { boolColor } from "../../utils/chat-utils";
import {
  Date,
  Entete,
  From,
  Message,
  MessageItemWrapper,
  Name,
  Triangle,
} from "./MessageItemWrapper";
import styled from "styled-components";

const MessageItem = ({ from, date, name, message }: MessageItemProps) => (
  // <MessageItemWrapper className={from} from={from}>
  <MessageItemWrapper className={from} from={from}>
    <Entete className="entete" from={from}>
      <Date>{date}</Date>
      <Name>{name}</Name>
      <From className={`status ${boolColor(from)}`}></From>
    </Entete>
    <Triangle className="triangle"></Triangle>
    <Message className="message" from={from}>
      {message}
    </Message>
  </MessageItemWrapper>
);
MessageItem.defaultProps = {
  from: "you",
};

export default MessageItem;
