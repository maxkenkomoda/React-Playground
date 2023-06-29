import React from "react";
import { createRoot } from "react-dom/client";
import { Container } from "./components/Container";

const rootElement = document.getElementById("root");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
