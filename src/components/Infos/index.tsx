import React from "react";
import { Container, Content, Information, Texts, Title } from "./styles";

type Props = {
    data: {
        title: string,
        container: {
            item?: string,
            description: string | JSX.Element,
        }[]
    }[]
}

const Infos = ({ data }: Props) => {
    return (
        <Container>
            <Content>
                {data.map((data) => {
                    return (
                        <Container>
                            <Content>
                                <Title>
                                    {data.title}
                                    <div className="horizontalLine" />
                                </Title>
                                <Information>
                                    <div>
                                        {data.container.slice(0, Math.ceil(data.container.length / 2)).map((container) => {
                                            return (
                                                <Texts>
                                                    {(container.item)
                                                        ?
                                                        <span className="item" >
                                                            {container.item}{": "}
                                                        </span>
                                                        :
                                                        <></>
                                                    }
                                                    <span className="description">
                                                        {container.description}
                                                    </span>
                                                </Texts>
                                            )
                                        })}
                                    </div>
                                    <div className="verticalLine" />
                                    <div>
                                        {data.container.slice(Math.ceil(data.container.length / 2), data.container.length).map((container) => {
                                            return (
                                                <Texts>
                                                    {(container.item)
                                                        ?
                                                        <span className="item" >
                                                            {container.item}{": "}
                                                        </span>
                                                        :
                                                        <></>
                                                    }
                                                    <span className="description">
                                                        {container.description}
                                                    </span>
                                                </Texts>
                                            )
                                        })}
                                    </div>
                                </Information>
                            </Content>
                        </Container>
                    )
                })}
            </Content>
        </Container>
    )
}

export default Infos;