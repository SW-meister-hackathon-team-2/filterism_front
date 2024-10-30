import React from "react";
import * as M from "./LoginStyle";
import Header from "../common/Header/Header";
import * as gvar from "../../GlobalVariables/global_variables";
import Spline from "@splinetool/react-spline";

const Login = () => {
  const handleLogin = () => {
    const authUrl = `${gvar.SERVER_URL}/oauth2/authorization/google`;

    window.location.href = authUrl; // Google 로그인 페이지로 리디렉션
  };

  return (
    <M.Wrapper>
      <Header />
      <M.MainContainer>
        <M.PageContainer>
          <M.SplineContainer>
          <Spline scene="https://prod.spline.design/5n9tdtxQQXMtjk7H/scene.splinecode" />
          </M.SplineContainer>
        </M.PageContainer>
        <M.LoginButton onClick={handleLogin}>구글 계정으로 로그인 하기</M.LoginButton>
      </M.MainContainer>
    </M.Wrapper>
  );
};

export default Login;
