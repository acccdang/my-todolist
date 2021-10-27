import React, { useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

const StyledAddTodoButton = styled.button`
  position: absolute;
  bottom: -2rem;

  border: none;
  border-radius: 100%;
  width: 75px;
  height: 75px;
  background-color: lightskyblue;
  font-size: 1.2rem;
  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); // easeOutExpo

  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.1);
  }
`;

interface AddTodoButtonProps {
  children?: React.ReactNode;
  showAddPopup: () => void;
}

export default function AddTodoButton({ children, showAddPopup }: AddTodoButtonProps): React.ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClick = useCallback(
    (ev: MouseEvent) => {
      showAddPopup();
    },
    [showAddPopup],
  );

  useEffect(() => {
    const { current: buttonRefCurrent } = buttonRef;
    buttonRefCurrent?.addEventListener("click", onClick);

    return () => {
      const { current: buttonRefCurrent } = buttonRef;
      buttonRefCurrent?.removeEventListener("click", onClick);
    };
  }, [onClick]);

  return <StyledAddTodoButton ref={buttonRef}>{children}</StyledAddTodoButton>;
}
