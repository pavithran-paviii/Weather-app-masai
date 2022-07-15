import React from "react";

export const DailyWeather = ({ data }) => {
  var today = new Date();

  if (data) {
    var dt = new Date(data.dt * 1000);
    switch (dt.getDay()) {
      case 0:
        var day = "Sun";
        break;
      case 1:
        var day = "Mon";
        break;
      case 2:
        var day = "Tue";
        break;
      case 3:
        var day = "Wed";
        break;
      case 4:
        var day = "Thur";
        break;
      case 5:
        var day = "Fri";
        break;
      default:
        var day = "Sat";
        break;
    }
  }

  return (
    <div
      id="dailyWeather"
      style={{
        border: today.getDate() === dt.getDate() ? "2px solid #4dc0f5" : null,
        background: today.getDate() === dt.getDate() ? "#dc9898" : null,
      }}
    >
      <div>{day}</div>
      <div>
        <span>{data.temp.max + "°"}</span>
        <span className="dailyWeatherBlock">{data.temp.min + "°"}</span>
      </div>
      <div>
        <img
          alt="climateImg"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          id="climateImg"
        />
      </div>
      <div className="dailyWeatherBlock">{data.weather[0].main}</div>
    </div>
  );
};
