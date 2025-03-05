import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function SecureCreatePost() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${
        isDarkMode ? "bg-black" : "bg-white"
      } min-h-screen text-center pt-30`}
    >
      <h1 className="text-3xl font-bold mb-4">
        First please Login to app to create posts :
      </h1>
      <button
        className={`${
          isDarkMode
            ? "hover:bg-gray-500 border-gray-200"
            : "hover:bg-gray-100 border-gray-500"
        } transition-all px-3 py-1 duration-200  border  rounded-md`}
      >
        <Link to={"/login"}>Login page</Link>
      </button>
    </div>
  );
}

export default SecureCreatePost;
