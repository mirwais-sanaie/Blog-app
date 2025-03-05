import { useDarkMode } from "../context/DarkModeContext";

function About() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`
          ${
            isDarkMode ? "bg-black text-gray-100" : "text-[#364153]"
          } min-h-screen`}
    >
      <div className={`container pt-30 mx-auto px-4 py-20`}>
        <h1 className="mb-14 font-WorkSans font-WorkSans font-semibold text-center text-4xl ">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <img
              src="about.webp"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } w-full md:w-1/2`}
          >
            <p className="text-lg leading-relaxed">
              Welcome to <span className="font-semibold">My Blog App</span>, a
              platform where you can share your thoughts, ideas, and experiences
              with the world. Our mission is to create a community of passionate
              writers and readers who inspire and learn from each other.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Whether you&lsquo;re here to write your own posts or explore the
              creativity of others, we hope you find this space engaging and
              inspiring. Join us today and start sharing your story!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
