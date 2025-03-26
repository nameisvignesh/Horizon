import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Sun, Moon, LogIn, UserPlus, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '@/hooks/useTheme';
import { useUser, SignOutButton, SignedIn, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Map', path: '/map' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/9ec8629e-1533-413e-95c9-d0a2325d1036.png" 
                alt="Horizon Weather Logo" 
                className="h-10 w-10 mr-2" 
              />
              <span className="text-horizon font-bold text-xl">Horizon</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-horizon bg-white/10'
                      : 'text-gray-300 hover:text-horizon hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {isSignedIn ? (
                <div className="ml-2 flex gap-3 items-center">
                  <h1 className="text-gray-300 text-sm hidden md:block">
                    Hi, {user.firstName || user.username}
                  </h1>
                  <div className="text-horizon">
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          userButtonAvatarBox: 'h-8 w-8',
                          userButtonTrigger: 'text-horizon hover:text-horizon/80',
                          userButtonPopoverCard: 'glass-morphism border-white/10',
                          userButtonPopoverActionButton: 'hover:bg-white/5',
                        }
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 ml-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex items-center text-gray-300 hover:text-horizon"
                    onClick={() => navigate('/sign-in')}
                  >
                    <LogIn className="h-4 w-4 mr-1" />
                    Sign In
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center border-white/10 text-gray-300 hover:text-horizon hover:bg-white/5"
                    onClick={() => navigate('/sign-up')}
                  >
                    <UserPlus className="h-4 w-4 mr-1" />
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 group"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ease-out my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
            </button>
            
            {isSignedIn && (
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'h-8 w-8',
                    userButtonTrigger: 'text-horizon hover:text-horizon/80',
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-morphism animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-horizon bg-white/10'
                    : 'text-gray-300 hover:text-horizon hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {!isSignedIn && (
              <div className="flex flex-col space-y-2 p-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex items-center justify-center text-gray-300 hover:text-horizon"
                  onClick={() => {
                    navigate('/sign-in');
                    setIsOpen(false);
                  }}
                >
                  <LogIn className="h-4 w-4 mr-1" />
                  Sign In
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center justify-center border-white/10 text-gray-300 hover:text-horizon hover:bg-white/5"
                  onClick={() => {
                    navigate('/sign-up');
                    setIsOpen(false);
                  }}
                >
                  <UserPlus className="h-4 w-4 mr-1" />
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;