import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 0 15vw;
`;


export const SplineContainer = styled.div`
    border-radius: 30px;
`;

export const MainContainer = styled.div`
    width:100%;
    margin-top: 2vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

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
    margin-bottom: 5vw;
    padding: 20px 25px;
    border-radius: 50px;
    font-weight: 700;
    cursor: pointer;
    font-size: 20px;
    margin-top: 20px;
    width: 20vw;
    &:hover {
        background-color: #357AE8;
    }
`;