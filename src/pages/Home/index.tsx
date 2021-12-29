import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import Profile from "../../assets/profile.png";

import { Container, Content, Image, Text } from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <Content>
                <Text>
                    <div className="topText">
                        <span>Eu sou <span>Jean Vasconcelos</span></span>
                    </div>
                    <div className="bottomText">
                        <div >

                        </div>
                        <span>Desenvolvedor Full Stack</span>
                    </div>
                </Text>
                <Image>
                    <div className="icons">
                        <a href="https://www.instagram.com/jean_vassconcelos/" target="_blank" rel="noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="https://twitter.com/Jean_Vasc" target="_blank" rel="noreferrer">
                            <FaTwitter className="icon" />
                        </a>
                        <a href="https://github.com/vasconcelosjean42" target="_blank" rel="noreferrer">
                            <FaGithub className="icon" />
                        </a>
                    </div>
                    <img src={Profile} alt="profile" />
                </Image>
            </Content>
        </Container>
    )
}

export default Home;