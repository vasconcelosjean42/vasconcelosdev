import styled from "styled-components";

export const Container = styled.div`
    max-width: 300px;
    height: 300px;
    background: var(--sidebar);
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 0px 8px 12px -10px rgba(0,0,0,0.61);
    transition: 0.2s;
    &:hover{
        margin-top: -5px;
        box-shadow: 0px 13px 12px -10px rgba(0,0,0,0.61);
    }
`;
export const Data = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-left: 5px;
        font-size: 0.9rem;
        font-weight: 300;
    }
`;
export const Content = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title{
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 15px;
    }
    .description{
        font-weight: 300;
    }
`;