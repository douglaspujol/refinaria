import styled from 'styled-components';

export const Container = styled.div`
    h1 {
        margin-bottom: 30px;
    }
    button {
        width: 150px;
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
    }
`;
