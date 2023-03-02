import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOMClient.createRoot(document.getElementById("root")!);
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap');

  html, 
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
  }
`;

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

export type AppDispatch = typeof store.dispatch;
