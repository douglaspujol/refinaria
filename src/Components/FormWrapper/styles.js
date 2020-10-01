import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    border-right: 1px solid #eee;
    padding: 30px 15px;
    h1 {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 25px;
    }
    p {
        margin-bottom: 10px;
    }
    div.categorias {
        button {
            width: calc(50% - 7px);
            height: 35px;
            line-height: 35px;
            text-align: center;
            background-color: #fff;
            border: 1px solid #ccc;
            color: #777;
            font-size: 14px;
            text-transform: uppercase;
            cursor: pointer;
            outline: 0;
            &:hover {
                border: 1px solid #389cf2;
                color: #389cf2;
                transition: all 0.3s;
            }
            &:last-child {
                margin-left: 7px;
            }
            &:first-child {
                margin-right: 7px;
            }
        }
    }
    form {
        display: flex;
        flex-direction: column;
        input {
            width: 100%;
            height: 40px;
            padding: 0 10px;
            margin: 15px 0;
            background-color: #fff;
            border: 1px solid #ccc;
            outline: 0;
        }
        button {
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #389cf2;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            border: none;
            border-radius: 2px;
            cursor: pointer;
            outline: 0;
        }
    }
`;
