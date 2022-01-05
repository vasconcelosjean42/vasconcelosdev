import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    height: 100vh;
    padding: 60px 60px;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 150px;
    @media (max-width: 600px){
        padding: 0px 0px 0px 100px;
    }
    @media (max-width: 550px){
        padding: 0px 0px 0px 50px;
    }
    @media (max-width: 450px){
        padding: 0px 0px 0px 0px;
    }
    .item{
        flex: 1 50%;
        @media (max-width: 900px){
            flex: 1 100%;
        }
    }
`;