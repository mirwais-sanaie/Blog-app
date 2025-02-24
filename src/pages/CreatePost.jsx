import { useState } from "react";
import Navigation from "../components/Navigation";
import { addDoc } from "firebase/firestore";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/FireAuthContext";
import { usePostsContext } from "../context/CreatePostProv";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  const { posts, setPosts, collectionDb } = usePostsContext();

  async function createpost() {
    try {
      const newPost = {
        title,
        content,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      };

      const docRef = await addDoc(collectionDb, newPost);
      // Update the global state (posts) with the new post
      setPosts([...posts, { ...newPost, id: docRef.id }]);
      console.log(docRef.id);
      // Navigate back to the home page
      navigate("/");
      // Clear the form fields
      setContent("");
      setTitle("");
    } catch (e) {
      console.log(e.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;
    createpost();
  }
  return (
    <div>
      <Navigation />

      {isAuth ? (
        <div id="webcrumbs">
          <div className="w-[90%] lg:w-[40%] md:w-[60%] bg-white mx-auto rounded-lg shadow-lg p-8 mt-20">
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Create your own post
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Title of post
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter your title"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows="4"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Attachments
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition duration-300">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <span className="material-symbols-outlined text-4xl mb-2">
                            upload_file
                          </span>
                          <p className="mb-2 text-sm">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, PNG, JPG or GIF (MAX. 10MB)
                          </p>
                        </div>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200"
                  >
                    Submit Feedback
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="mt-30 text-center">
          <h1 className="text-3xl font-bold mb-4">
            First please Login to app to create posts :
          </h1>
          <button className="transition-all px-3 py-1 duration-200 hover:bg-gray-100 border border-gray-200 rounded-md">
            <Link to={"/login"}>Login page</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
