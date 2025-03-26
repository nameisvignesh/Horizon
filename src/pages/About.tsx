
import React from 'react';
import { Info, Calendar, CloudSun, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center">
            <Info className="h-10 w-10 text-horizon mr-2" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              About <span className="text-horizon">Us</span>
            </h1>
          </div>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Learn more about Horizon Weather and our mission
          </p>
        </div>

        <div className="glass-morphism rounded-xl p-6 md:p-8 mb-10 animate-scale-in">
          <div className="flex items-center mb-6">
            <CloudSun className="h-8 w-8 text-horizon mr-3" />
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
          </div>
          
          <p className="text-gray-300 mb-4">
            Horizon Weather was founded in April 2024 with a simple mission: to provide accurate, 
            easy-to-understand weather information to users worldwide. Our team of passionate 
            meteorologists and developers collaborated to create a platform that delivers 
            real-time weather data in a visually appealing and user-friendly manner.
          </p>
          
          <p className="text-gray-300 mb-4">
            We source our weather data from trusted meteorological services and use advanced 
            forecasting models to ensure you receive the most accurate information possible. 
            From current conditions to 5-day forecasts, Horizon Weather delivers comprehensive 
            weather information to help you plan your day with confidence.
          </p>
          
          <div className="flex items-center mt-8 mb-4">
            <Calendar className="h-6 w-6 text-horizon mr-2" />
            <h3 className="text-xl font-semibold text-white">Established: April 2024</h3>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Award className="h-7 w-7 text-horizon mr-2" />
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="glass-morphism border-white/10 overflow-hidden card-hover">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/b4af6a45-b864-4969-b095-a244523af88f.png" 
                alt="Vignesh" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-3">
              <h3 className="text-xl font-semibold text-white">Vignesh</h3>
              <p className="text-horizon">Founder</p>
              <Separator className="my-3 bg-white/10" />
            </CardContent>
          </Card>

          <Card className="glass-morphism border-white/10 overflow-hidden card-hover">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/f72ba24c-9c83-4903-b8e0-1d8a2ff033d1.png" 
                alt="Sharu Kesh" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-3">
              <h3 className="text-xl font-semibold text-white">Sharu Kesh</h3>
              <p className="text-horizon">Co-Founder</p>
              <Separator className="my-3 bg-white/10" />
            </CardContent>
          </Card>

          <Card className="glass-morphism border-white/10 overflow-hidden card-hover">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/d481b5f3-ae1e-4672-a63c-5920dc3a5e54.png" 
                alt="Udhaya Ganesh" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-3">
              <h3 className="text-xl font-semibold text-white">Udhaya Ganesh</h3>
              <p className="text-horizon">Co-Founder</p>
              <Separator className="my-3 bg-white/10" />
            </CardContent>
          </Card>
        </div>

        <div className="glass-morphism rounded-xl p-6 md:p-8 animate-scale-in">
          <h2 className="text-2xl font-bold text-white mb-4">Weather Data Sources</h2>
          <p className="text-gray-300 mb-6">
            Horizon Weather aggregates data from multiple reliable sources to provide you with the most accurate weather information:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-horizon-gray/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">OpenWeather API</h3>
              <p className="text-gray-300 text-sm">
                We use OpenWeather API for current weather conditions and 5-day forecasts, 
                providing comprehensive data including temperature, humidity, wind speed and more.
              </p>
            </div>
            
            <div className="bg-horizon-gray/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Windy API</h3>
              <p className="text-gray-300 text-sm">
                Our interactive weather maps are powered by Windy API, offering detailed 
                visualization of weather patterns, pressure systems, and wind currents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
