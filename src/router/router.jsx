import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import Filter from "../components/filter/filter";
import Cookie from "../components/Cookie/Cookie";
import Type from "../components/type/type";
import Filterpkonm from "../components/filter/filterpkonm";
import Filterja5te from "../components/filter/filterja5te";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/filter" element={<Filter />}></Route>
        <Route path="/set-cookie" element={<Cookie />}></Route>
        <Route path="/type" element={<Type />}></Route>
        <Route path="/filter_pkonm" element={<Filterpkonm/>}></Route>
        <Route path="/filter_ja5te" element={<Filterja5te/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
