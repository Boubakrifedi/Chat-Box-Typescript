import styled from "styled-components";

const CustomInputWrapper = styled.textarea`
  resize: none;
  border: none;
  display: block;
  width: 100%;
  height: 80px;
  border-radius: 3px;
  padding: 20px;
  font-size: 13px;
  margin-bottom: 13px;

  &::placeholder {
    color: #ddd;
  }
`;

export { CustomInputWrapper };
