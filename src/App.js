import "./App.css";
import React from "react";
import FirstPage from "./components/firstpage/FirstPage";
import DashBoard from "./components/dashboard/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
