import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Login from "./Login";
import Recipe from "./Recipe";
import Searched from "./Searched";
import Signup from "./Signup";

function Pages() {
  const location = useLocation();
  const { user } = useAuthContext();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/cuisine/:type"
          element={user ? <Cuisine /> : <Navigate to="/login" />}
        />
        <Route
          path="/searched/:search"
          element={user ? <Searched /> : <Navigate to="/login" />}
        />
        <Route
          path="/recipe/:name"
          element={user ? <Recipe /> : <Navigate to="/login" />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
