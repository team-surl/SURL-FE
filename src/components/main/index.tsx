import React from "react";
import styled from "styled-components";
import Header from "../common/header";
import { LinkImg } from "../../assets/img";

function Main() {
  return (
    <>
      <Header></Header>
      <Frame>
        <Template>
          <URLBox>
            <Icon src={LinkImg} />
            <URLInput placeholder="단축할 링크를 입력해주세요." />
            <BTN>링크단축</BTN>
          </URLBox>
          <Text>방문자 통계</Text>
          <Chart></Chart>
        </Template>
      </Frame>
    </>
  );
}

const Frame = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template = styled.div`
  width: 900px;
  height: 750px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const URLBox = styled.div`
  width: 600px;
  height: 60px;
  border-radius: 30px;
  background: ${({ theme }) => theme.color.point4};
  margin-bottom: 180px;
  display: flex;
  align-items: center;
  padding: 0px 6px 0px 20px;
`;

const Icon = styled.img``;

const URLInput = styled.input`
  width: 440px;
  font-family: ${({ theme }) => theme.font.pretendard};
  font-size: 18px;
  font-weight: 500;
  background: none;
  border: none;
  margin-left: 20px;
  outline: none;
`;

const BTN = styled.button`
  width: 110px;
  height: 50px;
  background: ${({ theme }) => theme.color.point2};
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.pretendard};
  font-weight: bold;
  border: none;
  border-radius: 30px;
  margin-left: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.pretendard};
  font-weight: bold;
  margin-bottom: 20px;
`;

const Chart = styled.div`
  width: 750px;
  height: 350px;
  border: solid black;
`;

export default Main;
