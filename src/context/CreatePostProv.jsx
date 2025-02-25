/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { createContext, useContext, useMemo, useState } from "react";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const collectionDb = useMemo(() => collection(db, "Posts"), []);
  const navigate = useNavigate();

  async function createpost() {
    setIsLoading(true);
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
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
      navigate("/");
      setContent("");
      setTitle("");
    }
  }

  async function deletePost(id) {
    console.log(id);
    const postDoc = doc(db, "Posts", id);
    try {
      await deleteDoc(postDoc);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        collectionDb,
        deletePost,
        createpost,
        title,
        setTitle,
        content,
        setContent,
        setIsLoading,
        isLoading,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePostsContext() {
  return useContext(PostsContext);
}
