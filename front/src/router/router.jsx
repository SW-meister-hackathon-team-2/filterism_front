import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
