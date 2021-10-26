import React from "react";
import styled from "styled-components";

type TodoHeaderProps = {
  children?: React.ReactNode;
};

const StyledTodoHeader = styled.div`
  padding: 1.5rem;
`;

export default function TodoHeader({ children }: TodoHeaderProps): React.ReactElement {
  return <StyledTodoHeader>{children}</StyledTodoHeader>;
}
