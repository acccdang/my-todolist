import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const StyledTodoList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 1.1rem;

  overflow-y: overlay;
`;

const EmptyMessage = styled.h1`
  justify-self: center;
  margin: auto;
  color: darkgrey;
`;

export default function TodoList(): React.ReactElement {
  const todos = useTodoState();

  return (
    <StyledTodoList>
      {!todos.length && <EmptyMessage>등록된 할 일이 없습니다.</EmptyMessage>}
      {todos.length > 0 && todos.map((todo) => <TodoItem key={todo.id} id={todo.id} title={todo.title} />)}
    </StyledTodoList>
  );
}
