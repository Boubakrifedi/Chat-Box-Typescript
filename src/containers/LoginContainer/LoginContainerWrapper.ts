import styled from "styled-components";

export const LoginContainerWrapper = styled.div`
  width: 42%;
  padding: 20px;
  background-color: #eff3f7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
  }

  form input {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    outline-color: #abd9e9;
    padding: 5px;
  }

  form .errors {
    font-size: 12px;
    color: #d8000c;
    margin-bottom: 1px;
  }

  #agreement {
    font-size: 12px;
    margin: 20px 0px;
  }

  button {
    margin-top: 10px;
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    color: #6fbced;
    cursor: pointer;
    margin-bottom: 20px;
    align-self: flex-end;
  }

  button:hover {
    transform: scale(1.2);
    color: #ddd;
  }

  a {
    font-weight: 300;
    color: #000;
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    align-self: flex-start;
  }

  a:hover {
    font-weight: 600;
    color: red;
  }
`;
