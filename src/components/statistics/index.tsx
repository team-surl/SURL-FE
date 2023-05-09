import React from "react";
import styled from "styled-components";
import Header from "../common/header";
import ContryChart from "../chart/contryChart";

function Statistics() {
  return (
    <>
      <Header></Header>
      <Frame>
        <Template>
          <ContryChart></ContryChart>
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
  width: 1200px;
  min-height: 1000px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export default Statistics;
