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
        height: 22%;
        align-items: flex-end;
        font-size: 30px;
        color: #fff;
        justify-content: space-between;
        padding: 0px 5%;
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
        height: 10%;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
        padding-right: 15px;
    }

    footer div {
        padding: 10px;
        font-size: 20px;
        border-radius: 10px;
        background: #fff;
        cursor: pointer;
    }

    .acervo {
        display: flex;
        flex: 1 1 100%;
        align-items: center;
        justify-content: flex-start;
        height: 65%;
        flex-direction: column;
        gap: 15px;
        overflow-y: scroll;
    }

    .acervo .caixa {
        display: flex;
        flex: 1 -1 100%;
        width: 90%;
        align-items: center;
        gap: 10px;
    }
    .caixa .edit {
        display: flex;
        gap: 5px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: ${greenColor};
        border-radius: 20px 0 0 20px ;
        width: 8%;
        height: 125%;

    }
    .edit-icon{
        color: black;
        border-radius: 50%;
    }

    .acervo .livro {
        display: flex;
        flex: 1 1 100%;
        width: 100%;
        max-width: 100%;
        height: 50px;
        max-height: 70px;
        background: #fff;
        border-radius: 20px;
        background: linear-gradient(to left, ${greenColor} 0 7%, #fff 7% 100%);
        font-size: 18px;
        align-items: center;
        padding: 5px 20px 5px 0;
        justify-content: space-between;
    }
    .livro span{
        width: 85%;
    }
    .acervo p{
        max-width: 90%

    }  

    .acervo .livro-exp {
        display: flex;
        flex: 1 1 100%;
        width: 100%;
        max-width: 100%;
        min-height: 100px;
        max-height: 120px;
        background: #fff;
        border-radius: 20px;
        background: linear-gradient(to left, ${greenColor} 0 7%, #fff 7% 100%);
        font-size: 18px;
        align-items: center;
        padding: 5px 20px 5px 30px;
        justify-content: space-between;
        cursor: pointer;
    }
    .livro-exp span{
        width: 85%;
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
