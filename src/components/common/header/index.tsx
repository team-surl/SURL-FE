import React from "react";
import styled from "styled-components";
import { Logo } from "../../../assets/img";

function Header() {
  return (
    <Frame>
      <LogoImg src={Logo}></LogoImg>
      <LinkText>통계</LinkText>
    </Frame>
  );
}

const Frame = styled.div`
  width: 100vw;
  height: 80px;
  margin-bottom: 150px;
  background: ${({ theme }) => theme.color.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 48px;
`;

const LinkText = styled.span`
  position: absolute;
  right: 10%;
  font-family: ${({ theme }) => theme.font.pretendard};
  font-weight: bold;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
