import { boolColor } from "../../utils/chat-utils";
import "./index.css";
const MessageItem = ({ from, date, name, message }: MessageItemProps) => (
  <li className={from}>
    <div className="entete">
      <h3>{date}</h3>
      <h2>{name}</h2>
      <span className={`status ${boolColor(from)}`}></span>
    </div>
    <div className="triangle"></div>
    <div className="message">{message}</div>
  </li>
);
MessageItem.defaultProps = {
  from: "you",
};

export default MessageItem;
