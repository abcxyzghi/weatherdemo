import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { getWeather } from './axiosApi/weatherApi';
import WeatherCard from './components/WeatherCard';
import './styles/App.scss';

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const data = await getWeather(city);
      setWeather({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <div>
        <Input
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="primary" onClick={fetchWeather} loading={loading}>
          Get Weather
        </Button>
        {weather && <WeatherCard {...weather} />}
      </div>
    </div>
  );
};

export default App;
