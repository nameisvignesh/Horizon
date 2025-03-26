
import React, { useRef, useEffect } from 'react';

interface WindyMapProps {
  className?: string;
}

const WindyMap: React.FC<WindyMapProps> = ({ className }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Function to initialize Windy API once the script has loaded
    const initializeWindy = () => {
      if (!mapContainer.current || !(window as any).windyInit) return;
      
      const options = {
        key: 'PsL-At-xpsPESgRzwy490KrKEqIwTGnG',
        verbose: false,
        lat: 13.0827,  // Chennai latitude
        lon: 80.2707,  // Chennai longitude
        zoom: 5,
      };

      (window as any).windyInit(options, (windyAPI: any) => {
        const { map } = windyAPI;
        // Add any map customization here
      });
    };

    // Check if Windy's API is already loaded
    if ((window as any).windyInit) {
      initializeWindy();
    } else {
      // If not loaded, create and append the script
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.js';
      script.async = true;
      script.onload = () => {
        const windyScript = document.createElement('script');
        windyScript.src = 'https://api.windy.com/assets/map-forecast/libBoot.js';
        windyScript.async = true;
        windyScript.onload = initializeWindy;
        document.body.appendChild(windyScript);
      };
      document.body.appendChild(script);
    }

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div ref={mapContainer} className={`w-full h-[500px] rounded-xl overflow-hidden ${className}`}></div>
  );
};

export default WindyMap;
