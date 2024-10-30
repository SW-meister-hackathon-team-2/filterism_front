import React from 'react';
import * as M from "./HeaderStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
    return (
        <M.Wrapper>
            <M.Logo onClick={() => navigate("/")}></M.Logo>
            <M.SearchInput type='text' placeholder='안재억과 LOVE 챌린지 '></M.SearchInput>
            <M.MemberName to="/login">3초 로그인</M.MemberName>
            {/* {userData && userData.id !== "Guest" ? (
            <>
              <M.MemberProfile src={profileImg} alt="profile" />
              <M.MemberName>{userData.id}</M.MemberName>
            </>
          ) : (
            <M.MemberName to="/login" style={{ cursor: "pointer" }}>
              로그인
            </M.MemberName>
          )} */}
        </M.Wrapper>
    );
};

export default Header;