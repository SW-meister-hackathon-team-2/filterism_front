import React from 'react';
import * as M from "./LoginStyle";
import Header from "../common/Header/Header";
import * as gvar from "../../GlobalVariables/global_variables"


const Login = () => {
    const handleLogin = () => {
        const authUrl = `${gvar.SERVER_URL}/oauth2/authorization/google`

        window.location.href = authUrl; // Google 로그인 페이지로 리디렉션
    };

    return (
        <M.Wrapper>
            <Header />
            <M.LoginButton onClick={handleLogin}>Login with Google</M.LoginButton>
        </M.Wrapper>
    );
};

export default Login;