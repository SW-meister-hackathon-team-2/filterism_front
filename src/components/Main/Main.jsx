import React from 'react';
import * as M from "./MainStyle";
import Header from "../common/Header/Header";

const Main = () => {
    return (
        <M.Wrapper>
            <Header/>
            <M.Banner></M.Banner>
        </M.Wrapper>
    );
};

export default Main;