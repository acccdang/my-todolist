import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 1.1rem;

  overflow-y: overlay;
`;

export default function TodoList(): React.ReactElement {
  const todos = useTodoState();

  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} />
      ))}
    </StyledTodoList>
  );
}
