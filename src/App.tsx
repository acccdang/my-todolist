import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}`;

function App() {
  return <div className="App">hello world !</div>;
}

export default App;
