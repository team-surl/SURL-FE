import { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

interface DatesType {
  thisDay: number;
  week: number;
}

function Chart() {
  const date = new Date();
  const [dates, setDate] = useState<DatesType>({
    thisDay: 0,
    week: 0,
  });
  const { thisDay, week } = dates;
  const dataList = [1, 6, 3, 9, 4, 5, 10]; //더미 데이터
  const today = `${week}월 ${thisDay}일`;
  let dayLabels: any = [];
  useEffect(() => {
    setDate({
      thisDay: date.getDate(),
      week: date.getMonth(),
    });
  }, []);
  for (let i = thisDay - 6; i <= thisDay; i++) {
    dayLabels.push(`${week}월 ${i}일`);
  }

  console.log(dayLabels);

  const options: object = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 20, // y축 스케일에 대한 최소값 설정
            stepSize: 1, // y축 그리드 한 칸당 수치
          },
        },
      ],
    },
  };
  const data = {
    labels: dayLabels.map((day: any) => day),
    datasets: [
      {
        barThickness: 40,
        borderRadius: 30,

        data: dataList,
        backgroundColor: dayLabels.map((day: any) => day === today)
          ? "#6680B5"
          : "#A8B6D5",
      },
    ],
  };
  return <Bar data={data} options={options} />;
}

export default Chart;
