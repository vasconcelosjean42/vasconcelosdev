import styled from "styled-components";

export const Container = styled.div`
    background: var(--sidebar);
`;

export const Content = styled.ul`
    height: 100vh;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        max-width: 300px;
        margin: 90px 30px 60px 30px;
    }
    li{
        width: 100%;
        min-height: 50px;
        padding: 0px 20px;
        display: flex;
        transition: 0.2s;
        margin: 5px 0 5px 0;
        &:hover{
            padding: 0px 25px;
            a{
                color: var(--sidebar);
                background: var(--primary);
            }
        }
    }
    a{
        width: 100%;
        height: 100%;
        padding-left: 10px;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--text);
        font-size: 1.2rem;
        border-radius: 5px;
        span{
            margin-left: 15px;
        }
    }
    .copyright {
        display: flex;
        align-items: flex-end;
        flex: 1;
        font-weight: 300;
        padding: 15px;
    }
`;