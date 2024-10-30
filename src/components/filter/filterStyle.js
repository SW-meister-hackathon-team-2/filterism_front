import styled, { css } from "styled-components";
import banner from "../../asset/img/Banner.png";

import filter1 from "../../asset/img/filters/filter1.png";
import filter2 from "../../asset/img/filters/filter2.png";
import filter3 from "../../asset/img/filters/filter3.png";
import filter4 from "../../asset/img/filters/filter4.png";
import filter5 from "../../asset/img/filters/filter5.png";
import filter6 from "../../asset/img/filters/filter6.png";

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:white;
    flex-direction: column;
    align-items: center;
`;

export const FilterStyle = css`
    object-fit: contain;
    width: 10vw;
    margin-top: 4vh;
`;

export const Filter1 = styled.img.attrs({
    src: filter1,
    alt: "Filter",
  })`
    ${FilterStyle}
`;


export const Filter2 = styled.img.attrs({
    src: filter2,
    alt: "Filter",
  })`
    ${FilterStyle}
`;

export const Filter3 = styled.img.attrs({
    src: filter3,
    alt: "Filter",
  })`
    ${FilterStyle}
`;
export const Filter4 = styled.img.attrs({
    src: filter4,
    alt: "Filter",
  })`
    ${FilterStyle}
`;
export const Filter5 = styled.img.attrs({
    src: filter5,
    alt: "Filter",
  })`
    ${FilterStyle}
`;

export const Filter6 = styled.img.attrs({
    src: filter6,
    alt: "Filter",
  })`
    ${FilterStyle}
`;

export const FilterImgContainer = styled.div`
    display: flex;
    gap: 3vw;
    align-items: center;
    margin-bottom: 3vw;
`;

export const FilterContainer = styled.div`
    color: #666666;
    font-size: 25px;
    margin-top: 5vh;
    font-weight: 600;
`;
