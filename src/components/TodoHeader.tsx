import React from "react";
import styled from "styled-components";

const StyledTodoHeader = styled.div`
  padding: 1.5rem;
`;

interface TodoHeaderProps {
  children?: React.ReactNode;
}
export default function TodoHeader({ children }: TodoHeaderProps): React.ReactElement {
  return <StyledTodoHeader>{children}</StyledTodoHeader>;
}
