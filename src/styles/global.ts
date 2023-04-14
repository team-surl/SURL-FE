import { createGlobalStyle } from "styled-components";
import { BackgroundImg } from "../assets/img";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: 0;
        background: ${({ theme }) => theme.color.point3};

        background-image: url(${BackgroundImg});
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        background-attachment: fixed;
    }
`;

export default GlobalStyle;
