import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5vw;
  gap: 5px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;

export const PageContainer = styled.div`
    padding: 0 15vw;
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

export const Input = styled.input`
  padding: 30px;
  font-size: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 300px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 30px;
  font-size: 16px;
  height: 100%;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;