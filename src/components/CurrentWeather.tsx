import React from 'react';
import { 
  Cloud, 
  Droplets, 
  Wind, 
  Thermometer,
  Sunrise, 
  Sunset,
  Clock
} from 'lucide-react';
import { WeatherData } from '@/lib/weatherUtils';
import { formatTime, getWeatherIcon } from '@/lib/weatherUtils';

interface CurrentWeatherProps {
  weather: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather }) => {
  const weatherIcon = weather.weather[0].icon;
  const iconUrl = getWeatherIcon(weatherIcon);
  
  return (
    <div className="glass-morphism rounded-xl overflow-hidden w-full max-w-4xl mx-auto animate-scale-in">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {weather.name}, {weather.sys.country}
            </h2>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <Clock className="h-4 w-4 text-gray-300 mr-1" />
              <p className="text-sm text-gray-300">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          
          <div className="flex items-center">
            <img 
              src={iconUrl} 
              alt={weather.weather[0].description} 
              className="w-20 h-20 weather-icon"
            />
            <div className="ml-4 text-center">
              <h3 className="text-5xl font-bold text-white">
                {Math.round(weather.main.temp)}°C
              </h3>
              <p className="text-lg text-gray-300 capitalize">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-morphism rounded-lg p-4 flex flex-col items-center">
            <Thermometer className="h-6 w-6 text-horizon mb-2" />
            <p className="text-gray-300 text-sm">Feels Like</p>
            <p className="text-white font-semibold text-lg">{Math.round(weather.main.feels_like)}°C</p>
          </div>
          
          <div className="glass-morphism rounded-lg p-4 flex flex-col items-center">
            <Droplets className="h-6 w-6 text-horizon mb-2" />
            <p className="text-gray-300 text-sm">Humidity</p>
            <p className="text-white font-semibold text-lg">{weather.main.humidity}%</p>
          </div>
          
          <div className="glass-morphism rounded-lg p-4 flex flex-col items-center">
            <Wind className="h-6 w-6 text-horizon mb-2" />
            <p className="text-gray-300 text-sm">Wind Speed</p>
            <p className="text-white font-semibold text-lg">{weather.wind.speed} m/s</p>
          </div>
          
          <div className="glass-morphism rounded-lg p-4 flex flex-col items-center">
            <Cloud className="h-6 w-6 text-horizon mb-2" />
            <p className="text-gray-300 text-sm">Pressure</p>
            <p className="text-white font-semibold text-lg">{weather.main.pressure} hPa</p>
          </div>
        </div>
        
        <div className="mt-6 glass-morphism rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sunrise className="h-5 w-5 text-horizon mr-2" />
              <div>
                <p className="text-gray-300 text-sm">Sunrise</p>
                <p className="text-white font-medium">
                  {formatTime(weather.sys.sunrise, weather.timezone)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Sunset className="h-5 w-5 text-horizon mr-2" />
              <div>
                <p className="text-gray-300 text-sm">Sunset</p>
                <p className="text-white font-medium">
                  {formatTime(weather.sys.sunset, weather.timezone)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
