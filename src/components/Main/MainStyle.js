import styled, { css } from "styled-components";
import banner from "../../asset/img/Banner.png";

import filter1 from "../../asset/img/filters/filter1.png";
import filter2 from "../../asset/img/filters/filter2.png";
import filter3 from "../../asset/img/filters/filter3.png";
import filter4 from "../../asset/img/filters/filter4.png";
import filter5 from "../../asset/img/filters/filter5.png";
import filter6 from "../../asset/img/filters/filter6.png";

import background1 from "../../asset/img/background/background1.png";
import background2 from "../../asset/img/background/background2.png";
import background3 from "../../asset/img/background/background3.png";

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:white;
    flex-direction: column;
`;

export const PageContainer = styled.div`
    padding: 0 15vw;
`;

export const MainContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`;


export const BannerStyle = css`
    object-fit: contain;
    width: 100%;
    margin-top: 4vh;
`;

export const Banner = styled.img.attrs({
    src: banner,
    alt: "banner",
  })`
    ${BannerStyle}
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


export const BackGroundContainer = styled.div`
    display: flex;
    gap: 3vw;
    align-items: center;
    margin-bottom: 3vw;
    align-items: center;
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


export const BackGroundStyle = css`
    object-fit: contain;
    width: 23vw;
    margin-top: 4vh;
`;

export const BackGround1 = styled.img.attrs({
    src: background1,
    alt: "BackGround",
  })`
    ${BackGroundStyle}
`;


export const BackGround2 = styled.img.attrs({
    src: background2,
    alt: "BackGround",
  })`
    ${BackGroundStyle}
`;

export const BackGround3 = styled.img.attrs({
    src: background3,
    alt: "BackGround",
  })`
    ${BackGroundStyle}
`;
