import React, { useContext } from "react";
import ReactSwitch from "react-switch";

import { ThemeContext } from "styled-components";

import { Link } from "react-router-dom";

import data from "./data";

import { Container, Content, Logo } from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
    toggleTheme(): void;
}

export const Sidebar: React.FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext)

    return (
        <>
            <Container>
                <Content className="active">
                    <Link to='/vasconcelosdev/'>
                        <Logo>
                            <div className="topLine" />
                            <h1 className="logoName">VASCONCELOS</h1>
                            <div className="bottomLine"></div>
                        </Logo>
                    </Link>
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
                    <ReactSwitch
                        className="switch"
                        checked={title === 'dark'}
                        onChange={toggleTheme}
                        checkedIcon={
                            <div
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#FFB100",
                                }}
                            >
                                <FaSun style={{}} />
                            </div>
                        }
                        uncheckedIcon={
                            <div
                                style={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#FFEBC6",
                                }}
                            >
                                <FaMoon style={{}} />
                            </div>
                        }
                        offColor="#0C1B33"
                        onColor="#0C1B33"
                    />

                    <span className="copyright">© 2021 Jean Vasconcelos</span>
                </Content>
            </Container>
        </>
    )
};
