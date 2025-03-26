
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface WeatherSearchProps {
  searchInput: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({
  searchInput,
  handleInputChange,
  handleSearch
}) => {
  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Input
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            placeholder="Enter city, state or country"
            className="pl-10 bg-horizon-gray/50 border-white/10 text-white placeholder:text-gray-400 focus:ring-horizon focus-visible:ring-horizon h-12"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <Button 
          type="submit" 
          className="bg-horizon hover:bg-horizon/90 text-black font-medium h-12"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default WeatherSearch;
