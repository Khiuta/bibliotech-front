import styled from 'styled-components';

export const Div = styled.div`
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

    form {
        display: flex;
        flex: 1 1 60%;
        width: 50%;
        max-width: 70%;
        max-height: 95%;
        color: #fff;
        border-radius: 10px;
        border: 1px solid #fff;
        flex-wrap: wrap;
        padding: 10px;
    }

    label {
        display: flex;
        flex-direction: column;
    }

    .lado-1 {
        display: flex;
        flex: 1 1 50%;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .lado-2 {
        display: flex;
        flex: 1 1 50%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    footer {
        display: flex;
        flex: 1 1 100%;
        height: 50px;
        padding: 0;
        justify-content: center;
    }

    footer button {
        border: none;
        height: 100%;
        border-radius: 10px;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
    }
`;
