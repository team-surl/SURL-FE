import React, { useState } from "react";
import styled, { css } from "styled-components";
import Header from "../common/header";
import { LinkImg, CopyImg, Download } from "../../assets/img";
import Chart from "../chart";
import { QRCodeCanvas } from "qrcode.react";
import { customToast } from "../../utils/Toast";

function Main() {
  const [input, setInput] = useState<string>("");
  const [click, setClick] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (click) {
      e.preventDefault();
    } else {
      setInput(e.target.value);
    }
  };
  const onSURL = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (input === "") {
      customToast("URL을 입력해주세요.", "error");
      e.preventDefault();
    } else {
      customToast("SURL success!", "success");

      setClick(true);
    }
  };
  return (
    <>
      <Header></Header>
      <Frame>
        <Template>
          <URLBox click={click}>
            <Wrapper>
              <Icon
                onClick={() => {
                  window.location.replace("/");
                }}
                src={LinkImg}
              />
              <URLInput
                placeholder="단축할 링크를 입력해주세요."
                onChange={onChange}
                value={input}
              />
              <BTN onClick={onSURL}>링크단축</BTN>
            </Wrapper>
            {click && (
              <>
                <SURLBox>
                  https://www.figma.com <Icon src={CopyImg} />
                </SURLBox>
                <QRContainer>
                  <QRCodeCanvas value={input}></QRCodeCanvas>
                </QRContainer>
                <DownloadQR>
                  {" "}
                  <Icon src={Download}></Icon> QR다운로드
                </DownloadQR>
              </>
            )}
          </URLBox>
          <Text>방문자 통계</Text>
          <ChartContainer>
            <Chart></Chart>
          </ChartContainer>
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
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

const URLBox = styled.div<{ click: boolean }>`
  width: 600px;
  ${({ click }) =>
    click
      ? css`
          border-radius: 30px 30px 0px 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `
      : css`
          border-radius: 30px;
        `};
  height: ${({ click }) => (click ? "400px" : "60px")};
  background: ${({ theme }) => theme.color.point4};
  margin-bottom: 150px;
  padding: 10px 10px 0px 20px;
`;

const Icon = styled.img`
  cursor: pointer;
`;

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
  &:hover {
    background: ${({ theme }) => theme.color.point};
    cursor: pointer;
  }
  &:active {
    background: ${({ theme }) => theme.color.point1};
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-family: ${({ theme }) => theme.font.pretendard};
  font-weight: bold;
  margin-bottom: 20px;
`;

const ChartContainer = styled.div`
  width: 750px;
  height: 350px;
  margin-bottom: 50px;
`;

const SURLBox = styled.div`
  width: 350px;
  height: 60px;
  border-radius: 30px;
  border: solid ${({ theme }) => theme.color.point1};
  background: ${({ theme }) => theme.color.white};
  margin: 40px 0px 25px 0px;
  font-weight: bold;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.pretendard};
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 30px;
  justify-content: space-between;
`;

const QRContainer = styled.div`
  width: 160px;
  height: 160px;
  background: ${({ theme }) => theme.color.white};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const DownloadQR = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.pretendard};
  cursor: pointer;
`;

export default Main;
