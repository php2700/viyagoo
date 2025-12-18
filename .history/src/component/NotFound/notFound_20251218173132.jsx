// NotFoundPage.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AlertCircle, Search, Home, ArrowRightCircle, ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const suggestedPath = `/viya${currentPath}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section with Wave Background */}
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-10 text-center">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 1440 320" className="absolute bottom-0">
                <path
                  fill="currentColor"
                  d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 relative">
              404
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-3">
              Oops! Page Not Found
            </p>
            <p className="text-lg opacity-90 font-mono bg-black bg-opacity-20 inline-block px-4 py-2 rounded-lg">
              {currentPath}
            </p>
          </div>

          {/* Content Body */}
          <div className="p-10 md:p-14">
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. It might have been moved, renamed, or is temporarily unavailable.
            </p>

            {/* Infographic Steps - Modern Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Card 1 */}
              <div className="group relative bg-gradient-to-b from-red-50 to-white border border-red-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-5 group-hover:bg-red-200 transition">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Page Missing
                </h3>
                <p className="text-gray-600">
                  The requested URL was not found on our server.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-gradient-to-b from-amber-50 to-white border border-amber-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-5 group-hover:bg-amber-200 transition">
                  <Search className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Check the Path
                </h3>
                <p className="text-gray-600">
                  Try verifying the URL or look for similar content.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-gradient-to-b from-green-50 to-white border border-green-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-5 group-hover:bg-green-200 transition">
                  <ArrowRightCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Find Your Way
                </h3>
                <p className="text-gray-600">
                  Head home or try the suggested route below.
                </p>
              </div>
            </div>

            {/* Suggestion Box */}
            <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-2xl p-8 text-center mb-10">
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Did you mean:</span>
              </p>
              <button
                onClick={() => navigate(suggestedPath)}
                className="text-xl font-mono text-blue-700 hover:text-blue-900 underline decoration-2 underline-offset-4 hover:decoration-wavy transition-all inline-flex items-center gap-2 group"
              >
                {suggestedPath}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Home className="w-6 h-6" />
                Go to Homepage
              </button>

              <button
                onClick={() => navigate(-1)}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 mt-10 text-sm">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;