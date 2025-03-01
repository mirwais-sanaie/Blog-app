import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
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
              to="/contact"
              className="hover:text-gray-400 transition duration-200"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="hover:text-gray-400 transition duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
