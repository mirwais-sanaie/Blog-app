/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useAuthContext } from "../context/FireAuthContext";
import { getDocs } from "firebase/firestore";

function Home() {
  const { isAuth } = useAuthContext();
  const [posts, setPosts] = useState([]);
  const { collectionDb } = useAuthContext();

  useEffect(
    function () {
      // Fetch posts only if they are not already fetched
      if (posts.length === 0) {
        async function getPosts() {
          try {
            const data = await getDocs(collectionDb);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          } catch (e) {
            console.log(e.message);
          }
        }
        getPosts();
      }
    },
    [collectionDb, posts.length, setPosts] // Add dependencies
  );
  return (
    <div>
      <Navigation />
      <h1 className="mt-20">Home page{isAuth ? "" : "you are not log in"}</h1>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="w-[400px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        {/* <img
          src="https://images.unsplash.com/photo-1615859131861-052f0641a60e"
          alt="Post"
          className="w-full h-[200px] object-cover"
        /> */}
        <button className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-red-100 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <p>{post.author.name}</p>
        <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}

export default Home;
