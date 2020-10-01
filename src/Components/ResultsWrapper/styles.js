import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% - 300px);
    padding: 30px 15px;
    h1 {
        font-size: 25px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 25px;
    }
    p {
        margin-bottom: 10px;
    }
    div.results {
        border-top: 1px solid #eee;
        padding-top: 30px;
        &:not(:last-child) {
            margin-bottom: 30px;
        }
        h4 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        p {
            font-size: 16px;
            margin-bottom: 5px;
        }
        button {
            padding: 0 20px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            border: 1px solid #389cf2;
            background-color: #fff;
            color: #389cf2;
            font-size: 14px;
            text-transform: uppercase;
            border-radius: 2px;
            cursor: pointer;
            outline: 0;
            transition: all 0.2s;
            &:hover {
                background-color: #389cf2;
                color: #fff;
            }
        }
    }
`;
