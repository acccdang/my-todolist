import React from "react";
import styled from "styled-components";

const StyledTodoInput = styled.input`
  width: 100%;
  outline: none;
  border: 0px;
  border-bottom: 2px solid lightgrey;
  padding: 0.6rem;
  color: lightgrey;
  font-size: 1.1rem;
  transition: all 0.3s;

  &:hover,
  &:focus {
    border-bottom: 2px solid darkgrey;
    color: darkgrey;
  }
`;

export default function TodoInput(): React.ReactElement {
  return <StyledTodoInput />;
}
