import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../../asset/img/logo.png";
import searchBar from "../../../asset/img/Search.png";

export const Wrapper = styled.div`
    width:85%;
    height:10vh;
    display:flex;

    align-items: center;
    justify-content: space-between;
    padding: 0 6vw;
`;

export const LogoStyle = css`
    object-fit: contain;
    width: 10vw;
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: "logo",
  })`
    ${LogoStyle}
`;

export const MemberName =  styled(NavLink)`
  font-size: 13px;
  font-weight: 600;
  color: #878787;
  text-decoration: none;
`;


export const SearchInput = styled.input`
  width: 30vw;
  padding: 10px 40px; // Adjusts padding to make room for background image
  font-size: 16px;
  color: #333;
  background: url(${searchBar}) no-repeat 10px center; // Positions the image within input
  background-size: 24px; // Adjusts image size if needed
  border: 1px solid #ccc;
  border-radius: 20px; // Rounds input borders

  ::placeholder {
    color: #888;
  }
`;


export const SearchBarStyle = css`
    object-fit: contain;
    height: 3.5vw;
`;

export const SearchBar = styled.img.attrs({
    src: searchBar,
    alt: "SearchBar",
  })`
    ${SearchBarStyle}
`;

