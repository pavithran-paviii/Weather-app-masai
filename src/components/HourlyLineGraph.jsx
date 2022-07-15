import { Line } from "react-chartjs-2";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const t = new Date();
let ct = t.getHours();

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
      min: ct - 12,
      max: 17,
    },
    yAxis: {
      display: false,
    },
  },
};

export const HourlyLineGraph = ({ weatherDetails }) => {
  const weatherHourly = [...weatherDetails.hourly];
  const [option, setOption] = useState(options);

  const today = new Date();
  let labels = [];
  let currentTime = today.getHours();
  // setOption((option.scales.max = currentTime));

  for (let i = 0; i < 24; i++) {
    if (currentTime === 24) currentTime = 0;
    if (currentTime > 12) {
      labels.push(currentTime - 12);
    } else {
      labels.push(currentTime);
    }
    currentTime++;
  }

  const data = {
    labels,
    datasets: [
      {
        data: weatherHourly.slice(0, 24).map((hourlyData) => hourlyData.temp),
        borderColor: "#4dc0f5",
        backgroundColor: "white",
      },
    ],
  };

  function chartMove(event, op) {
    if (event.deltaY > 0) {
      op.scales.x.min += 1;
      op.scales.x.max += 1;
      let max = op.scales.x.max;
      let min = op.scales.x.min;
      if (max > 24) {
        max = 17;
        min = ct - 12;
      }
      setOption({
        ...op,
        scales: {
          x: {
            ticks: {
              maxRotation: 0,
              minRotation: 0,
            },
            min: min,
            max: max,
          },
          yAxis: {
            display: false,
          },
        },
      });
    } else if (event.deltaY < 0) {
      op.scales.x.min -= 1;
      op.scales.x.max -= 1;
      console.log(event.deltaY);
      console.log(op.scales.x.max, "max");
      console.log(op.scales.x.min, "min");
      let max = op.scales.x.max;
      let min = op.scales.x.min;
      if (max < 24) {
        max = 17;
        min = 0;
      }
      setOption({
        ...op,
        scales: {
          x: {
            ticks: {
              maxRotation: 0,
              minRotation: 0,
            },
            min: min,
            max: max,
          },
          yAxis: {
            display: false,
          },
        },
      });
    }
  }

  return (
    <div style={{ padding: "0" }}>
      <Line
        id="myChart"
        data={data}
        options={option}
        style={{ padding: "0" }}
        onWheel={(e) => chartMove(e, option)}
      />
    </div>
  );
};
