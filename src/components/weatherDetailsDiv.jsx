import React from "react";
import { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";
import sun from "../images/sun.png";
import { HourlyLineGraph } from "./HourlyLineGraph";

export const WeatherDetailsDiv = () => {
  const { weatherDetails } = useContext(GlobalContext);
  // console.log("required data", weatherDetails);

  if (weatherDetails) {
    var sunrise = new Date(weatherDetails.current.sunrise * 1000);
    var sr = sunrise.getHours() + ":" + sunrise.getMinutes() + "am";
    var sunset = new Date(weatherDetails.current.sunset * 1000);
    var st = sunset.getHours() - 12 + ":" + sunset.getMinutes() + "pm";
  }

  return (
    <div className="detailsBox">
      <div>
        <span id="detailsBoxDegree">
          {weatherDetails && Math.floor(weatherDetails.current.temp) + "°C"}
        </span>
        <img alt="climateImg" src={sun} id="climateImgDetailsDiv" />
      </div>
      {weatherDetails && <HourlyLineGraph weatherDetails={weatherDetails} />}
      <div id="pressureHumidity">
        <div className="sunTime">
          <div className="sunTime">Pressure</div>
          <div className="sunTime detailsBoxSF">
            {weatherDetails && weatherDetails.daily[0].pressure}hpa
          </div>
        </div>
        <div className="sunTime">
          <div className="sunTime">Humidity</div>
          <div className="sunTime detailsBoxSF">
            {weatherDetails && weatherDetails.daily[0].humidity}%
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="sunTime">
          <div className="sunTime">Sunrise</div>
          <div className="sunTime detailsBoxSF">{sr}</div>
        </div>
        <div className="sunTime">
          <div className="sunTime">Sunset</div>
          <div className="sunTime detailsBoxSF">{st}</div>
        </div>
      </div>
    </div>
  );
};
