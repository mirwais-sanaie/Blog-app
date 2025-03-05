import { Route, Routes, useLocation } from "react-router-dom";
import { PostsProvider } from "./context/CreatePostProv";

import { lazy, Suspense } from "react";
import Loader from "./pages/Loader";
import PostDetails from "./pages/PostDetails";
import { DarkModeProvider } from "./context/DarkModeContext";
import Navigation from "./components/Navigation";
import Footer from "./pages/Footer";

const Home = lazy(() => import("./pages/Home"));
const CreatePost = lazy(() => import("./pages/CreatePost"));
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />} key={location.pathname}>
      <DarkModeProvider>
        <PostsProvider>
          <Navigation />
          <Routes>
            <Route index element={<Home />} />
            <Route path="createpost" element={<CreatePost />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="posts/:postId" element={<PostDetails />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
          <Footer />
        </PostsProvider>
      </DarkModeProvider>
    </Suspense>
  );
}

export default App;
