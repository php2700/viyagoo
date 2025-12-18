// NotFoundPage.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, AlertCircle, ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const suggestedPath = `/viya${currentPath}`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-xl shadow-xl p-10 max-w-2xl bg-white">

        {/* Header */}
        <h2 className="text-xl font-bold text-gray-500 text-center mb-2">
          <span className="text-4xl font-extrabold text-blue-600">404!</span>{" "}
          Page Not Found
        </h2>

        <p className="text-center text-gray-600 mb-6 font-mono">
          {currentPath}
        </p>

        {/* Info message */}
        <p className="text-gray-600 text-center mb-10">
          We could not find the above page on our servers.
        </p>

        {/* Infographic Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-4 border rounded-lg">
            <AlertCircle className="w-10 h-10 text-red-500 mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Page Missing</h3>
            <p className="text-gray-600 text-sm">
              The URL you entered does not exist or was removed.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-4 border rounded-lg">
            <Search className="w-10 h-10 text-yellow-500 mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Check Path</h3>
            <p className="text-gray-600 text-sm">
              The page may be available under a different route.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-4 border rounded-lg">
            <ArrowRight className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Go Correct</h3>
            <p className="text-gray-600 text-sm">
              Try navigating to the suggested or home page.
            </p>
          </div>

        </div>

        {/* Suggestion */}
        <p className="text-gray-700 font-bold text-center mb-6">
          Did you mean:{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate(suggestedPath)}
          >
            {suggestedPath}
          </span>
          ?
        </p>

        {/* Action */}
        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;
