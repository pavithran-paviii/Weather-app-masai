import { Line } from "react-chartjs-2";
import React from "react";
import { data } from "../data/data";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        maxRotation: 0,
        minRotation: 0,
      },
    },
    yAxis: {
      display: false,
    },
  },
};

export const HourlyLineGraph = ({ weatherDetails }) => {
  const weatherHourly = [...weatherDetails.hourly];

  const today = new Date();
  let labels = [];
  let currentTime = today.getHours();

  for (let i = 0; i < 24; i++) {
    if (currentTime === 24) currentTime = 0;
    if (currentTime > 12) {
      labels.push(currentTime - 12);
    } else {
      labels.push(currentTime);
    }
    currentTime++;
  }
  console.log("currentime", currentTime);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: weatherHourly.slice(0, 24).map((hourlyData) => hourlyData.temp),
        borderColor: "#4dc0f5",
        backgroundColor: "white",
      },
    ],
  };

  //testing end
  console.log(weatherHourly);
  return (
    <div style={{ padding: "0" }}>
      <Line data={data} options={options} style={{ padding: "0" }} />
    </div>
  );
};
