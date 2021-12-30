import React from "react";
import Card from "../../components/Card";
import Infos from "../../components/Infos";
import Stars from "../../components/Stars";
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