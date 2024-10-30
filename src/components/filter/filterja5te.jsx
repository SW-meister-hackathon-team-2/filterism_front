
import React from "react";
import { useLocation } from "react-router-dom";
import * as M from "./filterStyle";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header/Header";

const Filterja5te = () => {
  const location = useLocation();
  const { number } = location.state || {}; // state에서 number 값을 가져옴
  //   const { type } = location.state || {}; // state에서 number 값을 가져옴
  const navigate = useNavigate();
  console.log(number); // number 값 확인용

  return (
    <M.Wrapper>
      <M.MainContainer>
        <Header />
        <M.PageContainer>
          <M.MainFilterContainer>
            <M.MainFilterja5te></M.MainFilterja5te>
            <M.InfoContainer>
              <M.InfoType>
                <M.InfoTypee>포즈 가이드</M.InfoTypee>
                <M.InfoTitle>기본 필터 제목입니다</M.InfoTitle>
              </M.InfoType>

              <M.UserName> admin </M.UserName>
              <M.TagContainer>
                <M.Tag> #하하 </M.Tag>
                <M.Tag> #재미있는! </M.Tag>
              </M.TagContainer>
              <M.InfoContent>
                기본 설명입니다. 추후에 설명을 첨부할 수 있습니다.
              </M.InfoContent>
            </M.InfoContainer>
          </M.MainFilterContainer>
          <M.FilterContainer>필터 둘러보기</M.FilterContainer>
          <M.SourceContainer>
            <M.SSource1
              number={1}
              onClick={() => navigate("/source", { state: { number: 1 } })}
            />
            <M.SSource2
              number={2}
              onClick={() => navigate("/source", { state: { number: 2 } })}
            />
            <M.SSource3
              number={3}
              onClick={() => navigate("/source", { state: { number: 3 } })}
            />
            <M.SSource4
              number={4}
              onClick={() => navigate("/source", { state: { number: 3 } })}
            />
          </M.SourceContainer>
          <M.FilterContainer>필터 둘러보기</M.FilterContainer>
          <M.FilterImgContainer>
            <M.Filter1
              number={1}
              onClick={() => navigate("/filter", { state: { number: 1 } })}
            />
            <M.Filter2
              number={2}
              onClick={() => navigate("/filter", { state: { number: 2 } })}
            />
            <M.Filter3
              number={3}
              onClick={() => navigate("/filter", { state: { number: 3 } })}
            />
            <M.Filter4
              number={4}
              onClick={() => navigate("/filter", { state: { number: 4 } })}
            />
            <M.Filter5
              number={5}
              onClick={() => navigate("/filter", { state: { number: 5 } })}
            />
            <M.Filter6
              number={6}
              onClick={() => navigate("/filter", { state: { number: 6 } })}
            />
          </M.FilterImgContainer>

          <M.FilterContainer>배경사진 둘러보기</M.FilterContainer>
          <M.BackGroundContainer>
            <M.BackGround1
              number={1}
              onClick={() => navigate("/background", { state: { number: 1 } })}
            />
            <M.BackGround2
              number={2}
              onClick={() => navigate("/background", { state: { number: 2 } })}
            />
            <M.BackGround3
              number={3}
              onClick={() => navigate("/background", { state: { number: 3 } })}
            />
          </M.BackGroundContainer>
        </M.PageContainer>
      </M.MainContainer>
    </M.Wrapper>
  );
};

export default Filterja5te;
