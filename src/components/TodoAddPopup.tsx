import React from "react";
import styled, { css } from "styled-components";
import Portal from "./Portal";
import TodoAddTemplate from "./TodoAddTemplate";

interface StyledTodoAddPopupProps {
  visible: boolean;
}
const StyledTodoAddPopup = styled.div`
  ${({ visible }: StyledTodoAddPopupProps) => {
    return css`
      display: ${visible ? "flex" : "none"};
    `;
  }};

  position: fixed;
  justify-content: center;
  align-items: center;

  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  transition: opacity 0.3s;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1;
`;

interface TodoAddPopupProps {
  className?: string;
  visible: boolean;
  closeAddPopup: () => void;
}

function TodoAddPopup({ className, visible, closeAddPopup }: TodoAddPopupProps): React.ReactElement {
  const onDimmedClick = (ev: React.MouseEvent) => {
    if (ev.target === ev.currentTarget) {
      closeAddPopup();
    }
  };

  return (
    <Portal elementId="add-popup-root">
      <StyledTodoAddPopup className={className} visible={visible}>
        <TodoAddTemplate className={visible ? "AddPopup-show" : "AddPopup-hide"} />
        <Overlay onClick={onDimmedClick} />
      </StyledTodoAddPopup>
    </Portal>
  );
}

const TodoAddPopupComponent = styled(TodoAddPopup)`
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slideOutToBottom {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }
  .AddPopup-show {
    animation-name: slideInFromBottom;
    animation-duration: 0.3s;
  }
  .AddPopup-hide {
    animation-name: slideOutToBottom;
    animation-duration: 0.3s;
  }
`;

export default TodoAddPopupComponent;
