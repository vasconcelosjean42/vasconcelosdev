import React from "react";
import { RedCard } from "../../components/RedCard";
import { Container, Content } from "./styles";
import data from "./data";

export const Services: React.FC = () => {
    return (
        <Container>
            <h1>Serviços</h1>
            <Content>
                <div className="left">
                    {data.slice(0, Math.ceil(data.length / 2)).map((data) => {
                        return (
                            <RedCard data={data} />
                        )
                    })}
                </div>
                <div className="rigth">
                    {data.slice(Math.ceil(data.length / 2), data.length).map((data) => {
                        return (
                            <RedCard data={data} />
                        )
                    })}
                </div>
            </Content>
        </Container>
    )
}

export default Services;