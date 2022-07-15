import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/searchbar";
import { WeatherDetailsDiv } from "./components/weatherDetailsDiv";
import { WeeklyWeather } from "./components/weeklyWeather";
import GlobalContext from "./Contexts/GlobalContext";

function App() {
  const [weatherDetails, setWeatherDetails] = useState();

  //Search bar
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");

  // console.log("weather details", weatherDetails);

  const GlobalValues = {
    setWeatherDetails,
    weatherDetails,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    city,
    setCity,
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={GlobalValues}>
        <Searchbar />
        <WeeklyWeather />
        <WeatherDetailsDiv />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
