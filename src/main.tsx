import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});

const { app, BrowserWindow, globalShortcut } = require("electron");

app.on("ready", () => {
  const mainWindow = new BrowserWindow();
  mainWindow.loadURL("yourappurl");

  // Open developer tools
  globalShortcut.register("CommandOrControl+Shift+I", () => {
    mainWindow.webContents.openDevTools();
  });
});
