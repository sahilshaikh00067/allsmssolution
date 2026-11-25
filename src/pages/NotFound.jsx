import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-black text-white"
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  );
};

export default NotFound;