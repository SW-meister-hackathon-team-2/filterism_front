import React from 'react';
import * as M from "./filterStyle";

const Filter = () => {
    return (
        <M.Wrapper>
            <M.FilterContainer>필터 둘러보기</M.FilterContainer>
            <M.FilterImgContainer>
                <M.Filter1 />
                <M.Filter2 />
                <M.Filter3 />
                <M.Filter4 />
                <M.Filter5 />
                <M.Filter6 />
            </M.FilterImgContainer>
            <M.FilterContainer to="/">홈으로 돌아가기</M.FilterContainer>
        </M.Wrapper>
    );
};

export default Filter;