import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const StyledTodoList = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.1rem;

  overflow-y: overlay;
`;

export default function TodoList(): React.ReactElement {
  return (
    <StyledTodoList>
      <TodoItem title="첫 번째 투두리스트" />
    </StyledTodoList>
  );
}
