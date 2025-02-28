import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../context/FireAuthContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleSignOut, isAuth, user } = useAuthContext();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Desktop Navigation */}
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
          </div>

          {/* Login Button - Always Visible */}
          <div className="absolute right-0">
            {isAuth ? (
              <div className="flex space-x-3">
                <div className="flex space-x-2 items-center text-sm text-stone-900">
                  <span>
                    {user?.photoURL && (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-9 h-9 rounded-full"
                      />
                    )}
                  </span>
                  <span>{user?.displayName}</span>
                </div>
                <button
                  onClick={() => handleSignOut()}
                  className="transition-all px-3 py-1 duration-200 hover:bg-gray-100 border border-gray-200 rounded-md"
                >
                  Log out
                </button>
              </div>
            ) : (
              <button className="transition-all px-3 py-1 duration-200 hover:bg-gray-100 border border-gray-200 rounded-md">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition-colors duration-200"
            >
              <IoMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
            {/* <Link
              to="login"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
