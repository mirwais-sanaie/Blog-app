/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { storage } from "../config/appwrite";
const BACKET_ID = "67bf47ef003621360df5";

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagePost, setImagePost] = useState(null);
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

      let imageUrl = null;
      if (imagePost) {
        const imageLoaded = await storage.createFile(
          BACKET_ID,
          "unique()",
          imagePost
        );
        imageUrl = storage.getFileView(BACKET_ID, imageLoaded.$id);
      }

      const docRef = await addDoc(collectionDb, { ...newPost, imageUrl });

      setPosts([...posts, { ...newPost, id: docRef.id, imageUrl }]);
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
      navigate("/");
      setContent("");
      setTitle("");
      setImagePost(null);
    }
  }

  async function deletePost(id) {
    const postDoc = doc(db, "Posts", id);
    try {
      await deleteDoc(postDoc);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (e) {
      console.log(e.message);
    }
  }

  async function updatePost(id, updatedTitle, updatedContent) {
    const postDoc = doc(db, "Posts", id);
    try {
      await updateDoc(postDoc, {
        title: updatedTitle,
        content: updatedContent,
      });
      const updatedPosts = posts.map((post) =>
        post.id === id
          ? { ...post, title: updatedTitle, content: updatedContent }
          : post
      );
      setPosts(updatedPosts);
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
        setImagePost,
        updatePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePostsContext() {
  return useContext(PostsContext);
}
