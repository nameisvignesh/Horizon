import React, { useEffect } from "react";

declare global {
  function windyInit(options: any, callback: (windyAPI: any) => void): void;
}

const Map = () => {
  useEffect(() => {
    const initWindyMap = () => {
      const options = {
        key: "rNV3lJwLizqsHpEg2oIyf0hrz2wgEsxh", // Your Windy API key
        lat: 20.5937, // Default latitude (center of India)
        lon: 78.9629, // Default longitude (center of India)
        zoom: 5, // Default zoom level
        verbose: false,
      };

      // @ts-ignore - windyInit is loaded from external script
      if (typeof windyInit === 'function') {
        windyInit(options, (windyAPI) => {
          console.log("Windy API initialized", windyAPI);
        });
      } else {
        console.error("Windy API not loaded");
      }
    };

    // Load Leaflet and Windy libraries
    const loadScripts = () => {
      const leafletScript = document.createElement("script");
      leafletScript.src = "https://unpkg.com/leaflet@1.4.0/dist/leaflet.js";
      leafletScript.async = true;
      document.body.appendChild(leafletScript);

      const windyScript = document.createElement("script");
      windyScript.src = "https://api.windy.com/assets/map-forecast/libBoot.js";
      windyScript.async = true;
      windyScript.onload = initWindyMap; // Initialize map after loading scripts
      document.body.appendChild(windyScript);
    };

    loadScripts();

    // Cleanup function
    return () => {
      const windyContainer = document.getElementById('windy');
      if (windyContainer) {
        windyContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="pt-16">
      <h1 className="text-3xl font-bold text-center py-5 text-horizon">Horizon Weather Map</h1>
      <div className="flex justify-center mb-4 relative z-10">
        {/* Controls can be added here if needed */}
      </div>
      <div id="windy" className="w-full h-[calc(100vh-12rem)]"></div>
    </div>
  );
};

export default Map;
