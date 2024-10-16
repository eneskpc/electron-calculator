import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css/normalize.css";
import "./global.scss";
import { StackProvider } from "./store/StackContext/Provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StackProvider>
      <App />
    </StackProvider>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
