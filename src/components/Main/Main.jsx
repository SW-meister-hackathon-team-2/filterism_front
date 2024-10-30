import React from "react";
import * as M from "./MainStyle";
import Header from "../common/Header/Header";
import { useNavigate } from "react-router-dom";
import * as gvar from "../../GlobalVariables/global_variables"

const Main = () => {
  const navigate = useNavigate();

  return (
    <M.Wrapper>
      <Header />
      <M.MainContainer>
        <M.PageContainer>
          <M.Banner></M.Banner>
          <M.FilterContainer>필터 둘러보기</M.FilterContainer>
          <M.FilterImgContainer>
            <M.Filter1 number={1} onClick={() => navigate("/filter", { state: { number: 1 } })} />
            <M.Filter2 number={2} onClick={() => navigate("/filter", { state: { number: 2 } })} />
            <M.Filter3 number={3} onClick={() => navigate("/filter", { state: { number: 3 } })} />
            <M.Filter4 number={4} onClick={() => navigate("/filter", { state: { number: 4 } })} />
            <M.Filter5 number={5} onClick={() => navigate("/filter", { state: { number: 5 } })} />
            <M.Filter6 number={6} onClick={() => navigate("/filter", { state: { number: 6 } })} />
          </M.FilterImgContainer>
        </M.PageContainer>
      </M.MainContainer>
    </M.Wrapper>
  );
};

export default Main;
