import React from "react";
import styled, { css } from "styled-components";

interface Props {
  geoName: string;
  x: number;
  y: number;
}

function ToolTip({ x, y, geoName }: Props) {
  return (
    <Frame x={x} y={y} geoName={geoName}>
      {geoName} : 10
    </Frame>
  );
}

const Frame = styled.div<Props>`
  ${(props) =>
    props.geoName === ""
      ? css`
          display: none;
        `
      : css`
          width: 100px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          font-family: ${({ theme }) => theme.font.pretendard};
          font-weight: bold;
          z-index: 1;
          position: fixed;
          left: ${props.x + 10}px;
          top: ${props.y - 80}px;
          background: rgba(0, 0, 0, 0.8);
          color: ${({ theme }) => theme.color.white};
        `};
`;

export default ToolTip;
