import React from "react";
import styled from "styled-components";
import TodoAdditionTemplate from "./TodoAdditionTemplate";

const StyledTodoAddPopup = styled.div`
  display: ${({ visible }: TodoAddPopupProps) => (visible ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

type TodoAddPopupProps = {
  visible: boolean;
};

export default function TodoAddPopup({ visible }: TodoAddPopupProps): React.ReactElement {
  return (
    <StyledTodoAddPopup visible={visible}>
      <Overlay />
      <TodoAdditionTemplate />
    </StyledTodoAddPopup>
  );
}
