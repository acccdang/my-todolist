import React from "react";
import styled from "styled-components";

const StyledAddTodoButton = styled.button`
  position: absolute;
  bottom: -2rem;

  border: none;
  border-radius: 100%;
  width: 75px;
  height: 75px;
  background-color: lightskyblue;
  font-size: 1.2rem;
  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); // easeOutExpo

  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.1);
  }
`;

type AddTodoButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function AddTodoButton({ children, ...rest }: AddTodoButtonProps): React.ReactElement {
  return <StyledAddTodoButton {...rest}>{children}</StyledAddTodoButton>;
}
