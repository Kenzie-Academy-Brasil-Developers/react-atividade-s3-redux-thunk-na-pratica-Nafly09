import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
}

:root{
    --white: #f5f5f5;
    --black: #000000;
    --blue: #638fe3;
    --red: #c53030;
    --lightblue: #c5d4f0;
    --lightgrey: #666360;
}

#root{
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
