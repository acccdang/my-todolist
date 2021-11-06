import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: auto;
  height: auto;
  margin: 0;
  border: 0px;
  outline: none;
  cursor: pointer;
`;

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
function Button({ className, children, onClick }: ButtonProps): React.ReactElement {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
export default styled(Button)``;
