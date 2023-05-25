import React from "react";
import styled, { css } from "styled-components";

interface Props {
  text: string;
  x: number;
  y: number;
}

function ToolTip({ x, y, text }: Props) {
  return (
    <Frame x={x} y={y} text={text}>
      {text}
    </Frame>
  );
}

const Frame = styled.div<Props>`
  ${(props) =>
    props.text === ""
      ? css`
          display: none;
        `
      : css`
          min-width: 80px;
          height: 50px;
          padding: 0px 10px 0px 10px;
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
