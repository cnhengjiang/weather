import React from "react";
import { useState } from "react";
import { fetchWeather } from "./services/weather";
import WeatherDisplay from "./components/WeatherDisplay";
import { useEffect } from "react";
import SearchBar from "components/SearchBar";
import styles from "./App.module.scss";
import { LocationData, WeatherData } from "types/types";

export default function App() {
  const [weather, setWeather] = useState<WeatherData[] | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const handleSearch = async (city: LocationData) => {
    setLocation(city);
    const data = await fetchWeather(city.id);
    data && setWeather(data);
  };
  useEffect(() => {
    setLocation({
      id: "101020600",
      label: "浦东新区",
      adm1: "上海市",
      adm2: "上海",
    });
    fetchWeather("101020600").then((data) => {
      data && setWeather(data);
    });
  }, []);
  return (
    <div className={styles.app}>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay location={location} data={weather} />
    </div>
  );
}
