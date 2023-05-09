import React from "react";
import styled from "styled-components";
import Header from "../common/header";
import ContryChart from "../chart/contryChart";
import DayChart from "../chart/dayChart";

function Statistics() {
  return (
    <>
      <Header></Header>
      <Frame>
        <Template>
          <Text>나라별 통계</Text>
          <ContryChart></ContryChart>
          <Text>일간 통계</Text>
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
const Text = styled.p`
  margin-top: 50px;
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.point1};
`;

export default Statistics;
