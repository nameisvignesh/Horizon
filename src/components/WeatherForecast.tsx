
import React from 'react';
import { ForecastData, getWeatherIcon, formatDay } from '@/lib/weatherUtils';

interface WeatherForecastProps {
  forecast: ForecastData;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  // Get daily forecasts (one per day)
  const dailyForecasts = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5);
  
  return (
    <div className="mt-8 w-full max-w-4xl mx-auto animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="glass-morphism rounded-lg p-4 card-hover">
            <div className="flex flex-col items-center">
              <p className="text-gray-300 font-medium">
                {formatDay(day.dt)}
              </p>
              <img 
                src={getWeatherIcon(day.weather[0].icon)} 
                alt={day.weather[0].description} 
                className="w-16 h-16 my-2 weather-icon"
              />
              <p className="text-white font-semibold text-lg">{Math.round(day.main.temp)}°C</p>
              <p className="text-gray-400 text-sm text-center capitalize">
                {day.weather[0].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
