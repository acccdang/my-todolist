import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import AddTodoButton from "./AddTodoButton";

type TodoTemplateProps = {
  children?: React.ReactNode;
};

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

export default function TodoTemplate({ children }: TodoTemplateProps): React.ReactElement {
  const templateRef = useRef<HTMLDivElement>(null);

  const clickCallback = (ev: MouseEvent) => {
    // bubbling
    const eventTargetClassNames = [...(ev.target as HTMLElement).className.split(" ")];
    const found = eventTargetClassNames.find((className) => className === "add-button");

    if (found) alert("click !");
  };
  useEffect(() => {
    const { current: templateCurrent } = templateRef;
    templateCurrent?.addEventListener("click", clickCallback);

    return () => {
      const { current: templateCurrent } = templateRef;
      templateCurrent?.removeEventListener("click", clickCallback);
    };
  }, []);

  return (
    <StyledTodoTemplate ref={templateRef}>
      <>
        {children}
        <AddTodoButton className="add-button">추가</AddTodoButton>
      </>
    </StyledTodoTemplate>
  );
}
