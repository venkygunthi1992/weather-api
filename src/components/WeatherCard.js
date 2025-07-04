import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);

  const REACT_APP_OPENWEATHER_KEY = "977ec89c1fea5449e869f7b6974e0d78";

  useEffect(() => {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metric&appid=${REACT_APP_OPENWEATHER_KEY}`
    )
    .then((res) => setWeather(res.data))
    .catch((err) => console.error('Weather API error:', err));
  }, []);

  if (!weather) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="fixed top-6 right-6 bg-white rounded-xl shadow-xl p-4 w-64 z-50 animate-fadeIn">
      <h3 className="text-lg font-bold mb-2">Weather in {weather.name}</h3>
      <div className="flex items-center">
        <img src={iconUrl} alt={weather.weather[0].description} className="w-12 h-12" />
        <div className="ml-4">
          <p className="text-xl font-semibold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-sm capitalize text-gray-600">{weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;