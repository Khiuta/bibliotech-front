import styled from 'styled-components';
import { greenColor } from '../../config/colors';

export const Content = styled.main`
    display: flex;
    flex: 1 1 100%;
    height: 100vh;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, .3);
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, .5);
    }

    .lado-2 {
        display: flex;
        flex: 1 1 100%;
        flex-wrap: wrap;
    }

    header {
        display: flex;
        flex: 1 1 100%;
        height: 175px;
        align-items: flex-end;
        padding: 30px 70px;
        font-size: 30px;
        color: #fff;
        justify-content: space-between;
    }

    input {
        margin-bottom: 30px;
        height: 40px;
        border: none;
        border-radius: 20px;
        width: 500px;
        font-size: 25px;
        padding-left:10px;
    }

    footer {
        display: flex;
        flex: 1 1 100%;
        height: 160px;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
        padding-right: 120px;
    }

    footer div {
        padding: 20px;
        font-size: 20px;
        border-radius: 10px;
        background: #fff;
        cursor: pointer;
    }

    .acervo {
        display: flex;
        flex: 1 1 100%;
        align-items: center;
        height: calc(100vh - 450px);
        flex-direction: column;
        gap: 15px;
        padding-top: 20px;
        overflow-y: scroll;
    }

    .acervo .livro {
        display: flex;
        flex: 1 1 55%;
        width: 55%;
        max-width: 55%;
        height: 100px;
        max-height: 100px;
        background: #fff;
        border-radius: 20px;
        background: linear-gradient(to left, ${greenColor} 0 7%, #fff 7% 100%);
        font-size: 18px;
        align-items: center;
        padding: 5px 20px 5px 30px;
        justify-content: space-between;
    }

    .acervo .livro-exp {
        display: flex;
        flex: 1 1 55%;
        width: 55%;
        max-width: 55%;
        min-height: 100px;
        max-height: 120px;
        background: #fff;
        border-radius: 20px;
        background: linear-gradient(to left, ${greenColor} 0 7%, #fff 7% 100%);
        font-size: 18px;
        align-items: center;
        padding: 5px 20px 5px 30px;
        justify-content: space-between;
    }

    @keyframes pra-cima {
        from {
            transform: rotate(180deg);
        } to {
            transform: rotate(0deg);
        }
    }

    @keyframes pra-baixo {
        from {
            transform: rotate(0deg);
        } to {
            transform: rotate(180deg);
        }
    }

    .livro .baixo {
        animation: pra-baixo .5s forwards;
        cursor: pointer;
    }

    .livro .cima {
        animation: pra-cima .5s forwards;
        cursor: pointer;
    }
`;
