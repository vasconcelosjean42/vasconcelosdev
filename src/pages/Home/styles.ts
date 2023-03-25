import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 810px){
        flex-direction: column-reverse;
    }
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    .topText{
        font-size: 2.5rem;
        font-weight: 700;
        white-space: nowrap;
        span span{
            color: ${props => props.theme.colors.primary};
        }
        @media (max-width: 810px){
            font-size: 2rem;
        }
    }
    .bottomText{
        display: flex;
        align-items: center;
        div{
            background: ${props => props.theme.colors.text};
            width: 120px;
            height: 2px;
            margin-right: 10px;
        }
        font-weight: 300;
        font-size: 1.3rem;
    }
`;

export const Image = styled.div`
    background: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.primaryLess});
    border-radius: 10px;
    margin-left: 30px;
    transition: 2s;
    width: 200px;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    .icons {
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 10;
        color: ${props => props.theme.colors.text};
        font-size: 2rem;
        transition: 1.2s;
        opacity: 0;
        a{
            text-decoration: none;
            color: ${props => props.theme.colors.sidebar};
            margin-left: 15px;
            transition: 0.2s;
        }
        a + a{
            margin-top: 15px;
        }

    }
    a:hover{
        color: ${props => props.theme.colors.text};
    }
    &:hover{
        border-radius: 20px;
        img {
            width: 400px;
            margin-top: 70px;
        }
        .icons{
            opacity: 1;
        }
    }
    img {
        width: 200px;
        border-radius: 10px;
        margin-bottom: -50px;
        transition: 1.5s;
    }
`;