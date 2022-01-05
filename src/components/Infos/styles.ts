import styled from "styled-components";

export const Container = styled.div`

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 0;
`;

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    transition: 0.2s;
    &:hover{
        margin-left: 5px;
    }

    .horizontalLine{
        height: 1px;
        background: ${props => props.theme.colors.text};
        opacity: 0.1;
        margin: 5px 0;
    }

`;

export const Information = styled.div`
    display: flex;
    @media (max-width: 595px){
        flex-direction: column;
        .item{
            width: 100px;
        }
    }
    .verticalLine{
        width: 1px;
        background: ${props => props.theme.colors.text};
        opacity: 0.1;
        margin: 0 15px;
    }
`;

export const Texts = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    .item{
        font-weight: 700;
    }
    .description{
        margin-left: 7px;
        transition: 0.2s;
        &:hover{
         margin-left: 10px;
        }
    }
`;