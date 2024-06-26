import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import AuthProvider from "./contexts/userContext";
import RequireAuth from "./routes/RequireAuth";
import CategoryProvider from "./contexts/categoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <BrowserRouter>
    <AuthProvider>
      <CategoryProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <RequireAuth redirectTo={"/login"}>
                <App />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </CategoryProvider>
    </AuthProvider>
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
