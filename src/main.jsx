import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";
import NotesProvider from "./context/NotesContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
