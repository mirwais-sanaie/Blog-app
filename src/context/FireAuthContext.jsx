/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

function FireAuthContext({ children }) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const navigate = useNavigate();

  // useEffect(function () {
  //   const savedAuth = ;
  //   if (savedAuth === true) {
  //     setIsAuth(true);
  //   }
  // }, []);

  function handleSignIn() {
    signInWithPopup(auth, googleProvider).then(() => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
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
    <AuthContext value={{ isAuth, setIsAuth, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext>
  );
}

function useAuthContext() {
  if (AuthContext === undefined) throw new Error("AuthContext is undefined");
  return useContext(AuthContext);
}

export { useAuthContext, FireAuthContext };
