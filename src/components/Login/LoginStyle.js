import styled, { css } from "styled-components";


export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:white;
    flex-direction: column;
`;

export const LoginButton = styled.button`
    background-color: #4285F4;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;

    &:hover {
        background-color: #357AE8;
    }
`;