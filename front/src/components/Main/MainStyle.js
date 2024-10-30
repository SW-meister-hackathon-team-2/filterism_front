import styled, { css } from "styled-components";
import banner from "../../asset/img/Banner.png";

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:white;
    flex-direction: column;
    align-items: center;
`;

export const BannerStyle = css`
    object-fit: contain;
    width: 80%;
`;

export const Banner = styled.img.attrs({
    src: banner,
    alt: "banner",
  })`
    ${BannerStyle}
`;
