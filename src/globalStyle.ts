import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#ffffff",
  black: "#17181A",
  blue: "#29a8ff",
  lightBlue: "#b2daff",
  darkBlue: "#005DB2",
  lightGrey: "#a5a5a5",
  grey: "#818181",
  darkGrey: "#303136",
};

const GlobalStyle = createGlobalStyle`
    html {
        font-size: calc(1vw  / 16);
    }

    body {
        height: 100vh;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
        color: ${colors.lightBlue};
        font-size: 32rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        font-family: "Poppins", sans-serif;
        font-size: 24rem;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
    }
`;

export default GlobalStyle;
