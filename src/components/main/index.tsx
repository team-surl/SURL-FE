import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Header from "../common/header";
import { LinkImg, CopyImg, Download } from "../../assets/img";
import MainChart from "../chart/mainChart";
import { QRCodeCanvas } from "qrcode.react";
import { customToast } from "../../utils/Toast";
import useCopyClipBoard from "../../hooks/useTextCopy";
import GetCode from "../../apis/sortUrl/getCode";
import SecurityModal from "../securityModal";
import MainStats from "../../apis/stats/mainStats";

type objectType = {
  dataList: number[];
  dataLabels: string[];
};

function Main() {
  const [input, setInput] = useState<string>("");
  const [surl, setSurl] = useState<string>("");
  const [click, setClick] = useState({
    surlClick: false,
    modalClick: false,
  });
  const [, setCopy] = useCopyClipBoard();
  const [hover, setHover] = useState({
    downloadHover: false,
    linkHover: false,
    copyHover: false,
  });
  const { downloadHover, linkHover, copyHover } = hover;
  const { surlClick, modalClick } = click;
  const [code, setCode] = useState({
    image: "",
    securityCode: "",
  });
  const { image, securityCode } = code;
  const [dateData, setDateData] = useState<objectType>({
    dataList: [],
    dataLabels: [],
  });
  const { dataList, dataLabels } = dateData;

  useEffect(() => {
    MainStats()
      .then((res) => {
        setDateData({
          dataList: Object.values(res.data),
          dataLabels: Object.keys(res.data),
        });
        console.log(dataLabels, dataList);
      })
      .catch(() => customToast("잘못된 SURL 입니다.", "error"));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (surlClick) {
      e.preventDefault();
    } else {
      setInput(e.target.value);
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSURL(e); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const onSURL = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (input === "") {
      customToast("URL을 입력해주세요.", "error");
      e.preventDefault();
    } else if (surlClick === true) {
      customToast("이미 단축되었습니다.", "error");
      e.preventDefault();
    } else {
      GetCode()
        .then((res) => {
          setClick({ ...click, modalClick: true });
          console.log(res.data);
          setCode({
            image: res.data.image,
            securityCode: res.data.code,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCopyClipBoard = (text: string) => {
    //URL 복사
    setCopy(text);
  };

  const downloadQR = () => {
    //QR 다운로드
    let qrCodeURL: any = document
      .querySelector("canvas")
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  return (
    <>
      {modalClick && (
        <SecurityModal
          initialImage={image}
          initialCode={securityCode}
          setClick={setClick}
          urlInput={input}
          setSurl={setSurl}
        ></SecurityModal>
      )}
      <Header />
      <Frame>
        <Template>
          <URLBox surlClick={surlClick}>
            <Wrapper>
              <CursorPointer
                onClick={() => {
                  window.location.replace("/");
                }}
                onMouseOver={() => {
                  setHover({ ...hover, linkHover: true });
                }}
                onMouseLeave={() => {
                  setHover({ ...hover, linkHover: false });
                }}
              >
                <LinkImg hover={linkHover} />
              </CursorPointer>

              <URLInput
                placeholder="단축할 링크를 입력해주세요."
                onChange={onChange}
                value={input}
                onKeyPress={handleOnKeyPress}
              />
              <BTN onClick={onSURL}>링크단축</BTN>
            </Wrapper>
            {surlClick && (
              <>
                <SURLBox>
                  {surl}
                  <CursorPointer
                    onClick={() => handleCopyClipBoard(surl)}
                    onMouseOver={() => {
                      setHover({ ...hover, copyHover: true });
                    }}
                    onMouseLeave={() =>
                      setHover({ ...hover, copyHover: false })
                    }
                  >
                    <CopyImg hover={copyHover} />
                  </CursorPointer>
                </SURLBox>
                <QRContainer>
                  <QRCodeCanvas id="qrCodeEl" value={surl} />
                </QRContainer>
                <DownloadQR
                  hover={hover.downloadHover}
                  onMouseOver={() => {
                    setHover({ ...hover, downloadHover: true });
                  }}
                  onMouseLeave={() =>
                    setHover({ ...hover, downloadHover: false })
                  }
                  onClick={downloadQR}
                >
                  <Download hover={downloadHover} /> QR다운로드
                </DownloadQR>
              </>
            )}
          </URLBox>
          <Text>방문자 통계</Text>
          <MainChart
            dataList={dateData.dataList}
            dataLabels={dateData.dataLabels}
          />
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

const URLBox = styled.div<{ surlClick: boolean }>`
  width: 600px;
  ${({ surlClick }) =>
    surlClick
      ? css`
          border-radius: 30px 30px 0px 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `
      : css`
          border-radius: 30px;
        `};
  height: ${({ surlClick }) => (surlClick ? "400px" : "60px")};
  background: ${({ theme }) => theme.color.point4};
  margin-bottom: 150px;
  padding: 10px 10px 0px 20px;
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

const DownloadQR = styled.div<{ hover: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.pretendard};
  cursor: pointer;
  color: ${(props) =>
    props.hover
      ? css`
          ${({ theme }) => theme.color.point1}
        `
      : css`
          ${({ theme }) => theme.color.black}
        `};
`;

const CursorPointer = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export default Main;
