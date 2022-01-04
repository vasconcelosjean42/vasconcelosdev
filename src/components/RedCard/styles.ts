import styled from "styled-components";

export const Container = styled.div`
    max-width: 300px;
    max-height: 300px;
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme.colors.sidebar};
    box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.61);
    transition: 0.2s;
    &:hover{
        box-shadow: 0px 13px 12px -10px rgba(0,0,0,0.61);
    }
`;

export const Title = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.sidebar};
    .icon {
        font-size: 3rem;
    }
    .title {
        font-weight: 700;
        font-size: 1.2rem;
    }
`;

export const Description = styled.div`
    margin-bottom: 90px;
    margin-top: 60px;
    text-align: center;
`;
