import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import Loader from "./Loader";

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDoc = doc(db, "Posts", postId);
        const postDetails = await getDoc(postDoc);
        if (postDetails.exists()) {
          setPost({ id: postDetails.id, ...postDetails.data() });
        } else {
          console.log("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!post) {
    return <p className="text-center text-red-500 mt-10">Post not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Post Image */}
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>

          <div className="flex items-center space-x-4">
            {post.author.photoURL && (
              <img
                src={post.author.photoURL}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
            )}
            <p className="text-gray-600">{post.author.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
