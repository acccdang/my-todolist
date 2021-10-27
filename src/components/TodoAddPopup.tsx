import React, { useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import TodoAdditionTemplate from "./TodoAdditionTemplate";

interface StyledTodoAddPopupProps {
  visible: boolean;
}
const StyledTodoAddPopup = styled.div`
  pointer-events: ${({ visible }: StyledTodoAddPopupProps) => (visible ? "auto" : "none")};
  opacity: ${({ visible }: StyledTodoAddPopupProps) => (visible ? 1 : 0)};
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;

  transition: opacity 0.3s;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

interface TodoAddPopupProps {
  visible: boolean;
  hideAddPopup: () => void;
}

export default function TodoAddPopup({ visible, hideAddPopup }: TodoAddPopupProps): React.ReactElement {
  const addPopupRef = useRef<HTMLDivElement>(null);

  const onClick = useCallback((ev: MouseEvent) => hideAddPopup(), [hideAddPopup]);

  useEffect(() => {
    const { current: addPopupRefCurrent } = addPopupRef;
    addPopupRefCurrent?.addEventListener("click", onClick);

    return () => {
      const { current: addPopupRefCurrent } = addPopupRef;
      addPopupRefCurrent?.removeEventListener("click", onClick);
    };
  }, [onClick]);

  return (
    <StyledTodoAddPopup ref={addPopupRef} visible={visible}>
      <Overlay />
      <TodoAdditionTemplate />
    </StyledTodoAddPopup>
  );
}
