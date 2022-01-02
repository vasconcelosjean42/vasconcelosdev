import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #edf1fd;

        --primary: #3A15BF;
        
        --primaryLess: #4909F9;

        --text: #282a37;

        --sidebar: #fbfbfb;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        @media (max-width: 1888px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        color: var(--text);
    }
    
    body, input, textarea, button {
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    } 

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;