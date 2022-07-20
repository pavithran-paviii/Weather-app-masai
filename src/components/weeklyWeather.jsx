import React from "react";
import { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import { DailyWeather } from "./dailyWeather";

export const WeeklyWeather = () => {
  const { weatherDetails, changeDailyWeatherDiv } = useContext(GlobalContext);

  if (weatherDetails) {
    var dailyData = weatherDetails.daily;
  }
  return (
    <div id="weeklyWeatherDiv" onClick={changeDailyWeatherDiv}>
      {weatherDetails &&
        dailyData.map((data) => {
          return <DailyWeather data={data} key={data.dt} />;
        })}
    </div>
  );
};
