import styled from 'styled-components';

export const Content = styled.main`
    display: flex;
    flex: 1 1 100%;
    height: 100vh;

    .lado-2 {
        display: flex;
        flex: 1 1 100%;
        flex-wrap: wrap;
    }

    .esq {
        display: flex;
        width: 50%;
        /* flex: 1 1 50%; */
        height: 100vh;
        flex-wrap: wrap;
        overflow-y: auto;
    }

    .esq header {
        display: flex;
        flex: 1 1 100%;
        height: 150px;
        color: #fff;
        font-size: large;
        align-items: flex-end;
        padding: 0px 0px 30px 40px;
    }

    .esq .formulario {
        display: flex;
        height: calc(100vh - 150px);
        width: 100%;
        flex-wrap: wrap;
        color: #fff;
        padding: 0 10px;
    }

    .esq .formulario form {
        display: flex;
        width: 100%;
        flex: 1 1 100%;
        height: 440px;
        flex-wrap: wrap;
        gap: 10px;
    }

    form .nome {
        display: flex;
        flex: 1 1 100%;
        height: 80px;
        flex-direction: column;
    }

    form .autor-tombo{
        display: flex;
        width: 95%;
        height: 85px;
        gap: 5%;
    }

    form .autor,
    form .tombo {
        display: flex;
        flex: 1 1 40%;
        height: 80px;
        width: 50%;
        flex-direction: column;
    }

    form .aluno {
        display: flex;
        flex: 1 1 100%;
        height: 80px;
        flex-direction: column;
    }

    form .turma-serie{
        display: flex;
        width: 95%;
        gap: 5%;
        height: 85px;
    }

    form .turma,
    form .serie {
        display: flex;
        flex: 1 1 40%;
        height: 80px;
        width: 50%;
        flex-direction: column;
    }

    form footer {
        display: flex;
        flex: 1 1 100%;
        height: 50px;
        justify-content: center;
        align-items: center;
    }

    form footer button {
        font-size: 20px;
        border: none;
        border-radius: 5px;
        height: 100%;
        padding: 0px 5px 0px 5px;
        cursor: pointer;
    }

    .esq .formulario input {
        height: 40px;
        border-radius: 10px;
        border: none;
        padding: 5px 0px 5px 20px;
        font-size: 25px;
    }

    .dir {
        display: flex;
        flex: 1 1 50%;
        height: 92vh;
        width: auto;
        margin-top: 8vh;
    }
`;
