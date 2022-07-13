import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/searchbar";
import { WeatherDetailsDiv } from "./components/weatherDetailsDiv";
import { WeeklyWeather } from "./components/weeklyWeather";

function App() {
  const [weatherDetails, setWeatherDetails] = useState();
  console.log("weather details", weatherDetails);

  return (
    <div className="App">
      <Searchbar
        setWeatherDetails={setWeatherDetails}
        weatherDetails={weatherDetails}
      />
      <WeeklyWeather weatherDetails={weatherDetails} />
      <WeatherDetailsDiv weatherDetails={weatherDetails} />
    </div>
  );
}

export default App;
