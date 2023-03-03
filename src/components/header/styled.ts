import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.color02};

    .title {
        margin-left: 15px;
    }

    .date {
        margin-right: 15px;
        text-align: center;
    }

    .insertName {
        display: flex;
        align-items: center;
    }

    .insertName p {
        display: flex;
        align-items: center;
    }

    .insertName svg {
        margin-right: 7px;
    }

    .insertName input {
        width: 250px;
        height: 30px;
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

    .insertName button {
        width: 40px;
        height: 30px;
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

    .insertName button svg {
        margin: auto;
    }
`;
