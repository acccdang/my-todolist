import React from "react";
import { createGlobalStyle } from "styled-components";

import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto&display=swap');

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
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
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
