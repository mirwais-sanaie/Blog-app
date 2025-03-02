import Navigation from "../components/Navigation";
import { useAuthContext } from "../context/FireAuthContext";
import { usePostsContext } from "../context/CreatePostProv";
import Loader from "./Loader";
import { useState } from "react";
import SecureCreatePost from "./SecureCreatePost";
import Footer from "./Footer";

function CreatePost() {
  const { isAuth } = useAuthContext();
  const {
    createpost,
    title,
    setTitle,
    content,
    setContent,
    isLoading,
    setImagePost,
  } = usePostsContext();
  const [fileName, setFileName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;
    createpost();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePost(file);
      setFileName(file.name);
    }
  };

  return (
    <div>
      <Navigation />

      {isAuth ? (
        <div className="mt-20">
          {isLoading && <Loader />}
          <div className="w-[90%] lg:w-[40%] md:w-[60%] bg-white mx-auto rounded-lg shadow-lg p-8 ">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-200"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-200"
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
                          {fileName && (
                            <p className="text-sm text-red-500 mt-2">
                              Selected file: {fileName}
                            </p>
                          )}
                        </div>
                        <input
                          onChange={handleFileChange}
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#364153] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <SecureCreatePost />
      )}

      <Footer />
    </div>
  );
}

export default CreatePost;
