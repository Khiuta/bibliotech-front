import styled from 'styled-components';

export const Calendario = styled.div`
    display: flex;
    flex: 1 1 100%;

    .calendario {
        width: 39vw;
        height: 88%;
        margin-left: 15px;
        color: #000;
        background: #fff;
        border: none;
        overflow-y: hidden;
    }

    .dias {
        width: calc(100% / 7);
    }

    .fc-header-toolbar {
        color: #fff;
        gap: 10px;
    }
`;
