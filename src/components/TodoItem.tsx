import React from "react";
import styled from "styled-components";

const StyledTodoItem = styled.div`
  display: flex;
`;

export default function TodoItem(): React.ReactElement {
  return (
    <StyledTodoItem>
      <h3>hello world</h3>
    </StyledTodoItem>
  );
}
