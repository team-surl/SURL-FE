import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import styled from "styled-components";
ChartJS.register(...registerables);

interface Props {
  dataList: number[];
  dataLabels: string[];
}

function MainChart({ dataList, dataLabels }: Props) {
  let dataColor: string[] = [];
  for (let i = 0; i < dataList.length; i++) {
    if (i === dataList.length - 1) {
      dataColor.push("#A8B6D5");
    } else {
      dataColor.push("#6680B5");
    }
  }

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
          stepSize: 2, // y축 그리드 한 칸당 수치
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
export default MainChart;
