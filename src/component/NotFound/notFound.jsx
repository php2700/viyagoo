// NotFoundPage.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/logo1.png";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const suggestedPath = `/viya${currentPath}`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-xl shadow-xl p-10 max-w-lg text-center bg-white">

        {/* 404 */}
                {/* <h1 className="text-3xl font-extrabold text-blue-600 mb-4">
                404
                </h1> */}

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-500 mb-4">
         <span className="text-3xl font-extrabold text-blue-600 mb-4">404!</span> {" "} Page Not Found
        </h2>

        {/* Path */}
        <p className="text-gray-600 mb-4">
          <span className="font-mono text-gray-700">{currentPath}</span>
        </p>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          We could not find the above page on our servers.
        </p>

        {/* Suggestion */}
        <p className="text-gray-700 font-bold mb-6">
          Did you mean:{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate(suggestedPath)}
          >
            {suggestedPath}
          </span>
          ?
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
