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
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
