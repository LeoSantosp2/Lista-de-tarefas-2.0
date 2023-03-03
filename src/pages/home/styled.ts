import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
    margin: 50px;
    border-radius: 10px;
    box-shadow: 3px, 3px, 10px ${colors.shadow};
    text-align: center;
    background-color: ${colors.color02};

    h1 {
        margin: 15px 0px;
    }

    .inputValue {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 260px;
        height: 30px;
        margin-left: 50px;
        padding: 10px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border: 0px;
        outline: none;

        :hover,
        :focus {
            border: 1px solid ${colors.color01};
        }
    }

    button {
        width: 50px;
        height: 30px;
        margin-right: 50px;
        border: 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        transition: 0.3s;
        outline: none;
        cursor: pointer;
        background-color: ${colors.color03};
        color: ${colors.color02};

        :hover {
            background-color: ${colors.color01};
        }
    }

    table {
        margin: auto;
        border-collapse: collapse;
        text-align: center;
    }

    table tr th,
    table tr td {
        padding: 10px;
    }

    .td-task {
        text-align: left;
    }

    table tr td svg {
        margin: 0px 5px;
        cursor: pointer;
    }
`;
