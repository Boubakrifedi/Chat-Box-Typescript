import styled from "styled-components";

export const MessageContainerWrapper = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  overflow-y: scroll;
  height: 60vh;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;

  .you .triangle {
    border-color: transparent transparent #58b666 transparent;
  }
  .me .triangle {
    border-color: transparent transparent #6fbced transparent;
  }
`;
