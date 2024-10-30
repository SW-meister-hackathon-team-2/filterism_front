import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../../../asset/img/logo.png";
import searchBar from "../../../asset/img/Search.png";

export const Wrapper = styled.div`
    width:85%;
    height:10vh;
    display:flex;

    margin-top: 1vw;

    align-items: center;
    justify-content: space-between;
    padding: 0 6vw;
    align-items: center;
`;



export const ProfileContainer = styled.div`
    display: flex;
    margin-left: 8px;
    justify-content: center;
    gap: 1vw;
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


export const ProfileName =  styled(NavLink)`
  font-size: 15px;
  font-weight: 600;
  color: #878787;
  text-decoration: none;
  height: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.3vw;
`;

export const MemberName =  styled(NavLink)`
  font-size: 15px;
  font-weight: 600;
  color: #878787;
  text-decoration: none;
  height: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MemberProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; /* 원형으로 만듦 */
  cursor: pointer;
  object-fit: cover; /* 이미지 크기에 맞게 조정 */
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

