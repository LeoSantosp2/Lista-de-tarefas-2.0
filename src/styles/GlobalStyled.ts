import { createGlobalStyle } from 'styled-components';

import * as colors from '../config/colors';

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html, body, #root{
        width: 100%;
        height: 100vh;
        font-family: 'Work Sans', sans-serif;
    }

    body{
        background-color: ${colors.color01};
    }
`;
