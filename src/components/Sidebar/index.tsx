import { Link } from "react-router-dom";

import data from "./data";

import { Container, Content, Logo } from "./styles";

export const Sidebar = () => {
    return (
        <Container>
            <Content>
                <Link to='/vasconcelosdev/'>
                    <Logo>
                        <div className="topLine" />
                        <h1>VASCONCELOS</h1>
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
                <span className="copyright">© 2021 Jean Vasconcelos</span>
            </Content>
        </Container>
    )
};
