import styled, { css } from "styled-components";


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
`;

export const InfoContent = styled.div`
    font-size: 20px;
    font-weight: 400;
`;

export const UserName = styled.div`
    font-size: 18px;
    font-weight: 400;
`;

export const InfoTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: #000;
`;


export const TagContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 1vw;
    font-weight: 600;
`;

export const Tag = styled.div`
    padding: 1vw 2vw;
    border-radius: 20px;
    font-size: 15px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 3vw;
`;

export const InfoType = styled.div`
    font-size: 20px;
    color: #DB10B6;
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
`;

export const MainFilterContainer = styled.div`
    display:flex;
    flex-direction: row;
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


export const MainFilterStyle = css`
    object-fit: contain;
    width: 15vw;
    margin-top: 4vh;
    margin-left: 10vw;
    margin-right: 7.5vw;
`;

export const MainFilter1 = styled.img.attrs({
    src: filter1,
    alt: "Filter",
  })`
    ${MainFilterStyle}
`;


export const MainFilter2 = styled.img.attrs({
    src: filter2,
    alt: "Filter",
  })`
    ${MainFilterStyle}
`;

export const MainFilter3 = styled.img.attrs({
    src: filter3,
    alt: "Filter",
  })`
    ${MainFilterStyle}
`;
export const MainFilter4 = styled.img.attrs({
    src: filter4,
    alt: "Filter",
  })`
    ${MainFilterStyle}
`;
export const MainFilter5 = styled.img.attrs({
    src: filter5,
    alt: "Filter",
  })`
    ${MainFilterStyle}
`;

export const MainFilter6 = styled.img.attrs({
    src: filter6,
    alt: "Filter",
  })`
    ${MainFilterStyle}
`;