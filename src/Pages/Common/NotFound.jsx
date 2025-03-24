import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex flex-col items-center justify-center text-white px-4">
      <Transition
        appear={true}
        show={true}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="text-center">
          <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>
          <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
          >
            Go Back Home
          </button>
        </div>
      </Transition>
    </div>
  );
};

export default NotFound;