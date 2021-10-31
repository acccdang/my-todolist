import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  width: 100%;
  outline: none;
  border: 0px;
  border-bottom: 2px solid lightgrey;
  padding: 0.6rem;
  color: lightgrey;
  font-size: 1.1rem;
  transition: all 0.3s;

  &:hover {
    border-bottom: 2px solid darkgrey;
    color: darkgrey;
  }
  &:focus {
    border-bottom: 2px solid darkgrey;
    color: #222222;
  }

  &::placeholder {
    color: lightgrey;
  }
`;

const TextInput = forwardRef<HTMLInputElement>((_, ref) => {
  return <StyledTextInput ref={ref} placeholder="제목을 입력하세요." />;
});
TextInput.displayName = "TextInput";

export default TextInput;
