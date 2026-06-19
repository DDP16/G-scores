import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageNotFound from "../layouts/PageNotFound";
import Login from "../pages/Login";
import UserProtect from "./UserProtect";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <UserProtect>
              <Home />
            </UserProtect>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
