import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function Footer() {
  const { isDarkMode } = useDarkMode();
  return (
    <footer
      className={`${
        isDarkMode
          ? "bg-black border-gray-700 text-white"
          : "bg-gray-100 border-gray-100"
      } backdrop-blur-md border-t py-6`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">My Blog App</h3>
            <p className="text-sm">© 2025 My Blog App. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/about"
              className="hover:text-gray-400 transition duration-200"
            >
              About
            </Link>
            <Link
              to="/createpost"
              className="hover:text-gray-400 transition duration-200"
            >
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
