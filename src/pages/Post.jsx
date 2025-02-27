/* eslint-disable react/prop-types */
import { useState } from "react";
import { auth } from "../config/firebase";
import { usePostsContext } from "../context/CreatePostProv";
import { useAuthContext } from "../context/FireAuthContext";

function Post({ post }) {
  const { deletePost } = usePostsContext();
  const { isAuth } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete(id) {
    setIsLoading(true);
    await deletePost(id);
    setIsLoading(false);
  }

  return (
    <li className="w-full md:w-1/4 mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[200px] object-cover"
          />
        )}
        {isAuth && post.author.id === auth?.currentUser?.uid && (
          <div className="absolute top-2 right-2 flex flex-col">
            <button
              className={`p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-red-100 transition-colors duration-300 group`}
              onClick={() => handleDelete(post.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-red-500 trash-icon ${
                  isLoading ? "hidden" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={`h-5 w-5 text-red-500 animate-spin loading-icon ${
                  isLoading ? "" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </button>

            <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-blue-100 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="p-6">
        <p>{post.author.name}</p>
        <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{post.content}</p>
      </div>
    </li>
  );
}

export default Post;
