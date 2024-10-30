import React, { useEffect, useState } from "react";
import * as M from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Filter3 from "../../../asset/img/filters/filter3.png";


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


        <M.ProfileContainer>
          <M.MemberProfile
            src={Filter3}
            alt="profile"
            onClick={() => navigate("/profile")}
          />
          <M.ProfileName onClick={() => navigate("/profile")}>주호님</M.ProfileName>
        </M.ProfileContainer>
      
    </M.Wrapper>
  );
};

export default Header;
