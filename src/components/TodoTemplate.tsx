import React from "react";
import styled from "styled-components";

type TodoTemplateProps = {
  children?: React.ReactNode;
};

const StyledTodoTemplate = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60vh;
  height: 80vh;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 10vh auto; /* 페이지 중앙에 나타나도록 설정 */
`;

export default function TodoTemplate({ children }: TodoTemplateProps): React.ReactElement {
  return <StyledTodoTemplate>{children}</StyledTodoTemplate>;
}
