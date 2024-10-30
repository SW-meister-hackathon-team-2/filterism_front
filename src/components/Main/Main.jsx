import React from "react";
import * as M from "./MainStyle";
import Header from "../common/Header/Header";

const Main = () => {
  return (
    <M.Wrapper>
      <Header />
      <M.MainContainer>
        <M.PageContainer>
          <M.Banner></M.Banner>
          <M.FilterContainer>필터 둘러보기</M.FilterContainer>
          <M.FilterImgContainer>
            <M.Filter1 />
            <M.Filter2 />
            <M.Filter3 />
            <M.Filter4 />
            <M.Filter5 />
            <M.Filter6 />
          </M.FilterImgContainer>
        </M.PageContainer>
      </M.MainContainer>
    </M.Wrapper>
  );
};

export default Main;
