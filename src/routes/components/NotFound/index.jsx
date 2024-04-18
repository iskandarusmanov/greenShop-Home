import React from "react";
import { routes } from "../../../constants/routes";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center mt-[200px]">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg border">
        <h2 className="text-4xl text-gray-800 font-bold mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href={routes.HOME} className="text-blue-500 hover:text-blue-700">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
