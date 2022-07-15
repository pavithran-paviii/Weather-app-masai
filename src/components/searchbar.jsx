import axios from "axios";
import React, { useEffect} from "react";
import pin from "../images/pin.png";
import search from "../images/magnifiying-glass.png";
import { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";

let api_key = "22ba6672b96680a919ff4909f70e4bad";
let api = `https://api.openweathermap.org/data/2.5/onecall?`;

export const Searchbar = () => {
  const {
    setWeatherDetails,
    // weatherDetails,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    city,
    setCity,
  } = useContext(GlobalContext);
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  // const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((response) => {
      // console.log("response", response.coords);
      setLatitude(response.coords.latitude);
      setLongitude(response.coords.longitude);
    });
  }, []);

  useEffect(() => {
    let finalapi = `${api}lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely&appid=${api_key}`;
    latitude &&
      axios.get(finalapi).then((res) => {
        // console.log("res", res.data);
        setWeatherDetails(res.data);
      });
  }, [latitude, longitude]);

  function searchDetails() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      )
      .then((res) => {
        setLatitude(res.data.coord.lat);
        setLongitude(res.data.coord.lon);
      });
    // console.log(city);
  }

  return (
    <div id="searchbarDiv">
      <img alt="locationpin" src={pin} id="locationIcon" />
      <input
        placeholder="Enter your city here"
        className="searchBox"
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchDetails();
          }
        }}
      />
      <img
        alt="search"
        src={search}
        id="locationSearch"
        onClick={searchDetails}
      />
    </div>
  );
};
