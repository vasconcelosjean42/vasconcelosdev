import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { Container } from "./style";

type Props = {
    amount: number,
}

const Stars = ({ amount }: Props) => {
    const rows = [];
    const { colors } = useContext(ThemeContext);

    for (let i = 0; i < amount; i++) {
        rows.push(<FaStar className="icon" />)
    }
    for (let i = 0; i < 5 - amount; i++) {
        rows.push(<FaStar style={{ width: "1.1rem", color: colors.primary }} opacity={0.5} />)
    }

    return (
        <Container>
            {rows}
        </Container>
    )
}

export default Stars;