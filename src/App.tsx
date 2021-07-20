import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto&display=swap');
body {
  background: #e9ecef;
  font-family: 'Noto Sans KR', sans-serif;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">hello world !</div>
    </>
  );
}

export default App;
