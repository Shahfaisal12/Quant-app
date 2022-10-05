import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "../layout/Base";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Why from "../pages/Why/Why";
// import Menu from "../pages/Why/Menu";

const Routs = () => {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/why" element={<Why />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
};

export default Routs;
