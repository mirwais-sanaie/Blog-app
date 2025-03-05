import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useDarkMode } from "../context/DarkModeContext";

function DesktopNav() {
  const { isDarkMode } = useDarkMode();
  const styles = `${
    isDarkMode ? "hover:text-gray-500" : "text-gray-700 hover:text-gray-900"
  } transition-colors duration-200 font-medium`;
  return (
    <div className={`hidden md:flex items-center space-x-8 `}>
      <NavLink to="/" className={styles}>
        Home
      </NavLink>
      <NavLink to="/createpost" className={styles}>
        Create Post
      </NavLink>
      <NavLink to="/about" className={styles}>
        About
      </NavLink>

      <SearchBar />
    </div>
  );
}

export default DesktopNav;
