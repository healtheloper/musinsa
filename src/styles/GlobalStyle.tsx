import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    ul {
        list-style: none;
        margin: 0;
        padding:0;
    }
    button {
        padding: 0;
        border: none;
        background-color: inherit;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1 {
        margin: 0;
    }
    input:focus-visible {
        outline:none;
    }
    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
