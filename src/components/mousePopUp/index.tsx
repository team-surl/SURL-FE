import React from "react";
import styled, { css } from "styled-components";

interface Props {
  geoName: string;
  x: number;
  y: number;
  children: string;
}

function PopUp({ x, y, geoName, children }: Props) {
  console.log(x, y);
  return (
    <Frame x={x} y={y} geoName={geoName}>
      {children}
    </Frame>
  );
}

const Frame = styled.div<Props>`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid black;
  font-family: ${({ theme }) => theme.font.pretendard};
  font-weight: bold;
  z-index: 1;
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;

  ${(props) =>
    props.geoName === "" &&
    css`
      display: none;
    `};
`;

export default PopUp;
