import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider 
} from "firebase/auth";
import app from "../firebase/firebase.config";


// 1. first e context create
export const AuthContext = createContext(null);

// 2. value send korar jonno value create kore nilam array make kore var er vitore

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  //=============  register user  =====================
  const userSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //=============  LOGIN USER  =====================
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //=============  CURRENT USER (SET OBSERVER)  =====================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  //=============  LOGOUT USER  =====================
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };
  //=============  FORGET PASSWORD  =====================

  const resetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };
  //=============  LOGIN USER WITH GOOGLE  =====================
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    user,
    userSignUp,
    login,
    resetPassword,
    logout,
    googleSignIn,
    loader
  };
  return (
    //.3 provider set kore value dilam
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
