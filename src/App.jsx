import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Routes>
      <Route index element={<Home isAuth={isAuth} />} />
      <Route path="createpost" element={<CreatePost />} />
      <Route
        path="login"
        element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App;
