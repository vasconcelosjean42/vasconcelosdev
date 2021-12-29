import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import Home from "../pages/Home";
import { Portifolio } from "../pages/Portfolio";
import { Services } from "../pages/Services";

const RoutesFunction: React.FC = () => (
    <Routes>
        <Route path="/vasconcelosdev/" element={<Home />} />
        <Route path="/vasconcelosdev/sobre" element={<About />} />
    </Routes >
)

export default RoutesFunction;