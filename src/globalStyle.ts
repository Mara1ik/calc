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
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Poppins", sans-serif;
        color: ${colors.lightBlue};
        font-size: 32rem;
        font-weight: 500;

    }

    html {
        font-size: calc(1vw  / 16);
    }

    body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #daf0ff;
    }

    button {
        font-family: "Poppins", sans-serif;
        font-size: 36rem;
        font-weight: 500;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
    }
`;

export default GlobalStyle;
