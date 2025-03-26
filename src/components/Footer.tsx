import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-morphism mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/images/9ec8629e-1533-413e-95c9-d0a2325d1036.png" 
              alt="Horizon Weather Logo" 
              className="h-8 w-8 mr-2" 
            />
            <span className="text-horizon font-bold">Horizon Weather</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/nameisvignesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-horizon transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/vignesh-kumaran-562007314/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-horizon transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:horizonweather2024@gmail.com" className="text-gray-400 hover:text-horizon transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-horizon transition-colors">Home</Link>
            <Link to="/map" className="hover:text-horizon transition-colors">Map</Link>
            <Link to="/about" className="hover:text-horizon transition-colors">About</Link>
            <Link to="/contact" className="hover:text-horizon transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© Horizon 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
