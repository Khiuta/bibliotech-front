import styled from 'styled-components';
import { pendente, emprestado } from '../../config/colors';

export const Content = styled.main`
    display: flex;
    flex: 1 1 100%;
    height: 100vh;

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
        padding-left: 50px;
    }

    aside {
        display: flex;
        flex: 1 1 100%;
        height: 60px;
        font-size: 30px;
        color: #fff;
        align-items: center;
        justify-content: center;
    }

    aside .icone {
        display: flex;
        flex: 1 1 10%;
        width: 10%;
        height: 100%;
        align-items: center;
        justify-content: center;

        .icon:hover {
            cursor: pointer;
        }
    }

    aside .texto {
        display: flex;
        flex: 1 1 90%;
        width: 90%;
        height: 100%;
        gap: 10%;
        padding-left: 20%;
    }

    aside p {
        cursor: pointer;
    }

    aside .pendente {
        border-bottom: 5px solid ${pendente};
        border-width: 6px;
    }

    aside .emprestado {
        border-bottom: 5px solid ${emprestado};
        border-width: 6px;
    }

    .emprestimos {
        display: flex;
        flex: 1 1 100%;
        height: calc(100vh - 360px);
    }

    .emprestimos div {
        display: flex;
        flex: 1 1 100%;
        height: 40px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        padding: 20px 0 0 0;
    }

    .emprestimos div .pendente,
    .emprestimos div .emprestado {
        display: flex;
        flex: 1 1 70%;
        max-width: 70%;
        height: 40px;
        max-height: 60px;
        background: linear-gradient(to right, ${pendente} 0 5%, #fff 5% 100%);
        border-radius: 20px;
        padding: 10px 0px 10px 70px;
        font-size: 20px;
        align-items: center;
        word-wrap: break-word;
    }

    .emprestimos div .emprestado {
        background: linear-gradient(to right, ${emprestado} 0 5%, #fff 5% 100%);
    }

    .emprestimos div .botao {
        margin-top: 5px;
        cursor: pointer;
    }

    .emprestimos-loading {
      display: flex;
      flex: 1 1 70%;
      max-width: 90%;
      height: 60vh;
      justify-content: center;
      align-items: center;
    }
`;
