import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto&display=swap');

  body {
    background: #e9ecef;
    font-family: 'Noto Sans KR', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

function App(): React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>Hello World !</TodoTemplate>
    </>
  );
}

export default App;
