import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import styled from "styled-components";
ChartJS.register(...registerables);

interface Props {
  dataList: number[];
  dataLabels: string[];
}

function DayChart({ dataList, dataLabels }: Props) {
  let dataColor: string[] = [];
  for (let i = 0; i < dataList.length; i++) {
    if (i === dataList.length - 1) {
      dataColor.push("#A8B6D5");
    } else {
      dataColor.push("#6680B5");
    }
  }

  //일주일 전부터 오늘 날짜까지 구하기
  // let date = new Date();
  // const thisday = date.getDate();
  // const thisMonth = date.getMonth() + 1;

  // for (let i = 0; i <= 7; i++) {
  //   if (thisday - i <= 0) {
  //     let weekAgo = date.setDate(thisday - i);
  //     date = new Date(weekAgo);
  //     const day = `${thisMonth - 1}월 ${date.getDate()}일`;
  //     dayLabels.unshift(day);
  //   } else {
  //     let weekAgo = date.setDate(thisday - i);
  //     date = new Date(weekAgo);
  //     const day = `${thisMonth}월 ${date.getDate()}일`;
  //     dayLabels.unshift(day);
  //   }
  // }

  const options: object = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        ticks: {
          min: 10, // y축 스케일에 대한 최소값 설정
          stepSize: 1, // y축 그리드 한 칸당 수치
        },
      },
    },
  };
  const data = {
    labels: dataLabels,
    datasets: [
      {
        barThickness: 40,
        borderRadius: 30,
        data: dataList,
        backgroundColor: dataColor,
      },
    ],
  };
  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}

const ChartContainer = styled.div`
  width: 750px;
  height: 350px;
  margin-bottom: 50px;
`;
export default DayChart;
