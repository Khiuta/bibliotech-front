import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Content = styled.main`
    display: flex;
    flex-direction: row;
    flex: 1 1 100%;
    height: 100vh;

    .lado-2 {
        display: flex;
        flex: 5 1 100%;
        height: 100%;
        flex-wrap: wrap;
    }

    .lado-2 header {
        display: flex;
        flex: 1 1 300px;
        align-items: flex-end;
        padding-left: 80px;
        color: #fff;
        font-size: 30px;
    }

    .lado-2 .cards {
        display: flex;
        flex: 1 1 100%;
        gap: 10px;
        height: calc(100vh - 300px);
        padding: 50px 50px;
        justify-content: space-between;
        align-items: center;
    }

    .lado-2 .cards section {
        display: flex;
        flex: 1 1 300px;
        height: 500px;
        max-width: 400px;
        padding: 40px;
        background: #fff;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .lado-2 .cards section h1 {
        font-size: 200px;
    }

    .lado-2 .cards .emp {
        background: ${colors.darkLigtColor};
        color: #fff;
    }

    .lado-2 .cards .pen {
        background: ${colors.greenColor};
        color: #fff;
    }

    .lado-2 .cards-loading {
        display: flex;
        flex: 1 1 100%;
        justify-content: center;
        align-items: center;
    }
`;
