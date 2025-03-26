
import React from 'react';
import WeatherSearch from '@/components/WeatherSearch';
import CurrentWeather from '@/components/CurrentWeather';
import WeatherForecast from '@/components/WeatherForecast';
import WeatherLoader from '@/components/WeatherLoader';
import { useWeatherSearch } from '@/hooks/useWeatherSearch';
import { CloudSun } from 'lucide-react';

const Index = () => {
  const {
    searchInput,
    handleInputChange,
    handleSearch,
    weather,
    forecast,
    loading,
    error
  } = useWeatherSearch('Chennai');

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center">
            <CloudSun className="h-10 w-10 text-horizon mr-2" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Horizon <span className="text-horizon">Weather</span>
            </h1>
          </div>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Get accurate, real-time weather updates from around the world
          </p>
        </div>

        <div className="mb-10">
          <WeatherSearch
            searchInput={searchInput}
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
          />
        </div>

        {loading ? (
          <WeatherLoader />
        ) : error ? (
          <div className="text-center p-6 glass-morphism rounded-xl">
            <p className="text-red-400">{error}</p>
            <p className="text-gray-300 mt-2">
              Please try searching for a different location.
            </p>
          </div>
        ) : (
          <>
            {weather && <CurrentWeather weather={weather} />}
            {forecast && <WeatherForecast forecast={forecast} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Index;