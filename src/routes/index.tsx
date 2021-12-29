import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portifolio from "../pages/Portfolio";

const RoutesFunction: React.FC = () => (
    <Routes>
        <Route path="/vasconcelosdev/" element={<Home />} />
        <Route path="/vasconcelosdev/sobre" element={<About />} />
        <Route path="/vasconcelosdev/servicos" element={<Services />} />
        <Route path="/vasconcelosdev/portifolio" element={<Portifolio />} />
    </Routes >
)

export default RoutesFunction;