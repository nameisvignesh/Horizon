
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-horizon-dark p-4">
      <div className="glass-morphism rounded-xl p-10 max-w-md w-full text-center animate-scale-in">
        <AlertCircle className="h-16 w-16 text-horizon mx-auto mb-4" />
        <h1 className="text-5xl font-bold text-white mb-2">404</h1>
        <p className="text-xl text-gray-300 mb-6">Page not found</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-horizon hover:bg-horizon/90 text-black font-medium">
          <Link to="/" className="flex items-center">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
