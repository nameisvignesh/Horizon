
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { fetchWeather, fetchForecast, WeatherData, ForecastData } from '@/lib/weatherUtils';

export const useWeatherSearch = (defaultLocation: string = 'Chennai') => {
  const [searchInput, setSearchInput] = useState('');
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Fetch weather on initial load and when location changes
  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const weatherData = await fetchWeather(currentLocation);
        setWeather(weatherData);
        
        const forecastData = await fetchForecast(currentLocation);
        setForecast(forecastData);
      } catch (err) {
        setError('Unable to fetch weather data. Please check the location and try again.');
        toast({
          title: 'Error',
          description: 'Unable to fetch weather data. Please check the location and try again.',
          variant: 'destructive'
        });
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, [currentLocation, toast]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    
    setCurrentLocation(searchInput);
    setSearchInput('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return {
    searchInput,
    setSearchInput,
    handleSearch,
    handleInputChange,
    currentLocation,
    weather,
    forecast,
    loading,
    error
  };
};
