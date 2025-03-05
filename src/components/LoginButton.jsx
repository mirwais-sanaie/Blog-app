import { Link } from "react-router-dom";
import { useAuthContext } from "../context/FireAuthContext";

function LoginButton() {
  const { handleSignOut, isAuth, user } = useAuthContext();

  return (
    <div className="absolute right-0">
      {isAuth ? (
        <div className="flex space-x-3">
          <div className="flex space-x-0.5 sm:space-x-1 items-center text-sm text-stone-900">
            <span className="">
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-9 h-9 rounded-full"
                />
              )}
            </span>
            {/* <span
              className={`text-xs sm:text-base ${
                isDarkMode ? "text-gray-200" : "text-base"
              }`}
            >
              {user?.displayName}
            </span> */}
          </div>
          <button
            onClick={() => handleSignOut()}
            className="transition-all px-3 py-1 duration-200 hover:bg-gray-400 border border-gray-200 rounded-md"
          >
            Log out
          </button>
        </div>
      ) : (
        <button className="transition-all px-3 py-1 duration-200 hover:bg-gray-400 border border-gray-200 rounded-md">
          <Link to="/login">Login</Link>
        </button>
      )}
    </div>
  );
}

export default LoginButton;
