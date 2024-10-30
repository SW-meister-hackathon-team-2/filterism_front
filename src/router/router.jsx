import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import Filter from "../components/filter/filter";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/filter" element={<Filter/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
