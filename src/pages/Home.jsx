/* eslint-disable react/prop-types */
import Navigation from "../components/Navigation";

function Home({ isAuth }) {
  return (
    <div>
      <Navigation />
      <h1 className="mt-20">Home page{isAuth ? "" : "you are not log in"}</h1>
    </div>
  );
}

export default Home;
