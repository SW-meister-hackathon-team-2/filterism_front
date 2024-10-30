import React, { useEffect, useState } from "react";
import * as M from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // JSESSIONID 쿠키로 로그인 상태 확인
    const loggedIn = !!Cookies.get("JSESSIONID");
    setIsLoggedIn(loggedIn);
    console.log("JSESSIONID 쿠키 존재:", loggedIn);
  }, []);

  return (
    <M.Wrapper>
      <M.Logo onClick={() => navigate("/")}></M.Logo>
      <M.SearchInput type="text" placeholder="안재억과 LOVE 챌린지" />

      {isLoggedIn ? (
        <>
          <M.MemberProfile
            src="/path/to/profile-image.jpg"
            alt="profile"
            onClick={() => navigate("/profile")}
          />
          <M.MemberName onClick={() => navigate("/profile")}>사용자 이름</M.MemberName>
        </>
      ) : (
        <M.MemberName to="/login" style={{ cursor: "pointer" }}>
          3초 로그인
        </M.MemberName>
      )}
    </M.Wrapper>
  );
};

export default Header;
