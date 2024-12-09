
import React, { createContext, useState, useEffect } from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
import WeatherCondition from "./Components/WeatherCondition";
import WeatherWindAndHumidity from "./Components/WeatherWindAndHumidity";

// Create the context outside the component to avoid re-creating it on every render
export const weatherContext = createContext();

function App() {
  const [weatherData, setWeatherData] = useState({});

  const search = async (city) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_Key}&units=metric`;
      const response = await fetch(URL);
      const data = await response.json();
      setWeatherData({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        location:data.name,
        icon:data.weather[0].icon,
        visibility:data.visibility,
        pressure:data.main.pressure,
        min_temp:Math.round(data.main.temp_min),
        max_temp:Math.round(data.main.temp_max),
        description:data.weather[0].description

      });

      console.log(data);

    } catch (error) {
        alert(`Cannot find ${city}, please try near location there.`)
    }
  };

  useEffect(() => {
    search("Lagankhel");
  }, []);

  return (
    <weatherContext.Provider value={{ weatherData, setWeatherData, search }}>
      <div className="container">
        <div className="content">
          <SearchBar />
          <WeatherCondition />
          <WeatherWindAndHumidity />
        </div>
      </div>
    </weatherContext.Provider>
  );
}

export default App;
