import React from "react";
import { createRoot, Root } from "react-dom/client";
import { App } from "./App";

const rootElement: HTMLElement | null = document.getElementById("root");
const root: Root = createRoot(rootElement as HTMLElement);

root.render(<App />);
