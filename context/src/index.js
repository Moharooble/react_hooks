import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/TodoContext";
import { AuthContexProvider } from "./context/AuthContext";
import { PersonProvider } from "./context/PersonalinfoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PersonProvider>
  <AuthContexProvider>
    <ContextProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ContextProvider>
  </AuthContexProvider>
  </PersonProvider>
);
