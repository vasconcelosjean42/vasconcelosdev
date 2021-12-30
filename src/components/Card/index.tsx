import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Container, Content, Data } from "./style";

type Props = {
    data: string,
    title: string,
    description: string,
}

const Card = ({ data, title, description }: Props) => {
    return (
        <Container>
            <Data>
                <FaCalendar />
                <span>{data}</span>
            </Data>
            <Content>
                <span className="title">{title}</span>
                <span className="description">{description}</span>
            </Content>
        </Container>
    )
}

export default Card;