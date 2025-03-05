/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();

function FireAuthContext({ children }) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [user, setUser] = useState(null);
  const [showNotification, setShowNotification] = useState(false); //

  const navigate = useNavigate();

  function handleSignIn() {
    signInWithPopup(auth, googleProvider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      console.log(result);
      setUser(result.user);
      navigate("/");
      setShowNotification(true);
    });
  }
  function handleSignOut() {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.removeItem("isAuth");
      setUser(null);
      navigate("/login");
    });
  }

  // Add useEffect to listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
        setUser(user); // Set the user data
        setShowNotification(true);
      } else {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
        setUser(null); // Clear the user data
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return (
    <AuthContext
      value={{
        isAuth,
        setIsAuth,
        handleSignIn,
        handleSignOut,
        user,
        showNotification,
        setShowNotification,
      }}
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
