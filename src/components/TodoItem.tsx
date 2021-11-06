import React from "react";
import styled from "styled-components";
import { Button } from "./commons";
import { useTodoDispatch } from "../TodoContext";

const StyledTodoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 1.2rem;
  border: 3px solid #dddddd;
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); // easeOutExpo

  &:hover {
    transform: scale(103%);
  }
`;

const DeleteButton = styled(Button)`
  height: 30px;
  line-height: 28px;
  background-color: pink;
  color: #ffffffc0;
  border-radius: 10px;
  font-size: 12px;

  &:hover {
    background-color: lightpink;
    transform: scale(110%);
  }
  &:active {
    background-color: darkred;
    transform: scale(95%);
  }

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); // easeOutExpo
`;

interface TodoItemProps {
  id: number;
  title: string;
}

export default function TodoItem({ id, title }: TodoItemProps): React.ReactElement {
  const dispatch = useTodoDispatch();
  const onDeleteTodo = () => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <StyledTodoItem>
      <h3>{title}</h3>
      <DeleteButton onClick={onDeleteTodo}>삭제</DeleteButton>
    </StyledTodoItem>
  );
}
