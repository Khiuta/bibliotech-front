import { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${colors.backgroundColor};
        overflow-y: hidden;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.greenColor};
        color: #fff;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: red;
        color: #fff;
    }
`;
