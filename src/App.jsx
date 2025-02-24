import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { PostsProvider } from "./context/CreatePostProv";

function App() {
  return (
    <PostsProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="createpost" element={<CreatePost />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </PostsProvider>
  );
}

export default App;
