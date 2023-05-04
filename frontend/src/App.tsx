import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Landing from "./components/landing/scenes/landing";
import Main from "./components/main/mainpage";
import UserPage from "./components/user/userpage";
import Login from "./components/login-sign/login";
import Signup from "./components/login-sign/signup";
import Forgetpswd from "./components/login-sign/forgetpswd";
import Reset from "./components/login-sign/reset";

function AppRouter() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpswd" element={<Forgetpswd />} />
      <Route path="/reset" element={<Reset />} />
      </>
    )
  );
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default function App() {
  return (
    <AppRouter />
  );

}


