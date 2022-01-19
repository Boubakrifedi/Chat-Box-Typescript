import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}
body {
  background-color: #abd9e9;
  font-family: Arial;
}

h2,
h3 {
  margin: 0;
}

.green {
  background-color: #58b666;
}
.orange {
  background-color: #ff725d;
}
.blue {
  background-color: #6fbced;
  margin-right: 0;
  margin-left: 7px;
}

`;

export default GlobalStyle;
