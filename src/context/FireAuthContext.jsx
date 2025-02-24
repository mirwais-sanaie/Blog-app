/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { collection } from "firebase/firestore";

const AuthContext = createContext();

function FireAuthContext({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const collectionDb = collection(db, "Posts");

  useEffect(function () {
    const savedAuth = localStorage.getItem("isAuth");
    if (savedAuth === "true") {
      setIsAuth(true);
    }
  }, []);

  function handleSignIn() {
    signInWithPopup(auth, googleProvider).then(() => {
      setIsAuth(true);
      localStorage.setItem("isAuth", "true");
      navigate("/");
    });
  }
  function handleSignOut() {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.removeItem("isAuth");
      navigate("/login");
    });
  }

  return (
    <AuthContext
      value={{ isAuth, setIsAuth, handleSignIn, handleSignOut, collectionDb }}
    >
      {children}
    </AuthContext>
  );
}

function useAuthContext() {
  if (AuthContext === undefined) throw new Error("AuthContext is undefined");
  return useContext(AuthContext);
}

export { useAuthContext, FireAuthContext };
