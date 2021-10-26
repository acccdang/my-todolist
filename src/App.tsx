import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import AddTodoButton from "./components/AddTodoButton";

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
      <TodoTemplate>
        <TodoHeader>
          <TodoInput />
        </TodoHeader>
        <TodoList />
        <AddTodoButton>추가</AddTodoButton>
      </TodoTemplate>
    </>
  );
}

export default App;
