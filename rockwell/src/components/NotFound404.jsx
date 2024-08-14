import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.jpg";
const NotFound404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <img src={error} alt="404" className="w-96" />
        {/* <h1 className="text-8xl font-bold text-gray-800">404</h1>
        <p className="text-2xl mt-4 text-gray-600">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p> */}
        <Link
          to="/auth/home"
          className="mt-6 inline-block p-2 bg-[#2A454E] text-white text-sm rounded-md hover:bg-[#1B2E35] transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
