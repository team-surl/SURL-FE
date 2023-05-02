import React from "react";
import styled from "styled-components";
import Header from "../common/header";

function Statistics() {
  return (
    <>
      <Header></Header>
      <Frame>
        <Template></Template>
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
  width: 900px;
  min-height: 700px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  margin-bottom: 100px;
`;

export default Statistics;
