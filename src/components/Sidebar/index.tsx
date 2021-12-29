import React from "react";
import { Link } from "react-router-dom";

import data from "./data";

import Logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

export const Sidebar = () => {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="Logo" />
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.path} className="nav-link">
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
                <span className="copyright">© 2021 Jean Vasconcelos</span>
            </Content>
        </Container>
    )
};
