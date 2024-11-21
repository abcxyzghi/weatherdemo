import React from 'react';
import { Card } from 'antd';

interface WeatherProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

const WeatherCard: React.FC<WeatherProps> = ({ city, temperature, description, icon }) => {
  return (
    <Card className="weather-card" title={`Weather in ${city}`} bordered={false}>
      <p>Temperature: {temperature}°C</p>
      <p>{description}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="weather-icon" />
    </Card>
  );
};

export default WeatherCard;
