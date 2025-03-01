import { Link } from "react-router-dom";

function SecureCreatePost() {
  return (
    <div className="mt-30 text-center mb-150">
      <h1 className="text-3xl font-bold mb-4">
        First please Login to app to create posts :
      </h1>
      <button className="transition-all px-3 py-1 duration-200 hover:bg-gray-100 border border-gray-200 rounded-md">
        <Link to={"/login"}>Login page</Link>
      </button>
    </div>
  );
}

export default SecureCreatePost;
