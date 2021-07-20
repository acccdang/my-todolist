import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle``;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">hello world !</div>
    </>
  );
}

export default App;
