import styled from "styled-components";
import { Logo } from "../../../assets/img";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Frame>
      <LogoImg
        onClick={() => {
          window.location.replace("/");
        }}
        src={Logo}
      ></LogoImg>

      <LinkText to="/statistics">통계</LinkText>
    </Frame>
  );
}

const Frame = styled.div`
  width: 100vw;
  height: 80px;
  margin-bottom: 100px;
  background: ${({ theme }) => theme.color.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 48px;
  cursor: pointer;
`;

const LinkText = styled(Link)`
  position: absolute;
  right: 10%;
  font-family: ${({ theme }) => theme.font.pretendard};
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Header;
