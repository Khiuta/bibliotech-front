import styled from 'styled-components';
import { greenColor } from '../../config/colors';

export const Content = styled.main`
    display: flex;
    flex: 1 1 100%;
    height: 100vh;

    .lado-1 {
        display: flex;
        flex: 1 1 50%;
        background-color: #fff;
        align-items: center;
        justify-content: center;
    }

    .lado-1 img {
        width: 60%;
        height: 60%;
    }

    .lado-2 {
        display: flex;
        flex: 1 1 50%;
        background: ${greenColor};
        align-items: center;
        justify-content: center;
    }

    .lado-2 form {
        display: flex;
        flex-wrap: wrap;
        width: 70%;
        height: 50%;
        background: #fff;
        border-radius: 10px;
    }

    .lado-2 form header {
        display: flex;
        width: 100%;
        height: 30%;
        align-items: flex-end;
        justify-content: center;
        font-size: 30px;
        gap: 15px;
        color: #054935;

        img {
            width: 8%;
        }
    }

    .lado-2 form section {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 50%;
    }

    .lado-2 form section label {
        display: flex;
        flex: 1 1 100%;
        height: 50%;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        font-size: 20px;
        color: rgba(0, 0, 0, .6);

        input {
            width: 70%;
            height: 40%;
            border: 1px solid #a1a1a1;
            border-radius: 15px;
            padding: 5px 0px 5px 10px;
            font-size: 20px;
        }
    }

    .lado-2 form footer {
        display: flex;
        width: 100%;
        height: 20%;
        align-items: center;
        justify-content: center;

        input {
            border: none;
            background: #106E4E;
            border-radius: 15px;
            height: 40%;
            width: 20%;
            color: #fff;
            font-family: 'Poppins';
            font-size: 24px;
            cursor: pointer;
        }
    }
`;
