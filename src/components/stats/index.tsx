import React, { useState } from "react";
import styled from "styled-components";
import Header from "../common/header";
import ContryChart from "../chart/contryChart";
import DayChart from "../chart/dayChart";
import DayStats from "../../apis/stats/dayStats";
import { customToast } from "../../utils/Toast";
import ToolTip from "../tooltip/index";
import WeekStats from "../../apis/stats/weekStats";
import WorldStats from "../../apis/stats/worldStatistics";
type chartDataType = {
  dataList: number[];
  dataLabels: string[];
};
function Stats() {
  const [input, setInput] = useState("");
  const [dateData, setDateData] = useState<chartDataType>({
    dataList: [],
    dataLabels: [],
  });
  const { dataList, dataLabels } = dateData;
  const [changeChart, setChangeChart] = useState<boolean>(false);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const { x, y } = xy;
  const [hover, setHover] = useState(false);
  const [geoList, setGeoList] = useState({});

  const mouseMove = (e: React.MouseEvent) => {
    setXY({ x: e.clientX, y: e.clientY });
  };

  const onHandleChart = (e: React.MouseEvent) => {
    setChangeChart(!changeChart);
    if (input === "") {
      e.preventDefault();
      customToast("값을 입력해주세요", "error");
    } else {
      changeChart
        ? DayStats(input.slice(20, input.length)) //URL의 프로토콜과 도메인 자르기
            .then((res) => {
              setDateData({
                dataLabels: Object.keys(res.data),
                dataList: Object.values(res.data),
              });
              customToast("통계 불러오기 성공!", "success");
            })
            .catch(() => customToast("통계 불러오기 실패", "error"))
        : WeekStats(input.slice(20, input.length))
            .then((res) => {
              setDateData({
                dataLabels: Object.keys(res.data),
                dataList: Object.values(res.data),
              });
              customToast("통계 불러오기 성공!", "success");
            })
            .catch(() => customToast("통계 불러오기 실패", "error"));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onStats = () => {
    DayStats(input.slice(20, input.length)) //URL의 프로토콜과 도메인 자르기
      .then((res) => {
        setDateData({
          dataLabels: Object.keys(res.data),
          dataList: Object.values(res.data),
        });
        customToast("통계 불러오기 성공!", "success");
      })
      .catch(() => customToast("통계 불러오기 실패", "error"));

    WorldStats(input.slice(20, input.length))
      .then((res) => {
        setGeoList(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header></Header>
      <Frame>
        <Template>
          <StatsInputBox>
            <StatsInput
              placeholder="통계를 보려면 SURL을 입력하세요."
              onChange={onChange}
              value={input}
            />
            <StatsInputBTN onClick={onStats}>통계보기</StatsInputBTN>
          </StatsInputBox>
          <Text>나라별 방문자 통계</Text>
          <ContryChart geoList={geoList} />
          <Text
            onMouseMove={mouseMove}
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            onClick={onHandleChart}
          >
            {changeChart ? "주간별 방문자 통계" : "일간별 방문자 통계"}
          </Text>
          {hover && (
            <ToolTip
              x={x}
              y={y}
              text={
                changeChart
                  ? "일간 통계를 보려면 클릭"
                  : "주간 통계를 보려면 클릭"
              }
            ></ToolTip>
          )}

          <DayChart dataList={dataList} dataLabels={dataLabels} />
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
  font-size: 40px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.pretendard};
  color: ${({ theme }) => theme.color.point1};
`;

export default Stats;
