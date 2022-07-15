import React from "react";
import { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import { DailyWeather } from "./dailyWeather";

export const WeeklyWeather = () => {
  const { weatherDetails } = useContext(GlobalContext);
  
  if (weatherDetails) {
    var dailyData = weatherDetails.daily;
  }
  return (
    <div id="weeklyWeatherDiv">
      {weatherDetails &&
        dailyData.map((data) => {
          return <DailyWeather data={data} key={data.dt} />;
        })}
    </div>
  );
};
