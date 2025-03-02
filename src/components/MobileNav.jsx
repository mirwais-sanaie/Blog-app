/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function MobileNav({ isMenuOpen }) {
  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen
          ? "max-h-48 opacity-100"
          : "max-h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link
          to="/"
          className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/createpost"
          className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
        >
          Create Post
        </Link>
        <Link
          to="/about"
          className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
        >
          About
        </Link>

        <SearchBar />
      </div>
    </div>
  );
}

export default MobileNav;
