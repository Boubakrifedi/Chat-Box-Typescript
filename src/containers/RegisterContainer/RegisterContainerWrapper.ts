import styled from "styled-components";

export const RegisterContainerWrapper = styled.div`
  width: 40%;
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
    margin-bottom: 20px;
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

  button {
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    color: #6fbced;
    cursor: pointer;
    align-self: flex-end;
  }

  button:hover {
    transform: scale(1.2);
    color: #ddd;
  }

  /*  #footer {
  display: flex;
  gap: 5px;
} */

  #agreement {
    font-size: 12px;
    margin: 20px 0px;
  }

  b {
    cursor: pointer;
    font-weight: 600;
    align-self: center;
  }

  b:hover {
    transform: scale(1.1);
  }

  a {
    color: #000;
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    align-self: flex-start;
  }

  a:hover {
    font-weight: 800;
    color: red;
  }
`;
