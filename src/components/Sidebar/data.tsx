import React from "react";

import {
    FaHome,
    FaUserAlt,
    FaSuitcase,
    FaBars
} from "react-icons/fa";

const data = [
    {
        title: 'Home',
        path: '/vasconcelosdev/',
        icon: <FaHome />,
    },
    {
        title: 'Sobre',
        path: '/vasconcelosdev/sobre/',
        icon: <FaUserAlt />,
    },
    {
        title: 'Serviços',
        path: '/vasconcelosdev/servicos/',
        icon: <FaSuitcase />,
    },
    {
        title: 'Portifólio',
        path: '/vasconcelosdev/portifolio/',
        icon: <FaBars />,
    },
]

export default data;