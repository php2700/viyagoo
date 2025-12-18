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
      <div className="max-w-2xl w-full">
        {/* Compact Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Compact Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-3">404</h1>
            <p className="text-xl md:text-2xl font-semibold">Page Not Found</p>
            <p className="text-sm md:text-base mt-3 opacity-90 font-mono bg-black bg-opacity-20 inline-block px-3 py-1 rounded">
              {currentPath}
            </p>
          </div>

          {/* Compact Body */}
          <div className="p-6 md:p-8">
            <p className="text-center text-gray-600 mb-8 text-base">
              The page you're looking for doesn't exist or may have been moved.
            </p>

            {/* Compact Infographic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-50 border border-red-100 rounded-xl p-5 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm">Page Missing</h3>
                <p className="text-gray-600 text-xs mt-1">URL not found on server</p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3">
                  <Search className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm">Check Path</h3>
                <p className="text-gray-600 text-xs mt-1">Verify the URL</p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-5 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <ArrowRightCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm">Find Your Way</h3>
                <p className="text-gray-600 text-xs mt-1">Try home or suggestion</p>
              </div>
            </div>

            {/* Compact Suggestion */}
            <div className="bg-blue-50 border border-dashed border-blue-300 rounded-xl p-5 text-center mb-8">
              <p className="text-gray-700 text-sm mb-2">
                <span className="font-semibold">Did you mean:</span>
              </p>
              <button
                onClick={() => navigate(suggestedPath)}
                className="text-blue-700 hover:text-blue-900 font-mono text-sm underline hover:decoration-wavy inline-flex items-center gap-1"
              >
                {suggestedPath}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Compact Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>

              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Small Footer Note */}
        <p className="text-center text-gray-500 text-xs mt-6">
          If this persists, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;