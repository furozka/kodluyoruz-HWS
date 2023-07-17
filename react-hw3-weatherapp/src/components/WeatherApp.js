import React, { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import FetchData from "../services/serviceWeather";
import WeatherTable from "./WeatherApp/WeatherTable";

function WeatherApp() {
  const { setWeather, city, setCity } = useWeather();

  useEffect(() => {
    FetchData(city, setWeather);
  }, [city, setWeather]);

  return (
    <div>
      <h1>WeatherApp</h1>
      <select name="city" onChange={(e) => setCity(e.target.value)}>
        <option value={"Istanbul"}>Istanbul</option>
        <option value={"London"}>London</option>
        <option value={"Paris"}>Paris</option>
        <option value={"Amasya"}>Amasya</option>
        <option value={"Ankara"}>Ankara</option>
        <option value={"Roma"}>Roma</option>
        <option value={"San Fransisco"}>San Fransisco</option>
      </select>
      <WeatherTable/>
    </div>
  );
}

export default WeatherApp;
