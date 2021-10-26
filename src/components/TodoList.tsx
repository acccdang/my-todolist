import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const StyledTodoList = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: overlay;
`;

export default function TodoList(): React.ReactElement {
  return (
    <StyledTodoList>
      <TodoItem />
    </StyledTodoList>
  );
}
