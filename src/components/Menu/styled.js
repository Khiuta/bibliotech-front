import styled from 'styled-components';

export const Sidebar = styled.div`
    display: flex;
    width: 300px;
    border-right: 1px solid #5a5e66;
    height: 100vh;
    flex-direction: column;

    a {
        text-decoration: none;
        color: #fff;
    }

    .sup {
        display: flex;
        height: 40%;
        flex-direction: column;
        padding: 30px;
        align-items: center;
        color: #fff;
        font-weight: bold;
        justify-content: space-between;
    }

    .sup p {
        display: flex;
        text-justify: auto;
        word-wrap: break-word;
        width: 160px;
    }

    .sup img {
        width: 68px;
        height: 68px;
    }

    .sup .lhvr {
        width: 100px;
        height: 100px;
    }

    .inf {
        display: flex;
        height: 60%;
        color: #fff;
        flex-direction: column;
        font-size: 20px;
    }

    .inf p {
        display: flex;
        padding: 15px 10px;
        align-items: center;
    }

    .inf p:hover {
        background: rgba(247, 247, 247, .2);
        cursor: pointer;
    }
`;
