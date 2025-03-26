
import { ENV } from './env';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  timezone: number;
}

export interface ForecastData {
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
      deg: number;
    };
    dt_txt: string;
  }>;
  city: {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export const fetchWeather = async (location: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${ENV.WEATHER_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchForecast = async (location: string): Promise<ForecastData> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${ENV.WEATHER_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Forecast data not available');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};

export const getWeatherIcon = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

export const formatTime = (timestamp: number, timezone: number): string => {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const formatDay = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

export const getBackgroundClass = (weatherId: number, isDaytime: boolean): string => {
  // Weather condition codes: https://openweathermap.org/weather-conditions
  if (weatherId >= 200 && weatherId < 300) {
    return 'bg-gradient-to-br from-gray-900 to-gray-700'; // Thunderstorm
  } else if (weatherId >= 300 && weatherId < 400) {
    return 'bg-gradient-to-br from-gray-700 to-gray-500'; // Drizzle
  } else if (weatherId >= 500 && weatherId < 600) {
    return 'bg-gradient-to-br from-blue-900 to-gray-700'; // Rain
  } else if (weatherId >= 600 && weatherId < 700) {
    return 'bg-gradient-to-br from-blue-100 to-blue-300'; // Snow
  } else if (weatherId >= 700 && weatherId < 800) {
    return 'bg-gradient-to-br from-yellow-700 to-gray-600'; // Atmosphere (fog, haze)
  } else if (weatherId === 800) {
    return isDaytime 
      ? 'bg-gradient-to-br from-blue-400 to-blue-600' // Clear sky day
      : 'bg-gradient-to-br from-gray-900 to-blue-900'; // Clear sky night
  } else {
    return isDaytime
      ? 'bg-gradient-to-br from-blue-300 to-gray-400' // Cloudy day
      : 'bg-gradient-to-br from-gray-800 to-gray-600'; // Cloudy night
  }
};

export const isDaytime = (sunrise: number, sunset: number, current: number): boolean => {
  return current > sunrise && current < sunset;
};
