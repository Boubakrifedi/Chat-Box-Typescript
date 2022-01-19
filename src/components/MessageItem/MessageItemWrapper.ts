import styled from "styled-components";

export const MessageItemWrapper = styled.li<MessageItemWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.from === "me" ? "flex-end" : "flex-start")};
  padding: 10px 30px;
  text-align: ${(props) => (props.from === "me" ? "right" : "left")};
`;

export const Entete = styled.div<MessageItemWrapperProps>`
  margin-bottom: 5px;
  display: ${(props) => (props.from === "you" ? "flex" : "block")};
  flex-direction: ${(props) => (props.from === "you" ? "row-reverse" : "row")};
  align-items: ${(props) => (props.from === "you" ? "center" : "flex-start")};
  gap: ${(props) => (props.from === "you" ? "5px" : "0")};
`;

export const Date = styled.h3`
  margin-right: 10px !important;
  color: #bbb;
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
`;

export const Name = styled.h2`
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
`;

export const From = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
`;

export const Triangle = styled.div`
  margin: 0 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
`;

export const Message = styled.div<any>`
  padding: 10px;
  color: #fff;
  line-height: 25px;
  max-width: 90%;
  display: inline-block;
  text-align: left;
  border-radius: 5px;
  background-color: ${({ from }) => (from === "you" ? "#58b666" : "#6fbced")};
`;
