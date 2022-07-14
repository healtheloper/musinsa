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
`;

export default GlobalStyle;
