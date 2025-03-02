import Navigation from "../components/Navigation";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Navigation />
      <div className="container mt-15 mx-auto px-4 py-10">
        <h1 className="mb-12 font-WorkSans font-WorkSans font-semibold text-center text-4xl text-[#364153]">
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

          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to <span className="font-semibold">My Blog App</span>, a
              platform where you can share your thoughts, ideas, and experiences
              with the world. Our mission is to create a community of passionate
              writers and readers who inspire and learn from each other.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Whether you&lsquo;re here to write your own posts or explore the
              creativity of others, we hope you find this space engaging and
              inspiring. Join us today and start sharing your story!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
