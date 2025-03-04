import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { PostsProvider } from "./context/CreatePostProv";

import { lazy, Suspense } from "react";
import Loader from "./pages/Loader";
import PostDetails from "./pages/PostDetails";

const Home = lazy(() => import("./pages/Home"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />} key={location.pathname}>
      <PostsProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:postId" element={<PostDetails />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </PostsProvider>
    </Suspense>
  );
}

export default App;
