import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LoginButton from "./LoginButton";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Login Button - Always Visible */}
          <LoginButton />

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
        <MobileNav isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
