
import React from 'react';

const WeatherLoader: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      <div className="weather-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="text-gray-300 mt-4">Loading weather data...</p>
    </div>
  );
};

export default WeatherLoader;
