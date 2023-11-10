import styled from 'styled-components';
import { greenColor } from '../../config/colors';

export const Background = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    backdrop-filter: blur(5px);
`;

export const Box = styled.div`
    display: flex;
    width: 60vw;
    height: 50vh;
    background: #a1a1a1;
    border-radius: 10px;
    border: 5px solid ${greenColor};
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
    flex-direction: column;

    footer {
        display: flex;
        width: 100%;
        max-height: 60%;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 50px;
        gap: 50px;
    }

    button {
        background: #fff;
        border: none;
        border-radius: 5px;
        height: 80px;
        width: 140px;
        font-size: 24px;
        cursor: pointer;
    }
`;
