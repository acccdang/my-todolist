import React from "react";
import styled from "styled-components";

const StyledTodoAddTemplate = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 40vw;
  height: 80vh;
  border-radius: 16px;
  z-index: 1;
`;

interface TodoAddTemplateProps {
  className: string;
}
function TodoAddTemplateComponent({ className }: TodoAddTemplateProps): React.ReactElement {
  return (
    <StyledTodoAddTemplate className={className}>
      <></>
    </StyledTodoAddTemplate>
  );
}

const TodoAddTemplate = styled(TodoAddTemplateComponent)`
  .test-class {
    background-color: yellow;
  }
`;
export default TodoAddTemplate;
