import "./HomeLoader.css";

function HomeLoader() {
  return (
    <div className="flex justify-center mt-20 pb-80">
      <div className="dot-wave">
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
      </div>
    </div>
  );
}

export default HomeLoader;
