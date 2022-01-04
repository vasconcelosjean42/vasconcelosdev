import styled from "styled-components";

export const Container = styled.div`
    .icon{
        width: 1.1rem;
        color: ${props => props.theme.colors.primary};
        &:hover{
            color: yellow;
        } 
    }
`;