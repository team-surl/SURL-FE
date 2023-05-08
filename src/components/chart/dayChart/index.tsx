import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

function Chart() {
  const dayLabels: String[] = [];
  const dataList = [1, 6, 3, 9, 4, 5, 10]; //더미 데이터

  let date = new Date();
  const thisday = date.getDate();
  const thisMonth = date.getMonth() + 1;

  for (let i = 0; i < 7; i++) {
    if (thisday - i <= 0) {
      let weekAgo = date.setDate(thisday - i);
      date = new Date(weekAgo);
      const day = `${thisMonth - 1}월 ${date.getDate()}일`;
      dayLabels.unshift(day);
    } else {
      let weekAgo = date.setDate(thisday - i);
      date = new Date(weekAgo);
      const day = `${thisMonth}월 ${date.getDate()}일`;
      dayLabels.unshift(day);
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
          min: 20, // y축 스케일에 대한 최소값 설정
          stepSize: 1, // y축 그리드 한 칸당 수치
        },
      },
    },
  };
  const data = {
    labels: dayLabels.map((day: String) => day),
    datasets: [
      {
        barThickness: 40,
        borderRadius: 30,
        data: dataList,
        backgroundColor: [
          "#6680B5",
          "#6680B5",
          "#6680B5",
          "#6680B5",
          "#6680B5",
          "#6680B5",
          "#A8B6D5",
        ],
      },
    ],
  };
  return <Bar data={data} options={options} />;
}

export default Chart;