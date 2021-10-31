import React, { useMemo } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: React.ReactNode;
  elementId: string;
}
export default function Portal({ children, elementId }: PortalProps): React.ReactElement {
  const createNewRoot = () => {
    const createdTarget = document.createElement("div");
    createdTarget.id = elementId;
    return createdTarget;
  };

  const rootElement = useMemo(() => document.getElementById(elementId), [elementId]);
  return createPortal(children, rootElement || createNewRoot());
}
