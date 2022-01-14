import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import MessageItem from "../../components/MessageItem";
import { firebaseService } from "../../services/firebaseService";
import { isCUrrentUser } from "../../utils/chat-utils";
import { setMessages } from "./actions";
import { makeSelectMessagesData } from "./selectors";
import { collections } from "../../utils/constants";

import { Message } from "../../utils/types";

const messagesState = createStructuredSelector({
  messages: makeSelectMessagesData(),
});

const MessagesContainer = () => {
  const { messages } = useSelector(messagesState);

  const dispatch = useDispatch();
  const { getAll } = firebaseService(collections.chat);

  // Ref
  const messageEndRef = useRef<any>(null);

  const onDataChange = (items: any) => {
    let messages: Message[] = [];

    items.docs.forEach((item: any) => {
      let id = item.id;
      let data = item.data();
      const newItem = { ...data, docId: id };
      messages.push({
        ...newItem,
      });
    });

    dispatch(setMessages(messages));
  };
  useEffect(() => {
    getAll().orderBy("order", "asc").onSnapshot(onDataChange);
  }, []);

  // UseEffect for scrolling
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ul id="chat">
      {console.log('test', messages)}
      {messages &&
        messages.length > 0 &&
        messages.map((item: Message, index: number) => {
          const messageProps = {
            ...item,
            from: isCUrrentUser(item.user.userID),
          };
          return (
            <MessageItem key={index} {...messageProps} name={item.user.name} />
          );
        })}
      <div ref={messageEndRef} />
    </ul>
  );
};

export default MessagesContainer;
