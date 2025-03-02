import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavLink
        to="/"
        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
      >
        Home
      </NavLink>
      <NavLink
        to="/createpost"
        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
      >
        Create Post
      </NavLink>
      <NavLink
        to="/about"
        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
      >
        About
      </NavLink>

      <SearchBar />
    </div>
  );
}

export default DesktopNav;
