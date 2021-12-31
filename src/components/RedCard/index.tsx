import { Container, Description, Title } from "./styles";

type Props = {
    data: {
        icon: JSX.Element,
        title: string,
        description: string,
    }
}

export const RedCard = ({ data }: Props) => {
    return (
        <Container>
            <Title>
                <div className="icon">
                    {data.icon}
                </div>
                <div className="title">
                    {data.title}
                </div>
            </Title>
            <Description>
                {data.description}
            </Description>
        </Container>
    )
}