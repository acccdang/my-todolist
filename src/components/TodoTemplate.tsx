import React, { useState } from "react";
import styled from "styled-components";
import { TodoProvider } from "../TodoContext";
import AddTodoButton from "./AddTodoButton";
import TodoAddPopup from "./TodoAddPopup";

const StyledTodoTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 60vh;
  height: 80vh;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 10vh auto; /* 페이지 중앙에 나타나도록 설정 */
`;

interface TodoTemplateProps {
  children?: React.ReactNode;
}

export default function TodoTemplate({ children }: TodoTemplateProps): React.ReactElement {
  const [addPopupVisible, setAddPopupVisible] = useState(false);

  const showAddPopup = () => setAddPopupVisible(true);
  const closeAddPopup = () => setAddPopupVisible(false);

  return (
    <TodoProvider>
      <StyledTodoTemplate>
        {children}
        <AddTodoButton showAddPopup={showAddPopup}>추가</AddTodoButton>
        <TodoAddPopup visible={addPopupVisible} closeAddPopup={closeAddPopup} />
      </StyledTodoTemplate>
    </TodoProvider>
  );
}
