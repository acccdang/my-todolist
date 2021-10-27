import React from "react";
import styled from "styled-components";

const StyledTodoItem = styled.div`
  display: flex;
  padding: 5px 1.2rem;
  border: 3px solid #dddddd;
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); // easeOutExpo

  &:hover {
    transform: scale(103%);
  }
`;

type TodoItemProps = {
  title: string;
};

export default function TodoItem({ title }: TodoItemProps): React.ReactElement {
  return (
    <StyledTodoItem>
      <h3>{title}</h3>
    </StyledTodoItem>
  );
}
