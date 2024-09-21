import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Videos from "./pages/Videos";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();
  const showFooter = !location.pathname.startsWith("/blog/");

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/videos"
          element={<Videos />}
        />
        <Route
          path="/blog"
          element={<Posts />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/blog/:id"
          element={<PostDetails />}
        />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
