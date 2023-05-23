import React from "react";
import styled from "styled-components";
import Header from "../common/header";
import ContryChart from "../chart/contryChart";
import DayChart from "../chart/dayChart";

function Stats() {
  return (
    <>
      <Header></Header>
      <Frame>
        <Template>
          <StatsInputBox>
            <StatsInput placeholder="통계를 보려면 SURL을 입력하세요."></StatsInput>
            <StatsInputBTN>통계보기</StatsInputBTN>
          </StatsInputBox>
          <Text>방문자 통계</Text>
          <ContryChart></ContryChart>
          <DayChart></DayChart>
        </Template>
      </Frame>
    </>
  );
}

const Frame = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Template = styled.div`
  width: 1000px;
  min-height: 1000px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const StatsInputBox = styled.div`
  width: 450px;
  height: 50px;
  border: solid ${({ theme }) => theme.color.point};
  border-radius: 40px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 5px;
  justify-content: space-between;
`;
const StatsInput = styled.input`
  width: 100%;
  height: 90%;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.pretendard};
  ::placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

const StatsInputBTN = styled.div`
  width: 120px;
  height: 43px;
  background: ${({ theme }) => theme.color.point};
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.pretendard};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.point1};
  }
  &:active {
    background: ${({ theme }) => theme.color.point};
  }
`;

const Text = styled.p`
  margin-top: 50px;
  margin-bottom: -20px;
  font-size: 40px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.pretendard};
  color: ${({ theme }) => theme.color.point1};
`;

export default Stats;
