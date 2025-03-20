import React, { useEffect, useState } from "react";
import firebaseConfig from "../../config.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, [currentUser, history]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const value = { currentUser }

  return (
    <AuthContext.Provider value={ value }>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;