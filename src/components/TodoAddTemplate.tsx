import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../TodoContext";
import TodoInput from "./TextInput";

const StyledTodoAddTemplate = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 460px;
  height: 80vh;
  padding: 20px;
  border-radius: 16px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const AddButton = styled.button`
  justify-self: flex-end;
  margin-top: auto;
  height: 2.5rem;
  border: 0;
  border-radius: 14px;
  background-color: lightskyblue;
  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); // easeOutExpo

  &:hover {
    transform: scale(102%);
  }
  &:active {
    transform: scale(101%);
  }
`;

interface TodoAddTemplateProps {
  className: string;
  visible: boolean;
  closeAddPopup: () => void;
}
function TodoAddTemplateComponent({ className, visible, closeAddPopup }: TodoAddTemplateProps): React.ReactElement {
  const todoDispatch = useTodoDispatch();

  const todoInputRef = useRef<HTMLInputElement>(null);

  const onAddTodo = () => {
    if (todoInputRef.current) {
      if (!todoInputRef.current.value) {
        alert("제목을 입력하세요 !");
        todoInputRef.current.focus();
        return;
      }

      todoDispatch({ type: "CREATE", title: todoInputRef.current.value });

      // 후처리
      todoInputRef.current.value = "";
      closeAddPopup();
    }
  };

  useEffect(() => {
    if (visible) {
      todoInputRef.current?.focus();
    }
  }, [visible]);

  return (
    <StyledTodoAddTemplate className={className}>
      <h2>할 일 등록하기</h2>
      <TodoInput ref={todoInputRef} />
      <AddButton onClick={onAddTodo}>등록</AddButton>
    </StyledTodoAddTemplate>
  );
}

const TodoAddTemplate = styled(TodoAddTemplateComponent)`
  .test-class {
    background-color: yellow;
  }
`;
export default TodoAddTemplate;
