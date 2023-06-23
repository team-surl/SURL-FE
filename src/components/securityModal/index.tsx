import React, { useState } from "react";
import styled from "styled-components";
import { Refresh } from "../../assets/img";
import GetCode from "../../apis/sortUrl/getCode";
import { customToast } from "../../utils/Toast";
import CreateSURL from "../../apis/sortUrl/createSURL";

interface Props {
  initialImage: string;
  initialCode: string;
  setClick: Function;
  urlInput: string;
  setSurl: Function;
}

function SecurityModal({
  initialImage,
  initialCode,
  setClick,
  urlInput,
  setSurl,
}: Props) {
  const [code, setCode] = useState({
    image: initialImage,
    securityCode: initialCode,
  });
  const [hover, setHover] = useState(false);
  const [input, setInput] = useState("");
  const { image, securityCode } = code;

  const reCode = () => {
    GetCode()
      .then((res) => {
        setCode({ image: res.data.image, securityCode: res.data.code });
        setInput("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const onSubmit = () => {
    setInput("");
    if (input === securityCode) {
      customToast("인증 성공", "success");
      setClick({
        surlClick: true,
        modalClick: false,
      });
      CreateSURL(urlInput)
        .then((res) => {
          setSurl(res.data.surl);
          customToast("SURL success!", "success");
        })
        .catch((err) => {
          console.log(err);
          customToast("Error", "error");
        });
    } else if (input === "") {
      customToast("보안문자를 입력해주세요.", "error");
    } else {
      customToast("보안문자가 다릅니다.", "error");
    }
  };
  return (
    <Frame>
      <Box>
        <InfoBox>보안문자를 입력해주세요</InfoBox>
        <CodeFrame src={`data:image/png;base64,${image}`}></CodeFrame>
        <ReCode
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={reCode}
        >
          다른 보안 문자를 받고 싶다면 <Refresh hover={hover}></Refresh>
        </ReCode>
        <CodeInputBox>
          <CodeInput
            onChange={onChange}
            placeholder="보안문자 입력"
            type="number"
            value={input}
            onKeyPress={handleOnKeyPress}
          ></CodeInput>
          <CodeBTN onClick={onSubmit}>확인</CodeBTN>
        </CodeInputBox>
      </Box>
    </Frame>
  );
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
const Box = styled.div`
  width: 700px;
  height: 700px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoBox = styled.div`
  width: 500px;
  height: 100px;
  border: solid 1px #ff858d;
  background: #fef2f2;
  color: ${({ theme }) => theme.color.gray400};
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodeFrame = styled.img`
  width: 400px;
  height: 180px;
  margin-top: 60px;
`;

const ReCode = styled.div`
  width: 330px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.color.gray400};
  font-size: 22px;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const CodeInputBox = styled.div`
  width: 450px;
  height: 60px;
  border: solid ${({ theme }) => theme.color.point};
  border-radius: 40px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 5px;
  justify-content: space-between;
`;

const CodeInput = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  font-size: 25px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    font-size: 25px;
    font-weight: bold;
  }
`;

const CodeBTN = styled.div`
  width: 120px;
  height: 50px;
  background: ${({ theme }) => theme.color.point};
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
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

export default SecurityModal;
