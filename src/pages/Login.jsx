/* eslint-disable react/prop-types */
import Navigation from "../components/Navigation";
import { useAuthContext } from "../context/FireAuthContext";

function Login() {
  const { handleSignIn, isAuth } = useAuthContext();
  return (
    <div>
      <Navigation />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Sign up With google
          </h1>
          <button
            onClick={handleSignIn}
            className="flex items-center justify-center bg-black text-white px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.8H24v8.4h11.3c-1.5 4.7-5.8 8.1-11.3 8.1-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 4.1 29.6 2 24 2 12.9 2 4 10.9 4 22s8.9 20 20 20c11.1 0 20-8.9 20-20 0-1.3-.1-2.6-.4-3.8z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 12.3l6.6 4.8C14.7 12.6 19 10 24 10c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 4.1 29.6 2 24 2 16.3 2 9.7 6.1 6.3 12.3z"
              />
              <path
                fill="#4CAF50"
                d="M24 42c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-1.7 1.2-3.8 1.9-6.2 1.9-5.5 0-10.2-3.6-11.8-8.6l-6.6 5.1C9.7 37.9 16.3 42 24 42z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.8H24v8.4h11.3c-.7 2.2-2.2 4.1-4.1 5.4l6.2 5.2c3.6-3.3 5.9-8.1 5.9-13.6 0-1.3-.1-2.6-.4-3.8z"
              />
            </svg>
            Login with Google
          </button>

          <div className="flex gap-5 mt-3 justify-center">
            <button
              className={`bg-gray-200 px-3 py-1 border border-black ${
                !isAuth ? "" : "text-red-600 cursor-not-allowed"
              }`}
              disabled={!isAuth}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
