import React from "react";
import Infos from "../../components/Infos";
import data from "./data";
import { Container } from "./styles";

export const About: React.FC = () => {
    return (
        <Container>
            <h1>Sobre</h1>
            <Infos data={data} />
        </Container>
    )
}

export default About;