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
    yAxis: {
      display: false,
    },
  },
};

export const HourlyLineGraph = ({ weatherDetails }) => {
  // const weatherHourly = [...weatherDetails.hourly];
  return (
    <div style={{ padding: "0" }}>
      <Line data={data} options={options} style={{ padding: "0" }} />
    </div>
  );
};
