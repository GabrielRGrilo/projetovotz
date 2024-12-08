import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        overflow: auto;

        -webkit-font-smoothing: antialiased;

        ::-webkit-scrollbar {
            background-color: none;
            width: 0.7rem;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #333;
            border-radius: 1rem;

        }

    }

    body, button {
        font-family: 'Poppins', sans-serif;
    }

    textarea, h1, input {
        font-family: 'Roboto', sans-serif;
    }

    ul, li {
        list-style: none;
        appearance: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(1.4);
    }

    a {
        text-decoration: none;
    }
`