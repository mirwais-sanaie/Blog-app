/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { collection } from "firebase/firestore";
import { createContext, useContext, useMemo, useState } from "react";
import { db } from "../config/firebase";

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const collectionDb = useMemo(() => collection(db, "Posts"), []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, collectionDb }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePostsContext() {
  return useContext(PostsContext);
}
