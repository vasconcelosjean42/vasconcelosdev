import styled from "styled-components";

export const Container = styled.div`
    background: var(--sidebar);
    position: fixed;
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
        text-decoration: none;
        color: var(--text);
    }
    .nav-link{
        width: 100%;
        height: 100%;
        padding-left: 10px;
        display: flex;
        align-items: center;
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

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 90px 30px 60px 30px;
    font-size: 1.2rem;
    .topLine{
        width: 27%;
        height: 5px;
        background: var(--primary);
        transition: 1s;
    }
    .bottomLine{
        align-self: flex-end;
        width: 73%;
        height: 5px;
        background: var(--primary);
        transition: 1s;
    }
    &:hover{
        .topLine{
            width: 73%;
            height: 5px;
            background: var(--primary);
        }
        .bottomLine{
            align-self: flex-end;
            width: 27%;
            height: 5px;
            background: var(--primary);
        }
    }
`;