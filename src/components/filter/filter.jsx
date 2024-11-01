import React from "react";
import { useLocation } from "react-router-dom";
import * as M from "./filterStyle";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header/Header";

const Filter = () => {
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
            {number === 1 && <M.MainFilter1 />}
            {number === 2 && <M.MainFilter2 />}
            {number === 3 && <M.MainFilter3 />}
            {number === 4 && <M.MainFilter4 />}
            {number === 5 && <M.MainFilter5 />}
            {number === 6 && <M.MainFilter6 />}
            <M.InfoContainer>
              <M.InfoType>
                <M.InfoType>필터</M.InfoType>
                <M.InfoTitle>안재억과 LOVE 챌린지</M.InfoTitle>
              </M.InfoType>

              <M.UserName> admin </M.UserName>
              <M.TagContainer>
                <M.Tag> #안재억 </M.Tag>
                <M.Tag> #LOVE챌린지 </M.Tag>
              </M.TagContainer>
              <M.InfoContent>
                안재억과 함께하는 LOVE 챌린지에 오신 것을 환영합니다. <br />
                이번 챌린지는 3초 로그인을 통해 참여할 수 있습니다.
                <br />
                챌린지에 참여하고, 새로운 나를 만들어보세요.
              </M.InfoContent>
            </M.InfoContainer>
          </M.MainFilterContainer>
          <M.FilterContainer>필터 둘러보기</M.FilterContainer>
          <M.SourceContainer>
            <M.Source1 number={1} onClick={() => navigate("/source", { state: { number: 1 } })} />
            <M.Source2 number={2} onClick={() => navigate("/source", { state: { number: 2 } })} />
            <M.Source3 number={3} onClick={() => navigate("/source", { state: { number: 3 } })} />
            <M.Source3 number={4} onClick={() => navigate("/source", { state: { number: 3 } })} />
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
            <M.BackGround1 number={1} onClick={() => navigate("/background", { state: { number: 1 } })} />
            <M.BackGround2 number={2} onClick={() => navigate("/background", { state: { number: 2 } })} />
            <M.BackGround3 number={3} onClick={() => navigate("/background", { state: { number: 3 } })} />
          </M.BackGroundContainer>
        </M.PageContainer>
      </M.MainContainer>
    </M.Wrapper>
  );
};

export default Filter;
