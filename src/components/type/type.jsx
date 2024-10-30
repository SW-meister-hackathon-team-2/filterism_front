import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "./typeStyle"; // Ensure this file has the necessary styles
import Header from "../common/Header/Header";

const Type = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(""); // Clear error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "pkonm") {
      navigate("/filter_pkonm");
    } else if (inputValue === "ja5te") {
      navigate("/filter_ja5te");
    } else {
      setErrorMessage("코드가 유효하지 않습니다."); // Set error message
    }
  };

  return (
    <M.Wrapper>
      <M.MainContainer>
        <Header />
        <M.InputContainer>
        <M.PageContainer>
        <M.InputContainer>
            <form onSubmit={handleSubmit}>
              <M.InputContainer>
              코드를 입력해주세요
                <M.Input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  maxLength={5} // Limit input to 5 characters
                  placeholder="Enter code"
                />
                <M.SubmitButton type="submit">Submit</M.SubmitButton>
              </M.InputContainer>
              {errorMessage && <M.ErrorMessage>{errorMessage}</M.ErrorMessage>} {/* Display error message */}
            </form>
          </M.InputContainer>

        </M.PageContainer>
        </M.InputContainer>
      </M.MainContainer>
    </M.Wrapper>
  );
};

export default Type;
